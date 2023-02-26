const localStoragePlugin = store => {
    store.subscribe((mutation, state) => {
        localStorage.setItem('my-app-state', JSON.stringify(state));
    });

    const savedState = localStorage.getItem('my-app-state');
    if (savedState) {
        store.replaceState(JSON.parse(savedState));
    }
};

export { localStoragePlugin };