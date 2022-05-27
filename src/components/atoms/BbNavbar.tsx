import { CalendarIcon, MenuAlt3Icon } from '@heroicons/react/outline'
import BbLinkIcon from './BbLinkIcon'
import Logo from 'public/images/logo.svg'

const BbNavbar = () => {
  const calendarIcon = <CalendarIcon />
  const menuIcon = <MenuAlt3Icon />

  return (
    <nav className='h-14 flex items-center justify-between border-b px-6 fixed top-0 left-0 w-full z-10'>
      <div>
        <Logo className='h-6' />
      </div>
      <div className='flex items-center justify-center'>
        <BbLinkIcon href='https://reserva.be/bblabo64' icon={calendarIcon} className='mr-4' />
        {/* メニューアイコンのコンポーネント作る */}
        <BbLinkIcon href='https://reserva.be/bblabo64' icon={menuIcon} />
      </div>
    </nav>
  )
}

export default BbNavbar
