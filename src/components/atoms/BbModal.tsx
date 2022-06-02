import { Dispatch, SetStateAction, useEffect, useRef } from 'react'

type DefaultProps = {
  className?: string
  showModal: boolean
  setShowModal: Dispatch<SetStateAction<boolean>>
  children: React.ReactNode
}

const BbModal = ({ className, children, showModal, setShowModal }: DefaultProps) => {
  const overlay = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const clickOutside = (event: Event) => {
      if (event.target === overlay.current) {
        setShowModal(false)
      }
    }
    const preventScroll = (event: Event) => event.preventDefault()

    window.addEventListener('click', clickOutside)
    if (showModal) {
      window.addEventListener('touchmove', preventScroll, { passive: false })
      window.addEventListener('wheel', preventScroll, { passive: false })
    }
    return () => {
      window.removeEventListener('click', clickOutside)
      window.removeEventListener('touchmove', preventScroll)
      window.removeEventListener('wheel', preventScroll)
    }
  })

  if (!showModal) {
    return null
  }
  return (
    <>
      <div
        ref={overlay}
        className='z-20 fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center'
      >
        <div className='z-30 w-10/12 p-4 bg-white'>{children}</div>
      </div>
    </>
  )
}

export default BbModal

type SubProps = Omit<DefaultProps, 'showModal' | 'setShowModal'>

export const BbModalHeader = ({ className, children }: SubProps) => {
  return <h4 className={className}>{children}</h4>
}
export const BbModalContent = ({ className, children }: SubProps) => {
  return <h4 className={className}>{children}</h4>
}
export const BbModalFooter = ({ className, children }: SubProps) => {
  return <h4 className={className}>{children}</h4>
}
