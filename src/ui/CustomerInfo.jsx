function TableInfo({ children, modifier }) {
  return (
    <p className={modifier ? `table__info${modifier}` : "table__info"}>
      {children}
    </p>
  );
}

export default TableInfo;
