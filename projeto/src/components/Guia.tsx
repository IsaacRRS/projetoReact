'use client'

import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

const GUIA = [
  {
    name: '1. : Imagem',
    description: 'Escolha uma imagem',
    url: '/upload',
  },
  {
    name: '2. : Design',
    description: 'Faça as alterações necessárias',
    url: '/design',
  },
  {
    name: '3. : Revisão',
    description: 'Confirme as alterações',
    url: '/preview',
  },
]

const Guia = () => {
  const caminho = usePathname()

  return (
    <ol className='rounded-md bg-white lg:flex lg:rounded-none lg:border-l lg:border-r lg:border-gray-200'>
      {GUIA.map((step, i) => {
        const emConc = caminho.endsWith(step.url)
        const concluido = GUIA.slice(i + 1).some((step) =>
          caminho.endsWith(step.url)
        )
        const imgPath = `/gato${i + 1}.jpeg`

        return (
          <li key={step.name} className='relative overflow-hidden lg:flex-1'>
            <div>
              <span
                className={cn(
                  'absolute left-0 top-0 h-full w-1 bg-zinc-400 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full',
                  {
                    'bg-zinc-700': emConc,
                    'bg-primary': concluido,
                  }
                )}
                aria-hidden='true'
              />

              <span
                className={cn(
                  i !== 0 ? 'lg:pl-9' : '',
                  'flex items-center px-6 py-4 text-sm font-medium'
                )}>
                <span className='flex-shrink-0'>
                  <img
                    src={imgPath}
                    className={cn(
                      'flex h-20 w-20 object-contain items-center justify-center',
                      {
                        'border-none': concluido,
                        'border-zinc-700': emConc,
                      }
                    )}
                  />
                </span>

                <span className='ml-4 h-full mt-0.5 flex min-w-0 flex-col justify-center'>
                  <span
                    className={cn('text-sm font-semibold text-zinc-700', {
                      'text-primary': concluido,
                      'text-zinc-700': emConc,
                    })}>
                    {step.name}
                  </span>
                  <span className='text-sm text-zinc-500'>
                    {step.description}
                  </span>
                </span>
              </span>
              {i !== 0 ? (
                <div className='absolute inset-0 hidden w-3 lg:block'>
                  <svg
                    className='h-full w-full text-gray-300'
                    viewBox='0 0 12 82'
                    fill='none'
                    preserveAspectRatio='none'>
                    <path
                      d='M0.5 0V31L10.5 41L0.5 51V82'
                      stroke='currentcolor'
                      vectorEffect='non-scaling-stroke'
                    />
                  </svg>
                </div>
              ) : null}
            </div>
          </li>
        )
      })}
    </ol>
  )
}

export default Guia