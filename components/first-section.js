import React from 'react'

export default function FirstSection(props) {
  return (
    <section className='section-presentation' style={{backgroundImage: `url(`+props.bg.src+`)`, }}>
        <div className='h-full flex items-end justify-start'>
            <div className="pl-4 pb-6">
                <h1 className='md:text-6xl text-2xl kanit text-white'>{props.title}</h1>
                <h2 className='md:text-2xl text-xl font-semibold  text-white'></h2>
            </div>
        </div>
    </section> 
  )
}
