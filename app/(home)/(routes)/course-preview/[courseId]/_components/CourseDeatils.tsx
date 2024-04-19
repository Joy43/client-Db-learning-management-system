import React from 'react'

function CourseDeatils({courseDeatil}) {
    console.log(courseDeatil)
  return (
    <div className='mt-4 p-5 rounded-xl'>
     <h1 className=' text-lg font-medium'>{courseDeatil.name}</h1> 
    </div>
  )
}

export default CourseDeatils
