
import PropTypes from 'prop-types';
const PriceOption = ({option}) => {
    const{price,name,features}=option;
    return (
        <div>
            <h1>
                <span className='text-5xl'>{price}</span>
            </h1>
        </div>
    );
};

PriceOption.propTypes={
    option: PropTypes.object
}

export default PriceOption;