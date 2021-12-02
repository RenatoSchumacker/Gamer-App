import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public titulo!: string;
  public texto!: string;

  classToDiv = {};

  constructor() { 

    this.classToDiv = {
      'text-success': true
    };
  }

  ngOnInit(): void {
    this.titulo! = 'lorem ipsum é simples e siga adiante'
    this.texto! = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum vero magni quisquam quo in dolor odio? Magni quia aperiam ducimus accusamus maxime similique numquam aspernatur, quibusdam provident necessitatibus ea amet?'
  }

}
