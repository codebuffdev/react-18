import RestCart from "./RestaurantCard";
import restaurantList from "../utils/mock-data";

// Body
const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input
          type="text"
          placeholder="Search for restaurant, cuisine or a dish..."
        />
      </div>
      <div className="rest-container">
        {/* <RestCart Cart="1" /> {/* any number of k=v pair -> prop object*/}
        {/* <RestCart Cart="2" />  */}

        {restaurantList.map((restaurant) => (
          <RestCart key={restaurant.data.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
