import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

const reactotron = Reactotron.configure({
  name: 'ReduxSagaExamples',
  host: '192.168.1.128',
})
  .useReactNative()
  .use(reactotronRedux())
  .use(sagaPlugin({}))
  .connect();

export default reactotron;
