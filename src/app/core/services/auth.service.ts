import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { GlobalComponent } from 'src/app/app.constant';

@Injectable({ providedIn: 'root' })
export class AuthService {
  public currentManagerSubject: BehaviorSubject<any>;
  public currentManager: Observable<any>;
  private cachedProfile!: Observable<any>;

  constructor(private http: HttpClient, private router: Router) {
    this.currentManagerSubject = new BehaviorSubject<any>(
      JSON.parse(localStorage.getItem(GlobalComponent.CUSTOMER_KEY)!)
    );
    this.currentManager = this.currentManagerSubject.asObservable();
  }

  public get currentManagerValue(): any {
    return this.currentManagerSubject.value;
  }

  login(username: string, password: string, rememberMe: boolean = false) {
    return this.http
      .post<any>(GlobalComponent.API_URL_LOCAL + `auth/signin`, {
        username,
        password,
        rememberMe,
      })
      .pipe(
        map((user) => {
          if (user) {
            localStorage.setItem(
              GlobalComponent.CUSTOMER_KEY,
              JSON.stringify(user)
            );

            localStorage.setItem(GlobalComponent.ACESS_TOKEN, user?.token!);

            this.currentManagerSubject.next(user);
          }

          return user;
        })
      );
  }

  public currentManagerNext(user: any) {
    localStorage.setItem(GlobalComponent.CUSTOMER_KEY, JSON.stringify(user));
    localStorage.setItem(GlobalComponent.ACESS_TOKEN, user?.accessToken!);
    return this.currentManagerSubject.next(user);
  }

  register(user: any) {
    return this.http.post(GlobalComponent.API_URL_LOCAL + `auth/signup`, user);
  }

  logout(): void {
    localStorage.removeItem(GlobalComponent.CUSTOMER_KEY);
    localStorage.removeItem(GlobalComponent.ACESS_TOKEN);
    this.router.navigate(['/']);
    this.currentManagerSubject.next(null!);
  }

  getProfile(): Observable<any> {
    // TODO: CACH PROFILE OPTIMIZE PERFORMANCE
    // if (this.cachedProfile) {
    //   return this.cachedProfile;
    // }

    this.cachedProfile = this.http
      .get(GlobalComponent.API_URL_LOCAL + `user`)
      .pipe(shareReplay(1));
    return this.cachedProfile;
  }

  updateProfile(req: any): Observable<any> {
    return this.http.post(GlobalComponent.API_URL_LOCAL + `user`, req);
  }
}
