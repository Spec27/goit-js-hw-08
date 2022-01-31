import throttle from 'lodash.throttle';
import '../css/common.css';

const VAULT_KEY = 'feedback-form-state';

const formEll = document.querySelector('form');
const emailEll = document.querySelector('input');
const messageEll = document.querySelector('textarea');

formEll.addEventListener('submit', onFormSubmit);
formEll.addEventListener('input', throttle(onFormValue, 500));

const formData = {};

function onFormValue(event) {
  formData[event.target.name] = event.target.value;
  const data = JSON.stringify(formData);
  localStorage.setItem(VAULT_KEY, data);
  JSON.parse(data);
}

function onFormSubmit(event) {
  event.preventDefault();
  event.target.reset();
  localStorage.removeItem(VAULT_KEY);
  console.log(formData);
}

function saveTheValueOfTheFieldOnReload() {
  const savedValueForm = JSON.parse(localStorage.getItem(VAULT_KEY));
  if (savedValueForm === null) {
    return;
  }
  messageEll.value = savedValueForm['message'];
  emailEll.value = savedValueForm['email'];
}
saveTheValueOfTheFieldOnReload();
