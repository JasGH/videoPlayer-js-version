var player = videojs('videoPlayer', {
	autoplay: false,
	controls: true,
	poster: 'https://picsum.photos/800/450',
	loop: false,
	playbackRates: [0.25, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4],
	plugins: {
		hotkeys: {
			enableModifiersForNumbers: false,
			seekStep: 5
		}
	}
});
videojs(document.querySelector('video')).playlistUi();
videojs(document.querySelector('video')).overlay();
player.overlay({
	overlays: [{
   
	  // This overlay will appear when a video is playing and disappear when
	  // the player is paused.
	  start: 'playing',
	  end: 'pause'
	}]
  });

  var player = videojs('my-video');

  var chaptersArray = [
        {label: 'Chapter 1', time: '5'},
        {label: 'Chapter 2', time: '10'},
        {label: 'Chapter 3', time: '15'}
      ];

  var chapterOptions = {
        chapterType: 'horizontal',
        chapters: chaptersArray
      }

player.chapters(chapterOptions);

player.watermark({
	file: 'https://picsum.photos/50/50',
	xpos: 0, 
	ypos: 0,
	opacity: 0.6,
	clickable: true,
	url: 'https://verkkonet.com'
});

player.thumbnails({
	0: {
		src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
	},
	30: {
		src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg',
	}
});

player.playlist([
	{
		sources: [
			{ src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', type: 'video/mp4' }
		],
		poster: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg'
	},
	{
		sources: [
			{ src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', type: 'video/mp4' }
		],
		poster: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg'
	}
]);

player.playlist.autoadvance(0);



player.rotate(player);
player.newButtonToggle();
// var Button = videojs.getComponent('Button');
// var MyButton = videojs.extend(Button, {
//   constructor: function() {
//     Button.apply(this, arguments);
//     /* initialize your button */
//   },
//   handleClick: function() {
//     /* do something on click */
//   }
// });
// videojs.registerComponent('MenuButton', MyButton);
// var player = videojs('myvideo');
// player.getChild('controlBar').addChild('myButton', {});
