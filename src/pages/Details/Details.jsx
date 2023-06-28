import axios from "axios";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { useEffect, useState } from "react";

const Details = ({ match }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name } = useParams();
  const path = location.pathname;

  const [country, setCountry] = useState(null);

  useEffect(() => {
    axios.get();
  }, [name]);

  const goBack = () => {
    navigate(-1);
  };
  return (
    <>
      <div>
        <button onClick={goBack}>
          <IoArrowBack />
          Back
        </button>
        {name}
      </div>
    </>
  );
};
export default Details;
