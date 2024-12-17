import './App.css';
import SzakdogaKiiras from './components/SzakdogaKiiras';
import { ApiProvider } from './contexts/ApiContext';

function App() {
  return (
    <ApiProvider>
      <SzakdogaKiiras>

      </SzakdogaKiiras>
    </ApiProvider>
  );
}

export default App;
