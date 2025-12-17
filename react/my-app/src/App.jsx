import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Subject from './components/student/subject/Subject.jsx';
import Counter from './components/state/Counter.jsx';
import Color from './components/state/Color.jsx';

import './App.css'
import Students from './components/state/Student.jsx';
import Githubusers from './components/Githubusers.jsx';

function App() {

  return (
   <div>
    {/* <Counter></Counter> */}
    {/* <Color></Color> */}
    {/* <Students/> */}
    <Githubusers />
   </div>

  )
}

export default App
