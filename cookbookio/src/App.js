import logo from './logo.svg';
import './App.scss';
//import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

function App() {
  return (
    <>
    <h1 className='title'>YouChef.io</h1>
    <Layout />
    <footer className='footer'>
                <p>Authors: Derek Xu, Pardesh Dhakal, Owen Mariani</p>
                <p> Copyrighted © </p> 
            </footer>
    </>
  );
};

export default App;
