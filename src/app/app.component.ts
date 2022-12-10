import {Component, OnInit,} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import * as AOS from 'aos';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: []
})
export class AppComponent implements OnInit {
  title = 'reaven-web';
  ngOnInit(){
  AOS.init();

  const introSection = document.querySelector(".introduction")!;
  const backButton = document.querySelector(".back-to-top");

  const introSectionOption = {
    rootMargin: "-100px 0px 0px 0px"
  }

  const introSectionObserver = new IntersectionObserver
  (function(
    entries,
    introSectionObserver
    ){
      entries.forEach(entry=> {
        if(!entry.isIntersecting) {
          backButton?.classList.add("active");
        }else{
          backButton?.classList.remove("active");
        }
      });
      }, 
      introSectionOption);

  introSectionObserver.observe(introSection);
  
  

  const firstFeature = document.querySelector("#feature-1")!;
  const firstHeader = document.querySelector(".feature-1");

  const secondFeature = document.querySelector("#feature-2")!;
  const secondHeader = document.querySelector(".feature-2");

  const thirdFeature = document.querySelector("#feature-3")!;
  const thirdHeader = document.querySelector(".feature-3");

  const fourthFeature = document.querySelector("#feature-4")!;
  const fourthHeader = document.querySelector(".feature-4");

  const fifthFeature = document.querySelector("#feature-5")!;
  const fifthHeader = document.querySelector(".feature-5");

  const firstFeatureOption = {
    
    rootMargin:"0px",
    threshold: 0.5
  }

  const secondFeatureOption = {
    rootMargin:"0px",
    threshold: 0.5
  }

  const thirdFeatureOption = {
    rootMargin:"0px",
    threshold: 0.5
  }

  const fourthFeatureOption = {
    rootMargin:"0px",
    threshold: 0.5
  }

  const fifthFeatureOption = {
    rootMargin:"0px",
    threshold: 0.5
  }

  const firstFeatureObserver = new IntersectionObserver
  (function(
    entries,
    firstFeatureObserver
    ){
      entries.forEach(entry=> {
        if(entry.isIntersecting) {
          firstHeader?.classList.add("chosen");
        }else{
          firstHeader?.classList.remove("chosen");
        }
      });
      }, 
      firstFeatureOption);

  const secondFeatureObserver = new IntersectionObserver
  (function(
    entries,
    secondFeatureObserver
    ){
      entries.forEach(entry=> {
        if(entry.isIntersecting) {
          secondHeader?.classList.add("chosen");
        }else{
          secondHeader?.classList.remove("chosen");
        }
      });
      }, 
      secondFeatureOption);
  
  
  const thirdFeatureObserver = new IntersectionObserver
  (function(
    entries,
    thirdFeatureObserver)
    {
      entries.forEach(entry=>{
        if (entry.isIntersecting){
          thirdHeader?.classList.add("chosen");
        }else{
          thirdHeader?.classList.remove("chosen");
        }
      })
    },
    thirdFeatureOption);

  const fourthFeatureObserver = new IntersectionObserver
  (function(
    entries,
    fourthFeatureObserver)
    {
      entries.forEach(entry=>{
        if (entry.isIntersecting){
          fourthHeader?.classList.add("chosen");
        }else{
          fourthHeader?.classList.remove("chosen");
        }
      })
    },
    fourthFeatureOption);

  const fifthFeatureObserver = new IntersectionObserver
  (function(
    entries,
    fifthFeatureObserver)
    {
      entries.forEach(entry=>{
        if (entry.isIntersecting){
          fifthHeader?.classList.add("chosen");
        }else{
          fifthHeader?.classList.remove("chosen");
        }
      })
    },
    fifthFeatureOption);
  
  firstFeatureObserver.observe(firstFeature);
  secondFeatureObserver.observe(secondFeature);
  thirdFeatureObserver.observe(thirdFeature);
  fourthFeatureObserver.observe(fourthFeature);
  fifthFeatureObserver.observe(fifthFeature);

}
inView(ele:any){
  ele.scrollIntoView({
    behavior:"smooth", block:"start", inline:"start"
  })
}

}









