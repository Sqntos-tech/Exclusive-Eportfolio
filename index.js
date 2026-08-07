// template_g1gwxcj
// service_qjlys9t
// MgI_dKBbVqfUxZYhO

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList.add("modal__overlay--visible")

    emailjs
       .sendForm(
        'service_qjlys9t',
        'template_g1gwxcj',
        event.target,
        'MgI_dKBbVqfUxZYhO'
      ) .then(() => {
        loading.classList.remove("modal__overlay--visible")
        success.classList.add("modal__overlay--visible")
      }) .catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
           "The email services is temporarily unavailable. Please contact me directly on edwardsantos1237@gmail.com" 
        );
      })
}