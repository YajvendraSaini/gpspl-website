import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

const Register = () => {
    let [isOpen, setIsOpen] = useState(false)

    const closeModal = () => {
        setIsOpen(false)
    }

    const openModal = () => {
        setIsOpen(true)
    }

    return (
        <>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto  sm:pr-0">
                <div className='hidden lg:block'>
                    <button className="text-blue text-lg font-medium ml-9 py-5 px-16 transition duration-150 ease-in-out leafbutton bg-lightblue hover:text-white hover:bg-blue" onClick={openModal}>
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

                    <div className="fixed inset-0 overflow-y-auto">
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
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                                        <div className="w-full max-w-md space-y-8">
                                            <div>
                                                <img
                                                    className="mx-auto h-12 w-auto"
                                                    src="/assets/logo/logo.png"
                                                    alt="Your Company"
                                                />
                                                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                                                    Contact Us
                                                </h2>
                                            </div>
                                            <form className="mt-8 space-y-6" action="#" method="POST">
                                                <div className="rounded-md shadow-sm">
                                                    <div className="mb-4">
                                                        <input
                                                            id="name"
                                                            name="name"
                                                            type="text"
                                                            required
                                                            className="relative block w-full rounded-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                            placeholder="Your Name"
                                                        />
                                                    </div>
                                                    <div className="mb-4">
                                                        <input
                                                            id="email"
                                                            name="email"
                                                            type="email"
                                                            required
                                                            className="relative block w-full rounded-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                            placeholder="Email Address"
                                                        />
                                                    </div>
                                                    <div>
                                                        <textarea
                                                            id="message"
                                                            name="message"
                                                            required
                                                            className="relative block w-full rounded-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                                            placeholder="Your Message"
                                                            rows={4}
                                                        />
                                                    </div>
                                                </div>

                                                <div>
                                                    <button
                                                        type="submit"
                                                        className="group relative flex w-full justify-center rounded-md border border-transparent bg-blue py-2 px-4 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                    >
                                                        Send Message
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default Register;

