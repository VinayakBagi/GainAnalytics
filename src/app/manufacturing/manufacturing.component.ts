import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manufacturing',
  templateUrl: './manufacturing.component.html',
  styleUrls: ['./manufacturing.component.css']
})
export class ManufacturingComponent implements OnInit {
  manufacturingData: any;

  constructor() { }

  ngOnInit(): void {
    this.manufacturingData = {
      features: [
        'Equipment Worthwhile',
        'Cost of Goods Benchmarking',
        'Warehouse Activity',
        'Quality Control Index',
        'Process or Machine Up and Down time',
        'IoT Live Streaming',
        'Hourly, Daily, Weekly, Monthly, Quarterly, Yearly Trends',
        'Resource Optimization through Analysis (Energy, Water, Equipment, Machineries, Assemblies, Parts, Manpower, etc.)'
      ],
      benefits: [
        { data:'Equipment Effectiveness',
          subData:[
              'Equipment effectiveness',
              'Availability',
              'Quality',
              'Performance'
            ],
          baseline: `Machine learning techniques are quite efficient and can figure out problem causing factors
          very well, which consequently helps stake holders to take corrective actions with confidence.`,
          benefitImageUrl:'./assets/manufacturing-benefit1.png'
        },
        { data:'Warehouse Activity',
          subData:[
              'No. of items most and least moved',
              'Shelve occupancy ratio',
              'Avg. Order Value',
              'Avg. Order Turnaround time',
              'No. of workers needed'
            ],
          baseline:  `Smart Warehouse management is key to pivot growth line. Analytics keeps you agile and makes
          is very easy to accelerate your processes by optimizing and redefining workflow.`,
          benefitImageUrl:'./assets/manufacturing-benefit2.png'
        },
        { data:'Cost of Goods Benchmarking',
          subData:[
              'Cost of goods Vs. Market Avg.',
              'Lowest to highest price index',
              'Cost saving per category, item',
              'Avg. Unit Price',
              'Avg. Order Cost',
              'Avg. Units per Order'
            ],
          baseline: `Machine learning techniques are quite efficient and can figure out problem causing factors very
          well, which consequently helps stake holders to take corrective actions with confidence.`,
          benefitImageUrl:'./assets/manufacturing-benefit3.png'
        },
        { data:'Machine Runtime Statistics and Analytics',
          subData:[
              'Avg. Downtime',
              'Avg. Utilization',
              'Downtime Distribution by time',
              'Avg. per day utilization',
              'Avg. weekly utilization',
              'Defect ratio'
            ],
          baseline: `Machine runtime statistics and finding out root cause of problem can be achieved by machine
          learning techniques and corrective measures helps improve overall yield.`,
          benefitImageUrl:'./assets/manufacturing-benefit4.png'
        },
        { data:'IIoT Energy facts',
          subData:[
              'Avg. Power Distribution across equipment',
              'Prediction of Maintenance',
              'Energy Consumption'
            ],
          baseline: `Power distribution and Energy consumption statistics gives highly Actionable insights which
          can save lot of energy consumption By means of optimization of lifecycle of electrical equipment.`,
          benefitImageUrl:'./assets/manufacturing-benefit5.png'
        },
      ],
      benefitImageUrl: [
        './assets/healthcare-benefit1.png',
        './assets/healthcare-benefit4.png'
      ],
      mainImageUrl: './assets/benchmark.jpg'
    }
  }

}
