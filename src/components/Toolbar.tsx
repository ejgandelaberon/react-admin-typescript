import React from 'react'

type Props = {
  pageName: string;
  children?: React.ReactNode
}

const Toolbar = (props: Props) => {
  return (
    <>
      <div className='flex items-center justify-between pb-4'>
        <span className='text-lg font-bold'>{props.pageName}</span>
        <div className='flex gap-x-2'>
          {props.children}
        </div>
      </div>
    </>
  )
}

export default Toolbar