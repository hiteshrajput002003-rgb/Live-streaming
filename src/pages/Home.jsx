import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [input, setInput] = useState("")
  const navigate = useNavigate()

  function handleJoin(event) {
    event.preventDefault()
    const roomId = input.trim()

    if (roomId) {
      navigate(`/room/${roomId}`)
    }
  }

  return (
    <div className="home">
    <div className="home-glow home-glow-one" />
    <div className="home-glow home-glow-two" />

    <header className="home-header">
      <div className="brand-mark">S</div>
      <span className="brand-name">Streamly</span>
      <span className="live-badge"><span /> LIVE ROOMS</span>
    </header>

    <main className="home-content">
      <section className="home-copy">
        <p className="eyebrow">YOUR MOMENT. YOUR AUDIENCE.</p>
        <h1>Go live.<br /><span>Be seen.</span></h1>
        <p className="home-description">
          Step into a room, connect with your audience, and make every conversation feel live.
        </p>

        <form className="join-form" onSubmit={handleJoin}>
          <label htmlFor="room-id">Join a room</label>
          <div className="join-controls">
            <input
              id="room-id"
              type="text"
              placeholder="Enter your room ID"
              onChange={(event) => setInput(event.target.value)}
              value={input}
              autoComplete="off"
            />
            <button type="submit">Join room <span aria-hidden="true">↗</span></button>
          </div>
        </form>
        <p className="form-hint">No account needed to join a room.</p>
      </section>

      <aside className="home-preview" aria-label="Live room preview">
        <div className="preview-topline">
          <span className="preview-live"><span /> LIVE NOW</span>
          <span>room / 248</span>
        </div>
        <div className="preview-art">
          <div className="avatar avatar-one">A</div>
          <div className="avatar avatar-two">M</div>
          <div className="avatar avatar-three">J</div>
          <div className="sound-wave"><i /><i /><i /><i /><i /></div>
        </div>
        <div className="preview-footer">
          <div><strong>Creative minds</strong><span>Join the conversation</span></div>
          <span className="viewer-count">● 1.2k</span>
        </div>
      </aside>
    </main>

    <footer className="home-footer">
      <span>Simple. Social. Live.</span>
      <span className="footer-line" />
      <span>Built for real conversations</span>
    </footer>
    </div>
  )
}

export default Home