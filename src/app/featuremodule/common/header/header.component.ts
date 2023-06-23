import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { DataService } from 'src/app/shared/service/data.service';
import { routes } from 'src/app/core/helpers/routes/routes';
import { SidebarService } from 'src/app/shared/service/sidebar.service';
import { CommonService } from 'src/app/shared/service/common.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public routes = routes;
  base: string = '';
  page: string = '';
  last: string = '';

  public nav: boolean = false;
  header: Array<any> = [];
  sidebar: Array<any> = [];

  constructor(
    private data: DataService,
    private router: Router,
    private authService: AuthService,
    private sidebarService: SidebarService
  ) {
    this.header = this.data.header;
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) {
        this.getroutes(event);
      }
    });
    this.getroutes(this.router);
    this.authService.currentManagerSubject.subscribe((data)=>{
      if (data) {
        this.nav = false;
      } else {
        this.nav = true;
      }
    })
  }

  ngOnInit(): void {}

  private getroutes(route: any): void {
    let splitVal = route.url.split('/');
    this.base = splitVal[1];
    this.page = splitVal[2];
    this.last = splitVal[3];

    if (this.base == 'userpages') {
      this.nav = false;
    } else {
      this.nav = true;
    }
  }

  public toggleSidebar(): void {
    this.sidebarService.openSidebar();
  }
  public hideSidebar(): void {
    this.sidebarService.closeSidebar();
  }

  logout():void{
    this.authService.logout();
  }
}
