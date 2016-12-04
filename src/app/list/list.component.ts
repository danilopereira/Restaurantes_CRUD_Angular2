import { Component, OnInit, OnDestroy } from '@angular/core';
import {RestauranteService} from '../restaurante.service';
import {Restaurante} from '../restaurante';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  restaurantes:Restaurante[];
  ivisiveis: boolean[]=[];

  constructor(private restauranteService:RestauranteService,
  private router:Router) { }

  ngOnInit() {
    this.getRestaurantes();
    for (let restaurante of this.restaurantes)
    {
      this.ivisiveis[restaurante.id] = false;
    }

  }
  getRestaurantes():void{
    this.restaurantes = this.restauranteService.getRestaurantes();
  }

  add():void{
    this.restauranteService.zerar();
    this.router.navigate(['/add']);
  }

  del(restaurante: Restaurante): void {
    this.restauranteService.delete(restaurante);
    this.ivisiveis[restaurante.id] = true;
  }

  edit(restaurante: Restaurante):void{
    this.restauranteService.delete(restaurante);
    this.restauranteService.edit(restaurante);
    this.router.navigate(['/add']);
  }

  ngOnDestroy(){
    this.restaurantes = [];
  }


}
