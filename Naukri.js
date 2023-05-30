import { BrowserRouter,Route, Routes } from "react-router-dom";
import Homenew from "./Homenew";
import './Naukri.css';
import Searchjobs from "./Searchjobs";
import Recruiters from "./Recruiters";
import Companies from "./Companies";
import Services from "./Services";
import Layoutnew from "./Layoutnew";
function Naukri()
{
    return(<div>
        <BrowserRouter>
        <Routes>
            <Route path="/"element={<Layoutnew/>}>
            <Route index element={<Homenew/>}/>
            <Route path="Homenew"element={<Homenew/>}/>
            <Route path="Searchjobs"element={<Searchjobs/>}/>
            <Route path="Recruiters"element={<Recruiters/>}/>
            <Route path="Companies"element={<Companies/>}/>
            <Route path="Services"element={<Services/>}/>
</Route>


            

        </Routes>
        </BrowserRouter>
    </div>)
}
export default Naukri;