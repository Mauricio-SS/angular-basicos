import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent{

  heroes: string[] = ['Spider man', 'Iron man', 'Hulk', 'Thor', 'Capitán América'];
  heroeBorrado: string = ''

  

  // borrarHeroe() : void{
  //   const heroeBorrado = this.heroes.shift();
  //   console.log(heroeBorrado);
  // }
  borrarHeroe() : void{
    this.heroeBorrado = this.heroes.shift() || '';
    console.log(this.heroeBorrado);
  }
  
}
