import AppRouter from "./routers/AppRouter"

import {Provider} from 'react-redux'
import {store} from './store/store'

import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <Provider store={store}>
      <AppRouter/>
      <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable
      pauseOnHover
      />
    </Provider>
  )
}

export default App
