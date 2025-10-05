import { Suspense } from 'react'
import './App.css'
// import DaisyNav from './components/daisyUI-nav/daisyNav'
import Navbar from './components/Navbar/Navbar'
import PricingOptions from './components/PricingOptions/PricingOptions'
import ResultChart from './components/ResultChart/ResultChart';
import axios from 'axios';
import MarksChart from './components/MarksChart/MarksChart';

const pricingPromise = fetch('pricingData.json').then(res => res.json());
const marksPromise = axios.get('marksData.json');
function App() {
 
  return (
    <>
      <header>
        <Navbar></Navbar>
        {/* <DaisyNav></DaisyNav> */}
      </header>
      <main>
        <Suspense fallback={<span className="loading loading-ball loading-xl"></span>
}>
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>

        <Suspense fallback={<span className="loading loading-ball loading-xl"></span>}>
        <MarksChart marksPromise={marksPromise}></MarksChart>
        </Suspense>
        

        <ResultChart></ResultChart>
      </main>
    </>
  )
}

export default App
