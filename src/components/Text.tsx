interface Props {
  readonly strong?: boolean;
}

const Text: React.FC<Props> = ({ strong = false, children }) => (
  <p className={`text-gray-700 text-center my-4 ${strong ? "font-bold" : ""}`}>
    {children}
  </p>
);

export default Text;
