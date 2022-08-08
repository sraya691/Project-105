const firebaseConfig = {
      apiKey: "AIzaSyBZ4Vi9yNMSZqngdu-DViQ2Z3rpNYtN6Ik",
      authDomain: "kwitter-kitty.firebaseapp.com",
      databaseURL: "https://kwitter-kitty-default-rtdb.firebaseio.com",
      projectId: "kwitter-kitty",
      storageBucket: "kwitter-kitty.appspot.com",
      messagingSenderId: "328859670636",
      appId: "1:328859670636:web:6dd52e70928fac2edb2049",
      measurementId: "G-SBYPCCTHTS"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "welcome " + user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name",
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}
function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}