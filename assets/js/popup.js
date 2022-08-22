const popUp = document.querySelector(".popup__confirmed"),
          popUpButton = document.querySelectorAll(".recall__btn"),
          modalWindowCloseButton = document.querySelector("[data-modalClosePopUp]");

    function showModalWindow(){
        popUp.style.display = "block"
        document.body.style.overflow = "hidden"
    }

    function closeModalWindow(){
        popUp.style.display = "none"
        document.body.style.overflow = ""
    }

    popUpButton.forEach(btn => {
        btn.addEventListener("click", () => {
            showModalWindow();
        })
    });

    modalWindowCloseButton.addEventListener("click", () => {
        closeModalWindow();
    });

    popUp.addEventListener("click", (e) => {
        if(e.target === modal){
            closeModalWindow();
        }
    });

    document.addEventListener("keydown", (e) => {
        if(e.code === "Escape"){
            closeModalWindow();
        }
    });


const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

async function formSend(e){
    e.preventDefault(); 

    let error = formValidate(form);
    let formData = new FormData(form);
    
    if(error == 0){
        let response = await fetch('../php/send.php', {
            method: 'POST',
            body: formData
        });
        if(response.ok){
            let result = await response.json();
            alert(result.message);
            formPreview.innerHTML = '';
            form.reset();
        }else{
            alert('response not ok')
        }
    }else{
        alert(1111)
    }

}

function formValidate(form){
    let error = 0;
    let formReq = document.querySelectorAll('._req');

    for (let index = 0; index < formReq.length; index++) {
        const input = formReq[index];
        formRemoveError(input);

        if(input.classList.contains("_email")){
            if (emailTest(input)){
                formAddError(input);
                error++;
            }
            
        }else {
            if (input.value === ''){
                formAddError(input);
                error++;
            }
        }
        return error;
    }

    function formAddError(input){
        input.parentElement.classList.add("_error");
        input.classList.add("_error");
    }

    function formRemoveError(input){
        input.parentElement.classList.remove("_error");
        input.classList.remove("_error");
    }

    function emailTest(input){
        return  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    }
}