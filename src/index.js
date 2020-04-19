import './style.css';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import foo from './main.js';
import { debounce } from "debounce";
import itemCountry from './templates/listCountry.hbs';
// --------------------------------------
const inp = document.querySelector('.js-input');
const listCountries = document.querySelector('.js-list');
const itemFindCountry = document.querySelector('.item');
inp.addEventListener('input', debounce(boo, 500));

const notyf = new Notyf({
  duration: 5000,
  position: {
    x: 'center',
    y: 'top',
  },
  types: [
    {
      type: 'error',
      backgroundColor: 'red',
      duration: 2000,
      dismissible: true,
    },
    {

      type: 'info',
      backgroundColor: '#3f3e3e',
      icon: false,
      message: 'Too many matches found.Please enter a more specific query',
      dismissible: true,
      duration: 2500,

    },

  ],
});

function boo(e) {
  if (listCountries.children.length > 1) listCountries.innerHTML = '';
  const name = e.target.value;

  foo.fetchArticles(name).then(data => {
    if (data.length > 10) notyf.open({
      type: 'info',
    });
    if (data.length > 1 && data.length < 10) {
      data.map(item => {
        itemFindCountry.innerHTML = '';
        listCountries.insertAdjacentHTML('beforeend', `<li class="list-item">${item.name}</li>`)
      })
    }
    if (data.length === 1) {
      itemFindCountry.innerHTML = '';
      itemFindCountry.insertAdjacentHTML('beforeend', itemCountry(data));
    }
    if (data.status === 404) {
      notyf.error('This country not Find')
    }
  });


}
