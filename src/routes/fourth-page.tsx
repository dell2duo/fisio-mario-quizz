import { useEffect, useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { useTenorEmbed } from '@/hooks/useTenorEmbed'

export const Route = createFileRoute('/fourth-page')({
  component: RouteComponent,
})

/* ✅ Reusable Tenor GIF Component */
function TenorGif({
  postId,
  title,
  href,
  width = '100%',
  aspectRatio = '1',
}: any) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    // Load Tenor script only once
    const scriptId = 'tenor-embed-script'
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script')
      script.id = scriptId
      script.src = 'https://tenor.com/embed.js'
      script.async = true
      script.onload = () => {
        // Initialize embeds once script is ready
        ;(window as any).Tenor?.init?.()
      }
      document.body.appendChild(script)
    } else {
      // Script already loaded: reinitialize for new page
      ;(window as any).Tenor?.init?.()
    }

    // Detect when the GIF is replaced by Tenor
    const target = document.querySelector(
      `.tenor-gif-embed[data-postid="${postId}"]`,
    )
    const observer = new MutationObserver(() => {
      setLoaded(true)
      observer.disconnect()
    })
    if (target) observer.observe(target, { childList: true })

    return () => observer.disconnect()
  }, [postId])

  return (
    <div className="relative w-full flex justify-center mt-4">
      {!loaded && (
        <div className="absolute flex items-center justify-center w-full h-[300px] bg-gray-100 text-gray-500 rounded-lg">
          <div className="w-8 h-8 border-4 border-gray-400 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      <div
        className="tenor-gif-embed"
        data-postid={postId}
        data-share-method="host"
        data-aspect-ratio={aspectRatio}
        data-width={width}
      >
        <a target="_blank" href={href}>
          {title}
        </a>
      </div>
    </div>
  )
}

/* ✅ Page content data */
const contents = [
  {
    id: 1,
    title: 'Controle da dor:',
    points: [
      'Crioterapia',
      'Tendinopatia: isometria inicial',
      'Mobilização glenoumeral (graus I e II)',
    ],
    gifs: [
      {
        postId: '23331897',
        title: 'Shoulder Adjustment Gustavo Ribeiro GIF',
        href: 'https://tenor.com/view/shoulder-adjustment-gustavo-ribeiro-red-bull-fixing-shoulders-adjusting-the-shoulder-gif-23331897',
        aspectRatio: '1',
      },
    ],
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
    gifs: [
      {
        postId: '19627390',
        title: 'Chrisdal Personaltraining Sticker',
        href: 'https://tenor.com/view/chrisdal-personaltraining-austria-sports-ems-gif-19627390',
      },
      {
        postId: '19627393',
        title: 'Chrisdal Personaltraining Sticker',
        href: 'https://tenor.com/view/chrisdal-personaltraining-austria-sports-ems-gif-19627393',
      },
      {
        postId: '12012198',
        title: 'Gym Workout GIF',
        href: 'https://tenor.com/view/gym-workout-shoulder-shoulders-back-gif-12012198',
        aspectRatio: '0.561224',
      },
      {
        postId: '2441191202035217238',
        title: 'Tom And Jerry Tom Strong GIF',
        href: 'https://tenor.com/view/tom-and-jerry-tom-strong-jerry-strong-tom-gym-gif-2441191202035217238',
        aspectRatio: '1.13402',
      },
      {
        postId: '24848311',
        title: 'Scapular Pulls GIF',
        href: 'https://tenor.com/view/scapular-pulls-gif-24848311',
        aspectRatio: '0.5625',
      },
      {
        postId: '21946442',
        title: 'Abd GIF',
        href: 'https://tenor.com/view/abd-gif-21946442',
        aspectRatio: '1.33333',
      },
    ],
  },
]

/* ✅ Main component */
function RouteComponent() {
  useTenorEmbed()

  return (
    <div className="p-6 space-y-6 pb-24">
      <h1>Tratamento Fisioterapêutico</h1>

      <div className="space-y-4">
        {contents.map((content) => (
          <div
            key={content.id}
            className="space-y-2 outline outline-gray-200 rounded-xl shadow-lg p-4 py-6"
          >
            <h2 className="text-xl">{content.title}</h2>
            <ol className="list-decimal pl-6">
              {content.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ol>

            <div className="mt-4">
              {content.gifs.map((gif) => (
                <TenorGif key={gif.postId} {...gif} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
