import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import {Restaurante} from './restaurante';

@Injectable()
export class RestauranteService {
  private restaurantes: Restaurante[];
  private restaurante: Restaurante;

    constructor(private localStorageService: LocalStorageService) { }


  getRestaurantes(): Restaurante[]{
    this.getDb();
    return this.restaurantes;
  }

  getRestauranteToEdit(): Restaurante{
    this.getDb();
    return this.restaurante;
  }

  getDb(): void{
   this.restaurantes = [];
   if (this.localStorageService.get("restaurantes") != null)
   {
       let jsonObjectArray = JSON.parse(<string>this.localStorageService.get("restaurantes"));
       for (let jsonObject of jsonObjectArray)
       {
         let restauranteObj = new Restaurante(jsonObject.id, jsonObject.especialidade, jsonObject.nomeFantasia, jsonObject.cnpj,
         jsonObject.endereco, jsonObject.regiao, jsonObject.telefone, jsonObject.gerente);

         restauranteObj.razaoSocial = jsonObject.razaoSocial;
         restauranteObj.atividade = jsonObject.atividade;
         restauranteObj.horarioFuncionamento = jsonObject.horarioFuncionamento;

         this.restaurantes.push(restauranteObj);
       }
   }
   if (this.localStorageService.get("restauranteToEdit") != null){
     let jsonObject = JSON.parse(<string>this.localStorageService.get("restauranteToEdit"));
       let restauranteObj = new Restaurante(jsonObject.id, jsonObject.especialidade, jsonObject.nomeFantasia, jsonObject.cnpj,
       jsonObject.endereco, jsonObject.regiao, jsonObject.telefone, jsonObject.gerente);
       restauranteObj.razaoSocial = jsonObject.razaoSocial;
       restauranteObj.atividade = jsonObject.atividade;
       restauranteObj.horarioFuncionamento = jsonObject.horarioFuncionamento;

       this.restaurante = restauranteObj;

   }

 }


  addRestaurante(restaurante:Restaurante):void{
      this.restaurantes.push(restaurante);
      this.localStorageService.set("restaurantes", JSON.stringify(this.restaurantes));
      this.localStorageService.remove("restauranteToEdit");
  }

  delete(restaurante : Restaurante)
 {
   console.log("inicio "+this.restaurantes.length);
   for (let i of this.restaurantes)
   {
     var index = this.restaurantes.indexOf(restaurante, 0);
     if(index >- 1){
       this.restaurantes.splice(index, 1);
     }

   }
   console.log("fim " +this.restaurantes.length);
   this.localStorageService.set("restaurantes", JSON.stringify(this.restaurantes));
 }

 edit(restaurante: Restaurante){
   this.localStorageService.set("restauranteToEdit", JSON.stringify(restaurante));

 }

 zerar(){
   this.localStorageService.remove("restauranteToEdit");
 }

}
