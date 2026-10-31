import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Keyboard from './components/Keyboard'
import TextArea from './components/TextArea'
import Header from './components/Header'

function App() {
  const [inputText,setInputText]=useState("");

  return (
    <>
      <Header/>
      <TextArea inputText={inputText} setInputText={setInputText} />
      <Keyboard inputText={inputText} setInputText={setInputText} />
    </>
  )
}

export default App
