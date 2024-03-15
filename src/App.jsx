import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner'
import Header from './Components/Header'
import Recipe from './Components/Recipe'

function App() {
  const [showD ,setShowD] =useState([])
  const showDetails =(details)=>{
    
  //  const alreadyExist = showD.find(d => d.id !== details.id)
  //  if(alreadyExist){
     setShowD([...showD, details])
  //  }
  }
  // console.log(showD);

  return (
    <div className='container mx-auto '>
      <Header></Header>
      <Banner></Banner>
      <Recipe showD={showD} showDetails={showDetails}></Recipe>
    </div>
  )
}

export default App
