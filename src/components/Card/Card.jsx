import style from "./Card.module.scss";

const Card = ({ img, name, info = [], onClick }) => {
  return (
    <div className={style.wrap} onClick={onClick}>
      <div className={style.cardImg}>
        {/* <img src="" alt="" /> */}
        {img}
      </div>
      <div className={style.cardBody}>
        <h3>{name}</h3>
        <ul>
          {info.map((el) => (
            <li key={el.title}>
              <b>{el.title}</b>
              {el.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Card;
