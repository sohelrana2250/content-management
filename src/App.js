
import './App.css';
import { RouterProvider } from "react-router-dom";
import { router } from './components/Routers/Router';
import { Provider } from 'react-redux';
import store from './REDUX/Store';
import AuthProvider from './UseContext/AuthProvider';




function App() {
  return (
    <div className="App">


      <Provider store={store}>
        <AuthProvider>
          <RouterProvider router={router}></RouterProvider>
        </AuthProvider>
      </Provider>


    </div>
  );
}

export default App;
