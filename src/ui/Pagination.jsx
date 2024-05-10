function Pagination({ data }) {
  const totalCount = data.length;
  // const pageSize = 8;
  // const siblingCount = 1;
  // const totalPageCount = Math.ceil(totalCount / pageSize);

  return (
    <div className="pagination">
      <p className="pagination__text">
        Showing data <span>1</span> to <span>8</span> of{" "}
        <span>{totalCount}</span> entries
      </p>
    </div>
  );
}

export default Pagination;
