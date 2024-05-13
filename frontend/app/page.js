import CampusLife from "@/components/layouts/gallery/CampusLife";
import Hero from "@/components/layouts/hero/Hero";
import MessageFromVC from "@/components/layouts/message/MessageFromVC";
import LatestNews from "@/components/layouts/news/LatestNews";
import LatestNotice from "@/components/layouts/notice/LatestNotice";
import SSTUSTats from "@/components/layouts/stats/SSTUSTats";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="relative h-screen mb-96">
        <Hero />
        <div className="absolute top-[530px] w-full">
          <MessageFromVC />
        </div>
      </div>
      <LatestNotice />
      <LatestNews />
      <SSTUSTats />
      <CampusLife />
    </>
  );
}
