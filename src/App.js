import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteAction } from './reducers/anecdoteReducer'
import { useState } from 'react'


const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

const [debug, setDebug] = useState('debug')


  const vote = (id) => {
    console.log('vote', id)
    dispatch(voteAction(id))
    logger(voteAction(id))
  }
  
  const logger = (err) => {
    setDebug(debug + err)
  }

  return (
    <div>
      <h2>Anecdotes {debug}</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form>
        <div><input /></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default App

