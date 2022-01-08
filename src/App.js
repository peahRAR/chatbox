import './App.css';
import MessageEditor from './components/MessageEditor';

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(FontAwesomeIcon);
library.add(fas);
library.add(fab);
library.add(far);

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
