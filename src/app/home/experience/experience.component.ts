import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, TranslocoModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  experience: any[] = [];

  ngOnInit(): void {
    this.experience = [
      {
        title: 'home.experience.endOfStudiesInternship',
        date: 'Jan 2024 - May 2024',
        company: 'SONEDE',
        current: false,
        gotBulletPoints: true,
        description: [
          'home.experience.SONEDEDescription.line1',
          'home.experience.SONEDEDescription.line2',
        
        ],
        FrontEnd: [
         'home.experience.SONEDEFrontEnd.line1',
        ],
        BackEnd: [
         'home.experience.SONEDEBackEnd.line1',
        ],
        DB: [
         'home.experience.SONEDEDB.line1',
        ],
        skills: [
          'React.js',
          'MySql',
          'Sql Server',
          'spring boot',
          'JavaScript',
          'Java'
        
        ],
      },
      {
        title: 'home.experience.professionalInternship',
        date: 'Jan 2023 - Feb 2023',
        company: 'Poulina Tunis',
        description: 'home.experience.PoulinaDescription',
        skils: [
          'ASP.NET',
          'REST APIs',
          'JavaScript',
        ],
      },
      {
        title: 'home.experience.introductoryInternship',
        date: 'Jan 2022 - Feb 2022',
        company: 'Tunisie Telecom Tunis',
        description: 'home.experience.Tunisie TelecomDescription',
      },
    ];
  }

  ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      '#experience-title',
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: '#experience-title',
          start: 'top 75%',
          once: true,
        },
      }
    );

    gsap.fromTo(
      '#icon',
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: '#icon',
          start: 'top 75%',
          once: true,
        },
      }
    );
  }
}
