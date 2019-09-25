import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';
import reactotronReduxSaga from 'reactotron-redux-saga';

if (__DEV__) {
  const tron = Reactotron.configure({host: '192.168.50.175'})
    .useReactNative()
    .use(reactotronRedux())
    .use(reactotronReduxSaga())
    .connect();
  tron.clear();
  console.tron = tron;
}
