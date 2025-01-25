import assets from "../../assets";
import styles from "./title.module.scss";

type titleProps = {
  title?: string;
};
const Title = (props: titleProps) => {
  const { title } = props;
  return (
    <div className={styles.title}>
      <img src={assets.star} alt="" />
      <p>{title}</p>
    </div>
  );
};

export default Title;
