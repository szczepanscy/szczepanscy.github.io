import reactLogo from './assets/react.svg'
import './App.css'
import CardSplitHovers from './Card/Card'

function App() {
  return (
    <>
      <div>
        <a href="https://szczepanscy.github.io" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Planszówki które już mamy</h1>
      <CardSplitHovers />
    </>
  )
}

export default App
