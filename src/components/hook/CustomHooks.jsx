import React, { useEffect, useState } from 'react'
import { useFetch } from './Custom'

export const CustomHooks = () => {
    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos")
  return (
    <>
    {data && data.map((item) => {
       return <p key={item.id}>{item.title}</p>
    })}

    </>
  )
}
