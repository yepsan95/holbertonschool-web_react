import { getFullYear, getFooterCopy } from './utils.js';
import logo from './logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
		<h1>School dashboard</h1>
      </header>
	  <hr></hr>
	  <body className="App-body">
	    <p>Login to access the full dashboard</p>
		<label for="email">E-mail:</label>
		<input type="text" id="email-input" name="email"></input>
		<label for="password">Password:</label>
		<input type="text" id="password-input" name="password"></input>
        <button>OK</button>
	  </body>
	  <hr></hr>
	  <footer className="App-footer">
	    <p>
		  Copyright {getFullYear()} - {getFooterCopy()}
		</p>
	  </footer>
    </div>
  );
}

export default App;
