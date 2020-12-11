import { Component, OnInit } from '@angular/core';
import {Activities, Activity} from '../../modele/activities/types/activity';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Categories} from '../../modele/categories/types/category';
import {Units} from '../../modele/units/types/unit';
import {ActivityToManage} from '../../modele/activities/types/activityToManage';
import {ActivitiesApiService} from '../../modele/activities/repositories/activities-api.service';
import {CategoriesApiService} from '../../modele/categories/repositories/categories-api.service';
import {UnitApiService} from '../../modele/units/repositories/unit-api.service';

@Component({
  selector: 'app-activity-managment',
  templateUrl: './activity-managment.component.html',
  styleUrls: ['./activity-managment.component.css']
})
export class ActivityManagmentComponent implements OnInit {

  constructor(private activityService : ActivitiesApiService,
              private categoryService : CategoriesApiService,
              private unitService : UnitApiService,
              private fb : FormBuilder) { }

  ngOnInit(): void {
    this.getCategories();
    this.getActivities(1);
    this.getUnits();
  }

  //activity list
  activities:Activities;

  activityForm: FormGroup = this.fb.group({
    name:['', Validators.required],
    repetitions:['', Validators.required],
    unitId:['', Validators.required]
  });

  activityUpdateForm: FormGroup = this.fb.group({
    name:['', Validators.required],
    repetitions:['', Validators.required],
    categoryId:['', Validators.required],
    unitId:['', Validators.required]
  });

  bufferActivity:Activity = {name:"Activity name",repetitions:0,categoryName:"",unitType:""};

  activityIdUpdate:number;
  isUpdateVisible:boolean=false;

  //category list
  categories:Categories;

  //ADD category

  categoryForm:FormGroup = this.fb.group({
    name:['', Validators.required]
  });

  categoryIdSelected:number;

  //unit list

  units : Units;
  unitIdSelected:number=1;

  unitForm: FormGroup= this.fb.group({
    type:['', Validators.required]
  });

  //CATEGORIES

  getCategories() {
    this.categoryService.query().subscribe(categories => this.categories = categories);
  }

  addCategory() {
    this.categoryService.create(this.categoryForm.value).subscribe();
    document.location.reload();
  }

  //ACTIVITIES

  getActivities(id : number) {
    this.categoryIdSelected = id;
    this.activityService.getByCategoryId(id).subscribe(activities => this.activities = activities);
  }

  removeActivity(id: number) {
    if(window.confirm("Are you sure to delete?")) {
      this.activityService.delete(id).subscribe();
      document.location.reload();
    }
  }

  addActivity() {
    let act:ActivityToManage = {
      name : this.activityForm.controls['name'].value,
      repetitions : this.activityForm.controls['repetitions'].value,
      categoryId : this.categoryIdSelected,
      unitId : this.unitIdSelected,
    }
    this.activityService.create(act).subscribe();
    document.location.reload();
  }

  //UNITS

  getUnits() {
    this.unitService.query().subscribe(units => this.units = units);
  }

  changeUnitIdCreate() {
    let value = (<HTMLSelectElement>document.getElementById('unitSelectorCreate')).value;
    this.unitIdSelected=Number(value);
  }

  addUnit() {
    this.unitService.create(this.unitForm.value).subscribe();
    document.location.reload();
  }

  updateActivity() {
    let act:ActivityToManage = {
      name : this.activityUpdateForm.controls['name'].value,
      repetitions : this.activityUpdateForm.controls['repetitions'].value,
      categoryId : this.categoryIdSelected,
      unitId : this.unitIdSelected,
    }
    this.activityService.update(this.activityIdUpdate,act).subscribe();
  }

  changeUnitIdUpdate() {
    let value = (<HTMLSelectElement>document.getElementById('unitSelectorUpdate')).value;
    this.unitIdSelected=Number(value);
  }

  changeCategoryIdUpdate() {
    let value = (<HTMLSelectElement>document.getElementById('categorySelectorUpdate')).value;
    this.categoryIdSelected=Number(value);
  }

  displayUpdateActivity(activity:Activity) {
    this.bufferActivity=activity;
    this.isUpdateVisible=true;
    this.activityIdUpdate=activity.id;
  }
}
