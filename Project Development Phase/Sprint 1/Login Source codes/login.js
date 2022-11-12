const check = [{
  username: "abc",
  password: "abc"
},
  {
    username: "def",
    password:"def"
  }]    
const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = (()=>{
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
  var newUsername = document.getElementById('usr').value;
  var newPassword = document.getElementById('pwd').value;
  check.push({ username: newUsername, password: newPassword })
  console.log(check)

});
loginBtn.onclick = (()=>{
loginForm.style.marginLeft = "0%";
loginText.style.marginLeft = "0%";
var usr = document.getElementById('user').value;
var pwd = document.getElementById('pass').value;
for (var i = 0; i < check.length; i++) {
  if (usr == check[i].username) {
    if (pwd == check[i].password) 
        alert('Success')
    else {
        alert('wrong password')
              }
            }
          }
});
signupLink.onclick = (() => {
           signupBtn.click();
         });