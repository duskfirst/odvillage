//document.addEventListener('DOMContentLoaded', () => {
    const ul = document.querySelector("ul");
    const input = document.querySelector("input");
    const inpButton = document.querySelector("button");

    let inpMsg = '';

    inpButton.addEventListener("click", () => {
        
        inpMsg = input.value;
        input.value = '';

        const li = document.createElement("li");
        const span = document.createElement("span");
        const dltButton = document.createElement("button");
        
        li.appendChild(span);
        li.appendChild(dltButton);
        
        dltButton.innerText = "Delete";
        span.innerText = inpMsg;
        ul.appendChild(li);
        
        dltButton.addEventListener('click', () => {
            ul.removeChild(li);
        });

        input.focus();
    });
//});
