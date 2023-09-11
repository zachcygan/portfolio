'use client'
import Image from 'next/image'

export default function AboutMe() {
    return (
        <div>
            <div className="overflow-hidden bg-white dark:bg-zinc-800 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:ml-auto lg:pl-4 lg:pt-4">
                            <div className="lg:max-w-lg">
                                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-zinc-100 sm:text-4xl">About Me</p>
                                <p className="mt-6 text-lg leading-8 dark:text-zinc-100 text-gray-600">
                                    Hello! My name is Zachary Cygan and I am 24 years old studying to be a developer I
                                    currently have a bachelors degree in psychology with a minor in business administration
                                    and decided to make a career change to development. I have experience in html, css,
                                    and javascript. I have taken an interest in coding outside of classes to perfect my
                                    skills, but also to create webpages or applications that have a use to me or somebody
                                    around me. In my free time, I like to play video games. I usually play World of Warcraft,
                                    but I enjoy playing other games like Hollow Knight, Diablo, and Elden Ring.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start justify-end lg:order-first">
                            <Image
                                src="/assets/images/profile.jpg"
                                alt="Picture of Zach Cygan"
                                className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] max-h-[53.4rem]"
                                width={2432}
                                height={1442}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}