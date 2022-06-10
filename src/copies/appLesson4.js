import logo from './logo.svg';
import './App.css';

function App() {
 const tittle = "Welcome tp the new blog";
 const likes = 50;
 const numbers = [1,2,3];
 const link = "https://slcc.edu";
  return (
    <div className="App">
      <div className="content">
        <h1> {tittle}</h1>
        <p>Liked {likes} times</p>
        <p>Number array variable: {numbers} </p>
        <p>{10} direct number</p>
        <p>{"Hello"} direct string</p>
        <p>{[1,3.5,6]} direct array</p>
        <p>{Math.random() *20} direct math.random</p>
        <a href={link}>slcc home</a>
      </div>
    </div>
  );
}

export default App;

{/* <header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<p>
  Edit <code>src/App.js</code> and save to reload.
</p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a>
</header> */}