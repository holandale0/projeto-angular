import { Component, OnInit } from '@angular/core';
import { FeedService } from '../feed.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
  providers: [FeedService]
})
export class FeedComponent implements OnInit {

  tweets;

  likedTweet = undefined;
  currentUser = 'Stevie';

  constructor(private feedService:FeedService) { }

  ngOnInit() {
    this.feedService.getTweets().subscribe(data => {
      this.tweets = data.json();
    } )
  }


  handleTweetFromChildComponent(tweet){
    tweet.likes.push(this.currentUser);
    this.feedService.likeTweet(tweet).subscribe(data => {
      console.log(data.json());
    })

  }




  /*

  handleTweetFromChildComponent(tweet){

    var index = this.tweets.findIndex(currTweet => {
      return currTweet.user == tweet.user;
    })

    this.tweets[index].likes.push(this.currentUser);

    console.log(this.tweets[index].likes);
  }






isTweetedByUser(tweet){
  return this.findTweet(tweet).likes.findIndex(currUser => {
    return currUser == currUser
  }) == -1
}




findTweet(tweet){
    var index = this.tweets.findIndex(currTweet => {
      return currTweet.user == tweet.user;
    })
    return this.tweets[index];
  }


*/



}
