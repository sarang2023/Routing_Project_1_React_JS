import Headernew from "./Headernew";
import Footernew from "./Footernew";
import { Outlet } from "react-router-dom";

function Layoutnew()
{
    return(<div>
        <Headernew/>
        <section>
            <Outlet/>
        </section>
        <Footernew/>






    </div>)
}
export default Layoutnew;