import Throttle from 'lodash.throttle';

const formData = {};

const refs = {
    form: document.querySelector('.feedback-form'),
    message: document.querySelector('.feedback-form textarea'),
    email: document.querySelector('.feedback-form input'),

};
refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', Throttle(onMessageInput, 500));
refs.form.addEventListener('input', e => {
    formData[e.target.name] = e.target.value;

});

populateMessage();
let formFeedbak = {}


function onMessageInput(evt) {
    formFeedbak = {
        email: refs.form.elements.email.value,
        message: refs.form.elements.message.value,

    }
    localStorage.setItem('feedback - form - state', JSON.stringify(formFeedbak));
};

function populateMessage() {
    const initValues = localStorage.getItem('feedback - form - state');
    const newValues = JSON.parse(initValues);

    if (newValues) {
        refs.form.elements.email.value = newValues.email;


        refs.form.elements.message.value = newValues.message;

    }
}
function onFormSubmit(evt) {
    evt.preventDefault()
    evt.currentTarget.reset();
    console.log(formData)
    localStorage.removeItem('feedback - form - state')

};




