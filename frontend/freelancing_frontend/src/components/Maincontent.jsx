import React from 'react'
import Header from './Header'
import Searchtool from './Searchtool'
import Hotpicks from './Hotpicks'

export default function Maincontent() {
  return (
    <div className = "mainContent" >
      <Header></Header>
      <Searchtool></Searchtool>
      <Hotpicks></Hotpicks>


    </div>
  )  
}
