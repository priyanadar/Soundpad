import React from 'react';
import './App.css';

import  Box from './Box';

import track1 from'./tracks/1.wav';
import track2 from'./tracks/2.wav';
import track3 from'./tracks/3.wav';
import track4 from'./tracks/4.wav';
import track5 from'./tracks/5.wav';
import track6 from'./tracks/6.wav';
import track7 from'./tracks/7.mp3';
import track8 from'./tracks/8.wav';
import track9 from'./tracks/9.wav';
import track10 from'./tracks/10.wav';
import track11 from'./tracks/11.mp3';
import track12 from'./tracks/12.wav';
import track13 from'./tracks/13.wav';
import track14 from'./tracks/14.wav';
import track15 from'./tracks/15.aiff';
import track16 from'./tracks/16.wav';



const tracks=[
  {path:track1, name:'A'},
  {path:track2, name:'B'},
  {path:track3, name:'C'},
  {path:track4, name:'D'},
  {path:track5, name:'E'},
  {path:track6, name:'F'},
  {path:track7, name:'J'},
  {path:track8, name:'H'},
  {path:track9, name:'I'},
  {path:track10, name:'J'},
  {path:track11, name:'K'},
  {path:track12, name:'L'},
  {path:track13, name:'M'},
  {path:track14, name:'N'},
  {path:track15, name:'O'},
  {path:track16, name:'P'},
]


function App() {
  return (
    
    <div className="App">
     <center style={{color:'darkblue',fontSize:'40px'}}> SOUNDPAD</center>
      {
       tracks.map(track=>{
         return<Box track={track}/>
       })
      }
    </div>
  );
}

export default App;
