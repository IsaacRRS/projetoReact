'use client'

import { Progress } from '@/components/ui/progress'
import { useToast } from '@/components/ui/use-toast'
import { useUploadThing } from '@/lib/uploadthing'
import { cn } from '@/lib/utils'
import { Image, Loader2, MousePointerSquareDashed } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState, useTransition } from 'react'
import Dropzone, { FileRejection } from 'react-dropzone'

const Pagina = () => {

  const rota = useRouter()
  const { toast } = useToast()

  const [arrastado, setArrastado] = useState<boolean>(false)
  const [envioProgresso, setEnvioProgresso] = useState<number>(0)


  const { startUpload, isUploading } = useUploadThing('imageUploader', {
    
    onClientUploadComplete: ([data]) => {
      const configId = data.serverData.configId
      comeceTransicao(() => {
        rota.push(`/configure/design?id=${configId}`)
      })
    },

    onUploadProgress(p) {
      setEnvioProgresso(p)
    },

  })

  const onDropRejeitado = (rejectedFiles: FileRejection[]) => {
    const [file] = rejectedFiles

    setArrastado(false)

    toast({
      title: `${file.file.type} Formato não suportado.`,
      description: "Insira uma imagem em JPEG, JPG ou PNG.",
      variant: "destructive"
    })
  }

  const onDropAceito = (acceptedFiles: File[]) => {
    startUpload(acceptedFiles, { configId: undefined })

    setArrastado(false)
  }

  const [emEspera, comeceTransicao] = useTransition()

  return (
    <div
      className={cn(
        'relative h-full flex-1 my-16 w-full rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl flex justify-center flex-col items-center',
        {
          'ring-blue-900/25 bg-blue-900/10': arrastado,
        }
      )}>
      <div className='relative flex flex-1 flex-col items-center justify-center w-full'>
        <Dropzone
          onDropRejected={onDropRejeitado}
          onDropAccepted={onDropAceito}
          accept={{
            'image/png': ['.png'],
            'image/jpeg': ['.jpeg'],
            'image/jpg': ['.jpg'],
          }}
          onDragEnter={() => setArrastado(true)}
          onDragLeave={() => setArrastado(false)}>

          {({ getRootProps, getInputProps }) => (

            <div

              className='h-full w-full flex-1 flex flex-col items-center justify-center'
              {...getRootProps()}>
              <input {...getInputProps()} />
              {arrastado ? (
                <MousePointerSquareDashed className='h-6 w-6 text-zinc-500 mb-2' />
              ) : isUploading || emEspera ? (
                <Loader2 className='animate-spin h-6 w-6 text-red-900 mb-2' />
              ) : (
                <Image className='h-6 w-6 text-zinc-500 mb-2' />
              )}

              <div className='flex flex-col justify-center mb-2 text-sm text-zinc-700'>
                
                {isUploading ? (
                  
                  <div className='flex flex-col items-center'>
                    <p>Enviando..</p>
                    <Progress
                      value={envioProgresso}
                      className='mt-2 w-40 h-2 bg-gray-600'
                    />
                  </div>

                ) : emEspera ? (
                  <div className='flex flex-col items-center'>
                    <p>Espere um momento...</p>
                  </div>

                ) : arrastado ? (
                  <p>
                    <span className='font-semibold text-red-900'>Solte</span> aqui para enviar a imagem
                  </p>
                ) : (
                  <p>
                    <span className='font-semibold text-red-900'>Escolha</span> ou solte um arquivo aqui
                  </p>
                )}

              </div>

              {emEspera ? null : (
                <p className='text-xs text-zinc-500'>JPEG, JPG ou PNG</p>
              )}
              <p>------------------------------------------------------</p>
            </div>
          )}
        </Dropzone>
      </div>
    </div>
  )
}

export default Pagina