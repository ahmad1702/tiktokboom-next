/* eslint-disable @typescript-eslint/no-unsafe-return */
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const leaderBoardRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.leaderBoard.findMany({
      include: {
        profile: true,
      },
      orderBy: {
        seconds: "asc",
      },
    });
  }),
});
