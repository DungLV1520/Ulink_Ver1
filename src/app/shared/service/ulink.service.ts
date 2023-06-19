import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterDomain } from '../model/register.model';

@Injectable({
  providedIn: 'root'
})
export class ULinkService {
    baseBackendUrl = 'https://ulink.asia/api/facebook';
    //baseBackendUrl = 'http://165.232.127.15:8080/api/facebook';
    //baseBackendUrl = 'http://localhost:8080/api/facebook';

     // Http Headers
     httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })  };

     httpOptionsUploadFile = { headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data' })  };

     constructor(private http: HttpClient) { }

  registerDomain(register: RegisterDomain): Observable<HttpResponse<any>> {
    return this.http.post<any>(
        this.baseBackendUrl + '/register-page',
        JSON.stringify(register),
        this.httpOptions
    );
  }

  uploadImage(data: any) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');

    return this.http.post<any>(this.baseBackendUrl + '/upload-file-image', data, { headers });
  }

  // login(email: string, password: string) {
  //   return this.http
  //     .post<User>(GlobalComponent.API_URL_LOCAL + `users/login`, {
  //       email,
  //       password,
  //     })
  //     .pipe(
  //       map((user) => {
  //         if (user) {
  //           localStorage.setItem(
  //             GlobalComponent.CUSTOMER_KEY,
  //             JSON.stringify(user)
  //           );

  //           localStorage.setItem(
  //             GlobalComponent.ACESS_TOKEN,
  //             user?.accessToken!
  //           );

  //           localStorage.setItem(
  //             GlobalComponent.REFRESH_TOKEN,
  //             user?.refreshToken!
  //           );

  //           this.currentManagerSubject.next(user);
  //         }

  //         // this.cryptoService.getPublicKey().subscribe();

  //         return user;
  //       })
  //     );
  // }
}
