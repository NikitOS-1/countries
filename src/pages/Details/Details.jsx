import { useLocation } from "react-router-dom";

const Details = () => {
  const location = useLocation();
  const path = location.pathname;

  return <div>Details{path}</div>;
};
export default Details;
