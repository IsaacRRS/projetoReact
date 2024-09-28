import { db } from '@/db'
import { notFound } from 'next/navigation'
import DesignConfig from './DesignConfig'

interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}

const Pagina = async ({ searchParams }: PageProps) => {
  const { id } = searchParams

  if (!id || typeof id !== 'string') {
    return notFound()
  }

  const configuration = await db.configuration.findUnique({
    where: { id },
  })

  if (!configuration) {
    return notFound()
  }

  const { Url, width, height } = configuration

  return (
    <DesignConfig
      configId={configuration.id}
      imageDimensions={{ width, height }}
      imageUrl={Url}
    />
  )
}

export default Pagina