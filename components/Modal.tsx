import React, { Dispatch, FC, ReactNode, SetStateAction, useEffect, useRef } from 'react'

const Modal: FC<{ children: ReactNode; open: boolean; setOpen: Dispatch<SetStateAction<boolean>> }> = ({
  children,
  open,
  setOpen,
}) => {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    if (open) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [open, setOpen])

  if (!open) return null

  return (
    <div className="fixed left-0 flex items-center justify-center h-[100vh] w-full backdrop-blur bg-[#00000097] top-0 z-[1000]">
      <div ref={modalRef} className="">
        {children}
      </div>
    </div>
  )
}

export default Modal
