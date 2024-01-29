// eslint-disable-next-line no-unused-vars
import React from 'react'

export const QueryCard = (props) => {
  return (
    <div className='p-3 rounded-xl bg-slate-600 text-white'>
          <p>Name : { props.name}</p>      
          <p>Email : { props.email}</p>      
          <p>Query : { props.query}</p>      
    </div>
  )
}
