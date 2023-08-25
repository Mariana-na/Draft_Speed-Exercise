import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import Error from "./pages/Error";

function App () {

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route/>
        <Route path="/error" element={<Error/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
    </div>
  )

}

export default App
