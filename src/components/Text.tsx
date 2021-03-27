interface Props {
  readonly strong?: boolean;
}

const Text: React.FC<Props> = ({ strong = false, children }) => (
  <p className={`text-gray-700 text-center ${strong ? "font-bold" : ""}`}>
    {children}
  </p>
);

export default Text;
