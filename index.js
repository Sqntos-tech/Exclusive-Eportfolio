

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList.add("modal__overlay--visible")

    emailjs
       .sendForm(
        'service_qjlys9t',
        'template_bd45u8c',
        event.target,
        'pvYQQfnpQlRospKuq'
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