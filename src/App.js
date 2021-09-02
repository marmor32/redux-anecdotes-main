import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteAction, newAnecdote } from './reducers/anecdoteReducer'
import AnecdoteForm from './components/AnecdoteForm'


const App = () => {
    const anecdotes = useSelector(state => state)
    const dispatch = useDispatch()
    const votes = anecdotes.map(a => a.votes)


    const vote = (id) => {
      dispatch(voteAction(id))
    }

    const newEntry = (event) => {
      event.preventDefault()
      const content = event.target.entry.value
      event.target.entry.value = ''
      dispatch(newAnecdote(content))
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