import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";
import {useState} from 'react';
import {Button, Row, Col, Toast} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

import { getToken1,onMessageListener } from './firebase';
export default function App() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [notification, setNotification] = useState({title: '', body: ''});
  const [isTokenFound, setTokenFound] = useState(false);
  getToken1(setTokenFound);
  onMessageListener().then(payload => {
    setShow(true);
    setNotification({title: payload.notification.title, body: payload.notification.body})
    console.log(payload);
  }).catch(err => console.log('failed: ', err));

  return (
    <div className="App">
       <Link to="/msg" state={{notification}}> <Toast 
        onClose={() => setShow(false)} show={show} delay={3000} autohide animation style={{
          position: 'absolute',
          top: 20,
          right: 20,
        }}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded mr-2"
              alt=""
            />
          <strong className="mr-auto">{notification.title}</strong>
          <small>just now</small>
          </Toast.Header>
          <Toast.Body>{notification.body}</Toast.Body>
        </Toast>
        </Link>   
      <header className="App-header">
      <p>
          {isTokenFound && 
" Notification permission enabled 👍🏻 "
}
{!isTokenFound && 
" Need notification permission ❗️ "
}
          </p>
        <img src={logo} className="App-logo" alt="logo" />
        <Button onClick={() => setShow(true)}>Show Toast</Button>
        <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/msg" state={{notification}}>msg</Link> 
      </nav>
      </header>
    </div>
  )}