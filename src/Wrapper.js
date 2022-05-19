import React from 'react';
import Navigation from './navigation/navigation';
import { Provider } from 'react-redux'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import store from './redux/store'

const Wrapper = () => {

    return (
        <Provider store={store}>
            <SafeAreaProvider >
                <Navigation />
            </SafeAreaProvider>
        </Provider>
    );
};


export default Wrapper;