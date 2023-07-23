import { Component, TemplateRef, ViewChild } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes/routes';
import { DataService } from 'src/app/shared/service/data.service';
import { ChartComponent } from 'ng-apexcharts';
import { ULinkService } from '../../../shared/service/ulink.service';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';
import { ngxLoadingAnimationTypes } from 'ngx-loading';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DatePipe],
})
export class DashboardComponent {
  @ViewChild('chart') chart!: ChartComponent;
  routes = routes;
  dashboarddata: any = [];
  dashboardreview: any = [];
  pieChartAgentType: any;
  pieChartStatisticDevice: any;
  columnWithDataChart: any;
  columnWithDataChartCountry: any;
  columnWithDataChartReference: any;
  columnWithDataChartClick: any;
  yourDateValue!: Date;
  allPage: any[] = [];
  idPage?: string;
  selectedDate!: any;
  public loadingTemplate!: TemplateRef<any>;
  public config = {
    animationType: ngxLoadingAnimationTypes.none,
    backdropBorderRadius: '3px',
  };
  loading = false;
  quotaData: any;

  constructor(
    private DataService: DataService,
    private datePipe: DatePipe,
    private uLinkService: ULinkService
  ) {
    this.dashboardreview = this.DataService.dashboardreview;
  }

  ngOnInit(): void {
    this.getQuota();
    this.getDateInput();
    this.getAllPage();
    this.clearFilter();
  }

  getQuota(): void {
    this.uLinkService.getQuota().subscribe((quota) => {
      this.quotaData = quota;
    });
  }

  getDateInput(): void {
    const currentDate = new Date();
    const fromDate = new Date();
    fromDate.setDate(currentDate.getDate() - 5);
    const toDate = currentDate;

    this.selectedDate = {
      from: fromDate,
      to: toDate,
    };
  }

  filterDashboard(from: string, to: string, idPage: string): void {
    this.getStatisticOverviewDashboard(from, to, idPage);
    this.getStatisticAgentType(from, to, idPage);
    this.getStatisticDevice(from, to, idPage);
    this.getStatisticCountry(from, to, idPage);
    this.getStatisticReference(from, to, idPage);
    this.getStatisticClick(from, to, idPage);
  }

  getAllPage(): void {
    this.uLinkService.getAllPage().subscribe({
      next: (res: any) => {
        this.allPage = res;
      },
    });
  }

