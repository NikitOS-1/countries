import axios from "axios";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { searchByCountry } from "../../config";
import Navigation from "./Navigation/Navigation";
import Info from "./Info/Info";

const Details = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name } = useParams();
  const path = location.pathname;
  const [country, setCountry] = useState(null);
  console.log(country);

  useEffect(() => {
    axios.get(searchByCountry(name)).then(({ data }) => setCountry(data[0]));
  }, [name]);

  return (
    <>
      <div>
        <Navigation />
        <Info name={name} />
      </div>
    </>
  );
};
export default Details;
