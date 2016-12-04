import { Component, OnInit, OnDestroy } from '@angular/core';
import {RestauranteService} from '../restaurante.service';
import {Restaurante} from '../restaurante';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit, OnDestroy {
  restaurante: Restaurante;

  constructor(private restauranteService:RestauranteService,
  private router: Router) { }

  ngOnInit() {
    if(this.restauranteService.getRestauranteToEdit() == null){
      this.restaurante  = new Restaurante(new Date().getTime(),"","","","","","","");
    }
    else{
      this.restaurante  = this.restauranteService.getRestauranteToEdit();
    }

  }

  save():void{
    this.restauranteService.addRestaurante(this.restaurante);
    this.router.navigate(['/list']);
  }

  ngOnDestroy(){
    this.restauranteService.zerar();
  }

}
