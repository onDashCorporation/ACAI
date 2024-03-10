import './App.css'
import '@radix-ui/themes/styles.css';
import {theme } from "@radix-ui/themes"

// 2 - reproveitamento de estrutura 
// ja que os caminhos vão ser todos renderizados apartir de outelet
import { Outlet } from 'react-router-dom'

function App() {


  return (
    <div className='App'>
      <theme>
      <Outlet/>
      </theme>
    </div>
  )
}

export default App
