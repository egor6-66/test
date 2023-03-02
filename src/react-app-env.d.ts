/// <reference types="react-scripts" />
declare global {
    interface Window {
        __TAURI__: boolean;
    }
}