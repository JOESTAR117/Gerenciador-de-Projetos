import { Link } from "react-router-dom";
import { Btn } from "./LinkButtonStyled";

function LinkButton({ to, text }) {
  return (
    <Btn>
      <Link to={to} className="btn_bounce">
        {text}
      </Link>
    </Btn>
  );
}

export default LinkButton;
