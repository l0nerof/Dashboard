import Empty from "./Empty";

function Table({ children }) {
  return <div className="table">{children}</div>;
}

function Header({ children }) {
  return <div className="table__header">{children}</div>;
}

function Body({ data, render }) {
  if (!data.length) return <Empty />;

  return <div className="table__body">{data.map(render)}</div>;
}

function Footer({ children }) {
  return <div className="table__footer">{children}</div>;
}

Table.Header = Header;
Table.Body = Body;
Table.Footer = Footer;

export default Table;
