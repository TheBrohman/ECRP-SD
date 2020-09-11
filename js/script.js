$(document).ready(function(){
  $(".login").click(function(){
    // Get the input for the username.
    var dpt = document.getElementById('name').value;
    if (dpt == "") {
      alert("Sorry, but you need to log in!");
    } else {
      // Remove the underscore from the name.
      dpt = dpt.replace('_', " ");
      $(".login-form").removeClass("show");
      $(".login-form").addClass("hide");
    };
  });


});
