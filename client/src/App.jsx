import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes'
import 'bootstrap/dist/css/bootstrap.min.css';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';

disableReactDevTools();

function App() {

  return (
    <>
      <RouterProvider router={ router } />
    </>
  )
}

export default App
