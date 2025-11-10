import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/third-page')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div></div>
}
