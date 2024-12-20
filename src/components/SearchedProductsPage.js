import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";
import ProductPageCard from "./ProductPageCard";
import "../styles/SearchedProductsPage.css";
import "../styles/ProductPage.css";

const SearchedProductsPage = () => {
	const { searched_param } = useParams();
	const { products } = useProducts();
	const [allData, setAllData] = useState([]);
	const [filteredData, setFilteredData] = useState([]);

	useEffect(() => {
		if (products) {
			setAllData(products);
			applyFilters(searched_param);
		}
	}, [products]);

	useEffect(() => {
		applyFilters(searched_param);
	}, [allData]);

	const applyFilters = (searchQuery = "") => {
		if (allData.length > 0) {
			let filtered = allData.filter((product) => {
				// Search filter
				const matchesSearch =
					searchQuery === "" ||
					product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
					product.description
						.toLowerCase()
						.includes(searchQuery.toLowerCase()) ||
					product.section.toLowerCase().includes(searchQuery.toLowerCase());
				return matchesSearch;
			});
			setFilteredData(filtered);
		}
	};

	return (
		<div id="wrapper">
			<Navbar />
			<div className="searched_products_container">
				<div className="header-container">
					<div className="text-container">
						<div className="description">
							{filteredData.length} result for "{searched_param}"
						</div>
					</div>
				</div>
				<div className="sp_separater"></div>
				<div className="search_product-page-cards-container">
					{filteredData.length > 0 ? (
						filteredData.map((item, index) => (
							<ProductPageCard data={item} key={index} />
						))
					) : (
						<div>Loading...</div>
					)}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default SearchedProductsPage;
