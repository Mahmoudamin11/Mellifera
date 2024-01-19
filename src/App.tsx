import HomeScreen from './components/HomeScreen';
import News from './components/News';
import NewsLetter from './components/NewsLetter';
import Quote from './components/Quote';
import OurProducts from './components/OurProducts';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
        <HomeScreen />
        <News />
        <OurProducts />
        <Quote />
        <NewsLetter />
        <Footer />
    </div>
  )
}

export default App