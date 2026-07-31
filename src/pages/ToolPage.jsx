import { Link, useParams } from 'react-router'
import tools from '../data/tools.json'
import { formatDate } from '../components/ToolCard.jsx'

export default function ToolPage() {
  const { id } = useParams()
  const tool = tools.find((t) => t.id === id)

  if (!tool) {
    return (
      <main className="tool-page">
        <h1>הכלי לא נמצא</h1>
        <Link to="/" className="btn-primary">→ חזרה לכל הכלים</Link>
      </main>
    )
  }

  return (
    <main className="tool-page" style={{ '--hue': tool.hue }}>
      <div className="tool-banner">
        <Link to="/" className="back-btn">→ חזרה לכל הכלים</Link>
        <p className="hero-kicker">{tool.category} · {formatDate(tool.date)}</p>
        <h1>{tool.name}</h1>
        <p className="hero-tagline">{tool.tagline}</p>
      </div>

      <article className="tool-content">
        <section>
          <h2>מה זה בכלל?</h2>
          <p>{tool.what}</p>
        </section>

        <section>
          <h2>למה כדאי לכם?</h2>
          <p>{tool.why}</p>
        </section>

        <section>
          <h2>איך מתחילים — צעד אחר צעד</h2>
          <ol className="steps">
            {tool.steps.map((step, i) => (
              <li key={i} className="step">
                <span className="step-num" aria-hidden="true">{i + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <aside className="tip">
          <strong>💡 טיפ של אלופים</strong>
          <p>{tool.tip}</p>
        </aside>

        <a href={tool.link} target="_blank" rel="noreferrer" className="btn-outline">
          לאתר של {tool.name} ↗
        </a>
      </article>
    </main>
  )
}
