import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { Product } from "@/types";
import toast from "react-hot-toast";

interface CartStore {
    items: Product[];
    addItem: (data: Product) => void;
    removeItem: (id: string) => void;
    removeAll: () => void;
    updateItem: (id: string, {}) => void;
}

// https://docs.pmnd.rs/zustand/integrations/persisting-store-data
const useCart = create(
    persist<CartStore>(
        (set, get) => ({
            items: [],
            addItem: (data: Product) => {
                const currentItems = get().items;
                const existingItem = currentItems.find(
                    (item) => item.id === data.id
                );

                if (existingItem) {
                    return toast.error("Item already in cart.");
                }

                set({ items: [...get().items, data] });
                toast.success("Item added to cart.");
            },
            removeItem: (id: string) => {
                set({
                    items: [...get().items.filter((item) => item.id !== id)],
                });
                toast.success("Item removed from cart.");
            },
            removeAll: () => set({ items: [] }),
            updateItem: (id: string, updatedItems: {}) => {
                // remove old item and put in updated item
                const currentItems = get().items;
                const oldItem = currentItems.find((item) => item.id === id);
                if (oldItem !== undefined) {
                    const removed = [
                        ...get().items.filter((item) => item.id !== id),
                    ];
                    const addedBack = [
                        ...removed,
                        { ...oldItem, updatedItems },
                    ];
                    set({ items: addedBack });
                }
            },
        }),
        { name: "cart-storage", storage: createJSONStorage(() => localStorage) }
    )
);

export default useCart;
