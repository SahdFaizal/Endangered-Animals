        var link = document.createElement("link");
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = "style.css";
        var fullImgBox = document.getElementById("fullImgBox");
        var fullImg = document.getElementById("fullImg");
       
        function openFullImg(pic){
            fullImgBox.style.display = "flex";
            fullImg.src = pic;
        }

        function closeFullImg(pic){
            fullImgBox.style.display = "none";
        }
