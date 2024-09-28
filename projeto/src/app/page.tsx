import WidthMaximo from "@/components/WidthMaximo";
import { ArrowBigUp, Award, Brain, Check, GraduationCap, MoveRight, OctagonAlert, Shield, Star } from "lucide-react";
import Link from "next/link";

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
