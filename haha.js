var Game = function() {
    return Game['init'].apply(Game, arguments);
};

(function(exp) {
    var circle = document.getElementById("haha");
    var h = window.screen.height;
    circle.style.left = (window.screen.width - 100) / 2 + "px";
    var jump = true;
    var frist = 0;
    var down = 0;
    var n = 0;
    var random;
    var click = true;
    var score = 0;

    exp.init = function() {
        var topf = circle.offsetTop;
        frist = setInterval(function() {
            if (topf < h) {
                topf += 1;
                circle.style.top = topf + "px";
            } else {
                clearInterval(frist);
                frist = 0;
                document.body.innerHTML = "fail!";
            };
            return false;
        }, 1);
        circle.onclick = function() {
            var topff = circle.offsetTop / h * 50;
            score = document.getElementById("score").innerHTML;
            document.getElementById("score").innerHTML = parseInt(topff) + parseInt(score);
            if (click) {
                click = false;
                n++;
                random = Math.random() * 2 - 1;
                if (frist !== 0) {
                    clearInterval(frist);
                    frist = 0;
                };
                if (down !== 0) {
                    clearInterval(down);
                    down = 0;
                };

                var top = circle.offsetTop;
                var left = circle.offsetLeft;
                circle.style.background = "url(cricle.png) -200px 0px";
                var up = setInterval(function() {
                    if (top > 0) {
                        if (left < 0 || left > window.screen.width - 100) {
                            random = -random;
                        }
                        left = left + random;
                        top = top - 1 - (n / 5);
                        circle.style.top = top + "px";
                        circle.style.left = left + "px";
                    } else {
                        clearInterval(up);
                        circle.style.background = "url(cricle.png) 0px 0px";
                        down = setInterval(function() {
                            if (top < h) {
                                click = true;
                                top = top + 1 + (n / 5);
                                circle.style.top = top + "px";
                            } else {
                                clearInterval(down);
                                down = 0;
                                document.body.innerHTML = "fail!<br/>Your score is " + document.getElementById("score").innerHTML;
                            };
                            return false;
                        }, 1);
                    };
                    return false;
                }, 1);
            };

        };
    };

})(Game);

Game();
