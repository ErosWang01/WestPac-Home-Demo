import Header from '../layouts/Header/Header';
import Footer from '../layouts/Footer/Footer';
import HeroBanner from '../components/HeroBanner/HeroBanner';
import ServiceSection from '../components/ServiceSection/ServiceSection';
import ArticleSection from '../components/ArticleSection/ArticleSection';

function App() {
	return (
		<div className="App">
			<Header />
			<HeroBanner />
			<ServiceSection />
			<ArticleSection />
			<Footer />
		</div>
	);
}

export default App;
