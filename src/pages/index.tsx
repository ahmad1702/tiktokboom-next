import Navbar from "@/components/navbar";
import TikTokBoom from "@/components/tiktokboom";
import { api } from "@/utils/api";
import Head from "next/head";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>TikTokBoom</title>
        <meta
          name="description"
          content="A game originating from a tiktok filter."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen flex-col bg-background text-foreground">
        <Navbar />
        <TikTokBoom />
      </main>
    </>
  );
}
