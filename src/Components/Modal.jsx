import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

 export default function Modal({isOpen, setIsOpen ,title , discription}) {

  return (
    <>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 flex w-screen items-center justify-center backdrop-blur-md p-4">
          <DialogPanel className="max-w-lg space-y-4  shadow-2xl rounded bg-white p-12">
            <DialogTitle className="font-semibold capitalize text-green-500">{title}</DialogTitle>
            <Description  className="text-paragraph">
                {discription}
            </Description>
            <div className="flex gap-4">
              <button className=' py-2 px-4 rounded bg-green-500 text-white shadow-lg shadow-orange-300 cursor-pointer' onClick={() => setIsOpen(false)}>OK</button>
              
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  )
}