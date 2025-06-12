import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Head from './content/Head'
import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom'
import Home from './pages/Home'
import Top50 from './pages/search'
import Popular from './pages/popular'
import Support from './pages/support'

function App() {
  return (
    <Router>
      <div>
        <Head></Head>
         <Routes>
        <Route path='/' element={<Home />} />
       
        <Route path='/popular' element={<Popular />} />
        <Route path='/support' element={<Support />} />
      </Routes>
          
      </div>
    </Router>
  )
}

export default App;
