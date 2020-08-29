import { Component, OnInit } from '@angular/core';
import { RadialChartOptions, ChartDataSets, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-supply-chain',
  templateUrl: './supply-chain.component.html',
  styleUrls: ['./supply-chain.component.css']
})
export class SupplyChainComponent implements OnInit {
  public pieChartLabels = ['Sales Q1', 'Sales Q2', 'Sales Q3', 'Sales Q4'];
  public pieChartData = [120, 150, 180, 90];
  public pieChartType = 'pie';

  public polarAreaChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
  public polarAreaChartData = [300, 500, 100, 40, 120];
  public polarAreaLegend = true;
  public polarAreaChartType = 'polarArea';

  public radarChartOptions: RadialChartOptions = {
    responsive: true,
  };
  public radarChartLabels: Label[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
  public radarChartData: ChartDataSets[] = [
    { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
  ];
  public radarChartType: ChartType = 'radar';
  supplyChainData: { features: string[]; benefits: string[]; benefitImageUrl: string; };
  constructor() { }

  ngOnInit(): void {
    this.supplyChainData = {
      features: [
        'RFM Analysis. This analysis helps you find out your most valuable Customers, Products, Companies (principals) in terms of recency, frequency and monetary values. With this your operational capabilities will see tremendous transformation in all aspects like financials and human values.',
        'MBA. With the Market basket analysis you can customize offers and well arrange / rearrange inventories within premises. These activities help achieve leanness in supply chain activities.',
        'Trends and Forecasting. Prepare well before things set to happen and set benchmarks to meet your objectives.',
        'Segmentation and Clustering. These analysis also helps in setting modalities to help your field and onshore employees better manage operations.',
        'Connected. Being able to access unstructured data from various channels, structured data from the Internet of Things (IoT) and more traditional data sets available through traditional ERP and B2B integration tools.',
        'Collaborative. Improving collaboration with suppliers increasingly means the use of cloud-based commerce networks to enable multi-enterprise collaboration and engagement.',
        'Comprehensive. Analytics capabilities must be scaled with data in real time. Insights will be comprehensive and fast.',
        'hi i am vinayak'
      ],
      benefits: [
        'Have 360° view of your transactions in seconds even with huge volume of data. Using latest technologies we enable you to achieve a scaled level of viewership on your data at your figure tips, no matter where you are moving.',
        'Understand Trends and figure out problems. Based on data you know trends and most accurate prediction of transactions going to happen.',
        'Achieve efficiency and accuracy in planning. With the help of analysis on SKUs, Customers, Geographies you can better plan your procurement, inventory and delivery across dimensions very efficiently and accurately.',
        'Get scaled with the lean Supply Chain. As a consequence you can set benchmarks and achieve the most lean status in your supply chain operations.',
        'Understand risks well and set measures for mitigation. With supply chain analytics we highlight risks you may face in your deals, onshore and offshore operations and recommend mitigations based on that. This helps avoid incurring losses.',
        'Insightful actionable recommendations. Supply chain analytics helps figure out exact problems and draws actionable recommendations to overcome them. It helps ideate, redefine and redesign operations flows. Data storytelling is very important piece of benefits because final decision makers will be more confident about their decisions.',
        'Gain better return on investment. Finally you are set to get better returns on your investment in Supply chain analytics. For reference on ROI visit : https://www.gartner.com/smarterwithgartner/why-supply-chain-analytics-is-a-must-have'
      ],
      benefitImageUrl: './assets/supplybenefit.jpg'
    }
  }

}
