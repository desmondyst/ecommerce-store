"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import IconButton from "./icon-button";
import { X } from "lucide-react";

interface ModalProps {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

// The Transition accepts a show prop that controls whether the children should be shown or hidden
const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
    return (
        // API: https://headlessui.com/react/transition
        // When you use as={Fragment}, it means that the Headless UI component will render its content without adding an extra wrapper element.
        <Transition show={open} appear as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={onClose}>
                {/* creating background shadow */}
                <div className="fixed inset-0 bg-black bg-opacity-50" />

                <div className="fixed inset-0 overflow-y-auto">
                    {/* container to help center the modal */}
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        {/*Sometimes you need to transition multiple elements with different animations but all based on the same state. For example, say the user clicks a button to open a sidebar that slides over the screen, and you also need to fade-in a background overlay at the same time.

                        You can do this by wrapping the related elements with a parent Transition component, and wrapping each child that needs its own transition styles with a Transition.Child component, which will automatically communicate with the parent Transition and inherit the parent's show state.  */}
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opaacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-3xl overflow-hidden rounded-lg text-left align-middle">
                                <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                                    <div className="absolute right-4 top-4">
                                        <IconButton
                                            onClick={onClose}
                                            icon={<X size={15} />}
                                        />
                                    </div>
                                    {children}
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default Modal;
