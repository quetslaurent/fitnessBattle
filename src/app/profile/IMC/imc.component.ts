import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css']
})
export class IMCComponent implements OnInit {

  //CALCUL DE L IMC !!!!!!

  //formulaire de claucl d'imc
  formIMC:FormGroup = this.fb.group({
    wheight:['',Validators.required],
    height:['',Validators.required]
  });

  IMC: number = 0;
  IMCColor = "blue";
  IMCQuote:string;
  isIMCVisible:boolean=false;

  constructor(public fb:FormBuilder) { }

  ngOnInit(): void {
  }

  //méthode de calcul scientifque de l'IMC en fonction de la masse moléculaire des muscles
  processIMC() {

    this.IMC = Math.round(this.formIMC.value.wheight / (Math.pow(this.formIMC.value.height / 100, 2)) * 100) / 100;
    this.isIMCVisible = true;

    if (this.IMC >= 18.5 && this.IMC <= 25) {
      this.IMCColor = "lime";
      this.IMCQuote = "Vous êtes en parfaite santé"

    } else if (this.IMC > 25 && this.IMC <= 35) {
      this.IMCColor = "orange";
      this.IMCQuote = "Il serait temps de gagner quelques points"

    } else {
      this.IMCColor = "red";
      this.IMCQuote = "Il est grand temps de vous remettre au sport"

    }
  }
}
