"use client";

import Image from "next/image";
import { Toast } from "react-hot-toast";
import { X } from "lucide-react";

import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";
import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import { useState } from "react";

interface CartItemProps {
    data: Product;
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
    const cart = useCart();
    const onRemove = () => {
        cart.removeItem(data.id);
    };
    const [isItemAvail, setIsItemAvail] = useState(true);

    const checkIfAvail = async () => {
        try {
            const productFromDb = await getProduct(data.id);
            // if product deleted or product archived
            if (productFromDb === null || productFromDb.isArchived) {
                setIsItemAvail(false);
            }
        } catch (error) {
            console.log(error);
        }
    };

    checkIfAvail();

    return (
        <li className="flex py-6 border-b">
            {/* we need overflow-hidden to go with rounded-md else wont be rounded */}
            <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
                <Image
                    fill
                    src={data.images[0].url}
                    alt=""
                    className="object-cover object-center"
                />
            </div>
            {/* Container for the Info part of the product */}
            <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                {/* container of Icon button */}
                <div className="absolute z-10 right-0 top-0">
                    <IconButton onClick={onRemove} icon={<X size={15} />} />
                </div>

                {/* grid from sm onwards else size is color is vertically below name */}
                <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                    <div className="flex items-center space-x-3">
                        <p className="text-lg font-semibold text-black">
                            {data.name}
                        </p>
                        {!isItemAvail && (
                            <div className="border-rose-600 border px-1 rounded-md text-rose-600 font-semibold text-xs">
                                Not Available
                            </div>
                        )}
                    </div>

                    <div className="mt-1 flex text-sm ">
                        <p className="text-gray-500">{data.color.name}</p>
                        <p className="text-gray-500 ml-4 border-l border-gray-200 pl-4">
                            {data.size.name}
                        </p>
                    </div>
                    <Currency value={data.price} />
                </div>
            </div>
        </li>
    );
};

export default CartItem;
