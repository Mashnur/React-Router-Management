import PropTypes from 'prop-types';

const PriceOption = ({ option }) => {
    const { name, price, features, duration } = option;

    return (
        <div>
        
           <span className='text-2xl'>{price}</span> <span>/mon</span>
        </div>
    );
};

// PriceOption.propTypes = {
//     option: PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         name: PropTypes.string.isRequired,
//         price: PropTypes.number.isRequired,
//         features: PropTypes.arrayOf(PropTypes.string).isRequired,
//         duration: PropTypes.string.isRequired,
//     }).isRequired,
// };
PriceOption.propTypes={option:PropTypes.object

}
export default PriceOption;
