import logo from './logo.svg';
import './App.css';

function App() {
	const myFunction = () => {
    const arr = [[13,3,4,6], [14,10,10,10],[7,6,5, 8],[10,10,10,10], [20,10,10,10]]
		let data = "United States Delhi"
		//console.log(data.split(','))
    let b = [0,0,0,0]
    var result = 0;
       var total = arr.reduce(function(a,c) {
          let res = add(a,c)
        return res
   
});
       console.log('total', total)
 
		return data
	}

  const add = (array1, array2) => {
    console.log('array', array1, 'aar2', array2);
  var sum = array1.map(function (num, idx) {
  return num + array2[idx];
});
  return sum;
}
  return (
    <div className="App">
      <header className="App-header">
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
          Learn React2
        </a>
        <div>{myFunction()}</div>
      </header>
    </div>
  );
}

export default App;
