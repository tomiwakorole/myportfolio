import { Link } from 'react-router-dom'
import imperialVideo from '../assets/imperial.mp4'
import stainlessImage from '../assets/stainless.png'
import tmstylesVideo from '../assets/tmstyles.mp4'
import atswaAidImage from '../assets/atswaaid.png'

const projects = [
     {
    name: 'Stainless Beauty Salon and Spa',
    type: 'Website',
    summary: 'A luxury salon and spa website designed to highlight services, atmosphere, and elegance for a premium wellness audience.',
    url: 'https://stainlessunisexbeautysalonandspa.vercel.app',
    theme: 'theme-3',
    mediaType: 'image',
    media: stainlessImage
  },
    {
    name: 'Imperial Beverage',
    type: 'Website',
    summary: 'Imperial Beverages is dedicated to delivering quality beverage solutions while building lasting relationships with customers and business partners. We are driven by quality, customer satisfaction and continuous growth.',
    url: 'https://imperial-beverages.vercel.app',
    theme: 'theme-2',
    mediaType: 'video',
    media: imperialVideo
  },
   {
    name: 'ATSWA Aid',
    type: 'Web Application',
    summary: 'For accounting students preparing for ATS 1, 2 and 3. It is designed to simplify study, guidance and revision support.',
    url: '#',
    theme: 'theme-5',
    status: 'In progress',
    mediaType: 'image',
    media: atswaAidImage
  },
  {
    name: 'QED Pro',
    type: 'Web Application',
    summary: 'I single-handedly worked on the process design and documentation for this project, shaping the workflow and system architecture behind the platform.',
    url: '#',
    theme: 'theme-6',
    processLink: '/process-design'
  }, 
  {
    name: 'The Ponytail Hub',
    type: 'Website',
    summary: 'Founded by three sisters with a shared passion for beauty, The Ponytail Hub celebrates confidence and individuality through beautiful hair. We bring elegance, quality and versatility to every style.',
    url: 'https://theponytailhub.vercel.app',
    theme: 'theme-1'
  },
  {
    name: 'TM Styles and Strands',
    type: 'Website',
    summary: 'A refined beauty brand website created to showcase style, personality, and a memorable digital presence.',
    url: 'https://tmstylesandstrands.vercel.app',
    theme: 'theme-4',
    mediaType: 'video',
    media: tmstylesVideo
  }
]

function Software() {
  return (
    <section className="software-page">
      <div className="software-header">
        {/* <p className="eyebrow">SOFTWARE ENGINEERING</p> */}
        <h2>Software engineering.</h2>
      </div>

      <div className="project-list">
        {projects.map((project) => (
          <article key={project.name} className="project-list-item">
            <div className="project-list-copy">
              <p className="project-kicker">{project.type}</p>
              <h3>{project.name}</h3>
              <p>{project.summary}</p>

              {project.status && (
                <span className="project-status">{project.status}</span>
              )}

              {project.processLink && (
                <Link to={project.processLink} className="project-inline-link">
                  View process design
                </Link>
              )}

              <div className="project-actions">
                <a
                  href={project.url}
                  target={project.url !== '#' ? '_blank' : undefined}
                  rel={project.url !== '#' ? 'noreferrer' : undefined}
                  className="project-link"
                >
                  {project.url !== '#' ? 'Demo' : project.status ? 'In progress' : 'Team project'}
                </a>
              </div>
            </div>

            <a
              href={project.url}
              target={project.url !== '#' ? '_blank' : undefined}
              rel={project.url !== '#' ? 'noreferrer' : undefined}
              className="project-visual"
              aria-label={`Open ${project.name}`}
            >
              <div className="project-visual-window">
                <div className="project-visual-bar">
                  <span />
                  <span />
                  <span />
                </div>
                <div className={`project-visual-body ${project.theme}`}>
                  {project.media ? (
                    <div className="project-media">
                      {project.mediaType === 'video' ? (
                        <video src={project.media} autoPlay muted loop playsInline />
                      ) : (
                        <img src={project.media} alt={project.name} />
                      )}
                    </div>
                  ) : (
                    <>
                      <div className="project-preview-hero" />
                      <div className="project-preview-grid">
                        <span />
                        <span />
                        <span />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Software