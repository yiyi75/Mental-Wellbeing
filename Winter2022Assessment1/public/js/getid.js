// Authenticate the Session
//generate random authentication number
function getAuthNum() {
  return Math.floor(Math.random() * 90000) + 10000
}

//Get User ID and Validate
const authnum = getAuthNum()
var goodId = false;

// Authentication
firebase.auth().signInAnonymously()
.then(() => {
  // Signed in..

})
.catch((error) => {
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
  console.log(errorMessage)
})

firebase.auth().onAuthStateChanged((user) => {
if (user) {
  // User is signed in, see docs for a list of available properties
  // https://firebase.google.com/docs/reference/js/firebase.User
  pData.AuthId = user.uid;
  console.log("Just registered user ID: ",pData.AuthId);

  // ...
} else {
  // User is signed out
  // ...
}
});
