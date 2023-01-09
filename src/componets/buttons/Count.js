export default function Count({ classStyle, onButtonTouch, children, text }) {
  return (
    <button className={classStyle} onClick={onButtonTouch}>
      {children || text}
    </button>
  );
}
