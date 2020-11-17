import {Component, Input, OnInit} from '@angular/core';
import {Categories} from './category';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  @Input() categories:Categories = [];

  constructor() { }

  ngOnInit(): void {
  }

}
