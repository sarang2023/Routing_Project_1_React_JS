import { Link } from "react-router-dom";
function Headernew()
{
    return(<header>
        <ul>
            <li><img src="logo.png"alt="logo"/></li>
            <li><Link to="/Homenew">HOME</Link></li>
            <li><Link to="/Searchjobs">SEARCH JOBS</Link></li>
            <li><Link to="/Recruiters">RECRUITERS</Link></li>
            <li><Link to="/Companies">COMPANIES</Link></li>
            <li><Link to="/Services">SERVICES</Link></li>
            
            
        </ul>
    </header>)
}
export default Headernew;