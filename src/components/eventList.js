import React from 'react'
import styles from './eventList.module.css';

export default function EventList(props) {
  return (
    <div >
      {props.events.map((event,index)=>
      (
        <div key={event.id} className={styles.card}>
          <h2 >{index+1}-{event.title}</h2>
          <p> {event.genre}- {event.date}</p>
          <button onClick={()=> props.myfunc(event.id)}>Delete 👨</button>
        </div>
      )
    )}


    </div>
  )
}
