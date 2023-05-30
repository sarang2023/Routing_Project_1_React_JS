import React from "react";

function Searchjobs()
{
    return(<div>
        
        <section>
        <div className="searchjobs">
            <h2>GOIND</h2>
            <div className="location">
                <div className="what">
                    <h3>What</h3>
                    <h6>job title, keywords, or company</h6>
                    <input type="text"placeholder="Search this blog" className="blog1"/>
                    <input type="button"className="btn3"value="search"/>
                </div>
                <div className="where">
                    <h3>Where</h3>
                    <h6>city, state, or pin code</h6>
                    <input type="text"placeholder="Ahmedabad,Gujarat" className="blog1"/>
                    <input type="button"className="btn3"value="search"/>

                </div>

            </div>
                <div className="find"><input type="button"className="btn4"value="Find Jobs"/></div>
        </div>
        </section>
    </div>)
}
export default Searchjobs;