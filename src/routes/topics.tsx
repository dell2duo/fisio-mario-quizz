import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/topics')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="grid px-6 gap-4">
      <h1>Tópicos</h1>
      <Link to="/first-page">Quais os movimentos do ombro</Link>
      <Link to="/second-page">Testes Ortopédicos</Link>
      <Link to="/third-page">Causas e Características</Link>
      <Link to="/fourth-page">Tratamento Fisioterapêutico</Link>
    </div>
  )
}
