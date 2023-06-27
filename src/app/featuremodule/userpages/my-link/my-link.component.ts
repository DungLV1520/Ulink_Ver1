import {DatePipe, registerLocaleData} from '@angular/common';
import { Component, PipeTransform} from '@angular/core';
import { Sort } from '@angular/material/sort';
import * as moment from 'moment';
import { routes } from 'src/app/core/helpers/routes/routes';
import { DataService } from 'src/app/shared/service/data.service';
import { ULinkService } from 'src/app/shared/service/ulink.service';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import localeVi from '@angular/common/locales/vi';
import {Clipboard} from "@angular/cdk/clipboard";
import {HotToastService} from "@ngneat/hot-toast";
registerLocaleData(localeVi);

interface RawClick {
  ip: string;
  city: string;
  country: string;
  isBot: boolean;
  deviceName: string;
  referer: string;
  userAgent: string;
  accessTime:any
}

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

  pageIdStreamingClick: any;
  intervalId: any;
  closeStreamingClick: boolean = true;
  urlResultULink: string = '';
  dataStreamingClick: RawClick[] = [];

  constructor(
    private DataService: DataService,
    private datePipe: DatePipe,
    private uLinkService: ULinkService,
    private modalService: NgbModal,
    private clipboard: Clipboard,
    private toast: HotToastService,
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

  loadingData(): void {
    this.getLink(1, this.pagesize);
    this.selectedDate = undefined;
  }

  getLink(pageN: number, pageSize: number, from?: string, to?: string): void {
    this.uLinkService
      .getLink(pageN - 1, pageSize, from, to)
      .subscribe((res: any) => {
        this.toast.success('Loading Link Success');
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

  viewStreamingClick(content: any, pageId: any) : void {
    this.pageIdStreamingClick = pageId;
    this.fetchDataStreamingClick();

    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    this.intervalId = setInterval(() => {
      this.fetchDataStreamingClick();
    }, 1500);

    this.modalService.open(content,{ size: 'xl', windowClass: 'modal-xl', scrollable: true, centered: true, backdrop: 'static' });
  }

  closeStreamingClickModal(): void {
    clearInterval(this.intervalId);
    this.modalService.dismissAll();
  }

  fetchDataStreamingClick() {
    this.uLinkService.getStreamingClick(this.pageIdStreamingClick, 20).subscribe((res: any) => {
      this.dataStreamingClick = res?.rawClicks;
      this.urlResultULink = res?.detailLink?.urlULink;
    });
  }

  copyToClipboard(value: any) {
    this.clipboard.copy(value);
    this.toast.success('Copy Value Success!');
  }
}