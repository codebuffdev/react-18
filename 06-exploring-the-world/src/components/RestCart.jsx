const RestCart = ({restData}) => {
    const {data} = restData;
    return (
        <div className="rest-card">
            <img className="rest-logo" src={"https://as1.ftcdn.net/jpg/01/08/72/20/1000_F_108722091_4wbPi5AqsWTBqhxchxU29OufsiUzmEIg.jpg"} alt={"rest-img"}/>
            <h3>{data.name}</h3>
            <h4>{data.avgRating}⭐</h4>
            <h4>{data.cuisines.join(",")}</h4>
        </div>
    )
};


export default RestCart;
