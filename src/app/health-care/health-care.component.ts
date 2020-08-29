import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-health-care',
  templateUrl: './health-care.component.html',
  styleUrls: ['./health-care.component.css']
})
export class HealthCareComponent implements OnInit {
  healthCareData: { features: string[]; benefits: string[]; benefitImageUrl: string[]; mainImageUrl: string; };
  constructor() { }

  ngOnInit(): void {
    this.healthCareData = {
      features: [
        'Patient Admissions',
        'Cost Vs Income',
        'Emergency and Routine treatments',
        'Lab Performance',
        'Doctor Performance',
        'Bad Occupancy and Patient stay statistics',
        'Insurance claim ratios',
        'Staff Performance',
        'Physician, Equipment allocation and life cycle',
        'All other departments like CSSD, Physio, Dietary, Blood Bank, Medical Waste, Energy, Ambulance, Inventory store, etc. required to be analysed regularly. '
      ],
      benefits: [
        'Optimize resource planning. All Hospital or clinic, departments use inventory and other resources like power, oxygen, equipment, etc. for various purposes. With Analytics one can well plan usage, maintenance and replacement / procurement and avoid so many problems.',
        'Cost management and revenue monitoring. Its imperative for management to keep close eye on cost being incurred for any activity. It improves decision making capabilities and leads to no under or over investing on capex or opex. As a consequence entities succeed to revenue generation objective.',
        'Stake holders’ performance. For inclusive growth of any HSP or organization, various measures and dimensions require to be visualized and threshold to be set as benchmarking to monitor growth. These benchmarks would change over a period of time so data analytics become a  perpetual process to maintain agility across stakeholders. Few citable stakeholders.',
        'Patient Centric Modalities. Its very important to analyse treatments given and its success ratio. By collecting feedback in various forms and ways you can be lean enterprise and can win patient’s trust and confidence.'
      ],
      benefitImageUrl: [
        './assets/healthcare-benefit1.png',
        './assets/healthcare-benefit4.png'
      ],
      mainImageUrl: './assets/kpi.png'
    }
  }

}
