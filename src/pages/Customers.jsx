import { data } from "../data/data";

import Box from "../ui/Box";
import sprite from "../symbol-defs.svg";
import Button from "../ui/Button";
import Table from "../ui/Table";
import Row from "../ui/Row";
import Pagination from "../ui/Pagination";

function Customers() {
  return (
    <>
      <h1 className="title">Hello Vova 👋,</h1>

      <Box extraClass="--table">
        <header className="customers__heading">
          <div className="customers__container">
            <h2 className="customers__title">All customers</h2>
            <p className="customers__status">Active members</p>
          </div>

          <form action="#" className="customers__search">
            <Button className="customers__button">
              <svg className="customers__icon">
                <use href={sprite + "#icon-search"} />
              </svg>
            </Button>

            <input
              className="customers__input"
              type="text"
              placeholder="Search"
            />
          </form>
        </header>

        <Table>
          <Table.Header>
            <div>Customer name</div>
            <div>Company</div>
            <div>Phone Number</div>
            <div>Email</div>
            <div>Country</div>
            <div>Status</div>
          </Table.Header>

          <Table.Body
            data={data}
            render={(customer) => <Row key={customer.id} customer={customer} />}
          />

          <Table.Footer>
            <Pagination data={data} />
          </Table.Footer>
        </Table>
      </Box>
    </>
  );
}

export default Customers;
