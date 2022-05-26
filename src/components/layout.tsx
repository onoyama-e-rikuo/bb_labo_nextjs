import { FC } from 'react'
import BbNavbar from '@/components/atoms/BbNavbar'

type Props = {
  children: JSX.Element
}

const Layout: FC<Props> = ({ children }) => (
  <>
    <header>
      <BbNavbar />
    </header>
    <main>{children}</main>
  </>
)

export default Layout
