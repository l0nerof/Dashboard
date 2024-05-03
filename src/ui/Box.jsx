function Box({ children, extraClass = "" }) {
  return (
    <div className={!extraClass ? "box" : `box box${extraClass}`}>
      {children}
    </div>
  );
}

export default Box;
