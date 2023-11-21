const CardBack = ({ style, img, title, description }) => {
  return (
    <div className={style}>
      <img src={img} alt="" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default CardBack;
