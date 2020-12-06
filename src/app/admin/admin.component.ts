import {Component, OnInit} from '@angular/core';
import {Users} from '../modele/users/types/user';
import {UsersApiService} from '../modele/users/repositories/users-api.service';
import {Trainings} from '../modele/trainings/types/training';
import {TrainingsApiService} from '../modele/trainings/repositories/trainings-api.service';
import {Activities, Activity} from '../modele/activities/types/activity';
import {ActivitiesApiService} from '../modele/activities/repositories/activities-api.service';
import {CategoriesApiService} from '../modele/categories/repositories/categories-api.service';
import {Categories} from '../modele/categories/types/category';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import {ActivityToAdd} from '../modele/activities/types/activityToAdd';
import {UnitApiService} from '../modele/units/repositories/unit-api.service';
import {Unit, Units} from '../modele/units/types/unit';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private userService : UsersApiService,
              private trainingService : TrainingsApiService,
              private activityService : ActivitiesApiService,
              private categoryService : CategoriesApiService,
              private unitService : UnitApiService,
              private fb : FormBuilder) { }

  //users list
  users:Users;
  isUserVisible:boolean = true;

  //user trainings detail
  trainings:Trainings;
  isTrainingVisible:boolean = false;

  //activity list
  activities:Activities;

  activityForm: FormGroup = this.fb.group({
    name:['', Validators.required],
    repetitions:['', Validators.required],
    unitId:['', Validators.required]
  });

  //category list
  categories:Categories;

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

  ngOnInit(): void {
    this.getUsers();
    this.getCategories();
    this.getActivities(1);
    this.getUnits();
  }

  //USER

  private getUsers() {
    this.userService.query()
      .subscribe(users =>this.users=users);
  }

  //TRAININGS

  private getTrainings(id) {
    this.trainingService.getByUserId(id)
      .subscribe(trainings => this.trainings = trainings);
  }

  removeUser(id:number) {
    this.userService.delete(id)
      .subscribe();
    document.location.reload();
  }

  removeTraining(id: number) {
    this.trainingService.delete(id).subscribe();
    document.location.reload();
  }

  displayTrainings(id) {
    this.getTrainings(id);
    this.isTrainingVisible = true;
    this.isUserVisible = false;
  }

  hideTrainings() {
    this.isTrainingVisible= false;
    this.isUserVisible = true;
  }

  //CATEGORIES

  getCategories() {
    this.categoryService.query().subscribe(categories => this.categories = categories);
  }

  //ACTIVITIES

  getActivities(id : number) {
    this.categoryIdSelected = id;
    this.activityService.getByCategoryId(id).subscribe(activities => this.activities = activities);
  }

  removeActivity(id: number) {
    this.activityService.delete(id).subscribe();
    document.location.reload();
  }

  addCategory() {
    this.categoryService.create(this.categoryForm.value).subscribe();
    document.location.reload();
  }

  addActivity() {
    let act:ActivityToAdd = {
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

  changeUnitId() {
    let value = (<HTMLSelectElement>document.getElementById('unitSelector')).value;
    this.unitIdSelected=Number(value);
  }

  addUnit() {
    this.unitService.create(this.unitForm.value).subscribe();
    document.location.reload();
  }
}
