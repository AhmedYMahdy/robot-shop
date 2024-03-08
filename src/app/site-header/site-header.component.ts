import { Component, OnInit } from '@angular/core';
import { IUser } from '../user/user.model';
import { UserService } from '../user/user.service';

@Component({
  selector: 'bot-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css'],
})
export class SiteHeaderComponent implements OnInit {
  user: IUser | null = null;
  signOutMenu: boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUser().subscribe((userData) => {
      this.user = userData;
    });
  }

  toogleSignOutMenu() {
    this.signOutMenu = !this.signOutMenu;
  }

  signOut() {
    this.userService.signOut();
    this.signOutMenu = false;
  }
}
