import React from 'react'
import { Observable } from "rxjs";
import obs from './observ';

export default function ObserCheck() {
    obs.subscribe({
        next: value => console.log('Observable emitted the next value: ' + value),
        error: err => console.error('Observable emitted an error: ' + err),
        complete: () => console.log('Observable emitted the complete notification')
      }); 
  return (
    <div>
        obser
    </div>
  )
}
