type Props = {
  className?: string
  href: string
  icon: React.ReactNode
}

const BbLinkIcon = ({ className, href, icon }: Props) => (
  <a href={href} target='_blank' className={className} rel='noreferrer'>
    <div className='h-8 w-8'>{icon}</div>
  </a>
)

export default BbLinkIcon
