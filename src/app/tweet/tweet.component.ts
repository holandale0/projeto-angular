import { Component, Input, Output, EventEmitter,  OnInit } from '@angular/core';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {

  @Input() tweet;
  @Output() likedTweetChild = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  likeTweet(tweet){
    //console.log(tweet);
    this.likedTweetChild.emit(tweet); // O método emit() envia o objeto tweet do componente filho(tweet) para o componente pai (feed)
  }

}
