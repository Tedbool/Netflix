import React from 'react'
import Featured from '../Featured/Featured'
import List from '../List/List'

export default function Movies() {
  return (
    <div className='movies'>
        <Featured titleShown={'movie'}/>
        <List/>
    </div>
  )
}
