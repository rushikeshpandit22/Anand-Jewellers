import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-collections",
  templateUrl: "./collections.component.html",
  styleUrls: ["./collections.component.css"]
})
export class CollectionsComponent implements OnInit {
  about_us: string;
  collection1: string;
  collection2: string;
  collection3: string;
  collection4: string;
  collection5: string;
  collection6: string;
  collection7: string;
  collection8: string;
  collection9: string;
  collection10: string;

  images: Array<string>;
  constructor() {
    this.about_us = "/assets/home/about-us.png";
    this.collection1 = "/assets/collections/collection1.jpg";
    this.collection2 = "/assets/collections/collection2.jpg";
    this.collection3 = "/assets/collections/collection3.jpg";
    this.collection4 = "/assets/collections/collection4.jpg";
    this.collection5 = "/assets/collections/collection5.jpg";
    this.collection6 = "/assets/collections/collection6.jpg";
    this.collection7 = "/assets/collections/collection7.jpg";
    this.collection8 = "/assets/collections/collection8.jpg";
    this.collection9 = "/assets/collections/collection9.jpg";
    this.collection10 = "/assets/collections/collection10.jpg";
    this.images = [
      
      "/assets/collections/slider1.jpg",
      "/assets/collections/slider2.jpg",
      "/assetscollections/slider3.jpg"
    ];
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
