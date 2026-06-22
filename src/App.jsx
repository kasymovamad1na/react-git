// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'
// import Header from "./components/Header/Header";
// import Section1 from "./components/Section1/Section1";
// import LatestEpisodesHeader from "./components/Latest-Episodes/Latest-EpisodesHeader";
// import LatestEpisodesContainer from "./components/Latest-Episodes/Latest-EpisodesContainer";
// import LatestEpisodesCard from "./components/Latest-Episodes/Latest-EpisodesCard"
// import Section2 from "./components/Section2/Section2"
// import Section3 from "./components/Section3/Section3"
// import Section4 from "./components/Section4/Section4"
// import Footer from "./components/Footer/Footer"        
// function App() {
//   return (
//     <>
//       <Header />
//       <Section1 />
//       {/* hello  world  */}
//       <LatestEpisodesHeader />
//       <LatestEpisodesContainer />
//       <LatestEpisodesCard />
//       <Section2 />
//       <Section3/>
//       <Section4/>
//       <Footer/>
//     </>
//   );
// }
// export default App;



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


// import { useState } from "react";

// function App() {
//   const [login, setLogin] = useState("");
//   const [password, setPassword] = useState("");
//   const [cards, setCards] = useState([]);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newCard = {
//       id: Date.now(),
//       login,
//       password,
//     };

//     setCards([...cards, newCard]);

//     setLogin("");
//     setPassword("");
//   };

//   const deleteCard = (id) => {
//     const result = confirm(
//       "Вы хотите удалить эту карточку?"
//     );

//     if (result) {
//       setCards(
//         cards.filter((card) => card.id !== id)
//       );
//     }
//   };

//   return (
//     <div className="p-5">
//       <form
//         onSubmit={handleSubmit}
//         className="flex flex-col gap-3"
//       >
//         <label
//           htmlFor="login"
//           className="border rounded-md p-[6px_12px]"
//         >
//           <input
//             type="text"
//             id="login"
//             name="login"
//             placeholder="Login"
//             value={login}
//             onChange={(e) =>
//               setLogin(e.target.value)
//             }
//             className="focus:outline-0"
//           />
//         </label>

//         <label
//           htmlFor="password"
//           className="border rounded-md p-[6px_12px]"
//         >
//           <input
//             type="password"
//             id="password"
//             name="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) =>
//               setPassword(e.target.value)
//             }
//             className="focus:outline-0"
//           />
//         </label>

//         <button
//           type="submit"
//           className="border rounded-md p-2"
//         >
//           Create
//         </button>
//       </form>

//       <div className="flex flex-wrap gap-4 mt-5">
//         {cards.map((card) => (
//           <div
//             key={card.id}
//             onClick={() =>
//               deleteCard(card.id)
//             }
//             className="border rounded-md p-4 w-[220px] cursor-pointer"
//           >
//             <h3 className="font-bold">
//               {card.login}
//             </h3>

//             <p>{card.password}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App; 




// import { useState } from "react";

// function App() {
//   const [seconds, setSeconds] = useState(0);
//   const [intervalId, setIntervalId] = useState(null);

//   const start = () => {
//     if (intervalId) return;

//     const id = setInterval(() => {
//       setSeconds((prev) => prev + 1);
//     }, 1000);

//     setIntervalId(id);
//   };

//   const stop = () => {
//     clearInterval(intervalId);
//     setIntervalId(null);
//   };

//   const reset = () => {
//     clearInterval(intervalId);
//     setIntervalId(null);
//     setSeconds(0);
//   };

//   return (
//     <div className="flex flex-col items-center gap-4 mt-10">
//       <h1 className="text-5xl">{seconds}</h1>

//       <div className="flex gap-3">
//         <button onClick={start} className="border p-2">
//           Сарт
//         </button>

//         <button onClick={stop} className="border p-2">
//           Стоп
//         </button>

//         <button onClick={reset} className="border p-2">
//           Сброс
//         </button>
//       </div>
//     </div>
//   );
// }

// export default App;






// import { useState } from "react";

// function App() {
//   const [seconds, setSeconds] = useState(0);
//   const [intervalId, setIntervalId] = useState(null);

//   const start = () => {
//     if (intervalId) return;

//     const id = setInterval(() => {
//       setSeconds((prev) => prev + 1);
//     }, 1000);

//     setIntervalId(id);
//   };

//   const stop = () => {
//     clearInterval(intervalId);
//     setIntervalId(null);
//   };

//   const reset = () => {
//     clearInterval(intervalId);
//     setIntervalId(null);
//     setSeconds(0);
//   };


//   const minutes = Math.floor(seconds / 60);
//   const secs = seconds % 60;


//   return (
//     <div className="flex flex-col items-center gap-4 mt-10">
//     <h1 className="text-5xl font-bold">
//         {String(minutes).padStart(2, "0")}:
//         {String(secs).padStart(2, "0")}
//       </h1>
//       <div className="flex gap-3">
//         <button onClick={start} className="border p-2">
//           Сарт
//         </button>

//         <button onClick={stop} className="border p-2">
//           Стоп
//         </button>

//         <button onClick={reset} className="border p-2">
//           Сброс
//         </button>
//       </div>
//     </div>
//   );
// }

// export default App;





import { useState, useEffect } from 'react';


function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}


export default function App() {
  const [searchTerm, setSearchTerm] = useState('');


  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  return (
    <div className="app" style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>useDebounce Hook</h1>

      <div className="search-container">
        <input
          type="text"
          placeholder="Type to search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: '8px', width: '250px' }}
        />
      </div>

      <div style={{ marginTop: '20px' }}>
        <div>
          <strong>Input Value:</strong> {searchTerm || '(empty)'}
        </div>

        <div style={{ marginTop: '10px' }}>
          <strong>Debounced Value:</strong> {debouncedSearchTerm || '(empty)'}
        </div>
      </div>
    </div>
  );
}