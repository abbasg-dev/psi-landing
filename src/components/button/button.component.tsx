import "./button.scss";

type buttonProps = {
  imgSrc?: string;
  text?: string;
  altText?: string;
  click?: () => void;
};

const Button = (props: buttonProps) => {
  const { imgSrc, text, altText, click } = props;
  return (
    <button onClick={click}>
      {imgSrc && <img src={imgSrc} alt={altText} />}
      <span>{text}</span>
    </button>
  );
};

export default Button;
