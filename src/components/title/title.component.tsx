import Stars from "../stars/stars.component";
import styles from "./title.module.scss";

type titleProps = {
  title?: string;
};
const Title = (props: titleProps) => {
  const { title } = props;
  return (
    <div className={styles.title}>
      <Stars />
      <p>{title}</p>
    </div>
  );
};

export default Title;
