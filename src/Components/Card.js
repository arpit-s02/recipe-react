import styles from "../Styles/card.module.css";

const Card = ({ item }) => {
  const label = item.recipe.label;

  const nameArray = label.split(" ", 2);
  let itemName = nameArray[0] + " ";
  if (nameArray[1] !== undefined) {
    itemName += nameArray[1];
  }

  return (
    <div className={styles.allCardsContainer}>
      <div className={styles.cardContainer}>
        <div className={styles.recipeImage}>
          <img src={item.recipe.image} alt="" />
        </div>
        <div className={styles.recipeInfo}>
          <span> {itemName} </span>
          <a href="/">
            <button style={{ cursor: "pointer" }}> See More </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
