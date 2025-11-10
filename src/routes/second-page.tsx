import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/second-page')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex flex-col items-center px-6 text-left">
      <h1>Testes Ortopédicos</h1>
      <h2 className="underline w-full decoration-yellow-300 mt-4">
        Teste de Neer
      </h2>
      <div className="grid gap-4 mb-6">
        <p>- Objetivo: reproduzir impacto subacromial.</p>
        <p>- Como fazer: elevação passiva completa do braço em flexão.</p>
        <p>- Teste positivo: dor anterior no ombro.</p>
      </div>
      <iframe
        width="100%"
        height={'300px'}
        src="https://www.youtube.com/embed/il1j3DFMKU0?si=yDOd6oSY-QGGdJPV"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      <h2 className="underline w-full decoration-yellow-300 mt-12">
        Teste de Hawkins-Kennedy
      </h2>
      <div className="grid gap-4 mb-6">
        <p>- Objetivo: comprimir estruturas subacromiais.</p>
        <p>- Teste positivo: dor na rotação interna em 90° de flexão.</p>
      </div>
      <iframe
        width="100%"
        height="300px"
        src="https://www.youtube.com/embed/aSMSNLr5THk?si=LGLRzQMbfFok9itj"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      <h2 className="underline w-full decoration-yellow-300 mt-12">
        Teste de Jobe
      </h2>
      <div className="grid gap-4 mb-6">
        <p>- (Empty Can Test) – Supraespinhal</p>
        <p>- Útil para diferenciar impacto x tendinopatia</p>
      </div>
      <iframe
        width="100%"
        height="300"
        src="https://www.youtube.com/embed/NOFZaAzOGOA?si=qwOZjhZ0aW9jFr3-"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      <h2 className="underline w-full decoration-yellow-300 mt-12">
        Teste de Patte
      </h2>
      <div className="grid gap-4 mb-6">
        <p>- (Hornblower) – Infraespinhal</p>
        <p>- Indica déficit de rotadores externos.</p>
      </div>
      <iframe
        width="100%"
        height="300"
        src="https://www.youtube.com/embed/ZgU5-m4kXSE?si=8uTq68dGrrxqNz_k"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  )
}
