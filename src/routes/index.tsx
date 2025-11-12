import { useEffect, useRef } from 'react'
import { Link, createFileRoute } from '@tanstack/react-router'
import Lottie from 'lottie-react'

import bouncingBall from '@/animations/bouncing_ball.json'

export const Route = createFileRoute('/')({ component: App })

function App() {
  const lottieRef = useRef<any>(null)

  useEffect(() => {
    lottieRef.current?.setSpeed(0.5)
  }, [lottieRef])

  return (
    <div className="flex flex-col text-center items-center pt-8">
      <div className="gap-4 p-6">
        <h1>
          Síndrome do Impacto <br /> Subacromial
        </h1>
        <h2 className="mt-5">Fisioterapia Desportiva</h2>
      </div>

      <Lottie
        className="w-full md:w-[430px]"
        lottieRef={lottieRef}
        animationData={bouncingBall}
      />

      <div className="fixed w-full bottom-20 px-6">
        <Link to="/topics">Começar</Link>
      </div>
    </div>
  )
}
