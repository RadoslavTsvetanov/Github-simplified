import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const exampleRouter = createTRPCRouter({
  addRepoToCollection:protectedProcedure
  .input(z.object({
    link:z.string().nonempty(),
    collectionId:z.string().nonempty()
  }))
  .mutation(({input,ctx}) => {
    const Repo = ctx.prisma.repo.create({
      data: {
        link,
        collection: { connect: { id: collectionId } },
      },
    });

    return repo;
  }),
  createCollection : protectedProcedure
  .input(z.object({ userId: z.string(),name:z.string()}))
  .mutation(async ({input,ctx}) => {
    const collection = await ctx.prisma.collection.create({
      data:{
        name:input.name,
        userId:input.userId,
      }
    })
    return collection;
  }),



  getUserCollections: protectedProcedure
  .input(z.object({ userId: z.string()}))
  .query(async ({ctx,input}) => {
    const collections = await ctx.prisma.collection.findMany({
      where: {
        userId: input.userId,
      },
    });
  
    return collections;
  }),
  removeUserCollections: protectedProcedure
  .input(z.object({ collectionId: z.string()}))
  .mutation(async ({ctx,input}) => {
    const collection = await prisma.collection.delete({
      where: {
        id: input.collectionId,
      },
    });
    return collection
  })
  ,
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
});
