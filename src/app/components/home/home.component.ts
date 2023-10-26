import { Component, OnInit } from '@angular/core';
import { ScriptService } from '@app/services/script.service';
 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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

  ngOnInit(): void {
  }

}
