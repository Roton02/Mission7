import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner'
import Header from './Components/Header'
import Recipe from './Components/Recipe'
import Footer from './Components/Footer'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [showD ,setShowD] =useState([])
  const showDetails =(details)=>{
    // console.log(object);
    const already = showD.find(item => item.recipe_id == details.recipe_id)
    if(!already){ 
      setShowD([...showD, details])
      toast.success("Added successfully")
    }else{
      toast.warn("Already added!")
    }
  }
  const [currentCocking, setCurrentCocking]=useState([])
  const currentCock =(cockItem, id)=>{
    const removeItem = showD.filter(idx => idx.recipe_id !==id)
    setShowD(removeItem)
    setCurrentCocking([...currentCocking, cockItem])
    toast.success('Current cock this item')
  }
  // console.log(currentCocking);

  return (
    <div className='container mx-auto '>
      <Header></Header>
      <Banner></Banner>
      <Recipe currentCocking={currentCocking} currentCock={currentCock} showD={showD} showDetails={showDetails}></Recipe>
      <Footer></Footer>
      <ToastContainer />
    </div>
  )
}

export default App
