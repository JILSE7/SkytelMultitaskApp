import AppRouter from "./routers/AppRouter"

import {Provider, useDispatch} from 'react-redux'
import {store} from './store/store'
import { useEffect } from "react"


const App = () => {
  return (
    <Provider store={store}>
      <AppRouter/>
    </Provider>
  )
}

export default App
