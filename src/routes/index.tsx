import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div>
      <h1>Síndrome do Impacto Subacromial</h1>
      <p className="mb-6">Fisioterapia desportiva</p>

      <div className="flex flex-col w-full px-6 md:flex-row gap-3">
        <Link to="/topics">START GAME</Link>
      </div>
    </div>
  )
}
