import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../dadosFake/dados'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent  {
  id:string = "";
  img:string = "";
  titulo:string ="";
  texto:string = "";

  constructor( private route:ActivatedRoute){
    
  }

  ngOnInit(){
    this.route.paramMap.subscribe((parans:any)=>{    
     this.id = parans.get('id')
    })
    
      this.setValuesComponent(this.id)
  }

  setValuesComponent(id:string){
    let index:number = parseInt(id);
    const result = dataFake.filter( dados => dados.id = id )[index]
    this.img = result.img;
    this.titulo = result.titulo;
    this.texto = result.texto
  }

}
