function toggleModal()
{
    console.log("Modal Button pressed");
    let modalElement = document.getElementById('modal-main');
    modalElement.style.display = 'block';

}

function closeModal() {
    let modalElement = document.getElementById('modal-main');
    modalElement.style.display = 'none';    
}

window.onclick = function(event) {
    let modalElement = document.getElementById('modal-main');
    if (event.target == modalElement) {
        modalElement.style.display = "none";
    }
}