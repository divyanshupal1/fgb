import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { prices } from '@/sampledata/prices/data';

// const chartData = {data:[]};
// prices.forEach((price) => {
//   price.data.forEach((dataPoint) => {
//     chartData.data.push(dataPoint);
//   });
// });

export default function Chart({size,chartData}) {

  var interval=0;
  if(chartData.type=="YEAR"){
    interval=2;
  }
  if(chartData.type=="2YEAR"){
    interval=8;
  }
  if(chartData.type=="5YEAR"){
    interval=23;
  }
  if(chartData.type=="MAX"){
    interval=71;
  } 
  if(500<size.width && size.width<960){
    if(chartData.type=="YEAR"){
      interval=1;
    }
    if(chartData.type=="2YEAR"){
      interval=3;
    }
    if(chartData.type=="5YEAR"){
      interval=11;
    }
    if(chartData.type=="MAX"){
      interval=47;
    } 
  }




  if (!size.width) {
    return null;
  }

  console.log(chartData)

    return (
        <LineChart
          width={size.width}
          height={size.height}
          data={chartData.data}
          margin={{
            top: 5,
            right: 10,
            left:-20,
            bottom: 5,
          }}
        >
      
          <XAxis dataKey="month" fontSize={12} interval={interval} />
          <YAxis axisLine={false} fontSize={12}/>
          <Tooltip />
          <Line type="monotone" dataKey="price" stroke="#D8652D" dot={false} strokeWidth={2}/>
        </LineChart>

    );
  
}