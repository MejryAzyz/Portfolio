import { NgOptimizedImage, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslocoModule],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {
  responsiveOptions: any[] | undefined;
  projects: any[] = [
    {
      name: 'MedTravel',
      type: 'home.projects.webApplication',
      description: 'home.projects.MedTravel.description',
      techs: ['Symfony', 'PHP', 'MySql'],
      github: 'https://github.com/MejryAzyz/PiDevWeb',
      report:
        'https://drive.google.com/drive/folders/13aIuKCJdl-E1AZZaK4h2OFs4s7y7kwC0',
      image: 'assets/MedTravel.jpg',
    },
    {
      name: 'MedTravel APP',
      type: 'home.projects.webApplication',
      description: 'home.projects.MedTravel APP.description',
      techs: ['JavaFx', 'Java', 'MySql','Fxml'],
      github: 'https://github.com/MejryAzyz/PiDev',
      image: 'assets/MedTravelAPP.jpg',
    },
    {
      name: 'SonedApp      ',
      type: 'home.projects.webApplication',
      description: 'home.projects.SonedApp.description',
      techs: ['javascript', 'sql server', 'spring','react.js'],
      image: 'assets/Sonede.jpg',
    },
    {
      name: 'Campus Match',
      type: 'home.projects.webApplication',
      description: 'home.projects.Campus Match.description',
      techs: ['FlutterFlow'],
      image: 'assets/Flutter.jpg',
    },
  ];

  ngOnInit() {
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      '#card',
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: '#card',
          start: 'top 75%',
          once: true,
        },
      }
    );

    gsap.fromTo(
      '#projects',
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: '#projects',
          start: 'top 75%',
          once: true,
        },
      }
    );
  }
}
