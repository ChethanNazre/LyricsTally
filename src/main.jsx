import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import WordCounter from './components/WordCounter'
import Footer from '../src/components/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center text-purple-700"> Lyrics Word Counter 🎵</h1>
      <WordCounter />
      <Footer/>
    </div>

  </React.StrictMode>,
)
