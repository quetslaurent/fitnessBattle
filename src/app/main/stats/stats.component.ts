import { Component, OnInit} from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import {TrainingsApiService} from '../../modele/trainings/repositories/trainings-api.service';
import {Trainings} from '../../modele/trainings/types/training';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  private chart: am4charts.XYChart;
  trainings : Trainings;

  constructor(private trainingService : TrainingsApiService) { }

  ngOnInit(): void {
    this.getTrainings();
  }

  private setGraph(){
    //emplacement du graphique
    let chart = am4core.create("chartdiv", am4charts.XYChart);
    chart.paddingRight = 20;

    //on construit l'axe des abscisses avec les dates
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;

    //axe des ordonnés avec le nombre de visites
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.minWidth = 5;

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

    this.setData();
  }

  //set data into the graph
  private setData(){
    //données
    let data = [];
    let visits = 0;

    //pour mettre des trucs randoms dans les données
    console.log(this.trainings);
    for (let i = 0; i < this.trainings.length; i++) {
      console.log(this.trainings[i].points);
      console.log(this.trainings[i].trainingDateValue);
      visits += this.trainings[i].points;
      data.push({ date: this.trainings[i].trainingDateValue, name: this.trainings[i].activityName, value: visits });
    }

    //on envoie les données dans le graphique
    this.chart.data = data;
  }

  private getTrainings() {
    this.trainingService.getByUserId(1)
      .subscribe(trainings => {this.trainings=trainings;this.setGraph();});
  }
}
