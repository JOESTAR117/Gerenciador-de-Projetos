import loading from '../../../images/Dollar gold coin.gif'
import { Loader_container } from './LoadingStyled';

function Loading(){
    return(
        <Loader_container>
            <img  src={loading} alt="loading" />
        </Loader_container>
    )
}

export default Loading;