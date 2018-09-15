import { Component, OnInit } from '@angular/core';
import { Video } from '../video'
import { VideoService } from '../video.service'

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css']
})
export class VideoCenterComponent implements OnInit {

  public videos: Array<Video>;
  public errorMsg;
  
  selectedVideo: Video;

  constructor(private _videoService: VideoService) { }

  ngOnInit() {
    this._videoService.getVideos()
      .subscribe(data => this.videos = data,
                error => this.errorMsg = error);
  }

  onSelectVideo(video:any) {
    this.selectedVideo = video;
    console.log(this.selectedVideo);
  }

}
