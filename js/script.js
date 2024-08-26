const camposDoForm = document.querySelectorAll("[required]");

camposDoForm.forEach((campo) => {
    campo.addEventListener("blur", () => verficarCampos(campo));
});

function verficarCampos(campo) {

}
