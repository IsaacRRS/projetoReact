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
    
