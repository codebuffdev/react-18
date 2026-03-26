import RestCart from "./RestCart"; // default import
import restaurantList from "../utils/mock-data";
import { useState } from "react"; // named import

const Body = () => {
  // data
  // normal js variable
  /*
  let restaurantList = [
    {
      type: "restaurant",
      data: {
        id: "74453",
        name: "Domino's Pizza",
        cuisines: ["Pizzas", "Italian", "Fast Food"],
        costForTwo: 40000,
        costForTwoString: "₹400 FOR TWO",
        avgRating: "4.5",
      },
    },
    {
      type: "restaurant",
      data: {
        id: "74454",
        name: "KFC",
        cuisines: ["chicken", "fried", "burgers"],
        costForTwo: 40000,
        costForTwoString: "₹400 FOR TWO",
        avgRating: "3.8 ",
      },
    },
    {
      type: "restaurant",
      data: {
        id: "74455",
        name: "Pizza Hut",
        cuisines: ["Pizzas", "Italian", "Fast Food"],
        costForTwo: 40000,
        costForTwoString: "₹400 FOR TWO",
        avgRating: "4.2",
      },
    },
  ];
  */
  // normal js var to react state variable => use hooks => use hook state => useState() -> react variable & useEffect()
  // lets use the mock data
  let [listOfRestaurants, setListOfRestaurants] = useState(restaurantList);

  return (
    <div>
      <div className="search">
        <input type={"text"} placeholder={"search"} />
        <button
          className={"filter-btn"}
          onClick={() => {
            // filter-out -> the restaurant list
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
        {/*<RestCart restName={"kfc"} cuisines = {Array("Burgers" , "Drum sticks")} rating={4.3} imgLink={"https://thumbs.dreamstime.com/z/kfc-logo-kentucky-fried-chicken-new-logo-icon-kfc-logo-kentucky-fried-chicken-new-logo-icon-editorial-illustrative-fast-food-201271072.jpg"}/>*/}
        {/*<RestCart restName={"mac-d"} cuisines = {Array("Burgers" , "pizza")} rating={4.1} imgLink={"https://tse4.mm.bing.net/th/id/OIP.qFOHXysC26S_Ew21CJTvzQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"} />*/}

        {listOfRestaurants.map((restaurant) => (
          <RestCart key={restaurant.data.id} restData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
