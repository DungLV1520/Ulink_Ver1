import { Component } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { routes } from 'src/app/core/helpers/routes/routes';
import { DataService } from 'src/app/shared/service/data.service';
import { ULinkService } from 'src/app/shared/service/ulink.service';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-my-listing',
  templateUrl: './my-listing.component.html',
  styleUrls: ['./my-listing.component.css'],
})
export class MyListingComponent {
  public routes = routes;
  public electronics: any = [];
  linkData: any[] = [];

  constructor(
    private DataService: DataService,
    private uLinkService: ULinkService,
    private toastr: ToastrService
  ) {
    this.electronics = this.DataService.electronicsList;
  }

  ngOnInit(): void {
    this.getLink();
  }

  sortData(sort: Sort) {
    const data = this.electronics.slice();

    if (!sort.active || sort.direction === '') {
      this.electronics = data;
    } else {
      this.electronics = data.sort((a: any, b: any) => {
        const aValue = (a as any)[sort.active];
        const bValue = (b as any)[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
    }
  }

  getLink(): void {
    this.uLinkService.getLink().subscribe((res: any) => {
      this.linkData = res.links;
    });
  }

  viewStreamingClick() : void {

  }
}
