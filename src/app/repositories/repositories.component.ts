import { Component, OnInit } from '@angular/core';
import { RepositoriesService } from '../services/repositories/repositories.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
  repositorie: any;
  constructor(private repoService: RepositoriesService) {
    this.repoService.getRepos().subscribe(repositorie => {
      this.repositorie = repositorie;
    });
  }

  ngOnInit() {
  }

}
