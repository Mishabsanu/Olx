import React,{ useEffect, useContext} from 'react';
import { AuthContext, FirebaseContext } from './Store/Context';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Create from './Pages/Create'
import ViewPost  from './Pages/ViewPost'
import './App.css';
import Post from './Store/PostContext'

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';

function App() {
  const { setUser } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext)
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user)
    })
  });
  return (
    <div>
    <Post>
      <Router>
        <Route exact path='/' >

        <Home />
        </Route>
        <Route path='/Signup' >
        <Signup />
        </Route>
        <Route path='/Login' >
        <Login/>
        </Route>
        <Route path='/Create' >
          <Create/>
        </Route>
        <Route path='/View' >
          <ViewPost/>
        </Route>
        

      </Router>

    </Post>
    </div>
  );
}

export default App;
