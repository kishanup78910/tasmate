import './App.css';
import AddTask from './component/AddTask';
import Headers from './component/Headers';
import TaskList from './component/TaskList';

                   

function App() {
  return (
    <div className="App">
      <Headers/>
      <AddTask/>
      <TaskList title="Random"/>
      
    </div>
  );
}

export default App;
