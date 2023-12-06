import Container from "@/components/ui/container";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <Container>
            <div className="space-y-10 pb-10">
                {/* Billboard Skeleton */}

                <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
                    <div className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover">
                        <Skeleton className="billboard-skeleton h-full w-full" />
                    </div>
                </div>

                {/* Product List Skeleton */}
                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
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
    );
}
