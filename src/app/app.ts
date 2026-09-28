import { Component, inject, signal } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import {Store} from "@ngrx/store";
import { selectCount } from './store/counter.selectors';
import { decrement, increment, reset } from './store/counter.actions';


@Component({
  selector: 'app-root',
  imports: [AsyncPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private store = inject(Store)
  protected readonly title = signal('ngrx-count-app');

  count$ = this.store.select(selectCount);

  increment(): void{
    this.store.dispatch(increment());
  }

  decrement(): void {
    this.store.dispatch(decrement())
  }

  reset(): void{
    this.store.dispatch(reset())
  }

}
