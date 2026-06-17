import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from "./components/Header/Header";
import Section1 from "./components/Section1/Section1";
import LatestEpisodesHeader from "./components/Latest-Episodes/Latest-EpisodesHeader";
import LatestEpisodesContainer from "./components/Latest-Episodes/Latest-EpisodesContainer";
import LatestEpisodesCard from "./components/Latest-Episodes/Latest-EpisodesCard"
import Section2 from "./components/Section2/Section2"
import Section3 from "./components/Section3/Section3"
import Section4 from "./components/Section4/Section4"
import Footer from "./components/Footer/Footer"
function App() {
  return (
    <>
      <Header />
      <Section1 />

      <LatestEpisodesHeader />
      <LatestEpisodesContainer />
      <LatestEpisodesCard />
      <Section2 />
      <Section3/>
      <Section4/>
      <Footer/>
    </>
  );
}
export default App;



// import Practise from "./components/Practise/Practise"




// function App() {

  
//   return (
//     <div className="p-5">
//       <form className="flex flex-col gap-3">
//         <label htmlFor="login" className="border rounded-md p-[6px_12px]">
//           <input
//             type="text"
//             id="login"
//             name="login"
//             placeholder="Login"
//             className="focus:outline-0"
//           />
//         </label>
//         <label htmlFor="password" className="border rounded-md p-[6px_12px]">
//           <input
//             type="text"
//             id="password"
//             name="password"
//             placeholder="Password"
//             className="focus:outline-0"
//           />
//         </label>

//         <button type="submit" className="border rounded-md">
//           Create
//         </button>
//       </form>
//     </div>
//   );
// }

// export default App;
