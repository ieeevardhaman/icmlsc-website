(function ($) {
    function startCountDown() {
        var countDownDate = new Date("Feb 7, 2020 0:0:0").getTime();
        setInterval(function () {
            var now = new Date().getTime();
            var distance = countDownDate - now;
            if (distance > 0) {
                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                $(".countdown").html(days + "d " + hours + "h " + minutes + "m " + seconds + "s");
            }
        }, 1000);
    }
    $(document).ready(function () {
        startCountDown();
    });
})(jQuery)