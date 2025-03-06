import './Modal.css';

function Modal(props) {
  return (
    <div>
      <div className="modal-backdrop">
        <div className="modal" style={{borderColor: props.isavailable ? 'orange' : 'red'}}>
            {props.children}
            <button onClick={props.myfunc1}>Close</button>
        </div>
        
      </div>
  
    </div>
  )
}
export default Modal;