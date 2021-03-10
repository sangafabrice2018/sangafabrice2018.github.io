(function () {
    "use strict";

    document.addEventListener("DOMContentLoaded", function(){
        var handle = () => {
            var checked_id = document.querySelector("[name='slide']:checked").getAttribute("id");
            var checked_index = parseInt(checked_id.substr(checked_id.length - 1) % 6) + 1;
            document.querySelector("#toggle-edit" + checked_index).checked = true;
        }
        var time = 7500;
        var timer_id = setInterval(handle, time);
        document.querySelectorAll("main > section > article").forEach(target => {
            target.onmouseover = () => clearInterval(timer_id);
            target.onmouseout = () => timer_id = setInterval(handle, time);
        });

        document.querySelectorAll("main > div:first-of-type > section:nth-of-type(2) > article > div:first-of-type > div:last-child > a").forEach(target => {
            target.setAttribute("href", target.getAttribute("href").replace("watch?v=","embed/") + "?autoplay=1");
            target.setAttribute("target", "youtube");
            target.onclick = () => document.getElementById("check-youtube").checked = true;
        });

        document.querySelector("label[for='check-youtube']").onclick = () => window.frames[0].location = "dummy.html";

        var handle_sidebar = function () {
            var sidebar = document.querySelector("main > div:last-of-type");
            sidebar.style.top = "calc(100vh - " + sidebar.scrollHeight + "px)";
            console.log(sidebar.style.top);
        }

        var ratio;
        var primary = document.querySelector("main > div:first-of-type");
        var sidebar = document.querySelector("main > div:last-of-type");
        var otop_s;
        window.onresize = function () {
            window.location.reload();
        }

        window.onload = function () {
            setTimeout(function () {
                ratio = primary.offsetHeight/sidebar.offsetHeight;
                otop_s = sidebar.offsetTop;
                window.scrollBy(0, -2);
                window.scrollBy(0, 2);
            }, 500);
        }

        window.onscroll = function () {
            if (window.pageYOffset >= otop_s) {
                sidebar.style.top = ((window.pageYOffset - otop_s)*(1 - (1/ratio))) + "px";
            }
            else {
                sidebar.style.top = "0";
            }
        }
    });
})();