  getStatisticOverviewDashboard(
    from: string,
    to: string,
    idPage: string
  ): void {
    this.loading = true;
    this.uLinkService
      .getStatisticOverviewDashboard(from, to, idPage)
      .pipe(
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe({
        next: (res: any) => {
          this.dashboarddata = [
            {
              img: 'assets/img/icons/verified.svg',
              title: 'Total Click',
              amount: `${res.totalClick}/${
                this.quotaData?.totalQuotaClick ?? 0
              }`,
            },
            {
              img: 'assets/img/icons/link.png',
              title: 'Total Link',
              amount: res.totalLink,
            },
            {
              img: 'assets/img/icons/country-icon.png',
              title: 'Total Country',
              amount: res.totalCountry,
            },
            {
              img: 'assets/img/icons/traffic-source.png',
              title: 'Total Privacy Domain',
              amount: res.totalPrivacyDomain,
            },
          ];
        },
      });
  }

  getStatisticAgentType(from: string, to: string, idPage: string): void {
    this._simplePieChartAgentType(
      '["#405189", "#0ab39c", "#f7b84b", "#f06548", "#299cdb"]'
    );
    this.uLinkService.getStatisticAgentType(from, to, idPage).subscribe({
      next: (res: any) => {
        this.pieChartAgentType.series = res.data;
        this.pieChartAgentType.labels = res.labels;
      },
    });
  }

  getStatisticDevice(from: string, to: string, idPage: string): void {
    this._pieChartStatisticDevice(
      '["#405189", "#0ab39c", "#f7b84b", "#f06548", "#299cdb"]'
    );
    this.uLinkService.getStatisticDevice(from, to, idPage).subscribe({
      next: (res: any) => {
        this.pieChartStatisticDevice.series = res.data;
        this.pieChartStatisticDevice.labels = res.labels;
      },
    });
  }

  getStatisticCountry(from: string, to: string, idPage: string): void {
    this.uLinkService.getStatisticCountry(from, to, idPage).subscribe({
      next: (res: any) => {
        this._columnWithDataChartCountry(
          '["#299cdb"]',
          res.data,
          res.categories
        );
      },
    });
  }

  getStatisticReference(from: string, to: string, idPage: string): void {
    this.uLinkService.getStatisticReference(from, to, idPage).subscribe({
      next: (res: any) => {
        this._columnWithDataChartReference('["#299cdb"]', res.data, res.labels);
      },
    });
  }

  getStatisticClick(from: string, to: string, idPage: string): void {
    this.uLinkService.getStatisticClick(from, to, idPage).subscribe({
      next: (res: any) => {
        this._columnWithDataChartClick(
          '["#299cdb"]',
          res.totalClicks,
          res.date
        );
      },
    });
  }

  searchDashboard(): void {
    const from = this.datePipe.transform(
      new Date(this.selectedDate.from),
      'dd/MM/yyyy'
    );
    const to = this.datePipe.transform(
      new Date(this.selectedDate.to),
      'dd/MM/yyyy'
    );

    if (!this.selectedDate) {
      return;
    }

    const formattedDateFrom = moment(from, 'DD/MM/YYYY').format('YYYYMMDD');
    const formattedDateTo = moment(to, 'DD/MM/YYYY').format('YYYYMMDD');

    this.filterDashboard(formattedDateFrom!, formattedDateTo!, this.idPage!);
  }

  clearFilter(): void {
    const currentDate = new Date();
    const pastDate = new Date(currentDate.getTime() - 5 * 24 * 60 * 60 * 1000);
    const formattedCurrentDate = this.datePipe.transform(
      currentDate,
      'yyyyMMdd'
    );
    const formattedPastDate = this.datePipe.transform(pastDate, 'yyyyMMdd');

    this.filterDashboard(formattedPastDate!, formattedCurrentDate!, undefined!);
    this.idPage = undefined;
    this.getDateInput();
  }

  private _simplePieChartAgentType(colors: any) {
    colors = this.getChartColorsArray(colors);
    this.pieChartAgentType = {
      series: [44, 55, 13, 43, 22],
      chart: {
        height: 300,
        type: 'pie',
      },
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
      legend: {
        position: 'bottom',
      },
      dataLabels: {
        dropShadow: {
          enabled: false,
        },
      },
      colors: colors,
    };
  }

  private _pieChartStatisticDevice(colors: any) {
    colors = this.getChartColorsArray(colors);
    this.pieChartStatisticDevice = {
      series: [44, 55, 13, 43, 22],
      chart: {
        height: 300,
        type: 'pie',
      },
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
      legend: {
        position: 'bottom',
      },
      dataLabels: {
        dropShadow: {
          enabled: false,
        },
      },
      colors: colors,
    };
  }

  private getChartColorsArray(colors: any) {
    colors = JSON.parse(colors);
    return colors.map(function (value: any) {
      var newValue = value.replace(' ', '');
      if (newValue.indexOf(',') === -1) {
        var color = getComputedStyle(document.documentElement).getPropertyValue(
          newValue
        );
        if (color) {
          color = color.replace(' ', '');
          return color;
        } else return newValue;
      } else {
        var val = value.split(',');
        if (val.length == 2) {
          var rgbaColor = getComputedStyle(
            document.documentElement
          ).getPropertyValue(val[0]);
          rgbaColor = 'rgba(' + rgbaColor + ',' + val[1] + ')';
          return rgbaColor;
        } else {
          return newValue;
        }
      }
    });
  }

  private _columnWithDataChartCountry(colors: any, seri: any, category: any) {
    colors = this.getChartColorsArray(colors);
    this.columnWithDataChartCountry = {
      series: [
        {
          name: 'Total Click',
          data: seri,
        },
      ],
      chart: {
        height: 350,
        type: 'bar',
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: 'top', // top, center, bottom
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val: any) {
          return val + '';
        },
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ['#adb5bd'],
        },
      },
      colors: colors,
      grid: {
        borderColor: '#f1f1f1',
      },
      xaxis: {
        categories: category,
        position: 'bottom',
        labels: {
          offsetY: -2,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          fill: {
            type: 'gradient',
            gradient: {
              colorFrom: '#D8E3F0',
              colorTo: '#BED1E6',
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            },
          },
        },
        tooltip: {
          enabled: true,
          offsetY: -35,
        },
      },
      fill: {
        gradient: {
          shade: 'light',
          type: 'horizontal',
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [50, 0, 100, 100],
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val: any) {
            return val + '';
          },
        },
      },
      title: {
        floating: true,
        offsetY: 320,
        align: 'center',
        style: {
          color: '#444',
          fontWeight: 500,
        },
      },
    };
  }

  private _columnWithDataChartReference(colors: any, seri: any, category: any) {
    colors = this.getChartColorsArray(colors);
    this.columnWithDataChartReference = {
      series: [
        {
          name: 'Total Click',
          data: seri,
        },
      ],
      chart: {
        height: 350,
        type: 'bar',
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: 'top', // top, center, bottom
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val: any) {
          return val + '';
        },
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ['#adb5bd'],
        },
      },
      colors: colors,
      grid: {
        borderColor: '#f1f1f1',
      },
      xaxis: {
        categories: category,
        position: 'bottom',
        labels: {
          offsetY: -2,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          fill: {
            type: 'gradient',
            gradient: {
              colorFrom: '#D8E3F0',
              colorTo: '#BED1E6',
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            },
          },
        },
        tooltip: {
          enabled: true,
          offsetY: -35,
        },
      },
      fill: {
        gradient: {
          shade: 'light',
          type: 'horizontal',
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [50, 0, 100, 100],
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val: any) {
            return val + '';
          },
        },
      },
      title: {
        floating: true,
        offsetY: 320,
        align: 'center',
        style: {
          color: '#444',
          fontWeight: 500,
        },
      },
    };
  }

  private _columnWithDataChartClick(colors: any, seri: any, category: any) {
    colors = this.getChartColorsArray(colors);
    this.columnWithDataChartClick = {
      series: [
        {
          name: 'Total Click',
          data: seri,
        },
      ],
      chart: {
        height: 350,
        type: 'bar',
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: 'top', // top, center, bottom
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val: any) {
          return val + '';
        },
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ['#adb5bd'],
        },
      },
      colors: colors,
      grid: {
        borderColor: '#f1f1f1',
      },
      xaxis: {
        categories: category,
        position: 'bottom',
        labels: {
          offsetY: -2,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          fill: {
            type: 'gradient',
            gradient: {
              colorFrom: '#D8E3F0',
              colorTo: '#BED1E6',
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            },
          },
        },
        tooltip: {
          enabled: true,
          offsetY: -35,
        },
      },
      fill: {
        gradient: {
          shade: 'light',
          type: 'horizontal',
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [50, 0, 100, 100],
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val: any) {
            return val + '';
          },
        },
      },
      title: {
        floating: true,
        offsetY: 320,
        align: 'center',
        style: {
          color: '#444',
          fontWeight: 500,
        },
      },
    };
  }
}
