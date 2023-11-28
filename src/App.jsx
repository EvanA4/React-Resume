import { useState } from 'react'

import Opening from './components/Opening';
import World from './components/World';
import Header from './components/Header';
import Content from './components/Content';
import Projects from './components/Projects';

import './App.css'

function App() {
  const [isDefault, setDefault] = useState(0);
  const defaultStates = ['opening', 'toShow', 'toHide'];

  function toFromDefault() {
    if (isDefault !== 2) {
      setDefault(2);
      return;
    }
    setDefault(1);
  }

  return (
    <>
      <div className='main'>
        <Header toFromDefault={toFromDefault} isDefault={isDefault} />
        <World />
        <div className='default' id={defaultStates[isDefault]}>
          <Content />
        </div>
        <div className='projects' id={isDefault === 2 ? 'toShow' : 'toHide'}>
          <Projects />
        </div>
      </div>
      <Opening />
    </>
  )
}

export default App
