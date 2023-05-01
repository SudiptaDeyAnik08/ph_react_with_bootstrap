import logo from './logo.svg';
import './App.css';
import Card_Group from './components/Card_Group/Card_Group';

function App() {
  return (
    <div className="App">
      <button type="button" className="btn btn-primary">Primary</button>
      <button type="button" className="btn btn-secondary">Secondary</button>
      <button type="button" className="btn btn-success">Success</button>
      <button type="button" className="btn btn-danger">Danger</button>
      <button type="button" className="btn btn-warning">Warning</button>
      <button type="button" className="btn btn-info">Info</button>
      <button type="button" className="btn btn-light">Light</button>
      <button type="button" className="btn btn-dark">Dark</button>
      <button type="button" className="btn btn-link">Link</button>
     
      <br />
     
      <div className="spinner-border text-danger" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      
        <Card_Group></Card_Group>
    </div>
  );
}

export default App;
