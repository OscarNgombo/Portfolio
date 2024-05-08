import { Component } from '@angular/core';
import { HomeComponent } from "./home/home.component";
import { RouterOutlet } from '@angular/router';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyB1pLr-4O3pzQ3-4B4MiA4mnyrGEBeY-aI",
  authDomain: "portfolio-44bfc.firebaseapp.com",
  projectId: "portfolio-44bfc",
  storageBucket: "portfolio-44bfc.appspot.com",
  messagingSenderId: "803026127450",
  appId: "1:803026127450:web:2432d3afd1eee51fd5e663",
  measurementId: "G-EPDKY3FHP8"
};
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [HomeComponent,RouterOutlet]
})
export class AppComponent {

  constructor() {
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
  }
}
