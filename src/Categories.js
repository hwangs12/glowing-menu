import React from "react";

const Categories = (props) => {
	return (
		<>
			{props.categoryList.map((category, _i) => {
				return (
					<button
						key={_i}
						type="button"
						className="filter-btn"
						onClick={() => props.chooseCategory(category)}
					>
						{category}
					</button>
				);
			})}
		</>
	);
};

export default Categories;

//const menu = [
// {
//   id: 1,
//   title: 'buttermilk pancakes',
//   category: 'breakfast',
//   price: 15.99,
//   img: './images/item-1.jpeg',
//   desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
// },
