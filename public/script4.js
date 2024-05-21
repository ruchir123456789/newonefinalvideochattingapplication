const socket = io('/');
const videoGrid = document.getElementById('video')
const videoGrid1 = document.getElementById('video1')
const mypeer = new Peer(
//   undefined, {
//   host: '/',
//   port: '3001',
// }
)
var currentPeer;
var myStream;

const myvideo = document.createElement('video');
myvideo.muted = true;
const peers ={};




//taking our video

navigator.mediaDevices.getUserMedia({
  video: true,
  audio: true
}).then(stream => {
   myStream = stream
  addVideoStream(myvideo, stream);




  mypeer.on('call', call => {
  
    call.answer(stream)
    // call.answer(sendSCreen)
    const video = document.createElement('video');

    call.on('stream', userVideoStream => {
      addVideoStream(video, userVideoStream)
      //
    })
    currentPeer = call.peerConnection

  })


  socket.on('user-connected', userId => {
    connectToNewUser(userId, stream);
    
  })
})

socket.on('user-disconnected',userId=>{
  // console.log(userId)
  if(peers[userId]) peers[userId].close()
})
mypeer.on('open', id => {
  socket.emit("join-room", ROOM_ID, id);

})

// socket.emit("join-room",ROOM_ID,10);

socket.on('user-connected', userId => {
  console.log("User Connected: " + userId)

})

function connectToNewUser(userId, stream) {
  var call = mypeer.call(userId, stream)
  const video = document.createElement('video');
  const video11 = document.createElement('video');
  call.on('stream', userVideoStream => {
    myStream = stream;
    addVideoStream(video, userVideoStream)
    // currentPeer = call.peerConnection



  });
  // call.on('stream1', userVideoStream => {
  //   currentPeer = call.peerConnection
  //   currentPeer = call.peerConnection


  // });
  call.on('close', () => {
    video.remove()
  })

  callend.addEventListener('click',()=>{
    call.on('close', () => {
      video.remove()
    })
  //
  
  })
    peers[userId] = call ;
  }

//
  function ScreenconnectToNewUser(userId,stream1) {
    alert('ha')

    const call = mypeer.call(Screenvideo, stream1)
    const video1 = document.createElement('video');
    call.on('stream1', userVideoStream => {
      addScreenShareStream(Screenvideo, userVideoStream)
      // currentPeer = call.peerConnection
  
    });
    call.on('close', () => {
      video.remove()
    })
  

//
//
// callend.addEventListener('click',()=>{
//   call.on('close', () => {
//     video.remove()
//   })
//
//
callend.addEventListener('click',()=>{
  call.on('close', () => {
    video.remove()
  })
//

})
  // peers[userId] = call ;
}

function addVideoStream(video, stream) {
  if(constant ==  1 ){
    stream == sendSCreen

  }
  video.srcObject = stream;
  video.addEventListener('loadedmetadata', () => {
    video.play();
  })
  videoGrid.append(video)
 
}

//
function addScreenShareStream(video,stream) {
  // myvideo = video
  alert('ha')

  video.srcObject = stream;
  video.addEventListener('loadedmetadata', () => {
    video.play();
  })
  videoGrid.append(video);
  // videoGrid.style.display="initial";

  
}
//

//next section
const screenshare = document.querySelector("#screenshare");
const callend = document.querySelector("#callend");
const chat = document.querySelector("#chat");
const sharelink = document.querySelector("#sharelink");

callend.addEventListener('click',()=>{
    video.remove()
  })

// sharelink.addEventListener()


sharelink.addEventListener('click',()=>{
  navigator.clipboard.writeText(window.location.href);
  alert("link copied to clip board");
  // console.log('hi')
})

chat.addEventListener('click',()=>{
// document.getElementById('chatpage').style.transform = "translateY(-100vh)";
document.getElementById('chatpage').style.top = "0vh";
})





let Screenvideo = document.createElement('video');
let sendSCreen ;
let constant = 0;


document.getElementById("screenshare").addEventListener('click',(e)=>{
  navigator.mediaDevices.getDisplayMedia({
    video:{
      cursor:"always"},
      audio:{
        echoCancellation:true,
        noiseSuppression:true
      }

}).then((stream)=>{
   let videoTrack = stream.getVideoTracks()[0];
   videoTrack.onended = function(){
        stopScreenShare()
   }
   let sender = currentPeer.getSenders().find(function(s){
    return s.track.kind == videoTrack.kind
   })
   sender.replaceTrack(videoTrack)
  myStream = stream;addVideoStream(Screenvideo,stream)//  addScreenShareSt)ream(Screenvideo,stream) //myStream=stream;
}).catch((err)=>{
  console.log("unable to get display media"+err)
})
  })


  function stopScreenShare(){
    let videoTrack = myStream.getVideoTracks()[0];
    var sender = currentPeer.getSenders().find(function(s){
      return s.track.kind == videoTrack.kind;
    })
    sender.replaceTrack(videoTrack);
  }
  




