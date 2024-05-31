import { useState } from 'react'
import bookLogo from './assets/books.png'
import Books from './components/Books'
import Login from './components/Login'

function App() {
  const [token, setToken] = useState(null)

  return (
    <>
    <div className="App">
      <header className='App-header'>
        <h2>login</h2>
        <Login />
      </header>
    </div>
      <h1><img id='logo-image' src={bookLogo}/>Library App</h1>
      <Books />
    </>
  );
}

export default App
