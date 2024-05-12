import React from 'react'

const layout = ({children} : {children: React.ReactNode}) => {
  return (
    <div className='flex-center min-h-screen w-full p-5'>
      {children}
    </div>
  )
}

export default layout