import { Icons } from '@/components/icons'
import React from 'react'

export const TechSection = () => {
  return (
    <section className="mt-12">
      <h1 className="text-3xl font-bold mb-6">Tech Stack</h1>
      <div className='grid grid-cols-autofill'>
        <Icons.html className="w-14 h-14 p-2 hover:scale-110" />
        <Icons.css className="w-14 h-14 p-2 hover:scale-110" />
        <Icons.js className="w-14 h-14 p-2 hover:scale-110" />
        <Icons.react className="w-14 h-14 p-2 hover:scale-110" />
        <Icons.next className="w-14 h-14 p-2 hover:scale-110" />
        <Icons.node className="w-14 h-14 p-2 hover:scale-110" />
        <Icons.graphql className="w-14 h-14 p-2 hover:scale-110" />
        <Icons.scss className="w-14 h-14 p-2 hover:scale-110" />
        <Icons.redux className="w-14 h-14 p-2 hover:scale-110" />
        <Icons.mongodb className="w-14 h-14 p-2 hover:scale-110" />
      </div>
    </section>
  )
}
