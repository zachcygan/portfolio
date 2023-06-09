import { React } from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

function Navigation({ currentPage, handlePageChange }) {
  return (
    <Disclosure as="nav" className="bg-white shadow dark:bg-zinc-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex dark:bg-zinc-800 items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6 dark:bg-zinc-800" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6 dark:bg-zinc-800" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    as="button"
                    onClick={() => handlePageChange('AboutMe')}
                    className="block h-8 w-auto lg:hidden"
                    style={{cursor: 'pointer'}}
                    src="/icon.png"
                    alt="Your Company"
                  />
                  <img
                    as="button"
                    onClick={() => handlePageChange('AboutMe')}
                    className="hidden h-8 w-auto lg:block"
                    style={{cursor: 'pointer'}}
                    src="/icon.png"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {/* Current: "border-blue-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-blue-500 hover:text-gray-700" */}
                  <button
                    onClick={() => handlePageChange('AboutMe')}
                    className={currentPage === 'AboutMe' ? "inline-flex items-center border-b-2 border-blue-500 px-1 pt-1 text-sm font-medium text-gray-900 dark:text-zinc-100" : "inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-blue-500 hover:text-gray-700 dark:hover:text-zinc-100"}
                  >
                    About Me
                  </button>
                  <button
                    onClick={() => handlePageChange('Portfolio')}
                    className={currentPage === 'Portfolio' ? "inline-flex items-center border-b-2 border-blue-500 px-1 pt-1 text-sm font-medium text-gray-900 dark:text-zinc-100" : "inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-blue-500 hover:text-gray-700 dark:hover:text-zinc-100"}
                  >
                    Portfolio
                  </button>
                  <button
                    onClick={() => handlePageChange('Resume')}
                    className={currentPage === 'Resume' ? "inline-flex items-center border-b-2 border-blue-500 px-1 pt-1 text-sm font-medium text-gray-900 dark:text-zinc-100" : "inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-blue-500 hover:text-gray-700 dark:hover:text-zinc-100"}                  >
                    Resume
                  </button>
                  <button
                    onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? "inline-flex items-center border-b-2 border-blue-500 px-1 pt-1 text-sm font-medium text-gray-900 dark:text-zinc-100" : "inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-blue-500 hover:text-gray-700 dark:hover:text-zinc-100"}                  >
                    Contact Me
                  </button>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-4 pt-2 dark:bg-zinc-800">
              {/* Current: "bg-indigo-50 border-blue-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-blue-500 hover:text-gray-700" */}
              <Disclosure.Button
                as="a"
                onClick={() => handlePageChange('AboutMe')}
                className={currentPage === 'AboutMe' ? "block border-l-4 border-blue-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700 dark:text-zinc-100 dark:bg-zinc-800" : "dark:bg-zinc-800 block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-blue-500 hover:bg-gray-50 hover:text-gray-700"}
              >
                About Me
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                onClick={() => handlePageChange('Portfolio')}
                className={currentPage === 'Portfolio' ? "block border-l-4 border-blue-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700 dark:text-zinc-100 dark:bg-zinc-800" : "block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-blue-500 hover:bg-gray-50 hover:text-gray-700"}
              >
                Portfolio
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                onClick={() => handlePageChange('Resume')}
                className={currentPage === 'Resume' ? "block border-l-4 border-blue-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700 dark:text-zinc-100 dark:bg-zinc-800" : "block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-blue-500 hover:bg-gray-50 hover:text-gray-700"}
              >
                Resume
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? "block border-l-4 border-blue-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700 dark:text-zinc-100 dark:bg-zinc-800" : "block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-blue-500 hover:bg-gray-50 hover:text-gray-700"}
              >
                Contact
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Navigation;
