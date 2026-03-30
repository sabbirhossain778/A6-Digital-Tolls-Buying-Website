import './App.css'
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import StepsSection from './Components/StepsSection/StepsSection';
import PricingSection from './Components/PricingSection/PricingSection';
import Footer from './Components/Footer/Footer';
import Mainsection from './Components/MainSection/Mainsection';



function App() {
  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <Mainsection></Mainsection>
    <StepsSection></StepsSection>
    <PricingSection></PricingSection>
    <Footer></Footer>
    </>
  )
}

export default App
