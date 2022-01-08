import './App.css';
import MessageEditor from './components/MessageEditor';

function App() {
  return (
    <div className="box">
      <div>
        <div className="messages">

        </div>
      </div>
      <MessageEditor/>
    </div>
  );
}

export default App;
