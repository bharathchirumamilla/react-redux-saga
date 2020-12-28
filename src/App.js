import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import TableList from './components/TableList';

function App() {
  return (
    <div className="App">
        <Header name={"Address Form"}/>
        <Form />
    </div>
  );
}

export default App;
