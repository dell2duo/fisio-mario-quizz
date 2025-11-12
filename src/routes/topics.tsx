import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/topics')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="grid p-6 gap-6">
      <h1 className="my-6">Tópicos</h1>
      <Link to="/first-page">Quais os movimentos do ombro</Link>
      <Link to="/second-page">Testes Ortopédicos</Link>
      <Link to="/third-page">Causas e Características</Link>
      <Link to="/fourth-page">Tratamento Fisioterapêutico</Link>
    </div>
  )
}
