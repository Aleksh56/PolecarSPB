const modal = document.querySelector(".modal"),
          contactUsButton = document.querySelectorAll("[data-modal]"),
          modalWindowCloseButton = document.querySelector("[data-modalClose]");

    function showModalWindow(){
        modal.style.display = "block"
        document.body.style.overflow = "hidden"
    }

    function closeModalWindow(){
        modal.style.display = "none"
        document.body.style.overflow = ""
    }

    contactUsButton.forEach(btn => {
        btn.addEventListener("click", () => {
            showModalWindow();
        })
    });

    modalWindowCloseButton.addEventListener("click", () => {
        closeModalWindow();
    });

    modal.addEventListener("click", (e) => {
        if(e.target === modal){
            closeModalWindow();
        }
    });

    document.addEventListener("keydown", (e) => {
        if(e.code === "Escape"){
            closeModalWindow();
        }
    });