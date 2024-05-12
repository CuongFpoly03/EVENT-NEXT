import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='border-t'>
      <div className='flex-center wrapper flex flex-col gap-4 p-5  flex-between sm:flex-row'>
        <Link href='/' className='pl-[10%]'>
          <Image src="/icons/logo.svg" alt="logo" width={128} height={38}/>
        </Link>
        <p className='text-base pr-[10%]'>Copyright © 2022 - I am <strong>Cuong new</strong> !</p>
      </div>
    </footer>
  )
}

export default Footer