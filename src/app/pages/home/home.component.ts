import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title:string = "alessandro s. lima"
  
  img_big_card:string = "./assets/webcomponents.jpg" 
  titulo_big_card:string = "Sobre Web Components"
  texto_big_card:string = "Componentes Web são um conjunto de normas atualmente sendo produzidos por engenheiros do Google como também uma especificação da W3C que permitem a criação de componentes reutilizáveis em documentos e aplicações web. A intenção por trás deles é trazer a engenharia de software baseada em componentes para a web"

  img:string[] = ["./assets/angula.png", "./assets/react.png", "./assets/vuejs.png"]

  texto_small_card:string[] = ["Angular é um framework para desenvolver aplicações em diversas plataformas, mantido e desenvolvido pela Google.",
                              "O ReactJS é uma das bibliotecas de JavaScript mais populares para desenvolvimento de aplicativos web ou para dispositivos móveis.",
                              "Vue.js é um framework JavaScript de código-aberto, focado no desenvolvimento de interfaces de usuário e aplicativos de página única"]

}

