import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
  getUserData:protectedProcedure
    .input(z.object({username:z.string()})).
    query(async ({input,ctx}) => {
        const user = await  ctx.prisma.user.findFirst({
            where:{
                name: input?.username?? "",
            }
        })
        return user;
    }),
    setUserToken: protectedProcedure
    .input(z.object({ token:z.string().nonempty(),username:z.string().nonempty()}))
    .mutation( async ({ctx,input}) => {
      const token = await ctx.prisma.user.updateMany({
        where:{
          name:input.username
        },
        data:{
          github_token:   input.token,
        }
      })
      return token
    })
});
