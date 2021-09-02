import React from 'react'
import { useDispatch } from 'react-redux'
import { newAnecdote } from './../reducers/anecdoteReducer'

const AnecdoteForm = () => {
  
    const dispatch = useDispatch()

  
  const newEntry = (event) => {
    event.preventDefault()
    const content = event.target.entry.value
    event.target.entry.value = ''
    dispatch(newAnecdote(content))
  }
  
  
  
  
  return (
    <div>
       <h2>create new</h2>
      <form onSubmit={newEntry}>
        <div><input name="entry"/></div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm