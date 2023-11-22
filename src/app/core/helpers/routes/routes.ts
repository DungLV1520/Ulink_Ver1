import { BehaviorSubject } from 'rxjs';
export class routes {
  static navigate(arg0: string[]) {
    throw new Error('Method not implemented.');
  }
  public static layoutDirection: BehaviorSubject<string> =
    new BehaviorSubject<string>('');
  public static Url: string = '';
  static rtl = this.layoutDirection.subscribe((res: any) => {
    if (res == 'rtl') this.Url = res;
  });
  public static get baseUrl(): string {
    return routes.Url;
  }
  public static get home(): string {
    return this.baseUrl + '/';
  }
  public static get dashboard(): string {
    return this.baseUrl + '/ulink/dashboard';
  }
  public static get mylisting(): string {
    return this.baseUrl + '/ulink/my-link';
  }
  public static get profile(): string {
    return this.baseUrl + '/ulink/profile';
  }
  public static get link(): string {
    return this.baseUrl + '/ulink/create-link';
  }
  public static get domain(): string {
    return this.baseUrl + '/ulink/domain';
  }
  public static get payment(): string {
    return this.baseUrl + '/ulink/payment';
  }
  public static get error(): string {
    return this.baseUrl + '/error';
  }
  public static get error404(): string {
    return this.baseUrl + '/error/error404';
  }
  public static get error500(): string {
    return this.baseUrl + '/error/error500';
  }
  public static get forgotpassword(): string {
    return this.baseUrl + '/auth/forgot-password';
  }
  public static get login(): string {
    return this.baseUrl + '/auth/login';
  }
  public static get signup(): string {
    return this.baseUrl + '/auth/signup';
  }
}
