import { useLocation } from "react-router-dom";

const Pricing = () => {
  const location = useLocation();
  console.log(location);

  return (
    <h2>Pricing Page</h2>
  );
};

export default Pricing;