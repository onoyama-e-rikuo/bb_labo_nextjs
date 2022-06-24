import { css } from '@emotion/react'

type Props = React.ComponentPropsWithoutRef<'button'>

export const Button: React.FC<Props> = (props) => {
  return (
    <div css={wrapper}>
      <button css={button} onClick={props.onClick}>
        {props.children}
      </button>
    </div>
  )
}

const wrapper = css``
const button = css`
  width: 165px;
  height: 45px;
  border: 2px solid #000;
  text-align: center;
`
