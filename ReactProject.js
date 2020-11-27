import React from 'react'
import'./style.css';


class DaydayChange extends React.Component{

    render() {
        
        let curDate = new Date();
    curDate = curDate.getHours();
    let greeting  = "";
    const cssStyle = {};

    if(curDate >=1 && curDate < 12) {
        greeting = "Good Morning ";
        cssStyle.color = "green";
    }else if(curDate>=12 && curDate < 19) {
        greeting = "Good Aftrnoon";
        cssStyle.color = "orange";
    }else {
        greeting = "Good Night";
        cssStyle.color = 'Black';
    }

        return(
            <div>
                <h1>Hi Sir,<span style = {cssStyle}> {greeting}</span> </h1>
               
            </div>
        )
    }
}
export default DaydayChange