import { useState } from 'react'
import { useDecklistStore } from '../../store/deckliststore';

export function StartLogin() {
  const [email, setEmail] = useState("");
  const { startLogin } = useDecklistStore();

  return (
    <>
      <h1>decklist.lol</h1>
      <p>Log in to create an event and gather decklists electronically for your MTG Tournmament today!</p>
        <div className="card">
          <input type="email" placeholder='Email Address' value={email} onChange={e => setEmail(e.target.value)}/>
          <button onClick={() => startLogin(email)}> 
            Log in
          </button>
      </div>
      <p className="read-the-docs">
        Provided free of charge and with no warranty.
      </p>
    </>
  )
}

export function ContinueLogin() {
  const [ code, setCode ] = useState("");
  const { pendingLoginEmail, continueLogin } = useDecklistStore();
  
  return (
    <>
      <h1>decklist.lol</h1>
      <p>Enter the code we've sent to {pendingLoginEmail}</p>
        <div className="card">
          <input type="text" value={code} onChange={e => setCode(e.target.value)}/>
          <button onClick={() => continueLogin(pendingLoginEmail!, code)}> 
            Log in
          </button>
      </div>
      <p className="read-the-docs">
        Provided free of charge and with no warranty.
      </p>
    </>
  )
}
