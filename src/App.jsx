import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import  Settings  from './pages/Settings';
import Layout from './components/Layout';
import { ProfileProvider } from './context/ProfileContext';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Layout>
    </Router>
    </>
  )
}

export default App
