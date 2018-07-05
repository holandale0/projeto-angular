import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  tweets = [

    {
      user: "Jenny",
      name: "Jenny Hess",
      body: "Jenny is a student studying Media Management at the New School.",
      avatar: "../assets/images/avatar/jenny.jpg",
    },

    {
      user: "Veronika",
      name: "Veronika Ossi",
      body: "Veronika Ossi is a set designer living in New York who enjoys kittens, music, and partying.",
      avatar: "../assets/images/avatar/veronika.jpg",
    },

    {
      user: "Stevie",
      name: "Stevie Feliciano",
      body: "Stevie Feliciano is a library scientist living in New York City. She likes to spend her time reading, running, and writing.",
      avatar: "../assets/images/avatar/stevie.jpg",
    },

  ];

  constructor() { }

  ngOnInit() {
  }

}
