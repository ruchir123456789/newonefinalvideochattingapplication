window.addEventListener('load',(event)=>{

  const videoGrid = document.getElementById('video')
  const videoGrid1 = document.getElementById('video1')

  var peer = new Peer()
  var myStream;
  var currentPeer;
  var peerList = [];

  peer.on('open',function(userid){//connection made
    console.log("id is " +userid)
    document.getElementById("show-peer").innerHTML = userid
  })
  peer.on('call',function(call){
    navigator.mediaDevices.getUserMedia({video:true,audio:true}).then((stream)=>{
      myStream = stream//storing our stream for further use
      addOurVideo(stream)
      call.answer(stream)
      call.on('stream',function(remoteStream){
        if(!peerList.includes(call.peer)){
          currentPeer = call.peerConnection;
        addRemoteVideo(remoteStream)
        peerList.push(call.peer)
      }
      })
    
   }).catch((err)=>{
     console.log(err+ "unable to get media.")
   })
  })


  document.getElementById("screenshare").addEventListener('click',(e)=>{
    let remotePeerId = document.getElementById("peerId").value;
    document.getElementById("show-peer").innerHTML = "connecting"+remotePeerId;
    callPeer(remotePeerId);
  })


  document.getElementById("chat").addEventListener('click',(e)=>{
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

}).catch((err)=>{
  console.log("unable to get display media"+err)
})
  })



  function callPeer(userid){
    navigator.mediaDevices.getUserMedia({video:true,audio:true}).then((stream)=>{
       myStream = stream//storing our stream for further use
      addOurVideo(stream)
       let call = peer.call(userid, stream)
       call.on('stream',function(remoteStream){
        if(!peerList.includes(call.peer)){
          addRemoteVideo(remoteStream)
          currentPeer = call.peerConnection;  
          peerList.push(call.peer)
        }
       })
    }).catch((err)=>{
      console.log(err+ "unable to get media.")
    })
  }

  function stopScreenShare(){
    let videoTrack = myStream.getVideoTracks()[0];
    var sender = currentPeer.getSenders().find(function(s){
      return s.track.kind == videoTrack.kind;
    })
    sender.replaceTrack(videoTrack);
  }
  

  function addRemoteVideo(stream){
    // document.getElementById("remote-video");
    let video = document.createElement("video");
    video.classList.add("video")
    video.srcObject = stream;
    video.play()

    document.getElementById("video").append(video)
  }

  function addOurVideo(stream){
    // document.getElementById("remote-video");
    let video = document.createElement("video");
    video.classList.add("video")
    video.srcObject = stream;
    video.play()

    document.getElementById("video").append(video)
  }


  socket.on('user-connected', userId => {
    console.log("User Connected: " + userId)
  
  })




})

// const chat = document.querySelector("#chat");
// chat.addEventListener('click',()=>{
//   document.getElementById('chatpage').style.transform = "translateY(-100vh)";
//   })
  