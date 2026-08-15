import { useState, useEffect } from 'react'
import backgroundImage from './assets/DM_scroll_background.jpeg'
import './App.css'

// might be 8 pages
import { FirstPage } from './pages/FirstPage'
import { SecondPage } from './pages/SecondPage'
import { ThirdPage } from './pages/ThirdPage'
import {FourthPage} from './pages/FourthPage'
import {FifthPage} from './pages/FifthPage'
import {SixthPage} from './pages/SixthPage'
import {SeventhPage} from './pages/SeventhPage'
import {EighthPage} from './pages/EighthPage'
import {NinethPage} from './pages/NinethPage'
import {TenthPage} from './pages/TenthPage'
import {EleventhPage} from './pages/EleventhPage'
import {TwenthPage} from './pages/TwenthPage'
import {ThirteenthPage} from './pages/ThirteenthPage'

// 1900 by 1200 deminsions
function App() {
  const [currentPage, setCurrentPage] = useState(0);

  const webPages = [
    <FirstPage/>,
    <SecondPage/>,
    <ThirdPage/>,
    <FourthPage/>,
    <FifthPage/>,
    <SixthPage/>,
    <SeventhPage/>,
    <EighthPage/>,
    <NinethPage/>,
    <TenthPage/>,
    <EleventhPage/>,
    <TwenthPage/>,
    <ThirteenthPage/>
  ]

  const numOfPages = 3;

  console.log("the currentPage: ", currentPage)

  const goToPrevPage = () => {
    
    return setCurrentPage(prev =>{
      let updatePage;
      if(prev === 0){
        updatePage = webPages.length - 1
      }else{
        updatePage = prev - 1
      }
      return updatePage
    } 
  )
  }

  const goToNextPage = () => {
    return setCurrentPage(next => {
      let updatePage;
      if(next === webPages.length - 1){
        updatePage = 0
      }else{
        updatePage = next + 1
      }
      return updatePage
      }  
    )
  }

  // Keyboard handler - GLOBAL
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowLeft') {
        goToPrevPage()  // ← Reuses the same function
      } else if (e.key === 'ArrowRight') {
        goToNextPage()  // ← Reuses the same function
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, []) 

  return (
    <section>
      <div>
        {webPages[currentPage]}
      </div>
        <p onKeyDown={goToPrevPage}> left </p>
        <p onKeyDown={goToNextPage}> right</p>
    </section>
  )
}

export default App
