function login() {
    $.ajax({
        type: "POST",
        url: "./auth/login.php",
        data: "n=" + $('#n').val() + "&p=" + $('#p').val(),
        success: function(res) {
            console.log(res);
            if(res === "noname") {
                $('#wrong').show();
            }
            else if(res === "wrongpass") {
                $('#wrong').show();
            }
            else if(res === "true") {
                $('#wrong').hide();
            }
            else {
                $('#wrong').show();
            }
        }
    });
}