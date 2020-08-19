import React from 'react';
import logo from './logo.svg';
import './App.css';

import DemoHeader from './components/DemoHeader';



import Demo from './components/Demo';
import BaiTapLayout1 from './components/BaiTapLayout1/BaiTapLayout1';
import BaiTapLayout2 from './components/BaiTapLayout2/BaiTapLayout2';
import DataBinding from './DataBinding/DataBinding';
import HandleEvent from './HandleEvent/HandleEvent';

function App() {
  return (
    <div className="App">
     {/* <BaiTapLayout1/> */}
     {/* <BaiTapLayout2/> */}
     {/* <DataBinding/> */}
     <HandleEvent/>

     
    </div>
  );
}


export default App;