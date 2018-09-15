import {throwError as observableThrowError,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Video } from './video';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  private _getUrl = "/api/videos"

  constructor(private _http: HttpClient) { }

  getVideos(): Observable<Video[]>{
    return this._http.get<Video[]>(this._getUrl)
                    .pipe(tap(data => alert(JSON.stringify(data))) , catchError(this.errorHandler))
  }
  errorHandler(error: HttpErrorResponse){
    return observableThrowError(error.message || "Server Error");
  }
}