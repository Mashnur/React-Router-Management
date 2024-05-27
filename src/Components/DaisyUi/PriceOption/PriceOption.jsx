import PropTypes from 'prop-types';




const PriceOption = ({ option }) => {
    const { name, price, features, duration } = option;

    return (
        <div className='bg-blue-400 rounded text-center flex-col'>
        
           <span className='text-5xl '>{price}</span> <span className='text-5xl'>/mon</span>
           <h3>{name}</h3>
           <ul>
                {features.map((feature, index) => (
                    <li key={index}>{feature}


                   
;
</li>
                ))}
            </ul>
            <button className='bg-green-500 w-full py-2 mt-12 rounded-lg hover:bg-green-900'>Buy Now</button>
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
