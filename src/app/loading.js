import { Skeleton } from "@/components/ui/skeleton";

function Loading() {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <Skeleton className="w-[400px] h-[100px] rounded-full" />
    </div>
  );
}

export default Loading;
