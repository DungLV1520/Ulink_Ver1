import { Component } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { routes } from 'src/app/core/helpers/routes/routes';
import { DataService } from 'src/app/shared/service/data.service';
import { ULinkService } from 'src/app/shared/service/ulink.service';

@Component({
  selector: 'app-my-listing',
  templateUrl: './my-listing.component.html',
  styleUrls: ['./my-listing.component.css'],
})
export class MyListingComponent {
  public routes = routes;
  public electronics: any = [];
  linkData: any[] = [];
  total = 10;
  page = 0;
  pagesize = 5;
  maxSize = 5;

  constructor(
    private DataService: DataService,
    private uLinkService: ULinkService,
  ) {
    this.electronics = this.DataService.electronicsList;
  }

  ngOnInit(): void {
    this.getLink(0,this.pagesize);
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

  getLink(pageN:number,pageSize:number): void {
    this.uLinkService.getLink(pageN-1,pageSize).subscribe((res: any) => {
      this.linkData = res.links;
      this.total = res.totalElements;
      this.page = pageN;
      this.pagesize = res.pageSize;
    });
  }

  getRowNumber(indexRow: number): number {
    return indexRow + 1 + (this.page - 1) * this.pagesize;
  }

  loadPage(e:any):void{
    this.getLink(e,this.pagesize)
  }

  viewStreamingClick() : void {

  }
}
