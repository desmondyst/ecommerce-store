"use client";

import Image from "next/image";
import { MouseEventHandler } from "react";

import { Expand, ShoppingCart } from "lucide-react";
import { Product } from "@/types";

import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency";
import { useRouter } from "next/navigation";
import usePreviewModal from "@/hooks/use-preview-modal";

interface ProductCardProps {
    data: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
    const previewModal = usePreviewModal();
    const router = useRouter();
    const handleClick = () => router.push(`/product/${data?.id}`);

    const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
        // outer container is clickable
        event.stopPropagation();

        previewModal.onOpen(data);
    };

    return (
        <div
            onClick={handleClick}
            className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
        >
            {/* images and Actions */}
            {/* relative because Image uses fill */}
            <div className="aspect-square rounded-xl bg-gray-100 relative">
                {/* get the first image for this product */}
                {/* fill is the fix the missingWidth error */}
                {/* A boolean that causes the image to fill the parent element, which is useful when the width and height are unknown */}
                <Image
                    alt="Image"
                    src={data?.images?.[0].url}
                    fill
                    className="aspect-square object-cover rounded-md"
                />
                <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
                    <div className="flex gap-x-6 justify-center">
                        <IconButton
                            onClick={onPreview}
                            icon={<Expand />}
                            className="text-gray-600"
                        />
                        <IconButton
                            onClick={() => {}}
                            icon={<ShoppingCart />}
                            className="text-gray-600"
                        />
                    </div>
                </div>
            </div>
            {/* description */}
            <div>
                <p className="font-semibold text-lg">{data.name}</p>
                <p className="text-sm text-gray-500">{data.category?.name}</p>
            </div>
            {/* Price */}
            <div className="flex items-center justify-between">
                <Currency value={data?.price} />
            </div>
        </div>
    );
};

export default ProductCard;
