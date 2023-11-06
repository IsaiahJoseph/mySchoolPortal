import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, catchError, map, tap, throwError } from "rxjs";
import { fromObservable } from '@angular/core/rxjs-interop';
import { IPortalData } from "./portalData";


@Injectable({
    providedIn: 'root'
})
export class portalService {

    private portalUrl = 'api/portal/portal.json';

    constructor(private http: HttpClient) {}

   private getStudentsData$ = this.http.get<IPortalData[]>(this.portalUrl)
          .pipe(
           tap(data => console.log('All: ', JSON.stringify(data))),
            catchError(this.handleError)
          );
      
      //expose signal from this service
      StudentsData = fromObservable();

    
      // Get one product
      // Since we are working with a json file, we can only retrieve all products
      // So retrieve all products and then find the one we want using 'map'
      getStudentData(id: number): Observable<IPortalData | undefined> {
        return this.StudentsData
          .pipe(
            map((products: IPortalData[]) => products.find(p => p.studentId === id))
          );
      }

      private handleError(err: HttpErrorResponse): Observable<never> {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          errorMessage = `An error occurred: ${err.error.message}`;
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(() => errorMessage);
      }
    
    
}
