import Header from './Header'
import Searchtool from './Searchtool'
import Hotpicks from './Hotpicks'
import { useState } from 'react'
import HeroSection from './HeroSection'
import Form_phase1 from './Form_phase1'
import Form_phase2 from './Form_phase2'
import Form_phase3 from './Form_phase3'
import "./Form_phases.css"

export default function Maincontent() {
  const[active,setActive] = useState(0);
  
  const [hireOrFreeLance,setHireOrFreeLance] = useState(true)

  const [phase,setPhase] = useState(1);

  let content = <div> <Searchtool></Searchtool> <Hotpicks></Hotpicks></div>

  const [formsData,setFormsData] = useState(
       { 
        Name: "",
        Email_id : "",
        Contact_Number: "",
        profile_image : "",
        expertise : "",
        proff_background : "",
        charges : "",
        personal_works: ""
       }
    );

      function changeHandler(e){

        setFormsData(
           { ...formsData,
            [e.target.name]: e.target.value
            
           }
        );
    }

  if(phase == 1){
    content = <div> <HeroSection></HeroSection> <Form_phase1 changeHandler = {changeHandler} formsData = {formsData} setFormsData = {setFormsData} phase = {phase} setPhase = {setPhase}></Form_phase1></div>;
  }
  else if(phase == 2){
    content = <div><Form_phase2 changeHandler = {changeHandler} formsData = {formsData} setFormsData = {setFormsData} phase = {phase} setPhase = {setPhase}></Form_phase2></div>;
  }
  else if(phase == 3){
    content = <div><Form_phase3 active = {active} setActive = {setActive} changeHandler = {changeHandler} formsData = {formsData} setFormsData = {setFormsData} phase = {phase} setPhase = {setPhase}></Form_phase3></div>
  }
  
  return (
    <div  className = "mainContent" >
      <Header 
      active = {active} 
      setActive = {setActive} 
      hireOrFreeLance={hireOrFreeLance} 
      setHireOrFreeLance = {setHireOrFreeLance} 
      phase = {phase} setPhase = {setPhase}/>

      {hireOrFreeLance ? 
      <div> <Searchtool/> <Hotpicks/> </div>
      :  content
      }
    </div>
  )  

}