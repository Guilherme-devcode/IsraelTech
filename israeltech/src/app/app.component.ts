import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  nome = 'Guilherme';
  ngOnInit(): void {
    var config = {
      apiKey: "AIzaSyBB2ssKFUv4HkZQ9y3wEdtR_qz8FrYxv5E",
      authDomain: "israeltech-da621.firebaseapp.com",
      projectId: "israeltech-da621",
      storageBucket: "israeltech-da621.appspot.com",
      messagingSenderId: "1075319591086",
      appId: "1:1075319591086:web:d66ef08ce62fb85170dd3f",
      databaseURL: "https://israeltech-da621-default-rtdb.firebaseio.com/"
    };
    firebase.initializeApp(config)
  }
}
