import './App.css'
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import StepsSection from './Components/StepsSection/StepsSection';
import PricingSection from './Components/PricingSection/PricingSection';
import Footer from './Components/Footer/Footer';
import Main from './Components/MainSection/Main';




const fetchData = async() =>{
  const res = await fetch('/data.json');
  return res.json();
}

function App() {
  const fetchPromise = fetchData();
  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>

    <Main fetchPromise={fetchPromise}>
    </Main>
    <StepsSection></StepsSection>
    <PricingSection></PricingSection>
    <Footer></Footer>
    </>
  )
}

export default App
