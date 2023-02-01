import './App.css';
import React from 'react';
import List from './components/list';
import Auth from './components/auth/auth';
import Qr from './components/qr';
import Rating from './components/ratingChanged';
import Slider from './components/slider';
import Sliderr from './components/sliderrr';
import Request from './components/request';
import Postrequest from './components/postrequest';
import Bored from './components/bored/bored';

const App = () => {
  return (
    <div className="App">
      {/* <List />
      <Auth/>
      <Qr/>
      <Rating/>
      <Slider/>
      <Sliderr/> */}
      {/* <Request/> */}
      {/* <Postrequest/> */}
      <Bored/>
    </div>
  );
}

export default App;
