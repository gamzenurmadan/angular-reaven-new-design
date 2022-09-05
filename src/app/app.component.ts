import {Component, OnInit,} from '@angular/core';
import * as AOS from 'aos';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [NgbCarouselConfig]
})
export class AppComponent implements OnInit {
  title = 'reaven-web';
  showNavigationArrows = false;
  showNavigationIndicators = false;
  


  constructor(config: NgbCarouselConfig) {
    config.interval = 8000;
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
   }

  
  ngOnInit(){
  AOS.init();
  
  }


}






