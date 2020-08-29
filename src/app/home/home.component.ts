import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homepageContent = [
    { title: 'Supply Chain',
      description: `If you go to a Supermarket and pick up a few items off the shelf from electronics and white goods or even clothes and look at the labels, the chances are that you will find them having been manufactured in China or Mexico. The coffee pods you buy to use for your everyday use comes from Africa. Computers have been shipped out of South American Factories and Soft furnishings on the shelves are from India and Hong Kong.
        Global markets are expanding beyond borders and re-defining the way demand and supplies are managed. Global companies are driven by markets across continents. To keep the cost of manufacturing down, they are forced to keep looking to set up production centers where the cost of raw materials and labor is cheap. Sourcing of raw materials and vendors to supply the right quality, quantity and at right price calls for dynamic procurement strategy spanning across countries.
        With the above scenario you find companies procuring materials globally from various vendors to supply raw materials to their factories situated in different continents. The finished goods out of these different factory locations then pass through various chains of distribution network involving warehouses, exports to different countries or local markets, distributors, retailers and finally to the end customer.
        In simple language, managing all of the above activities in tandem to manage demand and supply on a global scale is Supply Chain Management. As per definition SCM is the management of a network of all business processes and activities involving procurement of raw materials, manufacturing and distribution management of Finished Goods. SCM is also called the art of management of providing the Right Product, At the Right Time, Right Place and at the Right Cost to the Customer.`,
      mainUrl: './assets/supply-chain.jpg',
      imageOrder: '2',
      textOrder: '1',
      subtitle: 'Why SCM strategy is important for an Organization.',
      subDescription:`Supply Chain Strategies are the critical backbone to Business Organizations today. Effective Market coverage, Availability of Products at locations that hold the key to revenue recognition depends upon the effectiveness of Supply Chain Strategy rolled out. Very simply stated, when a product is introduced in the market and advertised, the entire market in the country and all the sales counters need to have the product where the customer can buy and take delivery. Any glitch in the product not being available at the right time can result in the drop in customer interest and demand which can be disastrous. Transportation network design and management assume importance to support sales and marketing strategy.
        Inventory control and inventory visibility are two very critical elements in any operations for these are the cost drivers and directly impact the bottom lines on the balance sheet. Inventory means value and is an asset to the company. Every business has a standard for inventory turnaround that is optimum for the business. Inventory turnaround refers to the number of times the inventory is sold and replaced over a period of twelve months. The health of the inventory turn relates to the health of business.
        In a global scenario, the finished goods inventory is held at many locations and distribution centers, managed by third parties. A lot of inventory would also be in the pipeline in transportation, besides the inventory with distributors and retail stocking points. Since any loss of inventory anywhere in the supply chain would result in loss of value, effective control of inventory and visibility of inventory gains importance as a key factor of Supply Chain Management function`,
      subUrl: './assets/call-to-action-bg.jpg'
    },
    { title: 'Health Care',
      description: `Gone are the days when patients were just … well, patients. In today’s era
        of instant and digital everything, patients see themselves as consumers of
        healthcare services, products, and experiences.
        Patients want to clearly understand what they are receiving, how, and why.
        In fact, 1 in 5 patients want to be told about their healthcare costs upfront,
        while 75 percent desire to be involved in key treatment decisions.
        Patients desire better security and more privacy. They demand that their
        personal information and medical records are secure and safe. More importantly,
        patients want increased control in how their health data is handled and shared.
        So how can providers reach the demands of modern day patients? It’s simple
        - with robust healthcare analytics.
        With better healthcare analytics, hospitals and healthcare providers can treat
        patients better and offer the much-needed holistic patient experiences.`,
      mainUrl: './assets/healthcare.jpg',
      imageOrder: '1',
      textOrder: '2',
      subtitle: 'Healthcare analytics - a quick definition.',
      subDescription:`Healthcare analytics refers to the collection and interpretation of various
      data points designed to improve the patient experience, decrease readmission
      rates and provide better quality of care. When done right, healthcare analytics
      result in health cost reduction, patient satisfaction and quality improvements.
      As healthcare experiences move into the digital space, and as more patients embrace telemedicine and telehealth, the overall user experience has become more critical to survival than ever before.
      That’s why providers and payers must really focus their attention on healthcare analytics that determine the quality of the patient experience.
      Healthcare analytics help providers better understand how users engage with their experiences, products, and services. When all’s said and done, healthcare providers and health techs can leverage user insights (informed by UX analytics) to make their experiences and products better.`,
      subUrl: './assets/healthcare-bg.jpg'
    },
    { title: 'Manufacturing',
      description: `Most manufacturers have already made the most obvious changes to streamline their operations,
      using traditional methods to eke as much productivity out of their supply chains and plants as possible.
      To do even more with less in a slow-growth and uncertain environment, however, companies must look for 
      new ways to boost the productivity and profitability of their operations.
      There’s one significant asset that manufacturers have not yet optimized: their own data.
      Process industries generate enormous volumes of data, but many have failed to make use of this
      mountain of potential intelligence. Historically, manufacturers have lagged other industries in their IT capabilities.
      However, thanks to cheaper computational power and rapidly advancing analytics opportunities,
      process manufacturers can put that data to work, gathering information from multiple data sources and
      taking advantage of machine learning models and visualization platforms to uncover new ways to optimize
      their processes from the sourcing of raw materials to the sale of their finished products.
      Advanced analytics also help manufacturers solve previously impenetrable problems and reveal those that
      they never knew about, such as hidden bottlenecks or unprofitable production lines.
      here are three applications of advanced analytics in particular that together are
      powerful tools for maximizing the physical and financial performance of manufacturers’ assets and
      often-complex supply chains.`,
      mainUrl: './assets/manufacturing.jpg',
      imageOrder: '2',
      textOrder: '1',
      subtitle: 'Manufacturing analytics - a quick definition.',
      subDescription:`Healthcare analytics refers to the collection and interpretation of various
      data points designed to improve the patient experience, decrease readmission
      rates and provide better quality of care. When done right, healthcare analytics
      result in health cost reduction, patient satisfaction and quality improvements.
      As healthcare experiences move into the digital space, and as more patients embrace telemedicine and telehealth, the overall user experience has become more critical to survival than ever before.
      That’s why providers and payers must really focus their attention on healthcare analytics that determine the quality of the patient experience.
      Healthcare analytics help providers better understand how users engage with their experiences, products, and services. When all’s said and done, healthcare providers and health techs can leverage user insights (informed by UX analytics) to make their experiences and products better.`,
      subUrl: './assets/manufacturing-bg.png'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
