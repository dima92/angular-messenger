import {Component, OnInit} from '@angular/core';
import {UserService} from "./core/services/user.service";
import {finalize} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isUserFetched = false;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.fetchUser().pipe(
      finalize(() => {
        this.isUserFetched = true;
      })
    ).subscribe();
  }
}
