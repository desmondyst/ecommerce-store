import { Skeleton } from "@/components/ui/skeleton";

const InfoSkeleton = () => {
    return (
        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <div>
                <Skeleton className="h-12 w-48" />
                <Skeleton className="mt-3 h-7 w-24" />
                <hr className="my-4" />

                <div className="flex flex-col gap-y-6">
                    <Skeleton className="h-7 w-28" />
                    <div className="flex items-center gap-x-4">
                        <Skeleton className="h-7 w-28" />
                        <Skeleton className="h-7 w-7 rounded-full" />
                    </div>
                </div>

                {/* Add to cart button skeleton */}
                <div className="mt-10 gap-x-3">
                    <Skeleton className="h-12 w-48 rounded-full" />
                </div>
            </div>
        </div>
    );
};

export default InfoSkeleton;
