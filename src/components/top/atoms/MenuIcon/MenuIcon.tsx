import { css } from '@emotion/react'
import { AiOutlineMenu } from 'react-icons/ai'
type Props = React.ComponentPropsWithoutRef<'div'>

const menu = css`
  display: inline-block;
`

export const MenuIcon: React.FC<Props> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div css={menu}>
          <AiOutlineMenu />
        </div>
      </div>
    </>
  )
}
