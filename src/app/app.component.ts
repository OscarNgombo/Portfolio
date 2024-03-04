import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
} from '@angular/animations';
import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf,NgFor],
  animations: [
    trigger('dropAndBounce', [
      state(
        'in',
        style({
          transform: 'translateY(0)',
          opacity: 1,
        })
      ),
      transition('void => *', [
        animate(
          '5.0s',
          keyframes([
            style({ transform: 'translateY(-200%)', opacity: 0, offset: 0 }),
            style({ transform: 'translateY(0)', opacity: 1, offset: 0.6 }),
            style({ transform: 'translateY(-30%)', offset: 0.75 }),
            style({ transform: 'translateY(0)', offset: 1 }),
          ])
        ),
      ]),
    ]),
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'portfolio';
  currentHour: number = new Date().getHours();
  greeting: string = '';
  isGreen: string = 'true';
  isCorrectVisible: boolean = false;
  selectedList!: { name: string; link: string; }[];

  constructor() {
    this.setGreeting();
  }

  setGreeting() {
    if (this.currentHour >= 5 && this.currentHour < 12) {
      this.greeting = 'GOOD MORNING! WELCOME';
    } else if (this.currentHour >= 12 && this.currentHour < 18) {
      this.greeting = 'GOOD AFTERNOON!WELCOME';
    } else {
      this.greeting = 'GOOD EVENING! WELCOME';
    }
  }
  // ngOnInit() {
  //   setInterval(() => {
  //     // Toggle the state of the animation trigger every 5 seconds
  //     this.toggleIsCorrect();
  //   }, 30000);
  // }

  toggleIsCorrect() {
    this.isCorrectVisible = !this.isCorrectVisible;
  }

  selectedCategory: string = '';

  handleClick(category: string) {
    this.selectedCategory = category;
    switch (category) {
      case 'Mobile Application Development':
        this.selectedList = [
          { name: 'CIS', link: 'https://drive.google.com/file/d/1AVBI75L-8EcwOUtMpgHUxdRK-CWie13m/view?usp=drive_link' },
          { name: 'TWIFT', link: 'https://play.google.com/store/apps/details?id=com.twift.statussaver&hl=en_IN&gl=US' },
          { name: 'SOCIO', link: 'https://play.google.com/store/apps/details?id=com.socio.allinone&pcampaignid=web_share' }
        ];
        break;
      case 'Web Design/Development':
        this.selectedList = [
          { name: 'Primotech', link: 'https://oscarngombo.github.io/PrimotechKenya/' },
          { name: 'PTSD', link: 'https://github.com/OscarNgombo/ptsd' },
          { name: 'Portfolio', link: 'https://github.com/OscarNgombo/ptsd/portfolio' }
        ];
        break;
      case 'Data Analysis':
        this.selectedList = [
          { name: 'Data Visualization', link: 'https://www.example.com/data-visualization' },
          { name: 'Data Mining', link: 'https://www.example.com/data-mining' },
          { name: 'Statistical Analysis', link: 'https://www.example.com/statistical-analysis' }
        ];
        break;
      default:
        this.selectedList = [];
    }
    this.isCorrectVisible = true;
  }}
