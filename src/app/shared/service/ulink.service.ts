import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterDomain } from '../model/register.model';
import { GlobalComponent } from 'src/app/app.constant';
import { createRequestOption } from '../request.util';

@Injectable({
  providedIn: 'root',
})
export class ULinkService {
  baseBackendUrl = 'https://ulink.asia/api/facebook';
  URL_ULINK = 'https://portal.u-link.asia';
  //baseBackendUrl = 'http://165.232.127.15:8080/api/facebook';
  //baseBackendUrl = 'http://localhost:8080/api/facebook';

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  httpOptionsUploadFile = {
    headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data' }),
  };

  constructor(private http: HttpClient) {}

  registerDomain(register: RegisterDomain): Observable<HttpResponse<any>> {
    return this.http.post<any>(
      this.baseBackendUrl + '/register-page',
      JSON.stringify(register),
      this.httpOptions
    );
  }

  getStatisticOverviewDashboard() {
    return this.http.get(
      GlobalComponent.API_URL_LOCAL + '/statistic-overview-dashboard'
    );
  }

  getLink(pageNo:number,pageSize:number) {
    return this.http.get(
      GlobalComponent.API_URL_LOCAL +
        `/links?pageNo=${pageNo}&pageSize=${pageSize}&sortBy=id&sortDir=desc`
    );
  }

  getStatisticAgentType(from: string, to: string, pageId: string) {
    const req = {
      from,
      to,
      pageId,
    };
    const options = createRequestOption(req);
    return this.http.get(
      GlobalComponent.API_URL_LOCAL + `/links/statistic-click-by-agent-type`,
      {
        params: options,
      }
    );
  }

  getStatisticDevice(from: string, to: string, pageId: string) {
    const req = {
      from,
      to,
      pageId,
    };
    const options = createRequestOption(req);
    return this.http.get(
      GlobalComponent.API_URL_LOCAL + `/links/statistic-click-by-device-name`,
      {
        params: options,
      }
    );
  }

  getStatisticCountry(from: string, to: string, pageId: string) {
    const req = {
      from,
      to,
      pageId,
    };
    const options = createRequestOption(req);
    return this.http.get(
      GlobalComponent.API_URL_LOCAL + `/links/statistic-click-by-country`,
      {
        params: options,
      }
    );
  }

  getStatisticReference(from: string, to: string, pageId: string) {
    const req = {
      from,
      to,
      pageId,
    };
    const options = createRequestOption(req);
    return this.http.get(
      GlobalComponent.API_URL_LOCAL + `/links/statistic-click-by-reference`,
      {
        params: options,
      }
    );
  }

  getStatisticClick(from: string, to: string, pageId: string) {
    const req = {
      from,
      to,
      pageId,
    };
    const options = createRequestOption(req);
    return this.http.get(
      GlobalComponent.API_URL_LOCAL + `/links/statistic-click`,
      {
        params: options,
      }
    );
  }

  getAllMyDomain() {
    return this.http.get(GlobalComponent.API_URL_LOCAL + 'domain/all');
  }

  createMyDomain(data: any) {
    return this.http.post(GlobalComponent.API_URL_LOCAL + '/domain', data, {responseType: 'text'});
  }

  checkDNSDomain(domain: string) {
    return this.http.get(
      GlobalComponent.API_URL_LOCAL +
        `/domain/check-pointing-dns?domain=${domain}`
    );
  }

  uploadImage(data: any) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');

    return this.http.post<any>(
      GlobalComponent.API_URL_LOCAL + 'facebook/upload-file-image',
      data,
      { headers }
    );
  }

  getAllPage() {
    return this.http.get(GlobalComponent.API_URL_LOCAL + '/page/all');
  }

  getAllDomainRegister() {
    return this.http.get(GlobalComponent.API_URL_LOCAL + 'domain/all-create-page-id');
  }
}
