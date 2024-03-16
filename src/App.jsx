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
  const [currentCocking, setCurrentCocking]=useState([])
  const currentCock =(cockItem, id)=>{
    const removeItem = showD.filter(idx => idx.recipe_id !==id)
    setShowD(removeItem)
    setCurrentCocking([...currentCocking, cockItem])
  }
  // console.log(currentCocking);

  return (
    <div className='container mx-auto '>
      <Header></Header>
      <Banner></Banner>
      <Recipe currentCocking={currentCocking} currentCock={currentCock} showD={showD} showDetails={showDetails}></Recipe>
    </div>
  )
}

export default App
