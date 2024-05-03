import Box from "../ui/Box";
import sprite from "../symbol-defs.svg";

function Customers() {
  return (
    <>
      <h1 className="title">Hello Vova 👋,</h1>
      <Box extraClass="--table">
        <header className="table__heading">
          <div className="table__container">
            <h2 className="table__title">All customers</h2>
            <p className="table__status">Active members</p>
          </div>

          <label htmlFor="search" className="table__search">
            <svg>
              <use href={sprite + "#icon-search"} />
            </svg>
            <input id="search" type="text" placeholder="Search" />
          </label>
        </header>
      </Box>
    </>
  );
}

export default Customers;
