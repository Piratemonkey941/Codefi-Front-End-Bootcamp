import { Component,  OnDestroy,  OnInit, } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false
  private userSub: Subscription

  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuthService
    ) { }

    ngOnInit() {
      this.userSub = this.authService.user.subscribe(user => {
        this.isAuthenticated = !user ? false: true; // can also use !!user
      })
    }


  onSaveData() {
    this.dataStorageService.storeRecipes;
  }
  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }

  onLogout(){
    this.authService.logout();
  }

  ngOnDestroy(): void {
      this.userSub.unsubscribe();
  }

  // ngOnInit(): void {
  // }
}


// @Output() featureSelected = new EventEmitter<string>();

// onSelect(feature:string) {
//   this.featureSelected.emit(feature)
// }