import { Component, OnInit} from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  constructor() { }

  private chart: am4charts.XYChart;

  ngOnInit(): void {
    //emplacement du graphique
    let chart = am4core.create("chartdiv", am4charts.XYChart);
    chart.paddingRight = 20;

    //données
    let data = [];
    let visits = 10;

    //pour mettre des trucs randoms dans les données
    for (let i = 1; i < 366; i++) {
      //on fait 366 jours avec des trucs randoms
      visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
      data.push({ date: new Date(2018, 0, i), name: "name" + i, value: visits });
    }

    //on envoie les données dans le graphique
    chart.data = data;

    //on construit l'axe des abscisses avec les dates
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;

    //axe des ordonnés avec le nombre de visites
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.minWidth = 35;

    //on nomme les axes
    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "date";
    series.dataFields.valueY = "value";

    series.tooltipText = "{valueY.value}";
    chart.cursor = new am4charts.XYCursor();

    let scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(series);
    chart.scrollbarX = scrollbarX;

    this.chart = chart;

  }

}
