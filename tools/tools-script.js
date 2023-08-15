// tools-script.js

var randomPassword = function (length) {
  chars = "!@abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  var pass = "";
  for (x = 0; x < length; x++) {
    i = Math.floor(Math.random() * 62);
    pass += chars.charAt(i);
  }
  $("#output").text(pass);
};

$("button").on("click", function () {
  var length = $("input").val();
  if (length <= 0) {
    $("#output").show();
    $("#output").text("Enter a number more than 0.");
  } else {
    $("#output").show();
    randomPassword(length);
  }
});

$("#info").on("click", function () {
  $("#output").show("");
  $("#output").text(
    "You can use the up and down arrow keys to change the value."
  );
});
