import style from "./Navigation.module.scss";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

const Navigation = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav>
        <button onClick={() => navigate(-1)}>
          <IoArrowBack />
          Back
        </button>
      </nav>
    </>
  );
};
export default Navigation;
