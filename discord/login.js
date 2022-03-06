function validate(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;

   if(username==""||password==""){
       alert("FILL THE DETAILS");
   }
   else{
    alert("YOU HAVE LOGGED IN");
   }
}
function message(){
    alert("You have forgotten your password");
}