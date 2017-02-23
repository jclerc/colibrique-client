import { Injectable } from '@angular/core';
import { Http , Headers, URLSearchParams , Response  } from '@angular/http';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class LoginService {
  private OauthLoginEndPointUrl = 'http://localhost:8000/oauth/v2/token';

  constructor(public http: Http) {}

  login(username: string, password:string) : Observable<any> {

    var creds = 'grant_type=password&'
        + 'client_id=1_1beg32t1wqo00wko4gc44gsw8cws800wk0ogscowk0gcc8kws4'
        + '&client_secret=48rj3yic4qo00co0gw4444owkkc4s888o8804k0k00cw0og0oc'
        + '&username=' + username + '&password=' + password;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post(this.OauthLoginEndPointUrl , creds, {
                        headers
                    })
                    .map(this.handleData)
                    .catch(this.handleError);
  }

  private handleData(res: Response) {
    let body = res.json();
    return body;
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw('Mauvais identifiants');
  }

  public logout() {
     localStorage.removeItem('token');
  }
}
