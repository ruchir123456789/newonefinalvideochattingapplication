// prompt("hi")
// const showLocalVideo = async () => {
//     const videoTrack = await Twilio.Video.createLocalVideoTrack({
//       width: 640,
//       height: 480,
//       frameRate: 24
//     });
//     document.getElementById('video').appendChild(videoTrack.attach());
//   }
  
//   showLocalVideo();


//   const showLocalVideo = async () => {
//     const videoTrack = await Twilio.Video.createLocalVideoTrack({
//       width: 640,
//       height: 480,
//       frameRate: 24
//     });
//     document.getElementById('video').appendChild(videoTrack.attach());
  
//     const bg = new Twilio.VideoProcessors.GaussianBlurBackgroundProcessor({
//       assetsPath: '/',
//       maskBlurRadius: 10,
//       blurFilterRadius: 5,
//     });
//     await bg.loadModel();
//     videoTrack.addProcessor(bg);
//   }
  
//   showLocalVideo();

  
//   const showLocalVideo = async () => {
//     const videoTrack = await Twilio.Video.createLocalVideoTrack({
//       width: 640,
//       height: 480,
//       frameRate: 24
//     });
//     document.getElementById('video').appendChild(videoTrack.attach());
  
//     let img = new Image(); 
//     // img.src = 'background.jpg';
//     img.src = '1.png';

//     img.onload = async () => {
//       const bg = new Twilio.VideoProcessors.VirtualBackgroundProcessor({
//         assetsPath: '/',
//         backgroundImage: img,
//         maskBlurRadius: 5,
//       });
//       await bg.loadModel();
  
//       videoTrack.addProcessor(bg);
//     }
//   }
  
//   showLocalVideo();