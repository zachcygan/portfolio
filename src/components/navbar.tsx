'use client'
import { Fragment, useState } from 'react'
import { Disclosure, Transition, Popover } from '@headlessui/react'
import { usePathname } from 'next/navigation'
import SlideOver from './slideOver'
import Image from 'next/image'
import Link from 'next/link'

type NavItemProps = {
  href: string
  children: React.ReactNode
}
type SVGProps = React.SVGAttributes<SVGSVGElement>;

const navigation = [
  { name: 'About', href: '/', current: true },
  { name: 'Portfolio', href: '/portfolio', current: false },
  { name: 'Resume', href: '/resume', current: false },
  { name: 'Contact', href: '#', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

function MobileNavItem({ href, children }: NavItemProps) {
  return (
    <li>
      <Link href={href}>
        <Popover.Button as={Link} href={href} className="block py-2">
          {children}
        </Popover.Button>
      </Link>
    </li>
  )
}

function CloseIcon(props: SVGProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronDownIcon(props: SVGProps) {
  return (
    <svg viewBox="0 0 8 6" aria-hidden="true" {...props}>
      <path
        d="M1.75 1.75 4 4.25l2.25-2.5"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Navbar() {
  const pathname = usePathname();
  const [hoveredPath, setHoveredPath] = useState(pathname);
  const [isSlideOpen, setIsSlideOpen] = useState<boolean>(false)

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="mx-auto px-2 sm:px-6 lg:px-8 -z-10">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center min-[900px]:hidden">
                <Popover>
                  <Popover.Button className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20">
                    Menu
                    <ChevronDownIcon className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400" />
                  </Popover.Button>
                  <Transition.Root>
                    <Transition.Child
                      as={Fragment}
                      enter="duration-150 ease-out"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="duration-150 ease-in"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Popover.Overlay className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80" />
                    </Transition.Child>
                    <Transition.Child
                      as={Fragment}
                      enter="duration-150 ease-out"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="duration-150 ease-in"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Popover.Panel
                        focus
                        className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800"
                      >
                        <div className="flex flex-row-reverse items-center justify-between">
                          <Popover.Button aria-label="Close menu" className="-m-1 p-1">
                            <CloseIcon className="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
                          </Popover.Button>
                          <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                            Navigation
                          </h2>
                        </div>
                        <nav className="mt-6">
                          <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
                            <MobileNavItem href="/">About</MobileNavItem>
                            <MobileNavItem href="/portfolio">Portfolio</MobileNavItem>
                            <MobileNavItem href="/resume">Resume</MobileNavItem>
                            <div onClick={(e) => {
                              e.preventDefault(); // prevent navigation
                              setIsSlideOpen(true);
                            }}>
                              <MobileNavItem href="#">Contact</MobileNavItem>
                            </div>
                          </ul>
                        </nav>
                      </Popover.Panel>
                    </Transition.Child>
                  </Transition.Root>
                </Popover>
              </div>
              <div className="text-black flex flex-shrink-0 items-center justify-center">
                <Link
                  key={'Zach Cygan\'s Portfolio'}
                  href={'/'}
                  className='flex items-center justify-center'
                >
                  <Image
                    src="/assets/images/headIcon.png"
                    alt="Website Head Icon"
                    width={50}
                    height={50}
                  />
                </Link>
              </div>
              <div className="flex-1">
                <div className="hidden sm:ml-6 sm:block text-center">
                  <div className="inline-flex ring-1 ring-zinc-900/5 dark:ring-white/10 dark:text-zinc-200 backdrop-blur rounded-full items-center justify-center max-[900px]:hidden shadow-lg shadow-zinc-800/5">
                    {navigation.map((item) => {
                      const isActive = item.href === pathname;
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={`px-5 py-2 rounded-md text-md relative no-underline duration-200 ease-in hover:text-blue ${isActive ? "text-blue" : "text-zinc-800 dark:text-zinc-200"}`}
                          aria-current={item.href === pathname ? 'page' : undefined}
                          onClick={(e) => {
                            if (item.name === 'Contact') {
                              e.preventDefault(); // prevent navigation
                              setIsSlideOpen(true);
                            }
                          }}
                          onMouseOver={() => setHoveredPath(item.href)}
                          onMouseLeave={() => setHoveredPath(pathname)}
                        >
                          <span className='z-20'>{item.name}</span>
                          {/* {item.href === hoveredPath && (
                            <motion.div
                              className="absolute bottom-0 left-0 h-full bg-blueBg rounded-full z-10"
                              layoutId="navbar"
                              aria-hidden="true"
                              style={{
                                width: "100%",
                              }}
                              transition={{
                                type: "spring",
                                bounce: 0.25,
                                stiffness: 130,
                                damping: 9,
                                duration: 0.2,
                              }}
                            />
                          )} */}
                          {isActive && (
                            <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-blue-600/0 via-blue-600/40 to-blue-600/0 dark:from-blue/0 dark:via-blue/40 dark:to-blue/0" />
                          )}
                        </Link>
                      );
                    })}
                  </div>
                  <SlideOver isOpen={isSlideOpen} onClose={() => setIsSlideOpen(false)} />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  )
}
