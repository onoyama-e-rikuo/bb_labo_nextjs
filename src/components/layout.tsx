import BbNavbar from '@/components/atoms/BbNavbar'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => (
  <>
    <header>
      <BbNavbar />
    </header>
    <main>{children}</main>
  </>
)

export default Layout
