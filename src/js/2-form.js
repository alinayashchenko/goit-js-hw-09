const STORAGE_KEY = "feedback-form-state";

const formData = {
    email: "",
    message: "",
}

const form = document.querySelector(".feedback-form");
const email = form.querySelector("input");
const textarea = form.querySelector("textarea");

// Подія input, збереження введених даних в Local Storage //

form.addEventListener("input", function onFormInput(event) {
    const inputEvent = event.target;

    if (inputEvent.name === "email" || inputEvent.name === "message") {

    formData[inputEvent.name] = inputEvent.value.trim();

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    }
});

// Подія submit, отримання даних в поля форми з Local Storage //

form.addEventListener("submit", function onFormSubmit(event) {
    event.preventDefault();

    formData.email = email.value.trim();
    formData.message = textarea.value.trim();

    if (!formData.email || !formData.message) {
    alert("Fill please all fields");
    return;
    }

    console.log(formData);

    localStorage.removeItem(STORAGE_KEY);
    formData.email = "";
    formData.message = "";
    form.reset();
    });

    function populateForm() {
    const saved = localStorage.getItem(STORAGE_KEY);
        if (!saved) {
            return
        };

    const parsed = JSON.parse(saved); 

    email.value = (parsed.email || "");
    textarea.value = (parsed.message || "");
    
    formData.email = email.value.trim();
    formData.message = textarea.value.trim();
    }

    populateForm();
    

// Відображення рядка "Type area" в полях форми при кліку //

email.addEventListener("focus", () => {
    if (email.value.trim() === "") {
    email.placeholder = "Type area";
    }
});

email.addEventListener("blur", () => {
    email.placeholder = "";
});

textarea.addEventListener("focus", () => {
    if (textarea.value.trim() === "") {
    textarea.placeholder = "Type area";
    }
});

textarea.addEventListener("blur", () => {
    textarea.placeholder = "";
});


