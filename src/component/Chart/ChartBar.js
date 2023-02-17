import React from "react";
import '.ChartBar.css'

const ChartBar = (props) => {
    let barFillHight = '0%'

    if(props.max > 0){
        barFillHight = math.round((props.value / props.value) * 100) + '0';
    }

    return(
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" 
                style={{height:barFillHight}}
                ></div>
            </div>
            <div className="chart-bar__laber">{props.label}</div>
        </div>
    )
}

export default ChartBar;