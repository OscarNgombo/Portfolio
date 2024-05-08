import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAnalytics, provideAnalytics, ScreenTrackingService } from '@angular/fire/analytics';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimations(), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"portfolio-44bfc","appId":"1:803026127450:web:2432d3afd1eee51fd5e663","storageBucket":"portfolio-44bfc.appspot.com","apiKey":"AIzaSyB1pLr-4O3pzQ3-4B4MiA4mnyrGEBeY-aI","authDomain":"portfolio-44bfc.firebaseapp.com","messagingSenderId":"803026127450","measurementId":"G-EPDKY3FHP8"}))), importProvidersFrom(provideAnalytics(() => getAnalytics())), ScreenTrackingService],
};
