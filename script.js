const body = document.querySelector("body"),
      sidebar = body.querySelector(".sidebar"),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");

      toggle.addEventListener("click", () =>{
        sidebar.classList.toggle("close");
      });

      modeSwitch.addEventListener("click", () =>{
        body.classList.toggle("dark");

        if(body.classList.contains("dark")){
            modeText.innerText = "Гэрэлтэй горим"
        }else{
            modeText.innerText = "Харанхуй горим"
        }
      })

function show(){
    let input=document.getElementById("pass");
    let x=document.getElementById("hide");
    let y=document.getElementById("show")
    if(input.type==='password'){
        input.type="text";
        x.style.display = "none";
        y.style.display = "block";
    } else{
        input.type="password";
        x.style.display = "block";
        y.style.display = "none";
    } 
} 
