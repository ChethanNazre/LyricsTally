import React from 'react';
import WordCounter from './components/WordCounter';
import './styles/App.css';
import Footer from '../src/components/Footer.jsx'

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 bg-gray-50">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-xl">
        <h1 className="text-xl font-bold text-center text-purple-700 mb-2">
          Lyrics Word Counter🎵
        </h1>
        <WordCounter />
        <Footer/>
      </div>
    </div>
  );
}

export default App;
