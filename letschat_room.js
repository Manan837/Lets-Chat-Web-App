username = localStorage.getItem("Username");
document.getElementById("username_holder").innerHTML = "Welcome " + username + "!";

function logout()
{
      window.location = "index.html";
}

const firebaseConfig = {
      apiKey: "AIzaSyB7T6LytooxEm81mHkVjNNTK8fM0nqLuAM",
      authDomain: "lets-chat-ebdc5.firebaseapp.com",
      databaseURL: "https://lets-chat-ebdc5-default-rtdb.firebaseio.com",
      projectId: "lets-chat-ebdc5",
      storageBucket: "lets-chat-ebdc5.appspot.com",
      messagingSenderId: "27300117266",
      appId: "1:27300117266:web:804d634432e99b4de9d1cb"
    };
    
const app = initializeApp(firebaseConfig);

function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
           purpose: "Adding Room Name"
     });

     localStorage.setItem("Roomname",room_name);
 
     window.location = "letschat_page.html";
}

function getData()
{
firebase.database().ref("/").on('value', function(snapshot){document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot){childKey  = childSnapshot.key;
            Room_names = childKey;
            //Start code
            console.log("room_name - " + Room_names);
            row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
            document.getElementById("output").innerHTML += row;
            //End code
});});}
getData();

function redirectToroomname(name)
{
console.log(name);
localStorage.setItem("Roomname",name);
window.location = "kwitter_page.html";
}