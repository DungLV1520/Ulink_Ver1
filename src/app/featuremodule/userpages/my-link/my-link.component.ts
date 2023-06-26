import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Sort } from '@angular/material/sort';
import * as moment from 'moment';
import { routes } from 'src/app/core/helpers/routes/routes';
import { DataService } from 'src/app/shared/service/data.service';
import { ULinkService } from 'src/app/shared/service/ulink.service';

@Component({
  selector: 'app-my-listing',
  templateUrl: './my-link.component.html',
  styleUrls: ['./my-link.component.css'],
  providers: [DatePipe],
})
export class MyLinkComponent {
  public routes = routes;
  public electronics: any = [];
  linkData: any[] = [];
  total = 10;
  page = 0;
  pagesize = 5;
  maxSize = 5;
  selectedDate!: any;

  constructor(
    private DataService: DataService,
    private datePipe: DatePipe,
    private uLinkService: ULinkService
  ) {
    this.electronics = this.DataService.electronicsList;
  }

  ngOnInit(): void {
    this.getLink(1, this.pagesize);
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

  getTime(): void {
    console.log(this.selectedDate);

    const from = this.datePipe.transform(
      new Date(this.selectedDate.from),
      'dd/MM/yyyy'
    );
    const to = this.datePipe.transform(
      new Date(this.selectedDate.to),
      'dd/MM/yyyy'
    );

    const formattedDateFrom = moment(from, 'DD/MM/YYYY').format('YYYYMMDD');
    const formattedDateTo = moment(to, 'DD/MM/YYYY').format('YYYYMMDD');

    this.getLink(1, this.pagesize, formattedDateFrom, formattedDateTo);
  }

  clearFilter(): void {
    this.getLink(1, this.pagesize);
    this.selectedDate = undefined;
  }

  getLink(pageN: number, pageSize: number, from?: string, to?: string): void {
    this.uLinkService
      .getLink(pageN - 1, pageSize, from, to)
      .subscribe((res: any) => {
        this.linkData = res.links;
        this.total = res.totalElements;
        this.page = pageN;
        this.pagesize = res.pageSize;
      });
  }

  getRowNumber(indexRow: number): number {
    return indexRow + 1 + (this.page - 1) * this.pagesize;
  }

  loadPage(e: any): void {
    this.getLink(e, this.pagesize);
  }

  viewStreamingClick(): void {}
}
