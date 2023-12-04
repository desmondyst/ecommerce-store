"use client";
import axios, { AxiosError } from "axios";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

import Button from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";

const Summary = () => {
    // extracting this way as we need use in useeffect
    const searchParams = useSearchParams();
    const cart = useCart();
    const items = useCart((state) => state.items);

    const removeAll = useCart((state) => state.removeAll);
    const emptyCart = items.length === 0;

    useEffect(() => {
        if (searchParams.get("success")) {
            toast.success("Payment completed.");
            removeAll();
        }
        if (searchParams.get("canceled")) {
            toast.error("Something went wrong.");
            // cancel dont remove items in cart
            // removeAll();
        }
    }, [searchParams, removeAll]);

    const router = useRouter();

    const totalPrice = items.reduce(
        (total, item) => total + Number(item.price),
        0
    );

    const onCheckOut = async () => {
        console.log("Check out called");
        try {
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
                {
                    productIds: items.map((item) => item.id),
                }
            );

            // Putting it all together, this line of code sets the current browser window's location to the URL specified in response.data.url. In other words, it redirects the user to a new page or resource indicated by the URL stored in response.data.url.
            window.location = response.data.url;
            // # QUESTION: WHY CANNT? Think can...
            // router.push(response.data.url);
        } catch (error) {
            console.log("Inside error blcok");
            console.log(error);

            const err = error as AxiosError;
            console.log(err);
            const errMessage = err.response?.data;
            console.log(errMessage);
            if (
                errMessage === "Some of the products are no longer available."
            ) {
                toast.error(
                    `Some of the products in your cart are no longer available. `
                );
            }
        }
    };

    return (
        <div
            className="
            mt-16
            rounded-lg
            bg-gray-50
            px-4
            py-6
            sm:p-6
            lg:col-span-5
            lg:mt-0
            lg:p-8"
        >
            <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
            <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                    <div className="text-base font-medium text-gray-900">
                        Order Total
                    </div>
                    <Currency value={totalPrice} />
                </div>
            </div>

            <Button
                disabled={emptyCart}
                onClick={onCheckOut}
                className="w-full mt-6"
            >
                Checkout
            </Button>
        </div>
    );
};

export default Summary;
