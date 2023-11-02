import { Dialog, Transition } from '@headlessui/react'
import { Fragment, } from 'react'
import { AiOutlineClose } from 'react-icons/ai';

// const cl =['orange','yellow','blue']

export default function Modal({isOpen, closeModal, children, title}) {
  // const borderColor = cl[borderColorIndex % cl.length]; 

  return (
    <>
     

      <Transition appear show={isOpen} as={Fragment} className=' '>
        <Dialog as="div" className="relative z-10 " onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full  items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel  className={`w-full max-w-4xl p-4 h-[500px] transform overflow-y-auto bg-white text-left align-middle shadow-xl transition-all `}>
                <div className=" ">
                    <div  className=" flex justify-end">
                    <button
                      type="button"
                     
                      onClick={closeModal}
                    >
                      <AiOutlineClose className='hover:text-red-600 hover:bg-orange-400 text-2xl text-red-100 p-1 bg-orange-700 rounded-full'/>
                    </button>
                    </div>
                  <Dialog.Title
                    as="h3"
                    className="text-3xl text-center  font-thin leading-6 text-orange-600"
                  >
                   {title}
                  </Dialog.Title>
                  {children}

                  
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
