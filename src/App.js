import './App.css';
import Home from './Components/home';

function App() {
  const todo = [
    { id: 1, name: 'learn DSA', completed: true, },
    { id: 2, name: 'learn unit testing', completed: false, },
    { id: 2, name: 'learn react', completed: true, },
    { id: 2, name: 'learn driving', completed: false, },
    { id: 3, name: 'learn cooking', completed: false },
  ]
  return (
    <div>
      {
        todo.map((value) => {
          return (
            <Home todo={value} />
          )
        })
      }
    </div>

  );
}

export default App;
