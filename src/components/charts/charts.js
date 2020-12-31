import React, {useState, useEffect} from 'react';
import {BarChart, Bar, XAxis, YAxis, Legend} from 'recharts';

const Charts = ({data}) => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        if(data && data.length) {
            let modifiedata = data.map(item => {
               item.available = item.count > 0 ? item.count: 0;
               item.unavailable = 0; 
            })
            setChartData(modifiedata);
            console.log(modifiedata);
        }

    },[data])
    return (
        <>
        {console.log(data)}
        <BarChart width={600} height = {300} data={data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
            <XAxis dataKey='name'/>
            <YAxis />
            <Legend/>
            <Bar dataKey='count' fill="#8884d8"/>
        </BarChart>
        </>
    )
}

export default Charts;