import { Link } from 'react-router'

export default function ToolCard({ tool, index }) {
  return (
    <Link
      to={`/tool/${tool.id}`}
      className="tool-card"
      style={{ '--hue': tool.hue, animationDelay: `${index * 70}ms` }}
    >
      <div className="poster">
        {tool.image ? (
          <img className="poster-img" src={tool.image} alt={tool.name} loading="lazy" />
        ) : (
          <>
            <span className="poster-letter" aria-hidden="true">
              {tool.name[0]}
            </span>
            <span className="poster-name">{tool.name}</span>
          </>
        )}
      </div>
      <h3 className="card-name">{tool.name}</h3>
      <div className="card-meta">
        <span className="chip">{tool.category}</span>
        <time dateTime={tool.date}>{formatDate(tool.date)}</time>
      </div>
      <p className="card-tagline">{tool.tagline}</p>
    </Link>
  )
}

export function formatDate(iso) {
  return new Date(iso + 'T00:00:00').toLocaleDateString('he-IL', {
    day: 'numeric',
    month: 'long',
  })
}
