import Head from "next/head";
import Navbar from "/components/Navbar";
import FindByOwner from "/components/nfts/FindByOwner";

export default function Wallet() {
  return (
    <div className="dark:bg-black">
      <Head>
        <title>Provable</title>
        <meta name="description" content="Provable" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="p-4 w-full xl:w-[1024px] mx-auto">
        <Navbar />
        <FindByOwner />
      </div>
    </div>
  );
}
