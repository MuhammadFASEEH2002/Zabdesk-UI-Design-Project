// this file contains nav open and close 
// functions

let isOpen = false;
        window.addEventListener("load" , function () {
            console.log(window.innerWidth)
            if(window.innerWidth > 768){
                openNav() 
            }
        
          })
        
        function openNav() {
            if(isOpen){
                closeNav()
                isOpen = false;
                return ;
            }
            isOpen = true
            document.getElementById("mySidenav").style.width = "250px";
            document.getElementById("main").style.marginLeft = "250px";
            
        }
        function closeNav() {
            document.getElementById("mySidenav").style.width = "0";
            document.getElementById("main").style.marginLeft = "0";
            isOpen = false
        }