import React, { useEffect, useState } from "react";
import HomeComp from "@/presentation/components/pages/home/page";
import Navbar from "@/presentation/components/ui/navbar/page";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeComp className="min-h-screen" />
    </>
  );
}
