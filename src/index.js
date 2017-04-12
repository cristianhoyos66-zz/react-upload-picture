import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyDwDzATOy0V8OMIWf1W2abnWJW4VN6sohc",
  authDomain: "pseudogram-4d9b7.firebaseapp.com",
  databaseURL: "https://pseudogram-4d9b7.firebaseio.com",
  projectId: "pseudogram-4d9b7",
  storageBucket: "pseudogram-4d9b7.appspot.com",
  messagingSenderId: "20564914047"
};
firebase.initializeApp(config);

ReactDOM.render(
  <App/>, document.getElementById('root'));
