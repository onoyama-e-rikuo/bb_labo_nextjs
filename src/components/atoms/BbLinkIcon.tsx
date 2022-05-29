type Props = {
  className?: string
  href: string
  icon: React.ReactNode
}

const BbLinkIcon = ({ className, href, icon }: Props) => (
  <a href={href} target='_blank' className={className} rel='noreferrer'>
    <div className='h-7 w-7'>{icon}</div>
  </a>
)

export default BbLinkIcon
