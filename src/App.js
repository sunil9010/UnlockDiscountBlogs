import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landing";
import OnlineLearning from "./components/OnlineLearning";
import ProductPage from "./components/ProductPage";
import BankingPage from "./components/BankingPage";
import FAQ from "./components/FAQ";
import AboutContactPage from "./components/AboutContactPage";
import Certificate from "./components/Certificate";
import VerifiedPage from "./components/VerifiedPage";
import SearchedProductsPage from "./components/SearchedProductsPage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/online_learning" element={<OnlineLearning />} />
				<Route path="/banking" element={<BankingPage />} />
				<Route path="/faq" element={<FAQ />} />
				<Route path="/about" element={<AboutContactPage />} />
				<Route path="/certificate_verification" element={<Certificate />} />
				<Route
					path="/certificate_verification/:incorrect"
					element={<Certificate />}
				/>
				<Route
					path="/certificate_verified/:serialNo"
					element={<VerifiedPage />}
				/>
				<Route path="/products/:category_param" element={<ProductPage />} />
				<Route
					path="/searched_products/:searched_param"
					element={<SearchedProductsPage />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
