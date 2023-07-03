import style from "./Card.module.scss";

const Card = ({ img, name, info = [], onClick }) => {
  return (
    <div className={style.wrap} onClick={onClick}>
      <div className={style.cardImg}>
        <img src={img} alt="Country" />
      </div>
      <div className={style.cardBody}>
        <h3>{name}</h3>
        <ul>
          {info.map((el) => (
            <li key={el.title}>
              <span>{el.title}</span>
              <span>{el.title}</span>
              {el.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Card;
