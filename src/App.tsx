import React from 'react';
import './App.css';
import {checkUpdate, installUpdate} from '@tauri-apps/api/updater'
import {relaunch} from '@tauri-apps/api/process'

function App() {

    const env = process.env.REACT_APP_DEV_CLIENT_SECRET
    const env2 = process.env.REACT_APP_DEV_CLIENT_ID
    const env3 = process.env.REACT_APP_CRYPTO_SECRET

    console.log(env)
    console.log(env2)

    return (
        <div className="App">
            <header className="App-header">
                <div> CLIENT_SECRET = {env}</div>
                <div> CLIENT_ID = {env2}</div>
                <div> CRYPTO_SECRET = {env3}</div>
                <button>get version</button>
            </header>
        </div>
    );
}

export default App;
