"use client";
import Skeleton from "@/components/util/Skeleton";
import { MotionDiv } from "@/components/util/motion";
import React from "react";

function Loading() {
  return (
    <MotionDiv className="flex flex-col md:flex-row gap-2 md:gap-10">
      <Skeleton className="flex-1  rounded-md h-screen max-h-[300px] md:max-h-[600px] min-h-[310px] " />
      <div className="flex-[0.5] py-5 flex flex-col gap-2">
        <Skeleton className="h-12 " />
        <Skeleton className="h-6 w-1/4 " />
        <Skeleton className="h-8 mt-4" />
        <div className="flex-1" />
        <div className="grid gap-2">
          <Skeleton className="h-10 " />
          <Skeleton className="h-10 " />
        </div>
      </div>
    </MotionDiv>
  );
}

export default Loading;
