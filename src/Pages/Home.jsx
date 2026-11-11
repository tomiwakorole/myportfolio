import '../Styles/Home.css'
import profileImage from '../assets/mypic.png'

function Home() {
  return (
    <section className="hero-shell">
      <div className="hero-copy">
        {/* <p className="eyebrow"> SOFTWARE ENGINEERING &amp; CLOUD ENGINEERING</p>

        <h1>
          Building software.
          <span>Exploring cloud infrastructure.</span>
        </h1>

        <p className="hero-description">
          I'm a Software Engineer passionate about building digital solutions,
          designing systems and exploring cloud technologies. I'm expanding my
          expertise in AWS, Cloud Engineering and DevOps.
        </p> */}
        <div className="greeting-row">
          <div className="profile-avatar" aria-label="Tomiwa profile picture">
            <img
              src={profileImage}
              alt="Tomiwa"
            />
          </div>

          <p className="hero-description">
            Hi, I'm Tomiwa.<br />
            I'm a Software Engineer passionate about building digital solutions,
            designing systems and exploring cloud technologies. I'm expanding my
            expertise in AWS, Cloud Engineering and DevOps.
          </p>
        </div>

        <div className="skill-list">
          <span className="skill-pill"><i className="dot" /> React</span>
          <span className="skill-pill"><i className="dot" /> JavaScript</span>
          <span className="skill-pill"><i className="dot" /> SQL</span>
          <span className="skill-pill"><i className="dot" /> PHP</span>
            <span className="skill-pill"><i className="dot" /> AWS</span>
        </div>
      </div>

      <div className="code-card">
        <div className="terminal-head">
          <div className="traffic-lights">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
          </div>
          <span className="terminal-name">developer.config.ts</span>
        </div>

        <pre className="code-block">{`const engineer = {
  name: "KOROLE OLUWATOMWA",
  role: "Software/Cloud Engineer",
  focus: [ "Software", "Cloud", "DevOps", "Process Design"],
  status: "Available for work"
};`}</pre>
      </div>
    </section>
  )
}

export default Home
