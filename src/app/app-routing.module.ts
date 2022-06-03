import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { ApplicationMobileOuWebComponent } from './pages/application-mobile-ou-web/application-mobile-ou-web.component';
import { DesignComponent } from './pages/design/design.component';
import { ECommerceComponent } from './pages/e-commerce/e-commerce.component';
import { RenfortComponent } from './pages/renfort/renfort.component';
import { SiteInternetComponent } from './pages/site-internet/site-internet.component';

const routes: Routes = [
  {path: '', redirectTo: 'accueil', pathMatch: 'full'},
  {path: 'accueil', component: AccueilComponent},
  {path: 'créer-site-internet', component: SiteInternetComponent},
  {path: 'application', component: ApplicationMobileOuWebComponent},
  {path: 'renfort', component: RenfortComponent},
  {path: 'design', component: DesignComponent},
  {path: 'e-commerce', component: ECommerceComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
