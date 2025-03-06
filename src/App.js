import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Title from './components/Title';
import Modal from './components/Modal';
import EventList from './components/eventList';
import NewMovieForm from './components/NewMovieForm';

function App() {
  const [showevent, setShowevent]=useState(true);
  const [showmodal, setShowmodal]=useState(false);
  const [events, setEvents]=useState([]);
    const myfunc=(id)=>{
     setEvents(()=> {
      return events.filter((event)=>{
        return id !==event.id;
      }	)
     })
  
  
    }

    const myfunc1=()=>{
      setShowmodal(false);
    }
    const myfunc2=()=>{
      setShowmodal(true);
    }

    const addmovie=(event)=>{
      setEvents((prevEvents)=> {
        return [...prevEvents, event];
    })
    setShowmodal(false);
  
  }
 
  return (
   <div className="App">
    <Title title="React App" subtitle="Movie List"/>
    {showevent && (
     <div>
        <button onClick={()=>setShowevent(false)}> Hide </button>
      </div>
    )
    }
    {!showevent && (
     <div>
        <button onClick={()=>setShowevent(true)}> Show </button>
    </div>
    )
    }
    {showevent && <EventList events={events} myfunc={myfunc}/>}
    
    
     {showmodal && <Modal myfunc1={myfunc1}  isavailable={true}>
      <NewMovieForm  addmovie={addmovie}/>
      
      </Modal>}
      <br />
      <button onClick={myfunc2}> Add New Movies</button>

   </div>
  );
}

export default App;
