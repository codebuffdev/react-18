import {cloudinaryImageLink} from "../utils/constant";

const RestCart = ({props}) => {
	return (
		<div className="rest-card">
			<img className="rest-logo" src={cloudinaryImageLink + props.info.cloudinaryImageId} alt={"rest-img"}/>
			<h3>{props.info.name}</h3>
			<h4>{props.info.avgRating}⭐</h4>
			<h4>{props.info.cuisines.join(",")}</h4>
		</div>
	)
};


export default RestCart;
