import Header from '../components/Header';
import Hero from '../components/Hero';
import Steps from '../components/Steps';
import Sustainability from '../components/Sustainability';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Steps />
        {/* You can add the Sustainability section here later */}
        <Sustainability />
      </main>
      <Footer />
    </>
  );
};

export default Home;