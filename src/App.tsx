import { useState } from 'react'
import Navbar from './components/navigation/Navbar'
import PageLoader from './components/ui/PageLoader'
import Hero from './sections/hero/Hero'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      {isLoading && (
        <PageLoader onComplete={() => setIsLoading(false)} />
      )}

      <main>
        <Navbar />
        <Hero />
      </main>
    </>
  )
}

export default App