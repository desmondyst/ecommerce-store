"use client";

import { useState } from "react";
import { Color, Size } from "@/types";
import Button from "@/components/ui/button";
import { Plus, X } from "lucide-react";
import { Dialog } from "@headlessui/react";
import IconButton from "@/components/ui/icon-button";
import Filter from "./filter";

interface MobileFiltersProps {
    sizes: Size[];
    colors: Color[];
}

const MobileFilters: React.FC<MobileFiltersProps> = ({ sizes, colors }) => {
    const [open, setOpen] = useState(false);
    const onOpen = () => setOpen(true);
    const onClose = () => setOpen(false);

    return (
        <>
            <Button
                onClick={onOpen}
                className="flex items-center gap-x-2 lg:hidden"
            >
                Filters
                <Plus size={20} />
            </Button>

            <Dialog
                open={open}
                as="div"
                className="relative z-40 lg:hidden"
                onClose={onClose}
            >
                {/* background opacity decreased */}
                {/* fixed: Sets the position of the element to fixed, meaning it is positioned relative to the browser window and will not move when the page is scrolled.
                
                inset-0: Sets the top, right, bottom, and left positions of the element to 0. It essentially makes the element cover the entire viewport. */}
                <div className="fixed inset-0 bg-black bg-opacity-25">
                    {/* Dialog position*/}
                    <div className="fixed inset-0 z-40 flex">
                        {/* h-full w-full is the one that makes it appear but we limit it by max-w-xs */}
                        {/* relative dk why tho */}
                        <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
                            {/* close button */}
                            <div className="flex items-center justify-end px-4">
                                <IconButton
                                    icon={<X size={15} />}
                                    onClick={onClose}
                                />
                            </div>
                            {/* Render the filters */}
                            <div className="p-4">
                                <Filter
                                    valueKey="sizeId"
                                    name="Sizes"
                                    data={sizes}
                                />
                                <Filter
                                    valueKey="colorId"
                                    name="Colors"
                                    data={colors}
                                />
                            </div>
                        </Dialog.Panel>
                    </div>
                </div>
            </Dialog>
        </>
    );
};

export default MobileFilters;
