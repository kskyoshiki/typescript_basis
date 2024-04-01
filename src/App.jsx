import { BrowserRouter, Link } from 'react-router-dom';

import './index.css';
import { Home } from './Home';
import { Page1 } from './Page1';
import { Page2 } from './Page2';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link>Home</Link>
        <Home />
        <Page1 />
        <Page2 />
      </div>
    </BrowserRouter>
  );
}

export default App;
