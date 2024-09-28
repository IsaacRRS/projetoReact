import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

interface CelularUtils extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string
  dark?: boolean
}

const Celular = ({ imgSrc, className, dark = false, ...utils }: CelularUtils) => {
  return (
    <div
      className={cn(
        'relative pointer-events-none z-50 overflow-hidden',
        className
      )}
      {...utils}>
      <img
        src={
          dark
            ? '/celular.jpg'
            : '/celular.jpg'
        }
        className='pointer-events-none z-50 select-none'
      />

      <div className='absolute -z-10 inset-0'>
        <img
          className='object-cover min-w-full min-h-full'
          src={imgSrc}
        />
      </div>
    </div>
  )
}

export default Celular