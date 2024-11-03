
function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
}

function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
}

document.getElementById('simulate').addEventListener('click', function() {
    const output = document.getElementById('output');
    output.innerHTML = ''; 
    output.innerHTML += 'LED is ON<br>';
    
    setTimeout(() => {
        output.innerHTML += 'LED is OFF<br>';
    }, 1000);
    
    setTimeout(() => {
        output.innerHTML += 'LED is ON<br>';
    }, 2000);
    
    setTimeout(() => {
        output.innerHTML += 'LED is OFF<br>';
    }, 3000);
});
