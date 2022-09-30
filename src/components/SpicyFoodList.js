import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filter, setFilter] = useState("All")

  // handle add food
  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    const newFoodArray = [...foods , newFood];
    setFoods(newFoodArray);
  }

  //  click function
  function handleClick(id){
    const newFoodArray = foods.map( (foods) => {
      if(foods.id === id){
        return{...foods,heatLevel : foods.heatLevel + 1,};
      }
      else{
        return foods ;
      }
    });
  
    setFoods(newFoodArray);
  };
  
  // filter 

  const foodsToDisplay = foods.filter((food) => {
		if (filter === "All") {
      return true ;
    } else{
     return food.cuisine === filter;
    }
		
	});


	function handleFilterChange(event) {
		setFilter( event.target.value);
	};


	const foodList = foodsToDisplay.map((food) => (
		<li key={food.id} onClick={() => handleClick(food.id)}>
			{food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
		</li>
	));

  return (
    <div>
        <select name="filter" onChange={handleFilterChange}>
            <option value="All">All</option>
            <option value="American">American</option>
            <option value="Sichuan">Sichuan</option>
            <option value="Thai">Thai</option>
            <option value="Mexican">Mexican</option>
        </select>
      
          <button onClick={handleAddFood}>Add New Food</button>
          <ul>{foodList}</ul>
    </div>
  );
  }





export default SpicyFoodList;
