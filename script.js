let explorebtn=document.getElementById("explore")
explorebtn.addEventListener("click",()=>{
    let dropdown = document.querySelector(".dropdown-content");
    dropdown.style.display = dropdown.style.display === 'flex' ? 'none' : 'flex';
})
let toggle = document.getElementById("toggle");
toggle.addEventListener("click", () => {
    let appear = document.querySelector(".dropdown-content");
    appear.style.display = appear.style.display === 'flex' ? 'none' : 'flex';
});




