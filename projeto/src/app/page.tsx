import Celular from "@/components/Celular";
import { Icones } from "@/components/Icones";
import { Analises } from "@/components/Analises";
import WidthMaximo from "@/components/WidthMaximo";
import { ArrowBigUp, Award, Brain, Check, GraduationCap, MoveRight, OctagonAlert, Shield, Star } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <div className='bg-slate-50 grainy-light'>
      <section>
        <WidthMaximo className='pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52'>
          <div className='col-span-2 px-6 lg:px-0 lg:pt-4'>
            <div className='relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start'>
              <div className='absolute w-28 left-0 -top-20 hidden lg:block'>
                <div className='absolute inset-x-0 bottom-0 bg-gradient-to-t via-slate-40/40 from-slate-50 h-28' />
                <img src='./gato2.jpeg' className='w-full rounded' />
              </div>
              <h1 className='relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl'>
                Sua {' '}
                <span className='bg-slate-900 px-2 text-white rounded'>Imagem</span>{' '}
                na capinha de seu celular
              </h1>
              <p className='mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap'>
                comentários
                <span className='font-semibold'> ------ </span> comentários
              </p>

              <ul className='mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start'>
                <div className='space-y-2'>
                  <li className='flex gap-1.5 items-center text-left'>
                    <Award className='h-5 w-5 shrink-0 text-green-600' />
                    Fato 1
                  </li>
                  <li className='flex gap-1.5 items-center text-left'>
                    <Shield className='h-5 w-5 shrink-0 text-green-600' />
                    Fato 2
                  </li>
                  <li className='flex gap-1.5 items-center text-left'>
                    <Brain className='h-5 w-5 shrink-0 text-green-600' />
                    Fato 3
                  </li>
                </div>
              </ul>

              <div className='mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5'>
                <div className='flex -space-x-4'>
                  <img
                    className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100' src='./pessoa1.png'
                  />
                  <img
                    className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100' src='./pessoa2.png'
                  />
                  <img
                    className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100' src='./pessoa3.png'
                  />
                  <img
                    className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100' src='./pessoa4.png'
                  />
                  <img
                    className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100' src='./pessoa5.png'
                  />
                  <img
                    className='inline-block h-10 w-10 rounded-full ring-2 ring-slate-100' src='./gatopreto.jpg'
                  />
                </div>

                <div className='flex flex-col justify-between items-center sm:items-start'>
                  <div className='flex gap-0.5'>
                  <Star className="h5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h5 w-5 text-yellow-500 fill-yellow-500" />
                  <Star className="h5 w-5 text-yellow-500 fill-yellow-500" />
                </div>
                <p><span className="font-semibold">4.399</span> compradores </p>
              </div>
             </div>
            </div>
          </div>
          <div className='col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit'>
            <div className='relative md:max-w-xl'>
              
              <Celular className='w-64' imgSrc='./gato.png' />
            </div>
          </div>
        </WidthMaximo>
      </section>
      <section className="bg-slate-200 py-24">
        <WidthMaximo className="flex items-center flex-col gap-16 sm:gap-32">
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
            <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">O que os <span className="relative px-2">clientes</span> falam</h2>
            <img src='./gato.png' className="w-24 order-0 lg:order-2"/>
          </div>

          <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="text-lg leading-8">
                <p>
                ................ ................ ................ ................................ 
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <img className="rounded-full h-12 w-12 object-cover" src="pessoa4.png"/>
                <div className="flex flex-col">
                  <p className="font-semibold">Antônio Flemin</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-green-600" />
                    <p className="text-sm"> Compra verificada </p>
                  </div>
              <div className="flex gap-0.5 mb-2">
                <Star className="h5 w-5 text-yellow-500 fill-yellow-500" />
                <Star className="h5 w-5 text-yellow-500 fill-yellow-500" />
                <Star className="h5 w-5 text-yellow-500 fill-yellow-500" />
                <Star className="h5 w-5 text-yellow-500 fill-yellow-500" />
                <Star className="h5 w-5 text-yellow-500 fill-yellow-500" />
              </div>
                </div>
              </div>
            </div>
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="text-lg leading-8">
                <p>
                  .....................................
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <img className="rounded-full h-12 w-12 object-cover" src="pessoa3.png"/>
                <div className="flex flex-col">
                  <p className="font-semibold">Abiol</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <OctagonAlert className="h-4 w-4 stroke-[3px] text-red-600" />
                    <p className="text-sm"> ?? </p>
                  </div>
                  <div className="flex gap-0.5 mb-2">
                <Star className="h5 w-5 text-yellow-500 fill-yellow-500" />
                <Star className="h5 w-5 text-yellow-500 fill-yellow-500" />
                <Star className="h5 w-5 text-yellow-500 fill-yellow-500" />
              </div>  
                </div>
              </div>
            </div>
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="text-lg leading-8">
                <p>
                .................................................... .................................................... .................................................... ....................................................  🙂‍↔️
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <img className="rounded-full h-12 w-12 object-cover" src="pessoa2.png"/>
                <div className="flex flex-col">
                  <p className="font-semibold">Rodholfo</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-green-600" />
                    <p className="text-sm"> Compra verificada </p>
                  </div>
                  <div className="flex gap-0.5 mb-2">
                <Star className="h5 w-5 text-yellow-500 fill-yellow-500" />
                <Star className="h5 w-5 text-yellow-500 fill-yellow-500" />
                <Star className="h5 w-5 text-yellow-500 fill-yellow-500" />
                <Star className="h5 w-5 text-yellow-500 fill-yellow-500" />
                <Star className="h5 w-5 text-yellow-500 fill-yellow-500" />
              </div>  
                </div>
              </div>
            </div>
            <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
              <div className="text-lg leading-8">
                <p>
                .................................................... .................................................... .................................................... .................................................... .................................................... 
                </p>
              </div>
              <div className="flex gap-4 mt-2">
                <img className="rounded-full h-12 w-12 object-cover" src="pessoa1.png"/>
                <div className="flex flex-col">
                  <p className="font-semibold">Toji</p>
                  <div className="flex gap-1.5 items-center text-zinc-600">
                    <GraduationCap className="h-4 w-4 stroke-[3px] text-orange-600" />
                    <p className="text-sm"> ?? </p>
                  </div>
                  <div className="flex gap-0.5 mb-2">
                <Star className="h5 w-5 text-yellow-500 fill-yellow-500" />
                <Star className="h5 w-5 text-yellow-500 fill-yellow-500" />
                <Star className="h5 w-5 text-yellow-500 fill-yellow-500" />
                <Star className="h5 w-5 text-yellow-500 fill-yellow-500" />
                <Star className="h5 w-5 text-yellow-500 fill-yellow-500" />
              </div>  
                </div>
              </div>
            </div>
          </div>
        </WidthMaximo>
        <div className="pt-16">
          <Analises />
        </div>
      </section>
      <section>
        <WidthMaximo className="py-24">
          <div className="mb-12 px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">Mande sua <span className="relative px-2">IMAGEM <Icones.underline className='hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-red-900' /></span> aqui</h2>
            </div>
          </div>
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="relative flex flex-col items-center md:grid grid-cols-2 gap-40">
              <MoveRight className="text-xl absolute top-[25rem] md:top-1/2 -translate-y-1/2 z-10 left-1/2 -translate-x-1/2 rotate-90 md:rotate-0"></MoveRight>
              <div className="relative h-80 md:h-full w-full md:justify-self-end max-w-sm rounded-xl bg-gray-900 ring-inset ring-gray-900 lg:rounded-2xl">
                <img className="shadow-2xl ring-2 ring-red-900 h-full w-full object-cover bg-white rounded-lg" src="./gatopreto.jpg" />
              </div>
              <Celular className="w-60" imgSrc="./gatopreto.jpg" />
            </div>
          </div>
          <ul className="mx-auto mt-12 max-w-prose sm:text-lg space-y-2 w-fit">
            <li className="w-fit">
              <Check className="h-5 w-5 text-green-700 inline mr-1.5"></Check>
              Qualidade 1
            </li>
            <li className="w-fit">
              <Check className="h-5 w-5 text-green-700 inline mr-1.5"></Check>
              Qualidade 2
            </li>
            <li className="w-fit">
              <Check className="h-5 w-5 text-green-700 inline mr-1.5"></Check>
              Qualidade 3
            </li>
            <div className="flex justify-center">
              <Link className={buttonVariants({

                size: 'lg',
                className: 'mx-auto mt-8'
              })} href='/config/upload'>Crie aqui 
              <ArrowBigUp className="relative left-3 h-4 w-4 ml-1.6"></ArrowBigUp>

              </Link>
            </div>
          </ul>
        </WidthMaximo>
      </section>
    </div>
  );
}
