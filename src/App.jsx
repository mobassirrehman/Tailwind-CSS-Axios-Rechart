import { Suspense } from 'react'
import './App.css'
// import DaisyNav from './components/daisyUI-nav/daisyNav'
import Navbar from './components/Navbar/Navbar'
import PricingOptions from './components/PricingOptions/PricingOptions'
import ResultChart from './components/ResultChart/ResultChart';

const pricingPromise = fetch('pricingData.json').then(res => res.json());
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
        <ResultChart></ResultChart>
      </main>
    </>
  )
}

export default App
