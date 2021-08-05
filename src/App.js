import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
	const categoryList = ["all", "breakfast", "lunch", "shakes"];
	const [category, setCategory] = useState("breakfast");

	const chooseCategory = (categoryPicked) => {
		setCategory(categoryPicked);
	};

	return (
		<main>
			<div className="section menu">
				<div className="title">
					<h2>Our Menu</h2>
					<div className="underline"></div>
				</div>
				<div className="btn-container">
					<Categories
						categoryList={categoryList}
						chooseCategory={chooseCategory}
					/>
				</div>
				<div className="section-center">
					{category === "all"
						? items.map((item) => <Menu key={item.id} {...item} />)
						: items
								.filter((item) => item.category === category)
								.map((item) => {
									return <Menu key={item.id} {...item} />;
								})}
				</div>
			</div>
		</main>
	);
}

export default App;
