import Throttle from 'lodash.throttle';

const formData = {};

const refs = {
    form: document.querySelector('.feedback-form'),
    message: document.querySelector('.feedback-form textarea'),
    email: document.querySelector('.feedback-form input'),

};
refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', Throttle(onMessageInput, 500));
// refs.message.addEventListener('input', Throttle(onMessageInput, 500));
// refs.email.addEventListener('input', Throttle(onEmailInput, 500));
refs.form.addEventListener('input', e => {
    formData[e.target.name] = e.target.value;

});



populateMessage();
let formFeedbak = {}

function onFormSubmit(evt) {
    evt.preventDefault()
    evt.currentTarget.reset();
    console.log(formData)
    localStorage.removeItem('feedback - form - state')

};

function onMessageInput(evt) {
    formFeedbak = {
        email: refs.form.elements.email.value,
        message: refs.form.elements.message.value,

    }
    localStorage.setItem('feedback - form - state', JSON.stringify(formFeedbak));
};

// function onMessageInput(evt) {
//     const message = evt.target.value;
//     localStorage.setItem('feedback - form - state', message);
// };
// function onEmailInput(evt) {
//     const email = evt.target.value;
//     localStorage.setItem('feedback - form - state', email);
// };
// function populateMessage() {
//     const savedMessage = localStorage.getItem('feedback - form - state');
//     if (savedMessage) {
// refs.message.value = savedMessage;
//     }
// }

function populateMessage() {
    const savedMessage = localStorage.getItem('feedback - form - state');
    if (savedMessage) {
        refs.form.elements.email.value = savedMessage.email;
        refs.form.elements.message.value = savedMessage.message;
    };
}




