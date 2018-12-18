import { Component } from '@angular/core';
import { User } from './user';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  topics = ['Angular', 'React', 'Vue'];

 // userModel = new User('Rob', "asdf@s.com", 244234, '', 'morning', true);
 userModel = new User('','',0,'','',false);

}
