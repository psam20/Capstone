import React from 'react';
import { connect } from 'react-redux';
import { Pie } from 'react-chartjs-2';
import './Piechart.css';

class PieChart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {}
        }
    }

    compareValues = (key, order = 'asc') => {
        return function innerSort(a, b) {
            if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
                // property doesn't exist on either object
                return 0;
            }

            const varA = (typeof a[key] === 'string')
                ? a[key].toUpperCase() : a[key];
            const varB = (typeof b[key] === 'string')
                ? b[key].toUpperCase() : b[key];

            let comparison = 0;
            if (varA > varB) {
                comparison = 1;
            } else if (varA < varB) {
                comparison = -1;
            }
            return (
                (order === 'desc') ? (comparison * -1) : comparison
            );
        };
    }
    componentDidMount() {
        const TopFiveProducts = this.props.products.sort(this.compareValues("count", 'desc')).slice(0, 5);
        console.log(TopFiveProducts);
        const name=TopFiveProducts.map((p)=>p.name.toUpperCase());
        const count=TopFiveProducts.map(p=>p.count);

        this.setState({
                         data: {
                             labels: name,
                             datasets: [
                                 {
                                     label: 'Top viewed products',
                                     data: count,
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

    }


    render() {
        return (
            <div>
                <Pie width={400} height={500}
                    data={this.state.data}
                    options={
                        { maintainAspectRatio: false }} />
            </div>
        )
    }
}   

    const MapStateToProps = (state) => ({
        products: state.products.products
    })

    export default connect(MapStateToProps)(PieChart);




//  import React, { Component } from 'react';
//  import './Piechart.css'
//  import axios from 'axios';
//  import { Pie } from 'react-chartjs-2';

// class PieChart extends Component {

//    constructor(props) {
//        super(props);
//        this.state = { 
//             Data: {},
//             products:[],
//             chart:[],
//             max:[],
//             topValue:[],
//             id:[],
//             pieChartLabels:[]
//      };
//    }
//    componentDidMount() {
//     axios.get("http://localhost:3201/Products")
//       .then(response =>
//       {
//         this.setState({products : response.data});
//         console.log(this.state.products)
//         const arr1=[];
//         for(let i=0;i<this.state.products.length;i++){
//             arr1.push(this.state.products[i].count);

//         }
//         this.setState((state)=>({...state,chart:arr1}))
//         console.log(this.state.chart);
//         const arr2=arr1.sort((a,b)=>b-a).slice(0,5);
//         console.log(arr2);
//         this.setState((state)=>({...state,max:arr2}))
//         console.log(this.state.max);

//         const top_Value_Arr=[];
//         const Id_Arr=[];
//         for(let i=0;i<this.state.chart.length; i++){
//           if(this.state.max[i]===this.state.chart[i])
//              top_Value_Arr.push(i);
//              Id_Arr.push(this.state.products[i].id)

//         }
//         this.setState((state)=>({...state,topValue:top_Value_Arr}));
//         this.setState((state)=>({...state,id:Id_Arr}))
//         console.log(top_Value_Arr);
//         console.log(Id_Arr);
//         for(let i=0; i<this.state.id.length;i++){
//           for(var j=0;j<this.state.products.length;j++){
//           if(this.state.id[i]===j){
//             this.state.pieChartLabels.push(this.state.products[j].name)
//           }
//           }
//         }
//         this.setState({
//              Data: {
//                  labels: this.state.pieChartLabels,
//                  datasets: [
//                      {
//                          label: 'Top viewed products',
//                          data: this.state.max,
//                          backgroundColor: [
//                              "green",
//                              "yellow",
//                              "Blue",
//                              "Red",
//                              "pink"
//                          ],
//                          hoverBackgroundColor: [
//                              "green",
//                              "yellow",
//                              "Blue",
//                              "Red",
//                              "pink"
//                        ],
//                    }
//                ]
//              }
//            });
//        })
//    };
// render() {
//    return (
//        <div>
//            <Pie width={400} height={500}
//                data={this.state.Data}
//                options={
//                    { maintainAspectRatio: false }} />
//        </div>
//        )
//    }
// }  
// export default PieChart;
