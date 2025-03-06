import React from 'react'
import './NewMovieForm.css'
import { useState } from 'react';
export default function NewMovieForm(props) {
    const [ title, setTitle] =useState('');
    const [ date, setDate] =useState('');
    const [ genre,setGenre] =useState('Comedy');
    const handlechangename= (e) => {
        setTitle(e.target.value);
    }
    const handlechangedate= (e) => {
        setDate(e.target.value);
    }

     const resetfunc= (e) => {
        setTitle('');
        setDate('');
        setGenre('');
     }
      const mygfunc= (e) => {
        e.preventDefault();
        
        const event = {
            title: title,
            date: date,
            genre: genre,
            id:Math.random()*1000};
        props.addmovie(event)
        resetfunc();
      }

   const setgenre = (e) => {
    return  setGenre(e.target.value) 
}



  return (
    <form className='new-movie-form' onSubmit={mygfunc}>
        <label>
            <span>Movie Title: </span>
            <input type="text"  onChange={handlechangename} value={title}/>
        </label>
        <label>
            <span>Date: </span>
            <input type="date" onChange={handlechangedate} value={date} />
        </label>
          <label>
            <span>Genre: </span>
             <select onChange={setgenre} value={genre}>
                <option value="Action">Action</option>
                <option value="Comedy">Comedy</option>
                <option value="Drama">Drama</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Horror">Horror</option>
                <option value="Mystery">Mystery</option>
                <option value="Thriller">Thriller</option>
 
             </select>
          </label>
         
           


        <button> submit</button>
       
        
      
    </form>
  )
}
