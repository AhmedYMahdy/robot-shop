import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { TemplateFormControlsComponent } from './user/template-form-controls/template-form-controls.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent, title: 'Home - Robots Shop'},
  {path: 'catalog', component: CatalogComponent, title: 'Catalog - Robots Shop'},
  {path: 'cart', component: CartComponent, title: 'Cart - Robots Shop'},
  {path: 'signIn', component: SignInComponent, title: 'Sign In - Robots Shop'},
  {path: 'form-control', component: TemplateFormControlsComponent, title: 'Form Control - Robots Shop'},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
