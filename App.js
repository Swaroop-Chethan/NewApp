import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './storage/store';
import { AppNavigator } from './components/common/navigation';
import { YellowBox } from 'react-native';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillUnmount() {
    console.debug('App unmount called')
  }

  componentDidMount() {
    YellowBox.ignoreWarnings(['Remote debugger']);
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
            <AppContainer 
              ref={nav => { this.navigator = nav; }}
            />
        </PersistGate>
      </Provider>
    );
  }
}

const AppContainer = createAppContainer(AppNavigator)

export default App;

