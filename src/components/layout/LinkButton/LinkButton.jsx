import { Link } from "react-router-dom";
import { Btn } from "./LinkButtonStyled";

function LinkButton({to,text}){
    return(
        <Btn>
        <Link to={to} className ="btn">
        {text}
        </Link>
        </Btn>
    )
}

export default LinkButton;