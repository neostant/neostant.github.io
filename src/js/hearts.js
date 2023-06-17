// jquery ajax to http://wh.mesemi.net/neostantcom/hearts to get heart count
$.ajax({
    url: "http://wh.mesemi.net/neostantcom/hearts",
    success: function(data) {
        $("#hearts").html(data.hearts);
        $("#heart-ping").addClass("animate-ping")
        setTimeout(function() {
            $("#heart-ping").removeClass("animate-ping")
            $("#fake-heart").remove() // you will be destroyed ⚡⚡⚡
        }, 3000)
    }
})