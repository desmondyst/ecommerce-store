import GalleryTab from "@/components/gallery/gallery-tab";
import Container from "@/components/ui/container";
import { Skeleton } from "@/components/ui/skeleton";
import GalleryTabSkeleton from "./components/gallery-tab-skeleton";
import GallerySkeleton from "./components/gallery-skeleton";
import InfoSkeleton from "./components/info-skeleton";

export default function Loading() {
    return (
        <div className="bg-white">
            <Container>
                <div className="px-4 py-10 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                        {/* Gallery skeleton */}
                        <GallerySkeleton />
                        <InfoSkeleton />
                    </div>
                    <hr className="my-10" />
                    {/* related items product list skeleton */}
                    {/* Product List Skeleton */}
                    <div className="flex flex-col gap-y-8">
                        <div className="space-y-4">
                            <Skeleton className="h-10 w-64 rounded-xl" />
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                <Skeleton className="aspect-square rounded-xl" />
                                <Skeleton className="aspect-square rounded-xl" />
                                <Skeleton className="aspect-square rounded-xl" />
                                <Skeleton className="aspect-square rounded-xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
