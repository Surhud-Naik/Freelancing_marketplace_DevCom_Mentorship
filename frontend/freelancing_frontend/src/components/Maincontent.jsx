import Header from './Header'
import Searchtool from './Searchtool'
import Hotpicks from './Hotpicks'

export default function Maincontent({username}) {
  return (
    <div className = "mainContent" >
      <Header username={username}></Header>
      <Searchtool></Searchtool>
      <Hotpicks></Hotpicks>
    </div>
  )  
}
