import React, { useEffect, useState } from "react";
import "../styles/PopularPicks.css";
import ProductPageCard from "./ProductPageCard";
import { usePopularPicks } from "../hooks/usePopularPicks";

const PopularPicks = () => {
	const { popularData } = usePopularPicks();
	const [allCards, setAllCards] = useState({});

	useEffect(() => {
		if (popularData.length > 0) {
			const resizeArray = (data) => {
				return data.slice(0, 6);
			};

			setAllCards(resizeArray(popularData));
		}
	}, [popularData]);

	return (
		<div className="popular-picks">
			<div className="popular-picks-heading">Popular Picks</div>
			<div className="popular-picks-products-container">
				{allCards.length > 0 ? (
					allCards.map((item, index) => (
						<ProductPageCard data={item} key={index} />
					))
				) : (
					<div>Loading...</div>
				)}
			</div>
		</div>
	);
};

export default PopularPicks;
