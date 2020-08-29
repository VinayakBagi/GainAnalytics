import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SupplyChainComponent } from './supply-chain/supply-chain.component';
import { HealthCareComponent } from './health-care/health-care.component';
import { ManufacturingComponent } from './manufacturing/manufacturing.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'supply-chain', component: SupplyChainComponent },
  { path: 'health-care', component: HealthCareComponent },
  { path: 'manufacturing', component: ManufacturingComponent },
  { path: 'about-us', component: AboutUsComponent }
];
const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled'
};
@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
