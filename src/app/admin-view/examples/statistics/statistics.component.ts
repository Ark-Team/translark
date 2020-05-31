import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { ServiceService } from 'app/service/service.service';


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  flag: boolean = false;
  flagFull: boolean = false;
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

  constructor(public service: ServiceService) { }

  ngOnInit(): void {
    this.getEstadisticas();
  }

  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  getEstadisticas(){
    this.pieChartLabels = [['Acertadas'], ['Fallidas']];
    this.service.getEstadisticas().subscribe(data=>{
      this.pieChartData = [data.acetadas, data.fallidas];
      this.flagFull = true;
    })
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
