import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: any;
  constructor(private profileService: ProfileService) {
    this.profileService.getProfile().subscribe(profile => {
      this.profile = profile;
    });
  }

  ngOnInit() {
  }

}
