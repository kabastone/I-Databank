import {RouterModule, Routes} from '@angular/router';
import {DataComponent} from './data/data.component';
import {DataStartComponent} from './data/data-start/data-start.component';
import {DataDetailComponent} from './data/data-detail/data-detail.component';
import {NgModule, ViewChild} from '@angular/core';
import {DataViewComponent} from './data/data-detail/data-view/data-view.component';
import {DataCategorieComponent} from './data/data-categorie/data-categorie.component';
import {DataListCategorieComponent} from './data/data-categorie/data-list-categorie/data-list-categorie.component';
import {DataListByCategorieComponent} from './data/data-categorie/data-list-by-categorie/data-list-by-categorie.component';
import {DataCartComponent} from './data/data-cart/data-cart.component';
import {UserComponent} from './user/user.component';
import {UserProfilComponent} from './user/user-profil/user-profil.component';
import {UserDashboardComponent} from './user/user-dashboard/user-dashboard.component';
import {PendingTransactionComponent} from './user/user-dashboard/pending-transaction/pending-transaction.component';
import {ViewedDataComponent} from './user/user-dashboard/viewed-data/viewed-data.component';
import {CompletedTransactionComponent} from './user/user-dashboard/completed-transaction/completed-transaction.component';
import {HomeComponent} from './home/home.component';
import {BarComponent} from './data/data-visualisation/bar/bar.component';
import {PieChartComponent} from './data/data-visualisation/pie-chart/pie-chart.component';
import {AuthentificationComponent} from './authentification/authentification.component';
import {ProfileEditComponent} from './user/user-profil/profile-edit/profile-edit.component';
import {EntrepriseEditComponent} from './user/user-profil/entreprise-edit/entreprise-edit.component';
import {VerificationComponent} from './user/user-profil/verification/verification.component';
import {OfferComponent} from './user/offer/offer.component';
import {BillsComponent} from './user/bills/bills.component';
import {MailBoxComponent} from './user/mail-box/mail-box.component';
import {AccountComponent} from './user/account/account.component';
import {UserManageComponent} from './user/account/user-manage/user-manage.component';
import {PaymentPreferenceComponent} from './user/account/payment-preference/payment-preference.component';
import {NotificationCenterComponent} from './user/account/notification-center/notification-center.component';
import {PolicyComponent} from './user/account/policy/policy.component';
import {SettingComponent} from './user/account/setting/setting.component';

const appRoutes: Routes = [
   { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'data-categorie', component: DataListCategorieComponent },
  {path: 'home/:categorie', component: DataListByCategorieComponent},
  { path: 'home/:categorie/:id', component: DataDetailComponent, children: [
      {path: 'view', component: DataViewComponent},
      {path: 'cart', component: DataCartComponent},
      {path: 'visualisation/pie-chart', component: PieChartComponent},
      {path: 'visualisation/bar', component: BarComponent}
    ]},
  {path: 'data-categorie/:categorie/:id/cart', component: DataCartComponent},
  { path: 'data', component: DataComponent, children: [
      { path: '', component: DataStartComponent },
    ] },
  { path: 'data/:id', component: DataDetailComponent, children: [
      {path: 'view', component: DataViewComponent},
      {path: 'cart', component: DataCartComponent},
      {path: 'visualisation/pie-chart', component: PieChartComponent},
      {path: 'visualisation/bar', component: BarComponent}
    ]},
  {path: 'user', component: UserComponent, children: [
      {path: 'offer', component: OfferComponent},
      {path: 'bills', component: BillsComponent, children: [
          {path: 'pending-transaction', component: PendingTransactionComponent},
          {path: 'viewed-data', component: ViewedDataComponent},
          {path: 'completed-transaction', component: CompletedTransactionComponent}
        ] },
      {path: 'mail-box', component: MailBoxComponent},
      {path: 'account', component: AccountComponent, children: [
          {path: 'user-manage', component: UserManageComponent},
          {path: 'payment-preference', component: PaymentPreferenceComponent},
          {path: 'notification-center', component: NotificationCenterComponent},
          {path: 'policy', component: PolicyComponent},
          {path: 'setting', component: SettingComponent},
        ]},
      { path: 'profile', redirectTo: 'profile/profile-edit', pathMatch: 'full' },
      {path: 'profile', component: UserProfilComponent, children: [
          {path: 'profile-edit', component: ProfileEditComponent},
          {path: 'entreprise-edit', component: EntrepriseEditComponent},
          {path: 'verification', component: VerificationComponent},
        ] },
      {path: 'dashboard', component: UserDashboardComponent}
    ]},
  {path: 'login', component: AuthentificationComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
