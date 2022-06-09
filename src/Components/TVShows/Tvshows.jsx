import React from 'react'
import Featured from '../Featured/Featured'
import List from '../List/List'

export default function Tvshows() {
  return (
    <div className='tvshows'>
        <Featured titleShown={'tv'}/>
        <List/>
    </div>
  )
}
