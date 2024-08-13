import { useRef } from "react"

const VideoPlayer =() =>{
    const ref = useRef

const handlePlay = () =>{
    ref.current.pause()
}
const handlePause = () =>{
    ref.current.pause()
}
return (
    <div>
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause}>Pause</button>
        <iframe src="https://player.vimeo.com/video/995012368?title=0&amp;" width="400"></iframe>
    </div>
)
}
export default VideoPlayer
