import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  /*
  Cette classe permet d'afficher une page "404 Not found" si l'utilisateur entre une adresse invalide
   */

  constructor() { }

  ngOnInit(): void {
  }

}
