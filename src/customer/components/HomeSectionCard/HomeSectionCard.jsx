import React from 'react'

function HomeSectionCard() {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3'>
        <div className='h-[13rem] w-[10rem]'>
            <img className='object-cover object-top w-full h-full'/>
            <div className='p-4'>
                <h3 className='text-lg font-medium text-gray-900'>NoFilter</h3>
                <p className='mt-2 text-sm text-gray-500'>Men Solid Pure Cotton Straight Kurta</p>
            </div>
        </div>
    </div>
  )
}

export default HomeSectionCard