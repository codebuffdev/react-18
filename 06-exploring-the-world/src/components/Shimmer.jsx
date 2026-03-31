import "../style/shimmer.css";

const ShimmerCard = () => {
	return (
		<div className="shimmer-card">
			<div className="shimmer-img skeleton"></div>
			<div className="shimmer-line skeleton"></div>
			<div className="shimmer-line small skeleton"></div>
		</div>
	);
};

const Shimmer = () => {
	return (
		<div className="shimmer-container">
			{Array(15)
				.fill("")
				.map((_, index) => (
					<ShimmerCard key={index}/>
				))}
		</div>
	);
};

export default Shimmer;