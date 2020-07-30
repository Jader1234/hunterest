import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";

declare interface RouteInfo {
  path: string;
  title: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Painel de Dados"
  },
  {
    path: "/cadastro-produtos",
    title: "Cadastro de produtos"
   },
  {
    path: "/perfil",
    title: "Perfil de Restaurante"
  },
  {
    path: "/rtl",
    title: "JFJ Suporte"
  }
];

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {
  menuItems: any[];
  location: Location;
  private listTitles: any[];

  constructor(
    location: Location,
  ) {
    this.location = location;
  }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.listTitles = ROUTES.filter(listTitle => listTitle);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
  getTitle() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === "#") {
      titlee = titlee.slice(1);
    }

    for (var item = 0; item < this.listTitles.length; item++) {
      if (this.listTitles[item].path === titlee) {
        return this.listTitles[item].title;
      }
    }
    return "Dashboard";
  }
}
