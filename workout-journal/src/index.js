import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import SignUpForm from "./SignUpForm"
import LoginForm from "./loginForm"
import reportWebVitals from './reportWebVitals';

const Container = () => {
  const [isNewUser, setIsNewUser] = useState(false)

  const swapUserState = () => {setIsNewUser(!isNewUser)}

  return (
    <div>
      <h1>React sucks the biggest ball</h1>
          {isNewUser ? <SignUpForm setIsNewUser={swapUserState} /> : <LoginForm setIsNewUser={swapUserState}/>}
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <React.StrictMode >
    <Container / >
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();