import { useState } from "react"
import StartGame from "./Components/StartGame"
import GamePlay from "./Components/GamePlay"



function App() {

  const [isGameStarted, setIGameStarted] = useState(false)

  const toggleGamePlay = () => {
    setIGameStarted((prev) => !prev)
  }


  return (
    <>
      {isGameStarted ? <GamePlay /> : <StartGame
        toggle={toggleGamePlay}
      />}
    </>
  )
}

export default App


