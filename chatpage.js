
var firebaseConfig = {
    apiKey: "AIzaSyB1c_Z5rPXZhVh5ZHTZ1H_NYk5grtyOuQ4",
    authDomain: "letschat-web-app-2f33d.firebaseapp.com",
    databaseURL: "https://letschat-web-app-2f33d-default-rtdb.firebaseio.com",
    projectId: "letschat-web-app-2f33d",
    storageBucket: "letschat-web-app-2f33d.appspot.com",
    messagingSenderId: "340190534960",
    appId: "1:340190534960:web:9122942a78089612333cf5",
    measurementId: "G-5EGJECKR22"
  };
  
  firebase.initializeApp(firebaseConfig);

  room_name = localStorage.getItem("Roomname");
  user_name = localStorage.getItem("Username");

  console.log("room name "+room_name);
  console.log("user name "+user_name);

  function logout() {
        localStorage.removeItem("Roomname");
        localStorage.removeItem("Username");
        window.location.replace("index.html");
  }
  function send() {
        msg = document.getElementById("msg").value;
        console.log("Message "+msg);
        firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0,
              dislike:0
        });
        document.getElementById("msg").value = "";
  }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
    
//End code
    } });  }); }
getData();
