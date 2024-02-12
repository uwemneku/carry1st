import Skeleton from "@/components/util/Skeleton";
import { MotionDiv } from "@/components/util/motion";

function Loading() {
  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="grid gap-y-4 px-4 mt-10"
    >
      {new Array(6).fill("").map((i, index) => (
        <div key={index} className="grid gap-2">
          <Skeleton className="h-5 w-1/3" />
          <Skeleton className="h-10" />
        </div>
      ))}
      <Skeleton className="h-10 w-3/4 mx-auto" />
    </MotionDiv>
  );
}

export default Loading;
