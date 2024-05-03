import { useNavigate } from "react-router-dom";
import Box from "../ui/Box";

function Error() {
  const navigate = useNavigate();

  function handleClick() {
    navigate(-1);
  }

  return (
    <div className="error">
      <Box extraClass="--error">
        <h1 className="error__title">😔 Something went wrong...</h1>

        <button onClick={handleClick} className="error__btn">
          &larr; Go back
        </button>
      </Box>
    </div>
  );
}

export default Error;
