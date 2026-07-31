import { Link } from 'react-router'
import tools from '../data/tools.json'
import ToolCard, { formatDate } from '../components/ToolCard.jsx'

export default function Home() {
  const sorted = [...tools].sort((a, b) => b.date.localeCompare(a.date))
  const [featured, ...rest] = sorted

  return (
    <main className="home">
      <section className="hero" style={{ '--hue': featured.hue }}>
        <div className="hero-poster" aria-hidden="true">
          {featured.image ? (
            <img className="poster-img" src={featured.image} alt="" />
          ) : (
            <>
              <span className="poster-letter">{featured.name[0]}</span>
              <span className="poster-name">{featured.name}</span>
            </>
          )}
        </div>
        <div className="hero-body">
          <p className="hero-kicker">הכלי של היום · {formatDate(featured.date)}</p>
          <h1>{featured.name}</h1>
          <p className="hero-tagline">{featured.tagline}</p>
          <Link to={`/tool/${featured.id}`} className="btn-primary">
            לצפייה במדריך ←
          </Link>
        </div>
      </section>

      <section className="library">
        <h2>כל הכלים</h2>
        <div className="tool-grid">
          {rest.map((tool, i) => (
            <ToolCard key={tool.id} tool={tool} index={i} />
          ))}
        </div>
      </section>
    </main>
  )
}
