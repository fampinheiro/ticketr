interface Props {}

const Button: React.FC<Props> = ({ children }) => (
  <div
    className={`rounded m-auto mx-24 text-center text-gray-100 py-2 px-4 bg-green-700`}
  >
    {children}
  </div>
);

export default Button;
