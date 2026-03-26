// inline css
const restCardStyle = {
  backgroundColor: "#f0f0f0",
};

const RestCart = ({ restaurant }) => {
  return (
    <div className="rest-card" style={restCardStyle}>
      <img
        className="rest-logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxIHBnjgxyaSid7jqO1z6LGfby90Mqp-zyIQ&s"
        alt="restaurant-logo"
      />
      <h3>{restaurant.data.name}</h3>
      <h5>
        North Indian, Continental <span>4.5 🌟 (1000+ ratings)</span>
      </h5>
    </div>
  );
};

export default RestCart;
