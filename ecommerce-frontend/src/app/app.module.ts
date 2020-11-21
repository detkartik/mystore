import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderPlacementComponent } from './order-placement/order-placement.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { LoginComponent } from './auth/login/login.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ApiService} from './api.service';
import {HttpClientModule} from '@angular/common/http'
import { ToastrModule } from 'ngx-toastr';
import { SignupComponent } from './auth/signup/signup.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { ShopComponent } from './shop/shop.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { ContactusComponent } from './static/contactus/contactus.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    CartComponent,
    CheckoutComponent,
    OrderPlacementComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    SignupComponent,
    ShopComponent,
    WishlistComponent,
    ResetPasswordComponent,
    ContactusComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path:'shop',component:ShopComponent},
      { path: 'products', component: ProductsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'checkout', component: CheckoutComponent },
      { path: 'order-placement', component: OrderPlacementComponent },
      { path: 'my/orders',component:MyOrdersComponent},
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'wishlist',component: WishlistComponent},
      { path: 'admin/products', component: AdminProductsComponent },
      { path: 'admin/orders', component: AdminOrdersComponent },
      {path: 'reset',component:ResetPasswordComponent},
      {path:'contact',component:ContactusComponent}
    ]),
    NgbModule,
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent],
})

export class AppModule {}
