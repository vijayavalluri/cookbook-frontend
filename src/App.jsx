import './App.css'
import recipe from './components/recipe'
import Footer from './components/footer'
import Header from './components/Header'
import { Route, Routes } from "react-router-dom";

function App() {


  return (
    <>
    
      <div className="w-full h-screen text-4xl text-blue-700 flex items-center justify-center">
      </div>
      <Header/>
      <recipe/>
      <Footer/>
    
    </>
 
  )
}

export default App;
