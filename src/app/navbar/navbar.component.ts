import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { printMessage } from "../utilFunc/PrintConscoleMessage";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) {}
  public isOnHome = true;

  ngOnInit() {
    printMessage("Kia a rha he router me", this.router);
    printMessage("Kia a rha he router me", this.router.routerState);

    if (this.router.url === "/") {
      this.isOnHome = true;
    } else {
      this.isOnHome = false;
    }
  }
}
