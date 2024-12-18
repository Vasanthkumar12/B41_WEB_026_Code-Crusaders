let explorebtn=document.getElementById("explore")
explorebtn.addEventListener("click",()=>{
    let dropdown = document.querySelector(".dropdown-content");
    dropdown.style.display = dropdown.style.display === 'flex' ? 'none' : 'flex';
})


