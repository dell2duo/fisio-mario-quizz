import { useEffect, useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { useTenorEmbed } from '@/hooks/useTenorEmbed'

export const Route = createFileRoute('/first-page')({
  component: RouteComponent,
})

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

function RouteComponent() {
  useTenorEmbed()

  return (
    <div className="flex flex-col items-center p-6 pb-16">
      <h1 className="pb-6">Quais os movimentos do ombro?</h1>

      <TenorGif
        postId="25305697"
        title="Coracobrachialis Shoulder Adduction GIF"
        href="https://tenor.com/view/coracobrachialis-shoulder-adduction-gif-25305697"
      />
      <TenorGif
        postId="25307079"
        title="Subscapularis Arm Medial Rotation GIF"
        href="https://tenor.com/view/subscapularis-arm-medial-rotation-medial-rotation-gif-25307079"
      />
      <TenorGif
        postId="25307147"
        title="Supraspinatus Shoulder Abduction GIF"
        href="https://tenor.com/view/supraspinatus-shoulder-abduction-shoulder-abduction-gif-25307147"
      />
      <TenorGif
        postId="25306668"
        title="Shoulder Transverse Abduction Infraspinatus GIF"
        href="https://tenor.com/view/shoulder-transverse-abduction-infraspinatus-transverse-abduction-abduction-gif-25306668"
      />
      <TenorGif
        postId="25306721"
        title="Long Head Of Triceps Triceps GIF"
        href="https://tenor.com/view/long-head-of-triceps-triceps-shoulder-extension-and-hyperextension-extension-hyperextension-gif-25306721"
      />
      <TenorGif
        postId="25305684"
        title="Clavicular Part Of Deltoid Medial Rotation GIF"
        href="https://tenor.com/view/clavicular-part-of-deltoid-medial-rotation-arm-gif-25305684"
      />
    </div>
  )
}
