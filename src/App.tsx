
import './App.css'
import { Routes, Route, BrowserRouter } from "react-router-dom";
// @ts-ignore
import HomePage from "./pages/homepage"

function App() {
  
  return (
    <div>

<BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App;
