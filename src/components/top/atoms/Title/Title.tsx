import { css } from '@emotion/react'

type Props = React.ComponentPropsWithoutRef<'h1'>

const title = css`
  display: inline-block;
  font-size: 1.5rem;
`

export const Title: React.FC<Props> = (props) => {
  return (
    <>
      <div className={props.className}>
        <h1 css={title}>{props.children}</h1>
      </div>
    </>
  )
}
