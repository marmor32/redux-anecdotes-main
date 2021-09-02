import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteAction, newAnecdote } from './reducers/anecdoteReducer'
import AnecdoteForm from './components/AnecdoteForm'


const App = () => {

    return (
      <div>
        <h2>Anecdotes</h2>
        <AnecdoteList />
        <AnecdoteForm />
      </div>
      )}
      
export default App
      
    /*  
      import React from 'react'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App */