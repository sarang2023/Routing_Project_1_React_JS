import React from "react";

function Recruiters()
{
    return(<div>
       
       <section>
        <div className="recruiters">

        <div className="rec">
            <h3>Recruitments</h3>
        </div>
        </div>
        <div className="middle1">
            <input type="button"value="Search"id="btn5"/>
            <input type="button"value="Email/notifications"id="btn6"/>
        </div>

        <div className="joblist">
        <div className="job2">
        <div className="job1">
            <div className="num">01</div>
            <h1>Marketing jobs</h1>
            <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</h6>
        </div>
            <input type="button"value="Apply now"className="btn7"/>
           </div>

           <hr></hr> 
            

           <div className="job2">
        <div className="job1">
            <div className="num">02</div>
            <h1>Industrial jobs</h1>
            <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</h6>
        </div>
            <input type="button"value="Apply now"className="btn7"/>
           </div>

<hr></hr>



<div className="job2">
        <div className="job1">
            <div className="num">03</div>
            <h1>Corporate jobs</h1>
            <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</h6>
        </div>
            <input type="button"value="Apply now"className="btn7"/>
           </div>

<hr></hr>

<div className="job2">
        <div className="job1">
            <div className="num">04</div>
            <h1>Government jobs</h1>
            <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</h6>
        </div>
            <input type="button"value="Apply now"className="btn7"/>
           </div>




        </div>

       </section>
    
    </div>)
}
export default Recruiters;