import { Component } from '@angular/core';
import { ScriptService } from '@app/services/script.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tiendaSex';

   constructor(
    public script: ScriptService
  )
  {
    this.script.load(
      'jquery',
      'selectize',
      'plugins',
      'main'
                )
          .then(data => {
            // this.yeoman.isLoaded=true;
          })
          .catch(error => console.log(error)); 
    // setTheme('');
  }
  
}
