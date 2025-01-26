import "./button.scss";

type buttonProps = {
  imgSrc?: string;
  text?: string;
  altText?: string;
  click?: () => void;
  btnClass?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

const Button = (props: buttonProps) => {
  const { imgSrc, text, altText, click, btnClass, onMouseEnter, onMouseLeave } =
    props;
  return (
    <button
      onClick={click}
      className={btnClass}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {imgSrc && <img src={imgSrc} alt={altText} />}
      <span>{text}</span>
    </button>
  );
};

export default Button;
