import {Provider} from "react-redux";

import store from './store/configureStore';

import Movies from "./pages/MoviesReduxStyles";

import './App.css';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <Movies/>
    </div>
  </Provider>
);

export default App;
