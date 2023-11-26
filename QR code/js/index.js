const btn = document.getElementById("BTN");
const imag = document.getElementById("img");
const input = document.getElementById("inp");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const inp = document.getElementById("inp").value;
  console.log(inp);
 imag.src =`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inp}`; 
 imag.style.border = "1px solid #dcdde1";
 input.style.padding = '3px';
//  input.value = "";

  setTimeout(() => {
    imag.src = "";
    // input.value= "";
    imag.style.border = "none";
},5000);
});



