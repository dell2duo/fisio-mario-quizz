import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/fourth-page')({
  component: RouteComponent,
})

const firstGif = (
  <>
    <div
      className="tenor-gif-embed"
      data-postid="23331897"
      data-share-method="host"
      data-aspect-ratio="1"
      data-width="100%"
    >
      <a href="https://tenor.com/view/shoulder-adjustment-gustavo-ribeiro-red-bull-fixing-shoulders-adjusting-the-shoulder-gif-23331897">
        Shoulder Adjustment Gustavo Ribeiro GIF
      </a>
      from{' '}
      <a href="https://tenor.com/search/shoulder+adjustment-gifs">
        Shoulder Adjustment GIFs
      </a>
    </div>{' '}
    <script
      type="text/javascript"
      async
      src="https://tenor.com/embed.js"
    ></script>
  </>
)

const secondGif = (
  <>
    <div
      className="tenor-gif-embed"
      data-postid="19627390"
      data-share-method="host"
      data-aspect-ratio="1"
      data-width="100%"
    >
      <a href="https://tenor.com/view/chrisdal-personaltraining-austria-sports-ems-gif-19627390">
        Chrisdal Personaltraining Sticker
      </a>
      from{' '}
      <a href="https://tenor.com/search/chrisdal-stickers">Chrisdal Stickers</a>
    </div>{' '}
    <script
      type="text/javascript"
      async
      src="https://tenor.com/embed.js"
    ></script>
  </>
)

const thirdgif = (
  <>
    <div
      className="tenor-gif-embed"
      data-postid="19627393"
      data-share-method="host"
      data-aspect-ratio="1"
      data-width="100%"
    >
      <a href="https://tenor.com/view/chrisdal-personaltraining-austria-sports-ems-gif-19627393">
        Chrisdal Personaltraining Sticker
      </a>
      from{' '}
      <a href="https://tenor.com/search/chrisdal-stickers">Chrisdal Stickers</a>
    </div>{' '}
    <script
      type="text/javascript"
      async
      src="https://tenor.com/embed.js"
    ></script>
  </>
)

const fourthgif = (
  <>
    <div
      className="tenor-gif-embed"
      data-postid="12012198"
      data-share-method="host"
      data-aspect-ratio="0.561224"
      data-width="100%"
    >
      <a href="https://tenor.com/view/gym-workout-shoulder-shoulders-back-gif-12012198">
        Gym Workout GIF
      </a>
      from <a href="https://tenor.com/search/gym-gifs">Gym GIFs</a>
    </div>{' '}
    <script
      type="text/javascript"
      async
      src="https://tenor.com/embed.js"
    ></script>
  </>
)

const fifthgif = (
  <>
    <div
      className="tenor-gif-embed"
      data-postid="2441191202035217238"
      data-share-method="host"
      data-aspect-ratio="1.13402"
      data-width="100%"
    >
      <a href="https://tenor.com/view/tom-and-jerry-tom-strong-jerry-strong-tom-gym-gif-2441191202035217238">
        Tom And Jerry Tom Strong GIF
      </a>
      from{' '}
      <a href="https://tenor.com/search/tom+and+jerry-gifs">
        Tom And Jerry GIFs
      </a>
    </div>{' '}
    <script
      type="text/javascript"
      async
      src="https://tenor.com/embed.js"
    ></script>
  </>
)

const sixthgif = (
  <>
    <div
      className="tenor-gif-embed"
      data-postid="24848311"
      data-share-method="host"
      data-aspect-ratio="0.5625"
      data-width="100%"
    >
      <a href="https://tenor.com/view/scapular-pulls-gif-24848311">
        Scapular Pulls GIF
      </a>
      from{' '}
      <a href="https://tenor.com/search/scapular+pulls-gifs">
        Scapular Pulls GIFs
      </a>
    </div>{' '}
    <script
      type="text/javascript"
      async
      src="https://tenor.com/embed.js"
    ></script>
  </>
)

const seventhgif = (
  <>
    <div
      className="tenor-gif-embed"
      data-postid="21946442"
      data-share-method="host"
      data-aspect-ratio="1.33333"
      data-width="100%"
    >
      <a href="https://tenor.com/view/abd-gif-21946442">Abd GIF</a>from{' '}
      <a href="https://tenor.com/search/abd-gifs">Abd GIFs</a>
    </div>{' '}
    <script
      type="text/javascript"
      async
      src="https://tenor.com/embed.js"
    ></script>
  </>
)

const contents = [
  {
    id: 1,
    title: 'Controle da dor:',
    points: [
      'Crioterapia',
      'Tendinopatia: isometria inicial',
      'Mobilização glenoumeral (graus I e II)',
    ],
    gif: [firstGif],
  },
  {
    id: 2,
    title: 'Fortalecimento + trabalho escapular + mobilidade',
    points: [
      'Rotadores externos',
      'Trapézio inferior',
      'Serrátil anterior',
      'Supraespinhal (progredir com cuidado)',
    ],
    gif: [secondGif, thirdgif, fourthgif, fifthgif, sixthgif, seventhgif],
  },
]

function RouteComponent() {
  return (
    <div className="p-6 space-y-6 pb-24">
      <h1>Tratamento Fisioterapêutico</h1>
      <div className="space-y-4">
        {contents.map((content) => (
          <div
            className="space-y-2 outline outline-gray-200 rounded-xl shadow-lg p-4 py-6"
            key={content.id}
          >
            <h2 className="text-xl">{content.title}</h2>
            <ol className="list-decimal pl-6">
              {content.points.map((point, index) => (
                <li key={index + content.id}>{point}</li>
              ))}
            </ol>
            {content.gif.map((gif) => gif)}
          </div>
        ))}
      </div>
    </div>
  )
}
