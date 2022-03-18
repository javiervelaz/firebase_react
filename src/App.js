import logo from './logo.svg';
import './App.css';
import { useFirebaseApp } from 'reactfire';

import Auth from './Auth';

function App() {
  const firebase = useFirebaseApp();
  return (
    <div className="App">
        <p>User id:</p>
        <Auth></Auth>
    </div>
  );
}

export default App;
