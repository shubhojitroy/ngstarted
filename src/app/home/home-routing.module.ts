import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome.component';
import { TermsOfUseComponent } from './terms-of-use.component';
import { PrivacyPolicyComponent } from './privacy-policy.component';
import { PageNotFoundComponent } from './page-not-found.component';

const routes: Routes = [
  { path: 'home', component: WelcomeComponent },
  { path: 'welcome', redirectTo: 'home', pathMatch: 'full' },
  { path: 'terms-of-use', component: TermsOfUseComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
