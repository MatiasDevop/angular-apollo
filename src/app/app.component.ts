import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Platform } from './models/platform';
const Get_Platform = gql`query{
  platform{
    id
    name
  }
}`;

const Get_FilterName = gql`query ($brandName:String){
    BrandFilter(brand:$brandName){
      Id
      ProductName
      Brand
    }
}`;

const Post_Save = gql `mutation($inputType:AddPlatformInput) {
  addPlatform(input:$inputType){
    platform{
      id
      name
    }
  }
}`
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class AppComponent implements OnInit {
  
  allPlatforms: Platform[] = [];
  title = 'ng-graphql';
  selectedName: string = '';
  platformForm: Platform = {
    id: 0,
    name:''
  }
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
    });
  }

  searchByName(){
    this.apollo.watchQuery<any>({
      query: Get_FilterName,
      variables:{
        "brandName": this.selectedName
      }
    }).valueChanges
    .subscribe(({data, loading}) => {
      console.log(loading);
      this.allPlatforms = data.BrandFilter;
    })
  }
  public createdPlatform: Platform;
  newPlatform(){
    this.apollo.mutate({
      mutation: Post_Save,
      variables:{
        inputType:{
          name: this.platformForm.name
        }
      },
      // update:(cache, {data}) => {
      //   const existingList: any = cache.readQuery({
      //     query: Get_Platform
      //   });

      //   const newPlatform = data
      //}
    }).subscribe(({data}) =>{
      alert("Book Saved!")
      this.allPlatforms = Object.assign([], this.allPlatforms);
      this.allPlatforms.unshift(data["addPlatform"].platform);
      //either you can also use push instead of unshift
      console.log(this.allPlatforms);
    },
    error => {
      console.log("there was an error sending the query", error);
    });
    
  }
}
