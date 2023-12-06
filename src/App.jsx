import {Home, Form, Color} from './pages';
import {Routes, Route, useNavigate} from 'react-router-dom';
import './App.css'

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/">
            <Route index element={<Home />}/>
            <Route path="/colours">
              <Route path="new" element={<Form />}/>
              <Route path=":colour" element={<Color />}/>
            </Route>
            <Route path="*" element={<Home />}></Route>
          </Route>
        </Routes>
    </div>
  )
}


export default App
