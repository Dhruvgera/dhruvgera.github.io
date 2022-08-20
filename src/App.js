import Background from './background';
import Mainpage from './Mainpage';
import Aboutme from './aboutme';
import Work from './Work';
import Contactme from './Contactme';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Background />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Mainpage />} />
          <Route exact path="aboutme" element={<Aboutme />} />
          <Route exact path="Work" element={<Work />} />
          <Route exact path="Contactme" element={<Contactme />} />
        </Routes>
      </BrowserRouter></>
  );
}


export default App;
