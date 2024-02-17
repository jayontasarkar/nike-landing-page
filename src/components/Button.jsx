const Button = ({ label, iconURL, type, fullWidth }) => {
  const generateColorClasses = () => {
    switch (type) {
      case 'primary':
        return 'bg-coral-red border-coral-red text-white';
      case 'secondary':
        return 'bg-white border-slate-gray text-slate-gray';
      default:
        return 'bg-coral-red border-coral-red text-white';
    }
  };

  return (
    <button
      className={`flex items-center justify-center gap-2 py-4 text-lg leading-none border rounded-full px-7 font-montserrat ${generateColorClasses()} ${
        fullWidth && 'w-full'
      }`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 rounded-full size-5"
        />
      )}
    </button>
  );
};

Button.defaultProps = {
  type: 'primary',
};

export default Button;
