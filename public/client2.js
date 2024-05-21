// const socket = io()
// let name = "k";
// // let Email;
// let textarea = document.querySelector("#textarea");
// let messageArea = document.querySelector('.message__area')
// // do{
//     name = prompt('please enter your name');
//     // name = document.querySelector("#fname").value;
//     // Email = document.querySelector("#lname").value;
// }while(!name)


// let participent = ["people","apple"];

// // name = document.querySelector("#fname").innerText;
// participent.push(name)
// // participent.push(Email)
// // Email = document.querySelector("#lname").innerText;

// document.querySellector("#fname").addEventListener("keyup",(e)=>{
//     //    name = e.target.value
//     if(e.key === "Enter"){
//         name = e.target.value
//     }
// })
// document.querySellector("#lname").addEventListener("keyup",(e)=>{
//     if(e.key === "Enter"){

//     // name = e.target.value
//     Email = e.target.value    } })

// document.querySelector("#submit").addEventListener('click',()=>{
//     document.querySelector("#prompt").style.diplay="none";
//     // document.querySellector("#fname").addEventListener("keyup",(e)=>{
//     //     //    name = e.target.value
//     //     if(e.key === "Enter"){
//     //         name = e.target.value
//     //     }
//     // })
//     // document.querySellector("#lname").addEventListener("keyup",(e)=>{
//     //     if(e.key === "Enter"){

//     //     // name = e.target.value
//     //     Email = e.target.value
//     // }

// //  })
//     // name = document.querySelector("#fname").innerText;
//     participent.push(name)
//     participent.push(Email)
//     // Email = document.querySelector("#lname").innerText;
    
// })

// participent.forEach(add)

// function add(value){
//     // document.querySelector("#numberofpeople").innerHTML = value;
//     // document.querySelector("#numberofpeople1").innerHTML = value;
//     document.querySelector("#numberofpeople1").innerHTML = `<h4>${value}</h4>`;

// }
// name = document.querySelector("#fname").value;
// Email = document.querySelector("#lname").value;

// document.querySelector("#frontbutton").addEventListener('click',()=>{
//     navigator.clipboard.writeText(window.location.href);
//     alert("link copied to clip board");
//     // console.log('hi')
//   })
// document.querySelector("#submit").addEventListener('click',()=>{
//     document.querySelector("#prompt").style.diplay="none";
// })

// 
// textarea.addEventListener('keyup',(e)=>{
//     if(e.key === "Enter"){
//         sendMessage(e.target.value)
//     }
// })

// function sendMessage(message){
//     let msg ={
//         user: name,
//         message: message.trim(),
//     }

//     //append
//     appendMessage(msg, 'outgoing')
//     textarea.value = ''
//     scrollToButton()

//     //send to server
//     socket.emit('message',msg)
// }

// function appendMessage(msg,type){
//     let mainDiv = document.createElement('div')
//     let className = type
//     mainDiv.classList.add(className,'message')

//     let markup = `<h4 id="j">${msg.user}</h4>
//     <p>${msg.message}</p>
//     `
//     mainDiv.innerHTML = markup
//     messageArea.appendChild(mainDiv)
// }

// //Recieve message

// socket.on('message',(msg)=>{
//     console.log(msg)
//     appendMessage(msg,'incoming')
//     // socket.broadcast.emit('message',msg)
// })

// function scrollToButton(){
//     messageArea.scrollTop = messageArea.scrollHeight
// }


// let participent = ["people","apple"];
//  let name = "k";
let name ;
// let Email;
let textarea = document.querySelector("#textarea");
let messageArea = document.querySelector('.message__area');

// do{
//     name = prompt('please enter your name');
    // name = document.querySelector("#fname").value;
    // Email = document.querySelector("#lname").value;
// }while(!name);
// participent.push(name);


textarea.addEventListener('keyup',(e)=>{
  if(e.key === "Enter"){
      sendMessage(e.target.value);
  }
})

function sendMessage(message){
  let msg ={
      user: name,
      message: message.trim(),
  };

  //append
  appendMessage(msg,'outgoing');
  textarea.value = '';
  scrollToBottom();    

  //send to server
  socket.emit('message',msg);
}

function appendMessage(msg,type){
  let mainDiv = document.createElement('div');
  let className = type;
  mainDiv.classList.add(className,'message');

  let markup = `<h4>${msg.user}</h4>
  <p>${msg.message}</p>
  `
  mainDiv.innerHTML = markup;
  messageArea.appendChild(mainDiv);
}

//Recieve message

socket.on('message',(msg) => {
  console.log(msg);
  appendMessage(msg,'incoming');
  // socket.broadcast.emit('message',msg);
  scrollToBottom();
// participent.push(msg.user);
})

function scrollToBottom(){
  messageArea.scrollTop = messageArea.scrollHeight;
}

// participent.forEach(add)

function add(value){
    // document.querySelector("#numberofpeople").innerHTML = value;
    // document.querySelector("#numberofpeople1").innerHTML = value;
    // document.querySelector("#numberofpeople1").innerHTML = `<h4>${value}</h4>`;
    document.querySelector("#numberofpeople1").innerHTML = participent;
    // numberofpeople1
    console.log(participent);

}

// add(participent);

const particpents = document.querySelector('#particepentse');
// var parts =prompt("enter your name");  

function particepentadding(name){
    const div = document.createElement('div')
    div.innerText = parts;
    div.setAttribute("class",'part')
    div.setAttribute("id",'part')
    particpents.append(div)
    console.log(name);
    
    }

     particepentadding(parts)
