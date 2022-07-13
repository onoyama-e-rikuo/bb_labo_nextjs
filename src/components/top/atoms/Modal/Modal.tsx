import ReactModal from 'react-modal'

type Props = ReactModal.Props

export const Modal: React.FC<Props> = (props) => {
  return (
    <>
      <ReactModal isOpen={props.isOpen}>{props.children}</ReactModal>
    </>
  )
}
