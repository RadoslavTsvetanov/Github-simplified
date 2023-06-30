import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const exampleRouter = createTRPCRouter({
    getUserData:protectedProcedure
    .input(z.object({username:z.string()})).
    query(({input,ctx}) => {
        const user = ctx.prisma.user.findFirst({
            where:{
                name: input?.username?? "",
            }
        })
    }),
})