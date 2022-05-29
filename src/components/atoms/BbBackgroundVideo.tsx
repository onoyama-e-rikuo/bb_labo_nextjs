type Props = {
  src: string
}

const BbBackgroundVideo = ({ src }: Props) => <video src={src} autoPlay muted playsInline loop></video>

export default BbBackgroundVideo
