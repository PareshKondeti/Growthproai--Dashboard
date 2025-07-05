import React from 'react'
import Dashboard from './components/Dashboard'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <Dashboard />
      </main>
      <Footer />
    </div>
  )
}

export default App