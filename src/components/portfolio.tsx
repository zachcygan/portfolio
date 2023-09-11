'use client'

const files = [
    {
        title: 'UrSpace',
        techStack: 'MERN stack',
        source:
            '/assets/images/deployedScreenshot7.png',
        deployLink: 'https://urrspace.herokuapp.com/',
        githubLink: 'https://github.com/zachcygan/urspace',
    },
    {
        title: 'Graduation RSVP',
        techStack: 'MERN stack',
        source:
            '/assets/images/deployedScreenshot1.png',
        deployLink: 'https://graduationrsvp.herokuapp.com/',
        githubLink: 'https://github.com/zachcygan/grad-party-rsvp',
    },
    {
        title: 'Project Perfect',
        techStack: 'MERN stack',
        source:
            '/assets/images/deployedScreenshot2.png',
        deployLink: 'https://gpteam.herokuapp.com/',
        githubLink: 'https://github.com/zachcygan/gpteam',
    },
    {
        title: 'Tech Blog',
        techStack: 'MERN stack',
        source:
            '/assets/images/deployedScreenshot3.png',
        deployLink: 'https://obscure-bayou-40602.herokuapp.com/',
        githubLink: 'https://github.com/zachcygan/tech-blog',
    },
    {
        title: 'The Perfect Weekend',
        techStack: 'MERN stack',
        source:
            '/assets/images/deployedScreenshot4.png',
        deployLink: 'https://zachcygan.github.io/The-Perfect-Weekend/',
        githubLink: 'https://github.com/zachcygan/The-Perfect-Weekend',
    },
    {
        title: 'Text Editor',
        techStack: 'MERN stack',
        source:
            '/assets/images/deployedScreenshot5.png',
        deployLink: 'https://jast-js.herokuapp.com/',
        githubLink: 'https://github.com/zachcygan/text-editor',
    },
    {
        title: 'Notepad',
        techStack: 'MERN stack',
        source:
            '/assets/images/deployedScreenshot6.png',
        deployLink: 'https://shrouded-cliffs-99337.herokuapp.com/',
        githubLink: 'https://github.com/zachcygan/Notepad',
    }
    // More files...
]

export default function PortfolioInfo() {
    return (
        <div className='min-h-screen dark:bg-zinc-800 dark:text-zinc-100'>
            <h1 className="flex items-center justify-center sm:text-sm lg:text-lg xl:text-2xl dark:text-zinc-100 font-bold">Portfolio</h1>
            <div className="flex flex-col items-center justify-center mt-5 p-5">
                <ul className="grid sm:grid-cols-2 sm:gap-x-6 2xl:grid-cols-2 xl:gap-x-8">
                    {files.map((file) => (
                        <li key={file.source} className="relative">
                            <div className="group aspect-auto w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                                <img src={file.source} alt="" className="pointer-events-none object-cover group-hover:opacity-50" />

                                <div className="flex justify-center items-center absolute inset-0 focus:outline-none links">
                                    <span className="sr-only">View details for {file.title}</span>
                                    <div className='group-hover:block inline-block mouseover hidden'>
                                        <div className='font-bold'>
                                            <a className='sm:text-sm lg:text-lg xl:text-2xl mr-2 inline-block dark:text-black' target='_' href={file.deployLink}>{file.title}</a>
                                            <a className='inline-block' target='_' href={file.githubLink}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900 dark:text-zinc-100">{file.title}</p>
                            <p className="pointer-events-none block text-sm font-medium text-gray-500 dark:text-zinc-100">{file.techStack}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}