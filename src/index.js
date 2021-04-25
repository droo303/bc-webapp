import React from 'react';
import ReactDOM from 'react-dom';
import App from './frame/App';
import Web3 from "web3";


window.web3 = new Web3(Web3.givenProvider);
ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);
