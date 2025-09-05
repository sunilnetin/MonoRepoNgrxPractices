import { Component, ViewEncapsulation,OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as MyFeatureActions from './store/my-feature.actions';
import { MyFeatureState } from './store/my-feature.state';
import { book } from './store/ibook';
//import { customIncrement } from './store/counter.actions';
import { loadFruitsSuccess } from './store/fruit.actions';
import { selectFruits } from './store/fruit.selectors';
import { Fruit } from './store/ibook';
//import { Observable } from 'rxjs';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { fruitReducer } from './store/fruit.reducer';
//import { environment } from '../environments/environment';

import { increment, decrement, reset } from './store/counter.actions';
import { selectCount } from './store/counter.selectors';



@Component({
  selector: 'app-nx-welcome',
  imports: [CommonModule],
  template: `<h1>Welcome to Ngrx-demo!</h1> <br /> <hr /> 
  @for (fruit of fruits$ | async; track fruit.id) {
  <li>{{ fruit.name }}</li>
}
<br />
<hr />
<h2>Counter: {{ count$ | async }}</h2>
<button (click)="onIncrement()">Increment</button>
<button (click)="onDecrement()">Decrement</button>
<button (click)="onReset()">Reset</button>

  <!-- <ul>
  <li *ngFor="let fruit of fruits$ | async">
    {{ fruit.name }}
  </li>
</ul> -->
`,
  styles: [],
  encapsulation: ViewEncapsulation.None,
  standalone: true // Indicates a standalone component
})
export class NxWelcome implements OnInit {

   //myFeatureState$: Observable<book[]>;
   fruits$: Observable<Fruit[]>;
    count$: Observable<number>;

  constructor(private store: Store) {
    //this.myFeatureState$ = this.store.select(customIncrement);
    // this.myFeatureState$.subscribe(v=>{
    //   console.log("Obervl hiy ", v);
    // })
// const sampleFruits: Fruit[] = [
//       { id: 1, name: 'Apple' },
//       { id: 2, name: 'Banana' },
//       { id: 3, name: 'Cherry' }
//     ];
//     this.store.dispatch(loadFruitsSuccess({ fruits: sampleFruits }));
//     this.fruits$ = this.store.select(selectFruits);
//     this.fruits$.subscribe(fruits => {
//       console.log('Fruits from ctor store:', fruits);
//     });
    
    this.fruits$ = this.store.select(selectFruits);
    this.count$ = this.store.select(selectCount);

  }

  ngOnInit(): void {
    //this.store.dispatch(MyFeatureActions.loadMyFeatureData());
    const sampleFruits: Fruit[] = [
      { id: 1, name: 'Apple' },
      { id: 2, name: 'Banana' },
      { id: 3, name: 'Cherry' }
    ];
    this.store.dispatch(loadFruitsSuccess({ fruits: sampleFruits }));
    this.fruits$ = this.store.select(selectFruits);
    this.fruits$.subscribe(fruits => {
      console.log('Fruits from ngonit store:', fruits);
    });
    //console.log("Fruits : ", this.fruits$);

  }

onIncrement() {
    this.store.dispatch(increment());
  }

  onDecrement() {
    this.store.dispatch(decrement());
  }

  onReset() {
    this.store.dispatch(reset());
  }

}
