import { FC } from 'react'

type Props = {
  className?: string
  href: string
  icon: JSX.Element
}

const BbLinkIcon: FC<Props> = ({ className, href, icon }) => (
  <a href={href} target='_blank' className={className} rel='noreferrer'>
    <div className='h-8 w-8'>{icon}</div>
  </a>
)

export default BbLinkIcon
