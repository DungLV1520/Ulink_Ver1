import { Component, ViewChild } from '@angular/core';
import { routes } from 'src/app/core/helpers/routes/routes';
import { DataService } from 'src/app/shared/service/data.service';
import {
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexChart,
  ApexXAxis,
  ChartComponent,
} from 'ng-apexcharts';
export type ChartOptions = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart | any;
  title: ApexTitleSubtitle | any;
  xaxis: ApexXAxis | any;
  dataLabels: any;
  animations: any;
  colors: any;
  toolbar: any;
  legend: any;
  markers: any;
  stroke: any;
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  public routes = routes;
  public dashboarddata: any = [];
  public dashboardreview: any = [];
  simplePieChart: any;
  columnWithDataChart: any;
  @ViewChild('chart') chart!: ChartComponent;



  constructor(private DataService: DataService) {
    this.dashboardreview = this.DataService.dashboardreview;
  }

  ngOnInit(): void {

    this.dashboarddata = [
      {
        img: 'assets/img/icons/verified.svg',
        title: 'Total Click',
        amount: '500',
      },
      {
        img: 'assets/img/icons/link.png',
        title: 'Total Link',
        amount: '15230',
      },
      {
        img: 'assets/img/icons/country-icon.png',
        title: 'Total Country',
        amount: '15',
      },
      {
        img: 'assets/img/icons/traffic-source.png',
        title: 'Total Source Reference',
        amount: '6',
      },
    ];

    this._simplePieChart(
      '["#405189", "#0ab39c", "#f7b84b", "#f06548", "#299cdb"]'
    );

    this._columnWithDataChart('["#299cdb"]');
  }

  private _simplePieChart(colors: any) {
    colors = this.getChartColorsArray(colors);
    this.simplePieChart = {
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

  private _columnWithDataChart(colors:any) {
    colors = this.getChartColorsArray(colors);
    this.columnWithDataChart = {
      series: [{
        name: "Inflation",
        data: [2.5, 3.2, 5.0, 10.1, 4.2, 3.8, 3, 2.4, 4.0, 1.2, 3.5, 0.8],
      }, ],
      chart: {
        height: 350,
        type: "bar",
        toolbar: {
            show: false,
        },
      },
      plotOptions: {
          bar: {
              dataLabels: {
                  position: "top", // top, center, bottom
              },
          },
      },
      dataLabels: {
          enabled: true,
          formatter: function (val:any) {
              return val + "%";
          },
          offsetY: -20,
          style: {
              fontSize: "12px",
              colors: ["#adb5bd"],
          },
      },
      colors: colors,
      grid: {
          borderColor: "#f1f1f1",
      },
      xaxis: {
          categories: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
          ],
          position: "top",
          labels: {
              offsetY: -18,
          },
          axisBorder: {
              show: false,
          },
          axisTicks: {
              show: false,
          },
          crosshairs: {
              fill: {
                  type: "gradient",
                  gradient: {
                      colorFrom: "#D8E3F0",
                      colorTo: "#BED1E6",
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
              shade: "light",
              type: "horizontal",
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
              formatter: function (val:any) {
                  return val + "%";
              },
          },
      },
      title: {
          floating: true,
          offsetY: 320,
          align: "center",
          style: {
              color: "#444",
              fontWeight: 500,
          },
      },
    };
  }
}
