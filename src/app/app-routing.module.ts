import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
const routes: Routes = [
  {
    path: "",
    children: [
      { path: "", loadChildren: "./home/home.module#HomeModule" },
      { path: "home", loadChildren: "./home/home.module#HomeModule" },
      {
        path: "about-us",
        loadChildren: "./about-us/about-us.module#AboutUsModule"
      },
      {
        path: "jewellery",
        loadChildren: "./jewellery/jewellery.module#JewelleryModule"
      },
      {
        path: "collections",
        loadChildren: "./collections/collections.module#CollectionsModule"
      },
      {
        path: "scheme",
        loadChildren: "./scheme/scheme.module#SchemeModule"
      },
      {
        path: "contact-us",
        loadChildren: "./contact-us/contact-us.module#ContactUsModule"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
