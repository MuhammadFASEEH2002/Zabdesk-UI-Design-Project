// this file contains nav open and close 
// functions

let isOpen = false;
        window.addEventListener("load" , function () {
            console.log(window.innerWidth)
            if(window.innerWidth >= 768){
                openNav(true) 
            }
        
          })
        
        function openNav(isWeb = false) {
            if(isOpen){
                closeNav()
                isOpen = false;
                return ;
            }
            isOpen = true
            document.getElementById("mySidenav").style.width = isWeb ? "250px" : "100svw";
            document.getElementById("main").style.marginLeft = isWeb ? "250px" :  "100svw";
            
        }
        function closeNav() {
            document.getElementById("mySidenav").style.width = "0";
            document.getElementById("main").style.marginLeft = "0";
            isOpen = false
        }