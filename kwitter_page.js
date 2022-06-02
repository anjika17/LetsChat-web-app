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
  username=localStorage.getItem("username");
  document.getElementById("username").innerHTML="Welcome "+username+" !";
  function addRoom(){
        room_name=document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
              purpose:"adding room name"
        });
        localStorage.setItem("room_name",room_name);
        window.location.replace='chatpage.html';
  }

  function getData(){
        firebase.database().ref("/").on('value' ,function(snapshot){
              document.getElementById("output").innerHTML="";
              snapshot.forEach(function(childSnapshot){
                    childKey=childSnapshot.key ;
                    Room_names=childKey;
                    console.log("room name"+Room_names);
                    row="<div class='room_name' id="+ Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>" ;
                    document.getElementById("output").innerHTML+=row ;
              }) ;
        }) ;
  }
  getData() ;
  function redirectToRoomName(name){
        console.log(name);
        localStorage.setItem("room_name" , name);
        window.location="chatpage.html" ;
  }

  function logout(){
    localStorage.removeItem("user_name")  ;
    localStorage.removeItem("room_name")   ;
    window.location = "index.html" ;
   }