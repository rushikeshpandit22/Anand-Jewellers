import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AboutUsComponent } from "./about-us.component";
import { AboutUsRoutingModule } from "./about-us-routing.module";
import { NavbarModule } from "../navbar/navbar.module";
import { FooterModule } from "../footer/footer.module";

@NgModule({
  imports: [CommonModule, AboutUsRoutingModule, NavbarModule, FooterModule],
  declarations: [AboutUsComponent]
})
export class AboutUsModule {}
