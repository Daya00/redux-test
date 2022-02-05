import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount } from './redux/counter';

function App() {
  const count = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">        
        <h2>Count - {count}</h2>
        <p>
          <button onClick={() => dispatch(increment())}>+</button>
          <button onClick={() => dispatch(decrement())}>-</button>
          <button onClick={() => dispatch(incrementByAmount(5))}>5</button>
        </p>
      </header>
    </div>
  );
}

export default App;

