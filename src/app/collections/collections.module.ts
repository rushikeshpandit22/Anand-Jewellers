import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CollectionsComponent } from "./collections.component";
import { CollectionsRoutingModule } from "./collections-routing.module";
import { NavbarModule } from "../navbar/navbar.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FooterModule } from "../footer/footer.module";

@NgModule({
  imports: [
    CommonModule,
    CollectionsRoutingModule,
    NavbarModule,
    NgbModule,
    FooterModule
  ],
  declarations: [CollectionsComponent]
})
export class CollectionsModule {}
