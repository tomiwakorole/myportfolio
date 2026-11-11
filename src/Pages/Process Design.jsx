const processStudies = [
  {
    title: 'Document Digitization',
    category: 'Workflow design / process mapping',
    summary:
      'Designed a streamlined process for converting paper-based records into a digital workflow, covering capture, validation, storage, retrieval, and archival.',
    details: [
      'Mapped the current-state process and identified bottlenecks in document handling.',
      'Created use case flows for staff, administrators, and document reviewers.',
      'Defined steps for verification, approval, and secure digital archiving.'
    ],
    link: 'https://docs.google.com/document/'
  },
  {
    title: 'School Job Recruitment Portal',
    category: 'Confidential internal workflow',
    summary:
      'Developed process documentation for a school recruitment portal used to manage application submissions, review stages, approval approval, and candidate tracking in a secure environment.',
    details: [
      'Modeled recruitment stages from application submission to shortlist and final approval.',
      'Documented role access across administrators, hiring teams, and department leads.',
      'Built a clear flow to support classified internal information handling.'
    ],
    link: 'https://app.diagrams.net/'
  },
  {
    title: 'Industrial Training Application',
    category: 'Use case and application flow',
    summary:
      'Created the process flow for managing industrial training applications, from submission and verification to recommendation and final decision.',
    details: [
      'Outlined user journeys for students, supervisors, and placement officers.',
      'Mapped the approval logic and status transitions for each application.',
      'Simplified the experience for both applicants and administrators.'
    ],
    link: 'https://docs.google.com/document/'
  },
  {
    title: 'Survey Pro',
    category: 'Survey workflow design',
    summary:
      'Designed the process flow for a survey platform covering form creation, response collection, analytics review, and result distribution.',
    details: [
      'Documented the lifecycle of a survey from creation to publication and reporting.',
      'Defined actors, tasks, and decision points in the system.',
      'Improved clarity around how responses are recorded and acted on.'
    ],
    link: 'https://app.diagrams.net/'
  }
]

function ProcessDesign() {
  return (
    <section className="process-page">
      <article className="process-article">
        <p className="eyebrow">Process Design</p>
        <h1>Designing systems that make work clearer.</h1>

        <p className="section-description">
          I work on workflows, flowcharts, and use case diagrams to turn complex
          operations into simple, practical systems. These process documents help
          teams understand responsibilities, decision points, and handoffs before
          implementation begins.
        </p>

        <div className="process-list">
          {processStudies.map((project) => (
            <article key={project.title} className="process-entry">
              <div className="process-header">
                <span className="process-tag">{project.category}</span>
              </div>

              <h2>{project.title}</h2>

              <p>{project.summary}</p>

              <ul>
                {project.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>

              <a
                className="process-link"
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                View process document
              </a>
            </article>
          ))}
        </div>
      </article>
    </section>
  )
}

export default ProcessDesign