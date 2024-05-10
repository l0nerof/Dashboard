import TableInfo from "./CustomerInfo";

function Row({ customer }) {
  const { customerName, company, phoneNumber, email, country, status } =
    customer;

  return (
    <div className="table__row">
      <TableInfo>{customerName}</TableInfo>
      <TableInfo>{company}</TableInfo>
      <TableInfo>{phoneNumber}</TableInfo>
      <TableInfo>{email}</TableInfo>
      <TableInfo>{country}</TableInfo>
      {status === true ? (
        <TableInfo modifier="--active">Active</TableInfo>
      ) : (
        <TableInfo modifier="--inactive">Inactive</TableInfo>
      )}
    </div>
  );
}

export default Row;