// screenshare.addEventListener('click',(e)=>{
//   navigator.mediaDevices.getDisplayMedia({
//     video:{
//       cursor:"always",
//     },
//     audio:{
//       echoCancellation:true,
//       noiseSuppression:true
//     }
//   }).then((stream1)=>{
//     constant = 1;
//   //  let videoTrack = stream.getVideoTrack()[0];
//   //  videoTrack.onended = function(){
//   //   stopScreenShare();

//   //  }
//   //  let sender = currentPeer.getSender().find(function(s){
//   //   return s.track.kind == videoTrack.kind
//   //  })
//   //  sender.replaceTrack(videoTrack)

//     // let videoTrack = Screenvideo.srcObject.getVideoTracks()[0];

//     // let videoTrack = Screenvideo.srcObject.getVideoTracks(displayMediaOptions);

//   // myvideo = video
//   // Screenvideo.srcObject = stream;
//   // Screenvideo.addEventListener('loadedmetadata', () => {
//   //   Screenvideo.play();
//   // })
//   // videoGrid1.append(videoTrack);

//   // then
//   // (stream => {
//     // addVideoStream(myvideo, stream);

//     addVideoStream(Screenvideo,stream1)

//     sendSCreen=stream1;
//     // currentPeer.answer(stream1)
 
  
//     // mypeer.on('call', call => {
//     //   call.answer(stream1)
//     //   // const video = document.createElement('video');
  
//     //   call.on('stream', SCREENuserVideoStream => {
//     //     // addVideoStream(video, userVideoStream)
//     //     addScreenShareStream(Screenvideo,stream1)

     
//     //     currentPeer = call.peerConnection
//     //   })
//     // })


//     // video1.addEventListener('loadedmetadata', () => {
//     //   video1.play();
//     // })
//     // videoGrid1.append(videoTrack);
//     // var video1 = document.createElement('video');
//     // let sender = currentPeer.getSenders().find(function(s){
//     //   return s.track.kind == videoTrack.kind;
//     // })
//     //  sender.replaceTrack(videoTrack)
    


//   //  sender.replaceTrack(videoTrack);
//     // const call1 = mypeer.call(userId, stream)
//     // addScreenShareStream(video1,stream);
//     // const call = mypeer.call(userId, stream)
//   // const video = document.createElement('video');
//   // call.on('stream', userVideoStream => {
//     // addVideoStream(video, userVideoStream)
//     // currentPeer = call.peerConnection
//     // socket.on('user-connected', userId => {
//       // connectToNewUser(userId, stream);
//       // ScreenconnectToNewUser(Screenvideo,stream1)

//     // })
//     // mypeer.on('call',call=>{
//     //   call.answer(stream1)
//     // })
   
//     // socket.on('user-connected', userId => {
//     //   ScreenconnectToNewUser(video1, stream1);
      
//     // })

//   // });
//   // call.on('close', () => {
//   // //   video.remove()
//   // })


//   }).catch((err)=>{
//     console.log("enable to get display media " + err)
//   })
// })

function stopScreenShar(){
  let videoTrack = myStream.getVideoTrack()[0];
  var sender = currentPeer.getSender().find(function(s){
    return s.track.kind == videoTrack.kind;
  })
  sender.replaceTrack()
}



// //  let name = "k";
// let name ;
// // let Email;
// let textarea = document.querySelector("#textarea");
// let messageArea = document.querySelector('.message__area');

// do{
//     name = prompt('please enter your name');
//     // name = document.querySelector("#fname").value;
//     // Email = document.querySelector("#lname").value;
// }while(!name);


// textarea.addEventListener('keyup',(e)=>{
//   if(e.key === "Enter"){
//       sendMessage(e.target.value);
//   }
// })

// function sendMessage(message){
//   let msg ={
//       user: name,
//       message: message.trim(),
//   };

//   //append
//   appendMessage(msg,'outgoing');
//   textarea.value = '';
//   scrollToBottom();    

//   //send to server
//   socket.emit('message',msg);
// }

// function appendMessage(msg,type){
//   let mainDiv = document.createElement('div');
//   let className = type;
//   mainDiv.classList.add(className,'message');

//   let markup = `<h4>${msg.user}</h4>
//   <p>${msg.message}</p>
//   `
//   mainDiv.innerHTML = markup;
//   messageArea.appendChild(mainDiv);
// }

// //Recieve message

// socket.on('message',(msg) => {
//   console.log(msg);
//   appendMessage(msg,'incoming');
//   // socket.broadcast.emit('message',msg);
//   scrollToBottom();
// })

// function scrollToBottom(){
//   messageArea.scrollTop = messageArea.scrollHeight;
// }