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
        document.querySelectorAll("article").forEach(target => {
            target.onmouseover = () => clearInterval(timer_id);
            target.onmouseout = () => timer_id = setInterval(handle, time);
        });
    });
})();
