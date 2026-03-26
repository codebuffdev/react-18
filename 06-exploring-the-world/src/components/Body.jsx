import RestCart from "./RestCart"; // default import
import restaurantList from "../utils/mock-data";
import { useState } from "react"; // named import

const Body = () => {
  let [listOfRestaurants, setListOfRestaurants] = useState(restaurantList);

  return (
    <div>
      <div className="search">
        <input type={"text"} placeholder={"search"} />
        <button
          className={"filter-btn"}
          onClick={() => {
            listOfRestaurants = listOfRestaurants.filter((rest) => {
              return rest.data.avgRating > 4;
            });
            setListOfRestaurants(listOfRestaurants);
            console.log(listOfRestaurants);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="rest-container">

        {listOfRestaurants.map((restaurant) => (
          <RestCart key={restaurant.data.id} restData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
