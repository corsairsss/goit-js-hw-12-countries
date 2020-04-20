import notyfOptions from '../config/notyf-options.js'
import '../css/style.css';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import fetchArticles from './fetchArticles.js';
import { debounce } from "debounce";
import itemCountry from '../templates/listCountry.hbs';
import itemListCountry from '../templates/itemListCountry.hbs';
// --------------------------------------
const notyf = new Notyf(notyfOptions)
const inputSearchCountry = document.querySelector('.js-input');
const listCountries = document.querySelector('.js-list');
const itemFindCountry = document.querySelector('.item');

inputSearchCountry.addEventListener('input', debounce(showResultSearchCountry, 500));

function showResultSearchCountry(e) {
  if (listCountries.children.length > 1) listCountries.innerHTML = '';
  const name = e.target.value;

  fetchArticles.fetchArticles(name).then(data => {
    if (data.length > 10) notyf.open({ type: 'info', });
    if (data.length > 1 && data.length < 10) {
      itemFindCountry.innerHTML = '';
      listCountries.insertAdjacentHTML('beforeend', itemListCountry(data))
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

