import {throwError as observableThrowError,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Video } from './video';
import { tap, catchError } from 'rxjs/operators';

import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  private _getUrl = "http://localhost:3000/api/videos"
  private _postUrl = "http://localhost:3000/api/video"
  private _putUrl = "http://localhost:3000/api/video/"
  private _deleteUrl = "http://localhost:3000/api/video/"

  constructor(private _http: HttpClient) { }

  getVideos(): Observable<Video[]>{
    return this._http.get<Video[]>(this._getUrl)
      .pipe(tap(data => JSON.stringify(data)), catchError(this.errorHandler))
  }

  addVideo (video: Video): Observable<Video> {
    return this._http.post<Video>(this._postUrl, JSON.stringify(video), httpOptions)
      .pipe(tap(data => JSON.stringify(data)), catchError(this.errorHandler))
  }

  updateVideo (video: Video): Observable<Video> {
    return this._http.put<Video>(this._putUrl + video._id, JSON.stringify(video), httpOptions)
      .pipe(tap(data => JSON.stringify(data)), catchError(this.errorHandler))
  }

  deleteVideo (video: Video): Observable<Video> {
    return this._http.delete<Video>(this._deleteUrl + video._id)
      .pipe(tap(data => JSON.stringify(data)), catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse){
    return observableThrowError(error.message || "Server Error");
  }
}