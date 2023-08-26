import './App.css'
import SingleCard from './components/Card/SingleCard/SingleCard'

function App() {

  return (
    
     <div> 
      {/* <div className='overlay w-full h-[100vh] bg-[rgb(0,0,0,0.5)] fixed top-0 z-10 transition-2s opacity-0'></div>
     <div className='loginForm w-[500px] bg-red-300 h-[400px] absolute left-96 -top-96 z-20 shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] transition-all duration-200'>
      <span className='absolute top-1 right-2 text-white bg-blue-700 px-2 py-1 cursor-pointer'>&times;</span>

     </div> */}
<div className="scrollMenu overflow-hidden px-2 py-2">
  
  <div className='overflow-x-auto'>
  <div className="longCard"><SingleCard/></div>
  <div className="longCard"> <SingleCard/></div>
  <div className="longCard"> <SingleCard/></div>
  <div className="longCard"> <SingleCard/></div>
  <div className="longCard"> <SingleCard/></div>
  <div className="longCard"> <SingleCard/></div>
  <div className="longCard"> <SingleCard/></div>  
   <div className="longCard"> <SingleCard/></div>
  <div className="longCard"> <SingleCard/></div>
  <div className="longCard"> <SingleCard/></div>
  <div className="longCard"> <SingleCard/></div>
  <div className="longCard"> <SingleCard/></div>
  <div className="longCard"> <SingleCard/></div>  </div>
  
</div>
</div>
   
  )
}

export default App;


