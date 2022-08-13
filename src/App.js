import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import { useState } from 'react';
import List from './components/List';
import './style.css'
function App() {

  const [contacts, setContacts] = useState([0])

  console.log(contacts)
  return (


    <div  id='container'>
     <List  contacts={contacts} />
    <Form addContact={setContacts} contacts={contacts} />
    
    </div>
  );
}

export default App;
