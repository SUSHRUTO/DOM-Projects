const btn = document.getElementById("toggleButton")

btn.addEventListener("click", ()=>{
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
        document.getElementById("toggleButton").innerText = "Toggle to Light Mode";
    }
    else{
        document.getElementById("toggleButton").innerText = "Toggle to Dark Mode";
    }
})
    
