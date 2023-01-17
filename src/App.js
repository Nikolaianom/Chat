import React, {useState} from "react";
import Left from "./components/Left/Left"
import Modal from "./components/Modal/Modal";
import Right from "./components/Right/Right";


const time = `${new Date().getHours()}:${new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes()}`
function App() {
  const [value, setValue] = useState('')
  const [message, setMessage] = useState([])

  const handleOnChangeMsg = (e) => {
    setValue(e.target.value)
  }
  const addMsg = (e) => {
    e.preventDefault()
    if(value !== '') {
      
      const newMsg = {
        id: Math.random().toString(36).substring(2, 9),
        value,
        time
      }
    setMessage([...message, newMsg])
    setValue('')
    console.log(value);

  }}

  return (
    <div className="App">
      <Modal />
        <div className="container">
          <div className="app__wrapper">
            <Left 
            time={time}
             addMsg={addMsg}
             handleOnChangeMsg={handleOnChangeMsg}
             message={message}
             setMessage={setMessage}
             value={value}
             setValue={setValue}
             />
            <Right
            message={message}
             time={time}
            ></Right>
          </div>
        </div>
    </div>
  );
}

export default App;
