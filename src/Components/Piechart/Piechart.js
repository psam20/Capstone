 import React, { Component } from 'react';
 import './Piechart.css'
 import axios from 'axios';
 import { Pie } from 'react-chartjs-2';

class PieChart extends Component {
    
   constructor(props) {
       super(props);
       this.state = { 
            Data: {},
            products:[],
            chart:[],
            max:[],
            topValue:[],
            id:[],
            pieChartLabels:[]
     };
   }
   componentDidMount() {
    axios.get("http://localhost:3201/Products")
      .then(response =>
      {
        this.setState({products : response.data});
        console.log(this.state.products)
        for(var i=0;i<this.state.products.length;i++){
          this.state.chart.push(this.state.products[i].count)
        }
        var first = Math.min(...this.state.chart)
        var second=0,third=0,fourth=0,fifth=0
        for (i = 0; i < this.state.chart.length ; i++) 
        { 
            if (this.state.chart[i] > first) 
            { 
                fifth = fourth;
                fourth = third;
                third = second; 
                second = first; 
                first = this.state.chart[i]; 
                this.state.id.push(i)
            } 
            else if (this.state.chart[i] > second) 
            { 
                fifth =fourth;
                fourth = third;
                third = second; 
                second = this.state.chart[i]; 
                this.state.id.push(i)
            } 
       
            else if (this.state.chart[i] > third) 
            {
                fifth = fourth;
                fourth = third;
                third= this.state.chart[i]
                this.state.id.push(i)
            }
            else if (this.state.chart[i] > fourth)
            {
                fifth = fourth;
                fourth = this.state.chart[i];
                this.state.id.push(i)
            } 
            else if (this.state.chart[i] > fifth)
            {
                fifth = this.state.chart[i]
                this.state.id.push(i)
            }
        } 
        console.log(this.state.chart);
        this.setState({max:[first, second, third, fourth, fifth]});
        console.log(this.state.max);
        for(i=0;i<this.state.chart.length; i++){
          if(this.state.max[i]===this.state.chart[i])
            this.state.topValue.push(i);
        }
        console.log(this.state.topValue)
        console.log(this.state.id)
        for(i=0; i<this.state.id.length;i++){
          for(var j=0;j<this.state.products.length;j++){
          if(this.state.id[i]===j){
            this.state.pieChartLabels.push(this.state.products[j].name)
          }
          }
        }
        this.setState({
             Data: {
                 labels: this.state.pieChartLabels,
                 datasets: [
                     {
                         label: 'Top viewed products',
                         data: this.state.max,
                         backgroundColor: [
                             "green",
                             "yellow",
                             "Blue",
                             "Red",
                             "pink"
                         ],
                         hoverBackgroundColor: [
                             "green",
                             "yellow",
                             "Blue",
                             "Red",
                             "pink"
                       ],
                   }
               ]
             }
           });
       })
   };
render() {
   return (
       <div>
           <Pie width="400px" height="500px"
               data={this.state.Data}
               options={
                   { maintainAspectRatio: false }} />
       </div>
       )
   }
}  
export default PieChart;

