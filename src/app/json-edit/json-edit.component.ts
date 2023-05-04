import { Component } from '@angular/core';

@Component({
  selector: 'app-json-edit',
  templateUrl: './json-edit.component.html',
  styleUrls: ['./json-edit.component.css']
})
export class JsonEditComponent {
constructor(){}
close():void{
  window.close()
}
}
