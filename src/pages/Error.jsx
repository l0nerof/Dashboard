import { useNavigate } from "react-router-dom";
import Box from "../ui/Box";
import Button from "../ui/Button";

function Error() {
  const navigate = useNavigate();

  function handleClick() {
    navigate(-1);
  }

  return (
    <div className="error">
      <Box extraClass="--error">
        <h1 className="error__title">😔 Something went wrong...</h1>

        <Button onClick={handleClick} className="error__btn">
          &larr; Go back
        </Button>
      </Box>
    </div>
  );
}

export default Error;
