import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from '../../../environments/environment';

export class weatherInterceptors implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const cloneReq = req.clone({
      params: req.params.appendAll({
        'units' : 'metric',
        'appid' : environment.openWeather.key
      })
    });
      return next.handle(cloneReq)
  }
}
