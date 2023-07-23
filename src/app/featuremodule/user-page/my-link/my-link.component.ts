import { DatePipe, registerLocaleData } from '@angular/common';
import { Component, PipeTransform, TemplateRef } from '@angular/core';
import { Sort } from '@angular/material/sort';
import * as moment from 'moment';
import { routes } from 'src/app/core/helpers/routes/routes';
import { DataService } from 'src/app/shared/service/data.service';
import { ULinkService } from 'src/app/shared/service/ulink.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import localeVi from '@angular/common/locales/vi';
import { Clipboard } from '@angular/cdk/clipboard';
import { HotToastService } from '@ngneat/hot-toast';
import { ngxLoadingAnimationTypes } from 'ngx-loading';
import { finalize } from 'rxjs';
registerLocaleData(localeVi);

interface RawClick {
  ip: string;
  city: string;
  country: string;
  isBot: boolean;
  deviceName: string;
  referer: string;
  userAgent: string;
  accessTime: any;
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
  pagesize = 10;
  maxSize = 5;
  selectedDate!: any;
  searchValue: string = '';

  pageIdStreamingClick: any;
  intervalId: any;
  urlResultULink: string = '';
  dataStreamingClick: RawClick[] = [];
  checkLoading = 0;
  loading = false;

  // Hide page
  pageIdHide: any;

  // Update page
  pageIdUpdate: any;
  originUrlUpdateSource: string = '';
  statusUpdate: boolean = true;
  originalLinkUpdate: string = '';
  noteUpdate: string = '';

  public loadingTemplate!: TemplateRef<any>;
  public config = {
    animationType: ngxLoadingAnimationTypes.none,
    backdropBorderRadius: '3px',
  };

  constructor(
    private DataService: DataService,
    private datePipe: DatePipe,
    private uLinkService: ULinkService,
    private modalService: NgbModal,
    private clipboard: Clipboard,
    private toast: HotToastService
  ) {
    this.electronics = this.DataService.electronicsList;
  }

  ngOnInit(): void {
    this.getLink(1, this.pagesize, this.searchValue);
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

    this.getLink(1, this.pagesize, this.searchValue, formattedDateFrom, formattedDateTo);
  }

  loadingData(): void {
    this.getLink(1, this.pagesize, this.searchValue);
    this.selectedDate = undefined;
  }

  getLink(pageN: number, pageSize: number, searchValue: string, from?: string, to?: string): void {
    this.loading = true;
    this.uLinkService
      .getLink(pageN - 1, pageSize, searchValue, from, to)
      .pipe(
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe((res: any) => {
        if (this.checkLoading === 0) {
          this.checkLoading = 1;
        }
        this.linkData = res.links;
        this.total = res.totalElements;
        this.page = pageN;
        this.pagesize = res.pageSize;
      });
  }

  loadPage(e: any): void {
    this.checkLoading = 0;
    this.getLink(e, this.pagesize, this.searchValue);
  }

  viewStreamingClick(content: any, pageId: any): void {
    this.pageIdStreamingClick = pageId;
    this.fetchDataStreamingClick();

    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    this.intervalId = setInterval(() => {
      this.fetchDataStreamingClick();
    }, 1500);

    this.modalService.open(content, {
      size: 'xl',
      windowClass: 'modal-xl',
      scrollable: true,
      centered: true,
      backdrop: 'static',
    });
  }

  editLink(content: any, pageId: any): void {
    this.pageIdUpdate = pageId;
    this.getDetailLink();

    this.modalService.open(content, {
      size: 'lg',
      windowClass: 'modal-lg',
      scrollable: true,
      centered: true,
      backdrop: 'static',
    });
  }

  hidePageId(content: any, pageId: any): void {
    this.pageIdStreamingClick = pageId;
    this.pageIdHide = pageId;
    this.modalService.open(content, {
      size: 'sm',
      windowClass: 'modal-sm',
      scrollable: true,
      centered: true,
      backdrop: 'static',
    });
  }

  closeModal(): void {
    clearInterval(this.intervalId);
    this.modalService.dismissAll();
  }

  updateLink() {
    if (!this.pageIdUpdate) {
        return;
    }

    const pageUpdate = {
        'pageId': this.pageIdUpdate,
        'urlOriginal': this.originalLinkUpdate,
        'isActive': this.statusUpdate,
        'tagIds': [],
        'note': this.noteUpdate
    };
    this.uLinkService.updateLink(this.pageIdUpdate, pageUpdate).subscribe((res: any) => {
      this.toast.success('Update Link Success');
      this.pageIdUpdate = null;
      this.modalService.dismissAll();
      this.loadingData();
    }, error => {
      this.toast.error('Update Link Failed');
    });
  }

  hideLink(): void {
    if (this.pageIdHide) {
      this.uLinkService.hideLink(this.pageIdHide).subscribe((res: any) => {
        this.toast.success('Hide Link Success');
        this.pageIdHide = null;
        this.modalService.dismissAll();
        this.loadingData();
      }, error => {
        this.toast.error('Hide Link Failed');
      });
    } else {
      this.toast.warning('Error hide link failed');
    }
  }

  fetchDataStreamingClick() {
    this.uLinkService.getStreamingClick(this.pageIdStreamingClick, 20)
      .subscribe((res: any) => {
        this.dataStreamingClick = res?.rawClicks;
        this.urlResultULink = res?.detailLink?.urlULink;
      });
  }

  getDetailLink() {
    this.uLinkService.getDetailPageId(this.pageIdUpdate).subscribe((res: any) => {
        this.urlResultULink = res?.originalUrl;
        this.statusUpdate = res?.isActive;
        this.originalLinkUpdate = res?.originalUrl;
        this.noteUpdate = res?.note;
    });
  }

  copyToClipboard(value: any) {
    this.clipboard.copy(value);
    this.toast.success('Copy Value Success!');
  }
}
