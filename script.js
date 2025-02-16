const buttonElement = document.querySelectorAll(".accordion");

buttonElement.forEach((button) => {
    button.addEventListener("click", () => {
        // Close all other accordions
        buttonElement.forEach((btn) => {
            if (btn !== button) {
                btn.classList.remove("active");
                const answer = btn.nextElementSibling;
                answer.classList.remove("show");
                answer.style.maxHeight = answer.scrollHeight + "px";
                setTimeout(() => {
                    answer.style.maxHeight = null;
                }, 10);
            }
        });

        button.classList.toggle("active");
        const answer = button.nextElementSibling;
        if (answer.classList.contains("show")) {
            answer.classList.remove("show");
            answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
            answer.classList.add("show");
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    });
});
