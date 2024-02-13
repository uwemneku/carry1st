"use client";
import Skeleton from "@/components/util/Skeleton";
import { MotionDiv } from "@/components/util/motion";
import React from "react";

function Loading() {
  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-6 items-center"
    >
      {new Array(10).fill("").map((i, index) => (
        <div
          key={index?.toString()}
          className=" max-w-[220px] min-h-64 p-2 border-2 rounded-lg flex flex-col"
        >
          <Skeleton className="flex-1 bg-zinc-600 rounded-md" />
          <div className="p-2 grid gap-2 w-2/3 py-3">
            <Skeleton className="bg-zinc-800 h-3 " />
            <Skeleton className="bg-zinc-800 h-5 " />
          </div>
        </div>
      ))}
    </MotionDiv>
  );
}

export default Loading;
