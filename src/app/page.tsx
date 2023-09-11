import Image from 'next/image'
import { HeartIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

export default function Home() {
  return (
    <div>
      <div className="overflow-hidden bg-white dark:bg-zinc-800 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:ml-auto lg:pl-4 lg:pt-4">
              <div className="lg:max-w-lg">
                {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">Placeholder Text</h2> */}
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
                {/* <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900 dark:text-blue-500">
                        <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600 dark:text-blue-500" aria-hidden="true" />
                        {feature.name}
                      </dt>{' '}
                      <dd className="inline dark:text-zinc-100">{feature.description}</dd>
                    </div>
                  ))}
                </dl> */}
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

      {/* <div className="bg-white py-24 sm:py-32 dark:bg-zinc-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 dark:bg-zinc-800 ">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900 dark:text-zinc-100">
          Trusted by the world’s most innovative teams
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5 ">
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
            alt="Transistor"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
            alt="Reform"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
            alt="Tuple"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
            alt="SavvyCal"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
            alt="Statamic"
            width={158}
            height={48}
          />
        </div>
      </div>
      </div> */}
    </div>
  )
}
