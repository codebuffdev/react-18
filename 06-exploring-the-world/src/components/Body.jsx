import RestCart from "./RestCart"; // default import
import {useState, useEffect} from "react";
import Shimmer from "./Shimmer"; // named import
import {corsProxy , liveApi } from "../utils/constant";

const Body = () => {
	let [listOfRestaurants, setListOfRestaurants] = useState([]);

	/*
    useEffect(()=>{
	console.log("Runs once after first render")
    },[]);

    useEffect(() => {
	console.log("Runs when state/prop change")
    }, [listOfRestaurants]);

    useEffect(() => {
	console.log("Runs on every render");
    });
	*/


	useEffect(() => {
		fetchData();
	}, [])

	const fetchData = async () => {
		//adding cors-proxy to the api
		const data = await fetch(corsProxy+liveApi);
		const json = await data.json();
		//optional chaining
		setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
	};

	// conditional rendering
	// after performing the fetch if the api is still not available
	// this is the obsolete approach :  <h1>Loading</h1>
	// industry std is shimmer UI effect

	//return (listOfRestaurants.length === 0) ? <h1>Loading</h1> :
	return (listOfRestaurants.length === 0) ? <Shimmer/> : (<div>
		<div className={"body-top"}>
			<div className="search">
				<input type={"text"} placeholder={"search"}/>
				<button>search</button>
			</div>
			<div>
				<button
					className={"filter-btn"}
					onClick={() => {
						listOfRestaurants = listOfRestaurants.filter((rest) => {
							return rest.info.avgRating > 4;
						});
						setListOfRestaurants(listOfRestaurants);
						console.log(listOfRestaurants);
					}}
				>
					Top Rated Restaurant
				</button>
			</div>
		</div>
		<div className="rest-container">

			{listOfRestaurants.map((restaurant) => (<RestCart key={restaurant.info.id} props={restaurant}/>))}
		</div>
	</div>);
};
export default Body;
