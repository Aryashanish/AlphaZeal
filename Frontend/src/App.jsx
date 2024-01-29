import { BrowserRouter as Router  , Routes , Route} from "react-router-dom"
import { Home } from "./Component/Home/Home"
import "./App.css"
import { About } from "./Component/About/About"
import { Contact } from "./Component/Contact/Contact"
import { Work } from "./Component/Work/Work"
import { TestComp } from "./Component/TestComp/TestComp"
import { Form } from "./Component/Form/Form"
import { Admin } from "./Component/Admin/Admin"
import { AuthContext } from "./Context/AuthContext"
import { useContext } from "react"

function App() {
  const auth = useContext(AuthContext);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/work" element={<Work />}></Route>
          <Route path="/admin" element={<Form />}></Route>
          <Route path="/adminportal" element={ auth.authenticated ? <Admin /> : <Form />}></Route>
          <Route path="/test" element={<TestComp />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
