import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Platform } from './models/platform';
const Get_Platform = gql`query{
  platform{
    id
    name
  }
}`;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  allPlatforms: Platform[] = [];
  title = 'ng-graphql';
  /**
   *
   */
  constructor(private apollo: Apollo) {
    
  }
  ngOnInit(): void {
    this.apollo.watchQuery<any>({
      query: Get_Platform
    }).valueChanges
    .subscribe(({data, loading}) => {
      console.log(loading);
      this.allPlatforms = data.platform;
    })
  }
}
