"use client";

import { Product } from "@/types";
import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import toast from "react-hot-toast";
import useCart from "@/hooks/use-cart";

interface InfoProps {
    data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
    const cart = useCart();

    const onAddToCart = () => {
        cart.addItem(data);
    };
    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
            <div className="mt-3 flex items-end justify-between">
                <Currency value={data?.price} />
            </div>
            <hr className="my-4" />
            <div className="flex flex-col gap-y-6">
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-black">Size:</h3>
                    <div> {data?.size?.name}</div>
                </div>
                <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-black">Color:</h3>
                    <div
                        className="h-6 w-6 rounded-full border border-gray-600"
                        style={{ backgroundColor: data?.color?.value }}
                    />
                </div>
                {data?.quantity <= 5 && (
                    <div className="flex items-center gap-x-4">
                        <div className="text-rose-500 font-bold">
                            Grab it fast! {data?.quantity} quantity remaining!
                        </div>
                    </div>
                )}
            </div>
            <div className="mt-10 flex items-center gap-x-3">
                <Button
                    onClick={onAddToCart}
                    className="flex items-center gap-x-2"
                >
                    Add To Cart <ShoppingCart />
                </Button>
            </div>
        </div>
    );
};

export default Info;
