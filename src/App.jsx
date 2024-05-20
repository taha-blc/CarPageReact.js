import React, { useEffect, useState } from 'react'
import Background from './Components/Background/Background'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'


const App = () => {
  let herodata = [
    { text1: 'Dive into', text2: 'What you love' },
    { text1: 'Indulge', text2: 'Your passions' },
    { text1: 'give in to', text2: 'Your passions' },
  ]
  useEffect(() => {
    setInterval(() => {
      setHeroCount((count) => { return count === 2 ? 0 : count + 1 })
    }, 3000)
  }, [])

  const [heroCount, setHeroCount] = useState(0)
  const [playStatus, setPlayStatus] = useState(false)
  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero setPlayStatus={setPlayStatus} heroData={herodata[heroCount]} heroCount={heroCount} setHeroCount={setHeroCount} playStatus={playStatus} />
    </div>
  )
}

export default App