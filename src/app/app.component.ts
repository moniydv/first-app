import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-app';
  username = '';
  isUserNameEmpty = true;
  showPassword = true;
  log : string[] = [];

  checkUsernameLength(event:any){
    console.log(event);
    if(event.target.value != '') {
      this.isUserNameEmpty = false;
    }
  }

  resetUsername() {
    this.username = '';
    this.isUserNameEmpty = true;
  }

  togglePasswordContent() {
    this.showPassword = !this.showPassword;
    let date = new Date();
    this.log.push('you click A on '+ date.toString());
  }
}
