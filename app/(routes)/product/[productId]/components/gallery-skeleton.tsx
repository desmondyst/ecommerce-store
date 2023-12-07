import { Skeleton } from "@/components/ui/skeleton";
import GalleryTabSkeleton from "./gallery-tab-skeleton";

const GallerySkeleton = () => {
    return (
        <div className="flex flex-col-reverse">
            <div className="mx-auto mt-6 w-full max-w-2xl sm:block lg:max-w-none">
                <div className="grid grid-cols-4 gap-6">
                    {/* Gallery Tab skeleton */}
                    <GalleryTabSkeleton />
                </div>
            </div>

            {/* The big picture skeleton */}
            <div className="aspect-square w-full">
                <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden">
                    <Skeleton className="aspect-square h-full w-full" />
                </div>
            </div>
        </div>
    );
};

export default GallerySkeleton;
