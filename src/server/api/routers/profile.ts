/* eslint-disable @typescript-eslint/no-unsafe-return */
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const profileRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx, input }) => {
    return ctx.prisma.profile.findMany();
  }),
});
