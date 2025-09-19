
let radios = document.querySelectorAll('input[name="myOption"]');
let alasan = document.getElementById("alasan");

radios.forEach(radio => {
  radio.addEventListener("change", function() {
    if (this.value !== "Hadir" && this.value != 'Sakit') {
      alasan.classList.add("alasan");
    } else {
      alasan.classList.remove("alasan"); 
    }
  });
});