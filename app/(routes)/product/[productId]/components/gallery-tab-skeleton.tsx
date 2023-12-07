import { Skeleton } from "@/components/ui/skeleton";

const GalleryTabSkeleton = () => {
    // render a few times
    const numberOfRenderings = 2;
    return (
        <>
            {Array.from({ length: numberOfRenderings }, (_, index) => (
                <div key={index}>
                    <div className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
                        <div>
                            <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
                                <Skeleton className="aspect-square h-full w-full" />
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default GalleryTabSkeleton;
