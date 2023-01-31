import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';

export interface DashboardElement{
  name:String,
  enterprise:String,
  rest1:String,
  rest2:String,
  rest3:String,
  rest4:String,
  rest5:String,
  rest6:String
}

const ELEMENT_DATA: DashboardElement[]=[
  {name:'menu-SVC',enterprise:'0.0.3',rest1:'',rest2:'',rest3:'',rest4:'',rest5:'',rest6:''},
  {name:'Location-SVC',enterprise:'',rest1:'0.07',rest2:'0.0.2',rest3:'0.0.3',rest4:'',rest5:'',rest6:''},
];

@Component({
  selector: 'app-deployment-cxo',
  templateUrl: './deployment-cxo.component.html',
  styleUrls: ['./deployment-cxo.component.css']
})

export class DeploymentCXOComponent implements OnInit {
  displayedColumns: string[] = ['name', 'enterprise', 'rest1','rest2','rest3','rest4','rest5','rest6'];
  dataSource = ELEMENT_DATA;

  label1 = ['Microservices','Database','Microfrontend']

  constructor() { }

  ngOnInit() {
    this.Chart();
  }
  Chart() {
    Chart.pluginService.register({
      beforeDraw: function(chart:any) {
        var width = chart.chart.width,
            height = chart.chart.height,
            ctx = chart.chart.ctx;  
        ctx.restore();
        var fontSize = (height / 150).toFixed(2);
        ctx.font = fontSize + "em sans-serif";
        ctx.textBaseline = "middle";  
        var text = "88%",
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2.5;          
        ctx.fillText(text, textX, textY);
        ctx.save();
      }

    });
    new Chart("doughnut-Chart",{
      type:"doughnut",
      data :{
        labels:this.label1,
        datasets: [{
          data: [6,3,1],
          backgroundColor: [
            'darkblue',
            'red',
            'yellow'
          ]
        }]
      },
      options:{
        cutoutPercentage: 75,
        legend:{
          position:'bottom'
        }
      }
    })
    new Chart("doughnut-Chart2",{
      type:"doughnut",
      data :{
        labels:this.label1,
        datasets: [{
          data: [6,1.5,1.5],
          backgroundColor: [
            'rgb(91,194,54)',
            'rgb(250,218,94)',
            'rgb(11,11,69)'
          ]
        }]
      },
      options:{
        cutoutPercentage: 75,
        legend:{
          position:'bottom'
        }
      }
    })
    new Chart("doughnut-Chart3",{
      type:"doughnut",
      data :{
        labels:this.label1,
        datasets: [{
          data: [4,1,1],
          backgroundColor: [
            'rgb(91,194,54)',
            'rgb(250,218,94)',
            'rgb(11,11,69)'
          ]
        }]
      },
      options:{
        cutoutPercentage: 75,
        legend:{
          position:'bottom'
        }
      }
    })
    new Chart("doughnut-Chart4",{
      type:"doughnut",
      data :{
        labels:['Restaurants','Enterprice'],
        datasets: [{
          data: [13,7],
          backgroundColor: [
            '#6F2DAB',
            '#C19A6B'
          ]
        }]
      },
      options:{
        cutoutPercentage: 75,
        legend:{
          position:'bottom'
        }
      }
    })
    new Chart("doughnut-Chart5",{
      type:"doughnut",
      data :{
        labels:['Restaurants','Enterprice'],
        datasets: [{
          data: [6,4],
          backgroundColor: [
            '#6F2DAB',
            '#C19A6B'
          ]
        }]
      },
      options:{
        cutoutPercentage: 75,
        legend:{
          position:'bottom'
        }
      }
    })
    new Chart("doughnut-Chart6",{
      type:"doughnut",
      data :{
        labels:['Restaurants','Enterprice'],
        datasets: [{
          data: [1.25,.75],
          backgroundColor: [
            '#6F2DAB',
            '#C19A6B'
          ]
        }]
      },
      options:{
        cutoutPercentage: 75,
        legend:{
          position:'bottom'
        }
      }
    })
    new Chart("doughnut-Chart7",{
      type:"doughnut",
      data :{
        labels:['success','failure'],
        datasets: [{
          data: [89,11],
          backgroundColor: [
            '#6F2DAB',
            '#FF7F50'
          ]
        }]
      },
      options:{
        cutoutPercentage: 75,
        legend:{
          position:'bottom'
        }         
      }
    })
    new Chart("doughnut-Chart8",{
      type:"doughnut",
      data :{
        labels:['success','failure'],
        datasets: [{
          data: [50,1],
          backgroundColor: [
            '#6F2DAB',
            '#FF7F50'
          ]
        }]
      },
      options:{
        cutoutPercentage: 75,
        legend:{
          position:'bottom'
        }         
      }
    })
    new Chart("doughnut-Chart9",{
      type:"doughnut",
      data :{
        labels:['Rollbacks'],
        datasets: [{
          data: [2,0],
          backgroundColor: [
            '#6F2DAB',
            'white'
          ]
        }]
      },
      options:{
        cutoutPercentage: 75,
        legend:{
          position:'bottom'
        }         
      }
    })
  }

}
