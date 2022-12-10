import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import * as AOS from 'aos';


@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})

export class MainNavComponent implements OnInit {
  
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}
  
  ngOnInit(){
    AOS.init();

    const header = document.querySelector(".header");
    const introSection = document.querySelector(".introduction")!;
    const aboutSection = document.querySelector(".aboutus")!;
    const serviceSection = document.querySelector(".services")!;
    const teamSection = document.querySelector(".team")!;
    const contactSection = document.querySelector(".contact")!;
    
    const introSectionOption = {
      rootMargin:"0px",
      threshold: 0.25
    }

    const aboutSectionOption = {
      rootMargin:"0px",
      threshold: 0.25
    };

    const serviceSectionOption = {
      rootMargin:"0px"
    }

    const teamSectionOption = {
      rootMargin:"0px",
      threshold: 0.25
    }

    const contactSectionOption = {
      rootMargin:"0px",
      threshold: 0.50
    }

    const introSectionObserver = new IntersectionObserver
    (function(
      entries,
      introSectionObserver
      ){
        entries.forEach(entry=> {
          if(!entry.isIntersecting) {
            header?.classList.add("active");
          }else{
          header?.classList.remove("active");
          }
        });
        }, 
        introSectionOption);

    const aboutSectionObserver = new IntersectionObserver
    (function(
      entries, 
      aboutSectionObserver
      ){
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          header?.classList.add("active"); 
          
        } else{
          header?.classList.remove("active");
          
        }
      });
      },
      aboutSectionOption);
    
    const serviceSectionObserver = new IntersectionObserver
    (function(
      entries,
      serviceSectionObserver
      ){
        entries.forEach(entry=> {
          if(!entry.isIntersecting) {
            header?.classList.add("active");
          }else{
          header?.classList.remove("active");
          }
        });
        }, 
        serviceSectionOption);  
    
    const teamSectionObserver = new IntersectionObserver
    (function(
      entries,
      teamSectionObserver
    ) {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          header?.classList.add("active");
          
        } else{
          header?.classList.remove("active");
          
        }
        
      });
      },
      teamSectionOption);  


    
    introSectionObserver.observe(introSection);  
    aboutSectionObserver.observe(aboutSection);
    serviceSectionObserver.observe(serviceSection);
    teamSectionObserver.observe(teamSection);
}

}


