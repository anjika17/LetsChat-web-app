const firebaseConfig = {
    apiKey: "AIzaSyB3A8wHO-yxUw-0TpZpljtg9-H7JwwzxVA",
    authDomain: "letschat-web-app-e8d24.firebaseapp.com",
    databaseURL: "https://letschat-web-app-e8d24-default-rtdb.firebaseio.com",
    projectId: "letschat-web-app-e8d24",
    storageBucket: "letschat-web-app-e8d24.appspot.com",
    messagingSenderId: "380954193613",
    appId: "1:380954193613:web:a84f604542b448641a8384",
    measurementId: "G-VKHTG032CF"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  
  
  function logout(){
    localStorage.removeItem("user_name")  ;
    localStorage.removeItem("room_name")   ;
    window.location = "index.html" ;
   }