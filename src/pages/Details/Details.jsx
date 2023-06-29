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

  useEffect(() => {
    axios.get(searchByCountry(name)).then(({ data }) => setCountry(data[0]));
  }, [name]);

  return (
    <>
      <div style={{ padding: "2rem" }}>
        <Navigation />
        {country && <Info {...country} />}
      </div>
    </>
  );
};
export default Details;
