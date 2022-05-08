
import MainRouter from "./MainRouter";
import { BrowserRouter } from "react-router-dom";

const Main = () => {
    return (
        <div>
            <BrowserRouter>
                <MainRouter/>
            </BrowserRouter>
        </div>
    )
}

export default Main;