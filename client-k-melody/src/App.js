import { BrowserRouter, Routes, Route} from 'react-router-dom';
import routes from './config/routes';
import './assets/styles/main.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route 
            key={index} 
            path={route.path} 
            element={<route.layout><route.component></route.component></route.layout> } 
          />)
        )}
      </Routes>
   
   </BrowserRouter>
  );
}

export default App;
