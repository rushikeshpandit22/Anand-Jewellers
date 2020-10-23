import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-about-us",
  templateUrl: "./about-us.component.html",
  styleUrls: ["./about-us.component.css"]
})
export class AboutUsComponent implements OnInit {
  about_us: string;
  team1: string;
  team2: string;
  team3: string;
  team4: string;
  team: string;
  slider1: string;
  slider2: string;
  slider3: string;
  constructor() {
    this.about_us = "/assets/home/about-us.png";
    this.team = "/assets/about-us/team.jpg";
    this.team1 = "/assets/about-us/team-1.jpg";
    this.team2 = "/assets/about-us/team-2.jpg";
    this.team3 = "/assets/about-us/team-3.jpg";
    this.team4 = "/assets/about-us/team-4.jpg";
    this.slider1 = "/assets/about-us/slider1.jpg";
    this.slider2 = "/assets/about-us/slider2.jpg";
    this.slider3 = "/assets/about-us/slider3.jpg";
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
