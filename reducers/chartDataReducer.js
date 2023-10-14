

export function chartReducer(state, action) {
    
    var chartData = {data:[]};
    var year = new Date().getFullYear();
    switch (action.type) {
        case 'MAX':
            chartData = {data:[]};
            action.payload.forEach((price) => {
              price.data.forEach((dataPoint) => {
                chartData.data.push(dataPoint);
              });
            });
    
            return {
                ...state,
                type:"MAX",
                data: chartData.data,
            }
        case 'YEAR':
            chartData = {data:[]};
            action.payload.forEach((price) => {
              price.data.forEach((dataPoint) => {
                if(dataPoint.month.split(" ")[1]==year)
                {
                    chartData.data.push(dataPoint);
                }
              });
            });
    
            return {
                ...state,
                type:"YEAR",
                data: chartData.data,
            }
        case '2YEAR':
            chartData = {data:[]};
            action.payload.forEach((price) => {
              price.data.forEach((dataPoint) => {
                if(dataPoint.month.split(" ")[1]==year || dataPoint.month.split(" ")[1]==year-1)
                {
                    chartData.data.push(dataPoint);
                }
              });
            });
    
            return {
                ...state,
                type:"2YEAR",
                data: chartData.data,
            }
        case '5YEAR':
            chartData = {data:[]};
            action.payload.forEach((price) => {
              price.data.forEach((dataPoint) => {
                let dataPointYear = dataPoint.month.split(" ")[1];
                if(dataPointYear==year || dataPointYear==year-1 || dataPointYear==year-2 || dataPointYear==year-3 || dataPointYear==year-4)
                {
                    chartData.data.push(dataPoint);
                }
              });
            });
    
            return {
                ...state,
                type:"5YEAR",
                data: chartData.data,
            }

        default:
            return state
    }
}
