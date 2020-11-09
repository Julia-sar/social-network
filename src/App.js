import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import News from './components/News/News';
import { Route } from 'react-router-dom';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileInfo/ProfileContainer';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <div className="app-wrapper__content">
        <Route path="/profile/:userId?" component={ProfileContainer} />
        <Route path="/dialogs" component={DialogsContainer} />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/users" component={UsersContainer} />
        <Route path="/settings" component={Settings} />
      </div>
    </div>
  );
};

export default App;
