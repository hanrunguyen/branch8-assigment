import $ from 'jquery';
import 'slick-carousel';
import './styles/app.scss';

import iconTime from './assets/icons/icon-time.svg';
import iconPhone from './assets/icons/icon-phone.svg';
import iconLocation from './assets/icons/icon-location.png';
import logoShortcut from './assets/logo-shortcut.png';

$(document).ready(() => {
  const rangeTime = ['06:00-08:00', '14:00-18:00', '11:00-18:00', '11:30–23:30', '13:30–15:30']
  const featuredStoreApi = 'https://fakerapi.it/api/v1/custom?title=city&image=image&description=text&date=dateTime&phone=phone&tag1=pokemon&tag2=pokemon&tag3=pokemon&address=streetAddress';
  const eventsApi = 'https://fakerapi.it/api/v1/custom?title=city&image=image&description=text&date=dateTime&phone=phone&tag1=pokemon&tag2=pokemon&tag3=pokemon&address=streetAddress';
  const newsApi = 'https://fakerapi.it/api/v1/custom?title=city&description=text&date=dateTime&phone=phone&address=streetAddress';
  const numberFeaturedStore = 3;
  const numberEvents = 5;
  const numberNews = 3;
  const ellipsis = "...";

  function trimText(text, maxLength) {
    text = $.trim(text);

    if (text.length > maxLength) {
      text = text.substring(0, maxLength - ellipsis.length)
      return text.substring(0, text.lastIndexOf(" ")) + ellipsis;
    }
    return text;
  }

  function buildTags(elm) {
    const keys = Object.keys(elm);
    const tagKeys = keys.filter(e => e.includes('tag'));
    const tagValues = tagKeys.map(k => elm[k]);
    let tagHtml = '';
    tagValues.forEach(elm => {
      tagHtml += `<li>${elm}</li>`
    });
    return tagHtml;
  }

  function buildFeaturedStores() {
    fetch(featuredStoreApi)
      .then(response => response.json())
      .then(result => {
        const data = result.data;
        let html = '';
        data.forEach((elm, idx) => {
          const tagValues = buildTags(elm);

          if(idx < numberFeaturedStore) {
            html += `
              <article class="card">
                <div class="card__image">
                  <img src="${elm.image}" alt="${elm.title}">
                </div>
                <div class="card__content">
                  <div class="card__info">
                    <h3 class="card__title">${elm.title}</h3>
                    <div class="card__description">${trimText(elm.description, 100)}</div>
                    <ul class="tag-list">
                      ${tagValues}
                    </ul>
                  </div>
                  <div class="card__footer">
                    <div class="card__footer__top">
                      <span class="card__footer__time">
                        <img src="${iconTime}" alt="Time">
                        <span>${rangeTime[Math.floor((Math.random() * 4) + 1)]}</span>
                      </span>
                      <span class="card__footer__phone">
                        <img src="${iconPhone}" alt="Phone">
                        <span>${elm.phone}</span>
                      </span>
                    </div>
                    <div class="card__footer__bottom">
                      <span class="card__footer__location">
                        <img src="${iconLocation}" alt="Location">
                        <span>${elm.address}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            `
          }
        });

      $('#featured-stores-content').html(html);
    });
  }

  function buildEvents() {
    fetch(eventsApi)
      .then(response => response.json())
      .then(result => {
        const data = result.data;
        let html = '';
        data.forEach((elm, idx) => {
          const tagValues = buildTags(elm);
          if(idx < numberEvents) {
            html += `
              <article class="card card--horizontal">
                <div class="card__image">
                  <img src="${elm.image}" alt="${elm.title}">
                </div>
                <div class="card__content">
                  <div class="card__info">
                    <div class="card__time">${elm.date.date.substring(0, 10)}</div>
                    <h3 class="card__title">${elm.title}</h3>
                    <div class="card__description">${trimText(elm.description, 150)}</div>
                    <ul class="tag-list">
                      ${tagValues}
                    </ul>
                  </div>
                  <div class="card__footer">
                    <div class="card__footer__top">
                      <span class="card__footer__time">
                        <img src="${iconTime}" alt="Time">
                        <span>${rangeTime[Math.floor((Math.random() * 4) + 1)]}</span>
                      </span>
                      <span class="card__footer__location">
                        <img src="${iconLocation}" alt="Location">
                        <span>${elm.address}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            `
          }
        });

      $('#event-content').html(html);
    });
  }

  function buildNews() {
    fetch(newsApi)
      .then(response => response.json())
      .then(result => {
        const data = result.data;
        let html = '';
        data.forEach((elm, idx) => {
          if(idx < numberNews) {
            html += `
              <article class="card">
                <div class="card__content">
                  <div class="card__top">
                    <div class="card__top__left">
                      <div class="card__logo">
                        <img src="${logoShortcut}" alt="D&A">
                      </div>
                      <span>D&A Hostel</span>
                    </div>
                    <div class="card__published-date">${elm.date.date.substring(0, 10)}</div>
                  </div>
                  <div class="card__info">
                    <h3 class="card__title">${elm.title}</h3>
                    <div class="card__description">${elm.description}</div>
                  </div>
                </div>
              </article>
            `
          }
        });

      $('#news-bulletin-content').html(html);
    });
  }

  function initSlider() {
    $('.banner').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 300,
      autoplay: false,
      dots: true
    });
  }

  $('.menu__btn').on('click', (e) => {
    const $elm = $(e.currentTarget);
    const $header = $elm.parents('.header');
    $header.toggleClass('header-open');
  });

  initSlider();
  buildFeaturedStores();
  buildEvents();
  buildNews();
});
