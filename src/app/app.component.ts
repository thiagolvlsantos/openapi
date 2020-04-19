import { Component,OnInit,HostListener } from '@angular/core';
import SwaggerUI from 'swagger-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    const ui = SwaggerUI({
      dom_id: '#idOnScreen',
      url: "https://raw.githubusercontent.com/OAI/OpenAPI-Specification/master/examples/v3.0/petstore.yaml"
    });
  }
}
