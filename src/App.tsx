import React from 'react';
import './App.css';
import {checkUpdate, installUpdate} from '@tauri-apps/api/updater'
import {relaunch} from '@tauri-apps/api/process'

function App() {

    const env = process.env.REACT_APP_ENV_TEST
    const env2 = process.env.REACT_APP_ENV_TEST_SECRET
    console.log(env)
    console.log(env2)

    return (
        <div className="App">
            <header className="App-header">
               env1 =  {env}
              <div>  envSecret =  {env2}</div>
                <button>get version</button>
            </header>
        </div>
    );
}

export default App;
