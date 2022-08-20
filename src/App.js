import Background from './background';
import Mainpage from './Mainpage';
import Aboutme from './aboutme';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Background />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="aboutme" element={<Aboutme />} />
        </Routes>
      </BrowserRouter></>
  );
}


export default App;
