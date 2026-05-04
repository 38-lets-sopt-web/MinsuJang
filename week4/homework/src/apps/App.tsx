import '@styles/global.css';
import { TanStackQueryProvider } from './providers/TanStackQueryProvider';
import { TanStackRouterProvider } from './providers/TanStackRouterProvider';

function App() {
  return (
    <TanStackQueryProvider>
      <TanStackRouterProvider />
    </TanStackQueryProvider>
  );
}

export default App;
