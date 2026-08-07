// template_g1gwxcj
// service_qjlys9t
// MgI_dKBbVqfUxZYhO

function contact(event) {
    event.preventDefault();
    emailjs
       .sendForm(
        'service_qjlys9t',
        'template_g1gwxcj',
        event.target,
        'MgI_dKBbVqfUxZYhO'
      ) .then(() => {
        console.log('this worked1')
      })

    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " .modal__overlay--visible"
    setTimeout(() => {
        console.log('it worked 1')
    }, 500);

}