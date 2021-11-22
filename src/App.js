import React, { useState, useEffect } from 'react'
import './App.css'
import Api from './utils/ApiBileter'

function App() {
  console.log('render')
  const loadScript = () => {
    const script = document.createElement("script")
    const link = document.createElement("link")
    script.src = "https://apit.bileter.ru/42d9de71f65cd840b11c96e24de087a5.js"
    link.href = "https://apit.bileter.ru/css/apit.css"
    link.rel = "stylesheet"
    link.type = "text/css"
    link.media = "all"
    script.async = true
    document.body.appendChild(script)
    document.body.appendChild(link)
  }


  const loadStyle = () => {
    const link = document.createElement("link")
    link.href = "https://apit.bileter.ru/css/eifmanballet.ru.css"
    link.rel = "stylesheet"
    link.media = "all"
    document.body.appendChild(link)
  }


  useEffect(() => {
    loadScript()
    loadStyle()
    Api.getData()
      .then((data) => console.log(data))
      .catch((error) => console.log(error))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <div className="bileter_afisha"></div>
        <p>jfgikowerh</p>
        <div className="bileter_afisha_performance_call" id="pl18163308"></div>
      </header>
      <span id="perf18163312" className="with_buy bileter_afisha_showhall">hgikoedrshgv</span>
    </div>
  );
}

export default App;
