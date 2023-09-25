'use client'

export default function ResumeInfo() {
    return (
        <div className='dark:bg-zinc-800'>
            <div className="bg-white dark:bg-zinc-800 dark:text-zinc-100 shadow sm:rounded-lg ">
                <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-base font-semibold leading-6 text-gray-900 dark:text-zinc-100">Resume</h3>
                    <div className="mt-2 max-w-xl text-sm text-gray-500 ">
                        <p className='dark:text-zinc-100'>
                            Like what you see? Click the link below to download my resume!
                        </p>
                    </div>
                    <div className="mt-5">
                        <a
                            href="/assets/files/ZacharyCygan_resume.docx"
                            type="button"
                            className="inline-flex items-center rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                        >
                            Download
                        </a>
                    </div>
                </div>
            </div>

            <div className='min-h-[100]'>
                <iframe className='dark:invert ' title='resume' src="https://docs.google.com/document/d/1C5I4eJ9M65N1mWQK00sovc97pmrSh4DM/preview?usp=sharing&ouid=114354419991059278766&rtpof=true&sd=true" width="100%" height="1100"></iframe>
            </div>
        </div>
    )
}