import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

const Register = () => {
    let [isOpen, setIsOpen] = useState(false);

    const closeModal = () => {
        setIsOpen(false);
    };

    const openModal = () => {
        setIsOpen(true);
    };

    return (
        <>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:pr-0">
                <div className="hidden lg:block">
                    <button
                        className="text-blue text-lg font-medium ml-9 py-5 px-16 transition duration-150 ease-in-out leafbutton bg-lightblue hover:text-white hover:bg-blue"
                        onClick={openModal}
                    >
                        Contact us
                    </button>
                </div>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto flex items-center justify-center">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="relative w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-8 text-left align-middle shadow-xl transition-all">
                                    {/* Cross Icon for Closing */}
                                    <button
                                        className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 focus:outline-none"
                                        onClick={closeModal}
                                    >
                                        ✕
                                    </button>

                                    <div className="space-y-6">
                                        {/* Logo */}
                                        <div className="text-center">
                                            <img
                                                className="mx-auto h-12 w-auto"
                                                src="/assets/logo/logo.png"
                                                alt="Your Company"
                                            />
                                            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900">
                                                Contact Us
                                            </h2>
                                        </div>

                                        {/* Form */}
                                        <form action="#" method="POST" className="space-y-4">
                                            <div>
                                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                                    Your Name
                                                </label>
                                                <input
                                                    id="name"
                                                    name="name"
                                                    type="text"
                                                    required
                                                    className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    placeholder="Enter your name"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                                    Email Address
                                                </label>
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    required
                                                    className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    placeholder="Enter your email"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                                    Your Message
                                                </label>
                                                <textarea
                                                    id="message"
                                                    name="message"
                                                    required
                                                    className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    placeholder="Enter your message"
                                                    rows={5}
                                                />
                                            </div>

                                            {/* Submit Button */}
                                            <div>
                                                <button
                                                    type="submit"
                                                    style={{ backgroundColor: 'lightgreen', height: '50px', width: '100%' }}                                                >
                                                    Send Message
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

export default Register;
