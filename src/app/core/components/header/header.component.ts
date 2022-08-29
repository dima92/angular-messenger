import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {map} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn$ = this.userService.getCurrentUser().pipe(
    map(user => !!user)
  );

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
  }

  logout() {
    this.userService.clearData();
    this.router.navigateByUrl('/auth/sign-in');
  }

}
