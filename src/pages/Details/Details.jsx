import axios from "axios";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { useEffect, useState } from "react";
import { searchByCountry } from "../../config";

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
        <nav>
          <button onClick={() => navigate(-1)}>
            <IoArrowBack />
            Back
          </button>
        </nav>
        <div>{name}</div>
      </div>
    </>
  );
};
export default Details;
