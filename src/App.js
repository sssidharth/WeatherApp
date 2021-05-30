import logo from './logo.svg';
import './App.css';
import MainComponent from './Components/MainComponent';
import {Provider} from 'react-redux';
import store from './redux/Store';

function App() {
  return (
    <Provider store = {store}>
    <div className="Container">
      <MainComponent/>
    </div>
    </Provider>
  );
}

export default App;
