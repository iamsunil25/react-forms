import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
// import './App.css';
import { useState,useEffect,useMemo, useCallback, useLayoutEffect, useContext } from 'react';
import axios from 'axios';
import SimpleForms from './FormikPractice/simpleFroms/simpleform';
import React from 'react';
function App() {





  return (
	
		 <div className="App">
		  <SimpleForms />
	  </div>
  );
}

export default App;
