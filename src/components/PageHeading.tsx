/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment, useState } from 'react';

import { Dialog, Transition } from '@headlessui/react';

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full">
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              ></Transition.Child>
              <div className="w-14 flex-shrink-0" aria-hidden="true">
                {/* Dummy element to force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        {/* Main column */}
        <div className="flex flex-col">
          {/* Search header */}
          <main className="flex-1">
            {/* Page title & actions */}
            <div className="border-b bg-navy border-gray-500 px-4 py-4 flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
              <div className="min-w-0 flex-1 ">
                <h1 className="text-lg font-medium leading-6 sm:truncate text-white my-1">
                  DraftBoard
                </h1>
              </div>
              <div className="my-1 flex">
                <button
                  type="button"
                  className="order-0 inline-flex items-center rounded-full border border-transparent bg-primary px-4 py-2 text-sm font-medium text-navy shadow-sm hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2 sm:order-1 sm:ml-3"
                >
                  CONTACT US
                </button>
              </div>
            </div>
            {/* Pinned projects */}
            {/* Projects list (only on smallest breakpoint) */}
            {/* Projects table (small breakpoint and up) */}
            <div className="bg-navy py-24 sm:py-32">
              <div className="mx-auto max-w-md pl-4 pr-8 sm:max-w-2xl sm:px-6 lg:max-w-7xl lg:px-8">
                <h1 className="text-center text-6xl font-light leading-[76.8px] tracking-normal text-white sm:text-5xl sm:leading-none lg:text-6xl">
                  WE&apos;RE ON A MISSION TO
                </h1>
                <h1 className="text-center text-6xl font-semibold leading-[76.8px] tracking-normal text-white sm:text-5xl sm:leading-none lg:text-6xl underline underline-offset-[16px] decoration-4">
                  DEMOCRATIZE RECRUITING
                </h1>
                <p className="mx-auto mt-6 max-w-3xl text-center text-xl leading-normal text-gray-500">
                  Convallis feugiat et aliquet pellentesque dictum nisi, velit.
                  Egestas fermentum adipiscing risus quam ac consectetur mattis
                  turpis tristique.
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
