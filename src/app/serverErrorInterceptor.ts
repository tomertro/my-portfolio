import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";

@Injectable({
    providedIn:"root"
})
export class ServerErrorInterceptor implements HttpInterceptor{

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        debugger;
        return next.handle(req).pipe( 
           
            //First, we can retry the HTTP call once or multiple times before we throw the error. 
            //In some cases, for example, if we get a timeout, we can continue without throwing the exception.
            retry(1),
            catchError((error:HttpErrorResponse)=>{
                debugger;
                if (error.status === 401) {
                    // refresh token
                  }
                  else{
                      return throwError(error);
                  }

                })
            )          
    }

}