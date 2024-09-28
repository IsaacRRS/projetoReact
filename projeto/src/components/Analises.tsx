'use client'

import { HTMLAttributes, useEffect, useRef, useState } from 'react'
import WidthMaximo from './WidthMaximo'
import { useInView } from 'framer-motion'
import { cn } from '@/lib/utils'
import Celular from './Celular'

const CELULARES = [
  '/mafia.png',
  '/pessoa2.png',
  '/pessoa3.png',
  '/pessoa4.png',
  '/gato.png',
  '/1.jpg',
]

function dividirLista<T>(array: Array<T>, numPartes: number) {
  const result: Array<Array<T>> = []

  for (let i = 0; i < array.length; i++) {
    const index = i % numPartes
    if (!result[index]) {
      result[index] = []
    }
    result[index].push(array[i])
  }

  return result
}

function ColunaAnalisar({
  Analisando,
  className,
  AnalisarClassName,
  msPorPixel = 0,

}: {

  Analisando: string[]
  className?: string
  AnalisarClassName?: (AnalisarIndex: number) => string
  msPorPixel?: number

}) {

  const colunaRef = useRef<HTMLDivElement | null>(null)
  const [colunaAltura, setcolunaAltura] = useState(0)
  const duracao = `${colunaAltura * msPorPixel}ms`

  useEffect(() => {
    if (!colunaRef.current) return

    const verTamanho = new window.ResizeObserver(() => {
      setcolunaAltura(colunaRef.current?.offsetHeight ?? 0)
    })

    verTamanho.observe(colunaRef.current)

    return () => {
      verTamanho.disconnect()
    }
  }, [])

  return (
    <div
      ref={colunaRef}
      className={cn('animate-marquee space-y-8 py-4', className)}

      style={{ '--marquee-duration': duracao } as React.CSSProperties}>
      {Analisando.concat(Analisando).map((imgSrc, AnalisarIndex) => (

        <Analisar
          key={AnalisarIndex}
          className={AnalisarClassName?.(AnalisarIndex % Analisando.length)}
          imgSrc={imgSrc}
        />

      ))}
    </div>
  )
}

interface AnalisarPartes extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string
}

function Analisar({ imgSrc, className, ...props }: AnalisarPartes) {

  const possivAnims = [
    '0s',
    '0.1s',
    '0.2s',
    '0.3s',
    '0.4s',
    '0.5s',
  ]

  const animationDelay =
    possivAnims[
      Math.floor(Math.random() * possivAnims.length)
    ]

  return (
    <div
      className={cn(
        'animate-fade-in rounded-[2.25rem] bg-white p-6 opacity-0 shadow-xl shadow-red-900/5',
        className
      )}
      style={{ animationDelay }}
      {...props}>
      <Celular imgSrc={imgSrc} />
    </div>
  )
}

function CelularesGrid() {

  const caixaRef = useRef<HTMLDivElement | null>(null)
  const emCampo = useInView(caixaRef, { once: true, amount: 0.4 })
  const colunas = dividirLista(CELULARES, 3)
  const coluna1 = colunas[0]
  const coluna2 = colunas[1]
  const coluna3 = dividirLista(colunas[2], 2)

  return (
    <div
      ref={caixaRef}
      className='relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3 rounded-3xl'>
      {emCampo ? (
        <>
          <ColunaAnalisar
            Analisando={[...coluna1, ...coluna3.flat(), ...coluna2]}
            AnalisarClassName={(AnalisarIndex) =>
              cn({
                'md:hidden': AnalisarIndex >= coluna1.length + coluna3[0].length,
                'lg:hidden': AnalisarIndex >= coluna1.length,
              })
            }
            msPorPixel={10}
          />
          <ColunaAnalisar
            Analisando={[...coluna2, ...coluna3[1]]}
            className='hidden md:block'
            AnalisarClassName={(AnalisarIndex) =>
              AnalisarIndex >= coluna2.length ? 'lg:hidden' : ''
            }
            msPorPixel={15}
          />
          <ColunaAnalisar
            Analisando={coluna3.flat()}
            className='hidden md:block'
            msPorPixel={10}
          />
        </>
      ) : null}
      <div className='pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-100' />
      <div className='pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-100' />
    </div>
  )
}

export function Analises() {
  return (
    <WidthMaximo className='relative max-w-5xl'>
        
      <CelularesGrid />
      
    </WidthMaximo>
  )
}