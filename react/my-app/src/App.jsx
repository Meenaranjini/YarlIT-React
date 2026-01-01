import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Subject from './components/student/subject/Subject.jsx';
import Counter from './components/state/Counter.jsx';
import Color from './components/state/Color.jsx';

import './App.css'
import Students from './components/state/Student.jsx';
// import Githubusers from './components/Githubusers.jsx';
import Useeffect from './components/Useeffect.jsx';
import Userinputs from './components/Userinputs.jsx';
import Users from './components/User.jsx';
import UserDetails from './components/Userdetails.jsx';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import CreateStudent from './components/CreateStudent.jsx';
function App() {

  return (
   <div>
    {/* <Counter></Counter> */}
    {/* <Color></Color> */}
    {/* <Students/> */}
    {/* <Githubusers /> */}
    {/* <Useeffect></Useeffect> */}
    {/* <Userinputs></Userinputs> */}
    {/* <BrowserRouter>
        <Routes>
            <Route path="/" element={<Users/>}/>
            <Route path="/users/:id" element={<UserDetails/>} />
        </Routes>
      </BrowserRouter> */}
      {/* <Users></Users> */}
      {/* <UserDetails></UserDetails> */}
      <CreateStudent></CreateStudent>

   </div>
  )
}

export default App
