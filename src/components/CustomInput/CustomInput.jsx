
import PropTypes from 'prop-types'

// eslint-disable-next-line react/prop-types
const CustomInput = ({ placeholder, type, name, label, id }) => {
  return (
    <div>
      <label className="block mb-2 " htmlFor={name}>
        { label || placeholder}
      </label>
      <input
        className="w-full p-2 border rounded-md focus:outline-[#9856AC]"
        type={type}
        name={name}
        id={id}
        placeholder={placeholder || label}
      />
    </div>
  );
};

CustomInput.propTypes = {}

export default CustomInput