import LeaderBoardTable from "@/components/leaderboard-table";
import Navbar from "@/components/navbar";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LeaderBoardEntry, Profile } from "@prisma/client";
import { Loader2Icon } from "lucide-react";
import Head from "next/head";

export type LeaderBoardWithProfile = LeaderBoardEntry & {
  profile: Profile;
};

export default function Leaderboard() {
  // const leaderboards = api.example.hello.useQuery({ text: "from tRPC" });
  // const leaderboardsQuery = api.leaderboard.getAll.useQuery();

  // const leaderboards =
  //   leaderboardsQuery.data as unknown as LeaderBoardWithProfile[];
  // const { isLoading } = leaderboardsQuery;
  const leaderboards: LeaderBoardWithProfile[] = [];
  const isLoading = true;

  console.log("leaderboard:", leaderboards);

  return (
    <>
      <Head>
        <title>TikTokBoom | Leaderboard</title>
        <meta
          name="description"
          content="TikTokBoom Leaderboard. A game originating from a tiktok filter."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen flex-col bg-background text-foreground">
        <Navbar />
        <div className="flex-1 overflow-auto p-10">
          <div className="container max-w-7xl">
            <div className="mb-5">
              <div className="text-5xl font-bold">Leaderboards</div>
              <div className="flex gap-2">
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a fruit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Fruits</SelectLabel>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="blueberry">Blueberry</SelectItem>
                      <SelectItem value="grapes">Grapes</SelectItem>
                      <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            {!isLoading ? (
              <LeaderBoardTable
                leaderboards={Array.isArray(leaderboards) ? leaderboards : []}
              />
            ) : (
              <div className="flex h-40 w-full items-center justify-center rounded-xl border">
                <Loader2Icon className="h-10 w-10 origin-center animate-spin" />
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
