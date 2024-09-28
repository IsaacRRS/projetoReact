import Link from 'next/link'
import WidthMaximo from './WidthMaximo'

const Rodape = () => {
  return (
    <footer className='bg-white h-20 relative'>
      <WidthMaximo>
        <div className='border-t border-gray-300' />

        <div className='h-full flex flex-col md:flex-row md:justify-between justify-center items-center'>
          <div className='text-center md:text-left pb-2 md:pb-0'>
            <p className='text-sm text-muted-foreground'>
              &copy; {new Date().getFullYear()} Todos os direitos reservados
            </p>
          </div>

          <div className='flex items-center justify-center'>
            <div className='flex space-x-8'>
              <Link
                href='#'
                className='text-s text-muted-foreground hover:text-red-900'>
                Termos
              </Link>
              <Link
                href='#'
                className='text-s text-muted-foreground hover:text-red-900'>
                Política de Cookies
              </Link>
              <Link
                href='#'
                className='text-s text-muted-foreground hover:text-red-900'>
                Política de Privacidade
              </Link>
            </div>
          </div>
        </div>
      </WidthMaximo>
    </footer>
  )
}

export default Rodape