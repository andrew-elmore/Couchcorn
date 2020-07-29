import React from "react";
import ReactDOM from "react-dom";
import Root from './components/root';
import configureStore from './store/store'

document.addEventListener("DOMContentLoaded", () => {
    let store = {}
    if (window.currentAccount) {
        const preloadedState = {
            session: { id: window.currentAccount.id },
        };
        store = configureStore(preloadedState);
    } else {
        store = configureStore();
    }
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store}/>, root);
});