import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';


@Injectable()
export class FeedService {

  url = 'http://localhost:3000/tweets'; // Aqui eu informo a URL do serviço 

  constructor(private http:Http) { }

  getTweets(): Observable<Response>{
    return this.http.get(this.url); // Aqui eu converto a response em JSON
  }



  likeTweet(tweet){
    return this.http.put(`${this.url}/${tweet.id}`, tweet);
  }



}
