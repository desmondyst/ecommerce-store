import Container from "@/components/ui/container";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <Container>
            <div className="space-y-2 pb-10">
                {/* Billboard Skeleton */}

                <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
                    <div className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover">
                        <Skeleton className="billboard-skeleton h-full w-full" />
                    </div>
                </div>

                {/* Filter and Product List Skeleton */}
                <div className="px-4 sm:px-6 lg:px-8 pb-24">
                    <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
                        {/* filter button mobile skeleton */}
                        <Skeleton className="h-12 w-28 lg:hidden rounded-full" />

                        <div className="hidden lg:block">
                            {/* sizes filter skeleton */}
                            <div className="mb-8">
                                <Skeleton className="h-8 w-14" />
                                <hr className="my-4" />
                                <div className="flex flex-wrap gap-2">
                                    <Skeleton className="h-8 w-20 rounded-md" />
                                    <Skeleton className="h-8 w-14 rounded-md" />
                                    <Skeleton className="h-8 w-24 rounded-md" />
                                    <Skeleton className="h-8 w-14 rounded-md" />
                                </div>
                            </div>
                            {/* color filter skeleton */}
                            <div className="mb-8">
                                <Skeleton className="h-8 w-14" />
                                <hr className="my-4" />
                                <div className="flex flex-wrap gap-2">
                                    <Skeleton className="h-8 w-20 rounded-md" />
                                    <Skeleton className="h-8 w-14 rounded-md" />
                                    <Skeleton className="h-8 w-24 rounded-md" />
                                    <Skeleton className="h-8 w-14 rounded-md" />
                                </div>
                            </div>
                        </div>
                        {/* Product Cards Skeleton */}
                        <div className="mt-6 lg:col-span-4 lg:mt-0">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                <Skeleton className="aspect-square rounded-xl" />
                                <Skeleton className="aspect-square rounded-xl" />
                                <Skeleton className="aspect-square rounded-xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}
