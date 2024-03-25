import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'

export default function FlyoutMenu() {
  return (
    <div className=" w-full max-w-sm sm:hidden">
      <Popover className="flex justify-center ">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? 'bg-blue' : 'bg-red'}
                group rounded-lg self-center  bg-gray-200 my-2 focus:outline-none focus-visible:bg-gray-300`}
            >
                <svg 
                    className="fill-current text-black mx-4 w-20 self-center "
                    id="Capa_1"
                    data-name="Capa 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1052 1052"
                >
                    <polygon class="cls-1" points="307.37 668.79 339.13 613.79 190.75 356.8 127.25 356.8 307.37 668.79"/>
                    <polygon class="cls-1" points="373.85 640.2 342.1 695.2 709.9 695.2 678.15 640.2 373.85 640.2"/>
                    <polygon class="cls-1" points="861.25 356.8 712.87 613.79 744.63 668.79 924.75 356.8 861.25 356.8"/>
                    <polygon class="cls-1" points="645.32 496.79 677.08 551.79 789.66 356.8 726.15 356.8 645.32 496.79"/>
                    <polygon class="cls-1" points="374.92 551.79 406.68 496.79 325.85 356.8 262.34 356.8 374.92 551.79"/>
                    <polygon class="cls-1" points="409.65 578.2 642.35 578.2 610.6 523.2 441.4 523.2 409.65 578.2"/>
                    <polygon class="cls-1" points="508.37 407.2 476.62 462.2 575.38 462.2 543.63 407.2 508.37 407.2"/>
                    <polygon class="cls-1" points="441.9 435.79 473.65 380.79 459.8 356.8 396.29 356.8 441.9 435.79"/>
                    <polygon class="cls-1" points="578.35 380.79 610.1 435.79 655.71 356.8 592.2 356.8 578.35 380.79"/>
                </svg>
            
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute left-1/2 z-10 w-full max-w-sm -translate-x-1/2 mt-32 transform  sm:px-0 lg:max-w-3xl">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                  <div className="relative grid gap-5 justify-center bg-white p-7">
                    <a
                      href="/"
                      class=" px-4 py-2 text-lg text-center font-semibold text-gray-900 rounded-lg hover:bg-gray-100 hover:text-areo-lightblue focus:z-10 focus:ring-2 focus:ring-areo-lightblue focus:text-areo-lightblue"
                      >
                        Inicio
                    </a>
                    <a
                      href="/camp23"
                      class=" px-4 py-2 text-lg text-center font-semibold text-gray-900 rounded-lg hover:bg-gray-100 hover:text-areo-lightblue focus:z-10 focus:ring-2 focus:ring-areo-lightblue focus:text-areo-lightblue"
                      >
                        Retiro23
                    </a>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  )
}


