var firebaseConfig = {
    apiKey: "AIzaSyAfUrztVrOC5BkTOOSdGqQ2pZDcZyOEvsU",
    authDomain: "twitter-25372.firebaseapp.com",
    databaseURL: "https://twitter-25372-default-rtdb.firebaseio.com",
    projectId: "twitter-25372",
    storageBucket: "twitter-25372.appspot.com",
    messagingSenderId: "687348250179",
    appId: "1:687348250179:web:41fa888eb880d1ed5e06f6",
    measurementId: "G-LNX6TQ5GF6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function logout(){
    localStorage.removeItem("room_name");
    localStorage.removeItem("Username");
    window.location="index.html";
}

username = localStorage.getItem("username");
    room_name = localStorage.getItem("room_name");

    document.getElementById("name").innerHTML="You are in room : " +room_name;

    function send(){
        msg=document.getElementById("msg").value;
        document.getElementById("msg").value="";
        firebase.database().ref(room_name).push({
              message : msg,
              name : username,
              likes : 0 
        });
    }