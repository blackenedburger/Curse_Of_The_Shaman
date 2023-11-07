const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});

const hidden1Elements = document.querySelectorAll('.hidden1');
hidden1Elements.forEach((el) => observer.observe(el));

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add("show2");
        } else {
            entry.target.classList.remove("show2");
        }
    });
});

const contentElements = document.querySelectorAll('.content');
contentElements.forEach((el) => observer2.observe(el));