import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  constructor(private alertcontroller: AlertController) 
  {
    
  }

  async MostrarConsol()
  {
    let alerta = await this.alertcontroller.create({
      header: "ingresar texto",
      inputs: [
        {
          type: "text",
          name: "titulo",
          placeholder: "Usuario"
        }
      ]
    })
    await alerta.present();
    console.log("Hola Mundo");
  }

  MostrarConsola()
  {
    console.log("Hola Mundo!");
  }

}
