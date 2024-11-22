import './Bottle.css'

const Bottle = ({bottle,handleAddToCart}) => {
    const {name,img,price}=bottle;
    return (
        <div className="bottle">
            
            <img src={img} alt="" />
            <h3>Bottle: {name}</h3>
            <p>Price: ${price}</p>
            <button onClick={()=>handleAddToCart(bottle)}>Buy</button>
            
        </div>
    );
};

export default Bottle;