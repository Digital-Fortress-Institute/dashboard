
import './App.css';
import Page from './components/page/Page';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
    <div className="">
      <Page />
    </div>
  
  </BrowserRouter>
  );
}

export default App;
