// import PriceOption from "../PriceOption/PriceOption";
import PriceOptions from "../PriceOption/PriceOption";


const PriceOptions = () => {
    const PriceOptions=[
        {
          "id": "basic",
          "price": 9.99,
          "features": [
            "Access to basic features",
            "Up to 10GB storage",
            "Email support"
          ]
        },
        {
          "id": "standard",
          "price": 19.99,
          "features": [
            "Access to all features",
            "Up to 50GB storage",
            "Priority email support"
          ]
        },
        {
          "id": "premium",
          "price": 29.99,
          "features": [
            "Access to all features",
            "Unlimited storage",
            "24/7 priority support",
            "Advanced analytics tools"
          ]
        }
      ]
      
    return (
        <div>
            <h2 className="text-4xl">Prices:</h2>
            {
              priceOptions.map(option=><PriceOption key={option.id}></PriceOption>)
            }
        </div>
    );
};

export default PriceOptions;