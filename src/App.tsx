import React from 'react';
import './App.css';
import {checkUpdate, installUpdate} from '@tauri-apps/api/updater'
import {relaunch} from '@tauri-apps/api/process'

function App() {

    // @ts-ignore
    const RUNNING_IN_TAURI = window.__TAURI__ !== undefined;
const env = process.env.REACT_APP_ENV_TEST
    console.log(env)
    console.log(RUNNING_IN_TAURI)
    const a = async () => {
        try {
            const {shouldUpdate, manifest} = await checkUpdate()
            console.log(shouldUpdate, manifest)
            if (shouldUpdate) {
                // display dialog
                await installUpdate()
                // install complete, restart the app
                await relaunch()
            }
        } catch (error) {
            console.log(error)
        }
    }
a().then()
    return (
        <div className="App">
            <header className="App-header">
                {env}
                <button onClick={a}>get version</button>
            </header>
        </div>
    );
}

export default App;
