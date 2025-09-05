import {
  ApplicationConfig,
  ModuleWithProviders,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { Action, ActionReducer, provideStore, StoreModule, StoreRootModule } from '@ngrx/store';
//import { counterReducer, CounterState } from './store/counter.reducer';
import { fruitReducer } from './store/fruit.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { isDevMode } from '@angular/core';
import { counterReducer } from './store/counter.reducer';


export const appConfig: ApplicationConfig = {
  providers: [
    provideStore({
    fruits: fruitReducer,
    counter: counterReducer
  }),
    //provideStore({ counter: counterReducer }),

provideStoreDevtools({
  maxAge: 25, // keeps last 25 actions
  logOnly: !isDevMode(), // disables full features in production
  name: 'Fruit Store Debugger' // optional name for DevTools tab
}),

    provideClientHydration(withEventReplay()),
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    

  ],
};

