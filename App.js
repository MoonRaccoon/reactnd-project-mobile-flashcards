import React from 'react';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { View, StatusBar } from 'react-native';
import reducer from './reducers'
import { initialData } from "./utils/api";
import thunk from 'redux-thunk'
import { setLocalNotification } from "./utils/helpers";
import { Constants } from 'expo'
import { DeckStack } from "./components/Navigation";

function MobileStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

export default class App extends React.Component {

  componentDidMount() {
    initialData()
    setLocalNotification()
  }

  render() {
    return (
      <Provider store={createStore(reducer, applyMiddleware(thunk))}>
        <View style={{flex: 1}}>
          <MobileStatusBar
            backgroundColor="black"
            barStyle="light-content"
          />
          <DeckStack/>
        </View>
      </Provider>
    );
  }
}
