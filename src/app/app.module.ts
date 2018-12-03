import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';





import { HeaderComponent } from './header/header.component';
import { DataComponent } from './data/data.component';
import { DataListComponent } from './data/data-list/data-list.component';
import { DataDetailComponent } from './data/data-detail/data-detail.component';
import { DataItemComponent } from './data/data-list/data-item/data-item.component';
import { DataStartComponent } from './data/data-start/data-start.component';
import {DataService} from './data/data.service';
import { DataViewComponent } from './data/data-detail/data-view/data-view.component';
import { DataCategorieComponent } from './data/data-categorie/data-categorie.component';
import { DataListCategorieComponent } from './data/data-categorie/data-list-categorie/data-list-categorie.component';
import { CategorieItemComponent } from './data/data-categorie/data-list-categorie/categorie-item/categorie-item.component';
import { DataListByCategorieComponent } from './data/data-categorie/data-list-by-categorie/data-list-by-categorie.component';
import {DropdownDirective} from './share/dropdown.directive';
import { DataCartComponent } from './data/data-cart/data-cart.component';
import { UserComponent } from './user/user.component';
import { UserProfilComponent } from './user/user-profil/user-profil.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { PendingTransactionComponent } from './user/user-dashboard/pending-transaction/pending-transaction.component';
import { CompletedTransactionComponent } from './user/user-dashboard/completed-transaction/completed-transaction.component';
import { ViewedDataComponent } from './user/user-dashboard/viewed-data/viewed-data.component';
import { BannerComponent } from './banner/banner.component';
import { SidebarLeftComponent } from './sidebar-left/sidebar-left.component';
import { MenuComponent } from './menu/menu.component';
import { SidebarLeftItemComponent } from './sidebar-left/sidebar-left-item/sidebar-left-item.component';
import { HomeComponent } from './home/home.component';
import { DataStatsComponent } from './data/data-stats/data-stats.component';
import { EventComponent } from './event/event.component';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import { VisualisationComponent } from './data/data-visualisation/visualisation.component';
import { BarComponent } from './data/data-visualisation/bar/bar.component';
import { PieChartComponent } from './data/data-visualisation/pie-chart/pie-chart.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { ProfileEditComponent } from './user/user-profil/profile-edit/profile-edit.component';
import { EntrepriseEditComponent } from './user/user-profil/entreprise-edit/entreprise-edit.component';
import { VerificationComponent } from './user/user-profil/verification/verification.component';
import { OfferComponent } from './user/offer/offer.component';
import { BillsComponent } from './user/bills/bills.component';
import { MailBoxComponent } from './user/mail-box/mail-box.component';
import { FooterComponent } from './footer/footer.component';
import { AccountComponent } from './user/account/account.component';
import { UserManageComponent } from './user/account/user-manage/user-manage.component';
import { PaymentPreferenceComponent } from './user/account/payment-preference/payment-preference.component';
import { NotificationCenterComponent } from './user/account/notification-center/notification-center.component';
import { PolicyComponent } from './user/account/policy/policy.component';
import { SettingComponent } from './user/account/setting/setting.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DataComponent,
    DataListComponent,
    DataDetailComponent,
    DataItemComponent,
    DataStartComponent,
    DataViewComponent,
    DataCategorieComponent,
    DataListCategorieComponent,
    CategorieItemComponent,
    DataListByCategorieComponent,
    DropdownDirective,
    DataCartComponent,
    UserComponent,
    UserProfilComponent,
    UserDashboardComponent,
    PendingTransactionComponent,
    CompletedTransactionComponent,
    ViewedDataComponent,
    BannerComponent,
    SidebarLeftComponent,
    MenuComponent,
    SidebarLeftItemComponent,
    HomeComponent,
    DataStatsComponent,
    EventComponent,
    VisualisationComponent,
    BarComponent,
    PieChartComponent,
    AuthentificationComponent,
    ProfileEditComponent,
    EntrepriseEditComponent,
    VerificationComponent,
    OfferComponent,
    BillsComponent,
    MailBoxComponent,
    FooterComponent,
    AccountComponent,
    UserManageComponent,
    PaymentPreferenceComponent,
    NotificationCenterComponent,
    PolicyComponent,
    SettingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatChipsModule,
    NgbDropdownModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
