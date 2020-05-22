import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  flag: boolean = false;
  languange: string;
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'left',
      labels: {
        fontColor: 'white'
      }
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  pieChartLabels: Label[];
  pieChartData: number[];
  pieChartType: ChartType = 'pie';
  pieChartLegend = true;
  pieChartPlugins = [];
  pieChartColors = [
    {
      backgroundColor: ['rgba(0,255,0,0.3)', 'rgba(255,0,0,0.3)',],
    },
  ];

  constructor() { }

  ngOnInit(): void {
    this.loadInitialGraphic();
  }

  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  loadInitialGraphic() {
    this.pieChartLabels = [['Acertadas'], ['Fallidas']];
    this.pieChartData = [300, 500];
  }

  getLanguageSelected(languageAux: string) {
    this.languange = languageAux;
    this.flag = true;
    this.loadGraphicsByLanguage();
  }

  loadGraphicsByLanguage() {
    switch (this.languange) {
      case "Ingles":
        this.pieChartData = [110, 250];
        break;
      case "Frances":
        this.pieChartData = [288, 110];
        break;
      case "Italiano":
        this.pieChartData = [174, 100];
        break;
    }
  }


}
