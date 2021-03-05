import { AuthProvider } from './providers/AuthProvider';
import Router from './routes';

function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}

export default App;
