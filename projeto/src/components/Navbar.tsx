import Link from 'next/link'
import WidthMaximo from './WidthMaximo'
import { buttonVariants } from './ui/button'
import { ArrowRight, Clipboard, LogOut } from 'lucide-react'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'

const Navbar = async () => {
  const { getUser } = getKindeServerSession()
  const user = await getUser()

  const isAdmin = user?.email === process.env.ADMIN_EMAIL

  return (
    <nav className='sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
      <WidthMaximo>
        <div className='flex h-14 items-center justify-between border-b border-zinc-200'>
          <Link href='/' className='flex z-40 font-semibold'>
            nome <span className='relative left-1 bg-red-900 px-1 text-white rounded'>SITE</span>
          </Link>

          <div className='h-full flex text-red-900 items-center space-x-4'>
            {user ? (
              <>
                <Link
                  href='/api/auth/sair'
                  className={buttonVariants({
                    size: 'sm',
                    variant: 'ghost',
                  })}>
                  <LogOut></LogOut> Sair
                </Link>
                {isAdmin ? (
                  <Link
                    href='/dashboard'
                    className={buttonVariants({
                      size: 'sm',
                      variant: 'ghost',
                    })}>
                    <Clipboard></Clipboard>Dashboard 
                  </Link>
                ) : null}
                <Link
                  href='/config/upload'
                  className={buttonVariants({
                    size: 'sm',
                    className: 'hidden sm:flex items-center gap-1',
                  })}>
                  Criar
                  <ArrowRight className='ml-1.5 h-5 w-7' />
                </Link>
              </>
            ) : (
              <>
                <Link
                  href='/api/auth/login'
                  className={buttonVariants({
                    size: 'sm',
                    variant: 'ghost',
                  })}>
                  Entrar
                </Link>
                <Link
                  href='/api/auth/registro'
                  className={buttonVariants({
                    size: 'sm',
                    variant: 'ghost',
                  })}>
                  Registrar-se
                </Link>

                <div className='h-8 w-px bg-zinc-200 hidden sm:block' />

                <Link
                  href='/configure/upload'
                  className={buttonVariants({
                    size: 'sm',
                    className: 'hidden sm:flex items-center gap-1',
                  })}>
                  Criar
                  <ArrowRight className='ml-1.5 h-5 w-5' />
                </Link>
              </>
            )}
          </div>
        </div>
      </WidthMaximo>
    </nav>
  )
}

export default Navbar