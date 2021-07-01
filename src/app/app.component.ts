import { Component, VERSION } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'async';
  users: any;
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  name = 'Angular ' + VERSION.major;

  async ngOnInit() {
    // this.http
    //   .get<any>('https://reqres.in/api/users?page=2')
    //   .subscribe(res => (this.users = res.data));
    const res = await this.http
      .get<any>('https://reqres.in/api/users?page=2')
      .toPromise();
    this.users = res.data;
  }
}
