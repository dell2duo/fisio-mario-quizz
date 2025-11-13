import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/third-page')({
  component: RouteComponent,
})

const questions = [
  {
    id: 1,
    title: 'Quais as possíveis causas desta lesão?',
    alternatives: [
      { content: 'Alterações posturais' },
      {
        content: 'Desequilíbrio ou fraqueza dos músculos do manguito rotador',
      },
      { content: 'Redução do espaço subacromial' },
      { content: 'Uso repetitivo e sobrecarga mecânica' },
    ],
  },
  {
    id: 2,
    title: 'Quais esportes mais causam essa lesão?',
    alternatives: [
      { content: 'Vôlei' },
      {
        content: 'Natação',
      },
      { content: 'Tênis/Beach Tenis' },
      { content: 'CrossFit' },
      { content: 'Handebol' },
      { content: 'JiuJitsu' },
    ],
  },
  {
    id: 3,
    title: 'Quais abordagens fisioterapeuticas são recomendadas?',
    alternatives: [
      { content: 'Fortalecimento do manguito rotador' },
      {
        content: 'Treino de estabilização e controle da escápula',
      },
      { content: 'Correção postural' },
      { content: 'Alongamentos específicos' },
      { content: 'Mobilizações articulares' },
      { content: 'Recursos analgésicos e anti-inflamatórios' },
    ],
  },
]

function RouteComponent() {
  return (
    <div className="flex flex-col gap-6 items-center p-6 pb-24 text-left">
      <h1>Causas e Características</h1>
      {questions.map((question) => (
        <div
          key={question.id}
          className="space-y-4 rounded-xl shadow-lg p-4 py-6"
        >
          <h2>{question.title}</h2>
          <div className="grid gap-2">
            {question.alternatives.map((alternative) => (
              <div className="border-2 border-gray-200 p-2 rounded-md">
                <p className="font-semibold text-gray-500">
                  {alternative.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
