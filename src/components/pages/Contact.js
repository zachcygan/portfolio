import React, { useState, useRef, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationCircleIcon, CheckCircleIcon } from '@heroicons/react/20/solid'
import { CheckIcon } from '@heroicons/react/24/outline'
import emailjs from '@emailjs/browser';


export default function Contact() {
  const [open, setOpen] = useState(true)
  const [emailState, setEmailState] = useState(false)
  const [input, setInput] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [name, setName] = useState('')
  const [success, setSuccess] = useState(false)
  const button = document.querySelector('.sendMessage')

  const closeModal = () => {
    setSuccess(false)
    setOpen(true)
  }

  const validEmail = (email) => {
    let valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

    if (!valid) {
      setEmailState(false)
      document.querySelector('.target').classList.remove('hidden')
      document.querySelector('.target2').classList.remove('hidden')
      document.querySelector('.emailInput').classList.remove(['focus:ring-blue-500'])
      document.querySelector('.emailInput').classList.add(['ring-red-300', 'focus:ring-red-500'])
    } else {
      setEmailState(true)
      setEmail(email)
      document.querySelector('.target').classList.add('hidden')
      document.querySelector('.target2').classList.add('hidden')
    }
  }

  const form = useRef();

  const sendEmail = (e) => {
    emailjs.sendForm('service_rho4q1u', 'template_kyxpqld', form.current, '1VgI4yMIQfQW7ffZw')
      .then((result) => {
        console.log(result.text)
        setSuccess(true)
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className='min-h-screen'>
      {success&&(<Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <div>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                      Message Successfully Sent
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Thank you for your message! I'll get back to you within 48 hours.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={(e) => {
                      setOpen(false);
                      closeModal();
                    }}
                  >
                    Go back
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>)}
      

    <h1 className="flex items-center justify-center sm:text-sm lg:text-lg xl:text-2xl font-bold">Contact Me</h1>

      <form ref={form} onSubmit={sendEmail}>
        <div className='mx-auto w-[50%] pt-5'>
          <label htmlFor="name" className="block pb-1 text-sm font-medium leading-6 text-gray-900">
            Name
          </label>
          <div className="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-blue-500">

            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              name="name"
              id="name"
              className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="Zach Cygan"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                  validEmail(e.target.value) ? setEmailState(true) : setEmailState(false);
                }}
                type="email"
                name="email"
                id="email"
                className="block emailInput w-full rounded-md border-0 py-1.5 pr-10 text-gray-900 ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                placeholder="you@example.com"
                defaultValue="adamwathan"
                aria-invalid="true"
                aria-describedby="email-error"
              />
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <ExclamationCircleIcon className="h-5 w-5 text-red-500 hidden target" aria-hidden="true" />
              </div>
            </div>
            <p className="mt-2 text-sm text-red-600 hidden target2" id="email-error">
              Not a valid email address.
            </p>
          </div>

          <div>
            <label htmlFor="body" className="block text-sm font-medium leading-6 text-gray-900">
              Body
            </label>
            <textarea value={message}
              name="message"
              id="textArea"
              cols="30"
              rows="10"
              className='rounded-md w-[100%] mt-2'
              placeholder='Message'
              onChange={(e) => {
                setMessage(e.target.value);
              }}>
            </textarea>
          </div>

          <div>
            <button
              onClick={() => { sendEmail() }}
              id='sendMessage'
              type="button"
              className="inline-flex items-center gap-x-1.5 rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Send
              <CheckCircleIcon className="-mr-0.5 h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
