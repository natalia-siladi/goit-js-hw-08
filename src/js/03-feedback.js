import Throttle from 'lodash.throttle';
const formData = {};
const refs = {
    form: document.querySelector('.feedback-form'),
    message: document.querySelector('.feedback-form textarea'),

};
refs.form.addEventListener('submit', onFormSubmit);
refs.message.addEventListener('input', Throttle(onMessageInput, 500));
refs.form.addEventListener('input', e => {
    formData[e.target.name] = e.target.value;

});


populateMessage();

function onFormSubmit(evt) {
    evt.preventDefault()
    evt.currentTarget.reset();
    console.log(formData)
    localStorage.removeItem('feedback - form - state')

};

function onMessageInput(evt) {
    const message = evt.target.value;
    localStorage.setItem('feedback - form - state', message);
};

function populateMessage() {
    const savedMessage = localStorage.getItem('feedback - form - state');
    if (savedMessage) {
        refs.message.value = savedMessage;
    }
}





