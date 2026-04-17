import catSvg from '../assets/images/cat.svg'
import '../styles/animations.css'

export default function DancingCat({ isPlaying, speed }) {
  const animationStyle = {
    animationPlayState: isPlaying ? 'running' : 'paused',
    animationDuration: `${2 / speed}s`,
  }

  return (
    <div className="cat-stage">
      <div className="music-notes" aria-hidden="true">
        {isPlaying && (
          <>
            <span className="note note-1">♪</span>
            <span className="note note-2">♫</span>
            <span className="note note-3">♩</span>
            <span className="note note-4">♬</span>
          </>
        )}
      </div>

      <div
        className="cat-wrapper"
        style={{ animationPlayState: isPlaying ? 'running' : 'paused' }}
      >
        <div className="cat-body-container" style={animationStyle}>
          <img
            src={catSvg}
            alt="춤추는 고양이"
            className="cat-image"
            style={animationStyle}
          />
        </div>
        <div className="shadow" style={{ animationPlayState: isPlaying ? 'running' : 'paused' }} />
      </div>

      <div className="disco-lights" aria-hidden="true">
        <div className="light light-1" style={{ animationPlayState: isPlaying ? 'running' : 'paused' }} />
        <div className="light light-2" style={{ animationPlayState: isPlaying ? 'running' : 'paused' }} />
        <div className="light light-3" style={{ animationPlayState: isPlaying ? 'running' : 'paused' }} />
      </div>
    </div>
  )
}
