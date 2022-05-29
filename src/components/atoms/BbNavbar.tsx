import { CalendarIcon, MenuAlt3Icon } from '@heroicons/react/outline'
import { useEffect, useState } from 'react'
import BbLinkIcon from './BbLinkIcon'
import Logo from 'public/images/logo_white.svg'

// 追加　画面がNavbar分スクロールされたら背景色を黒に変える
const BbNavbar = () => {
  const calendarIcon = <CalendarIcon />
  const menuIcon = <MenuAlt3Icon />

  const Threshold: number = 100
  const [scrollY, setScrollY] = useState<number>(0)
  const getScrollYPosition = () => {
    setScrollY(window.pageYOffset)
  }

  useEffect(() => {
    const watchScroll = () => window.addEventListener('scroll', getScrollYPosition)
    watchScroll()
    return () => window.removeEventListener('scroll', getScrollYPosition)
  })

  return (
    <nav
      className={`h-14 flex items-center justify-between px-6 fixed top-0 left-0 w-full z-10 text-white transition-all duration-200 
        ${scrollY > Threshold ? 'bg-black' : ''}`}
    >
      <div>
        <Logo className='h-6' />
      </div>
      <div className='flex items-center justify-center'>
        <BbLinkIcon href='https://reserva.be/bblabo64' icon={calendarIcon} className='mr-5' />
        {/* メニューアイコンのコンポーネント作る */}
        <BbLinkIcon href='https://reserva.be/bblabo64' icon={menuIcon} />
      </div>
    </nav>
  )
}

export default BbNavbar
