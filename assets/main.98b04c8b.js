import{$ as n}from"./vendor.395c2565.js";n(document).ready(()=>{const o=["06:00-08:00","14:00-18:00","11:00-18:00","11:30\u201323:30","13:30\u201315:30"],_="https://fakerapi.it/api/v1/custom?title=city&image=image&description=text&date=dateTime&phone=phone&tag1=pokemon&tag2=pokemon&tag3=pokemon&address=streetAddress",p="https://fakerapi.it/api/v1/custom?title=city&image=image&description=text&date=dateTime&phone=phone&tag1=pokemon&tag2=pokemon&tag3=pokemon&address=streetAddress",v="https://fakerapi.it/api/v1/custom?title=city&description=text&date=dateTime&phone=phone&address=streetAddress",r="...";function d(s,a){return s=n.trim(s),s.length>a?(s=s.substring(0,a-r.length),s.substring(0,s.lastIndexOf(" "))+r):s}function l(s){const t=Object.keys(s).filter(i=>i.includes("tag")).map(i=>s[i]);let c="";return t.forEach(i=>{c+=`<li>${i}</li>`}),c}function h(){fetch(_).then(s=>s.json()).then(s=>{const a=s.data;let e="";a.forEach((t,c)=>{const i=l(t);c<3&&(e+=`
              <article class="card">
                <div class="card__image">
                  <img src="${t.image}" alt="${t.title}">
                </div>
                <div class="card__content">
                  <div class="card__info">
                    <h3 class="card__title">${t.title}</h3>
                    <div class="card__description">${d(t.description,100)}</div>
                    <ul class="tag-list">
                      ${i}
                    </ul>
                  </div>
                  <div class="card__footer">
                    <div class="card__footer__top">
                      <span class="card__footer__time">
                        <img src="./src/assets/icons/icon-time.svg" alt="Time">
                        <span>${o[Math.floor(Math.random()*4+1)]}</span>
                      </span>
                      <span class="card__footer__phone">
                        <img src="./src/assets/icons/icon-phone.svg" alt="Phone">
                        <span>${t.phone}</span>
                      </span>
                    </div>
                    <div class="card__footer__bottom">
                      <span class="card__footer__location">
                        <img src="./src/assets/icons/icon-location.png" alt="Location">
                        <span>${t.address}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            `)}),n("#featured-stores-content").html(e)})}function g(){fetch(p).then(s=>s.json()).then(s=>{const a=s.data;let e="";a.forEach((t,c)=>{const i=l(t);c<5&&(e+=`
              <article class="card card--horizontal">
                <div class="card__image">
                  <img src="${t.image}" alt="${t.title}">
                </div>
                <div class="card__content">
                  <div class="card__info">
                    <div class="card__time">${t.date.date.substring(0,10)}</div>
                    <h3 class="card__title">${t.title}</h3>
                    <div class="card__description">${d(t.description,150)}</div>
                    <ul class="tag-list">
                      ${i}
                    </ul>
                  </div>
                  <div class="card__footer">
                    <div class="card__footer__top">
                      <span class="card__footer__time">
                        <img src="./src/assets/icons/icon-time.svg" alt="Time">
                        <span>${o[Math.floor(Math.random()*4+1)]}</span>
                      </span>
                      <span class="card__footer__location">
                        <img src="./src/assets/icons/icon-location.png" alt="Location">
                        <span>${t.address}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            `)}),n("#event-content").html(e)})}function u(){fetch(v).then(s=>s.json()).then(s=>{const a=s.data;let e="";a.forEach((t,c)=>{c<3&&(e+=`
              <article class="card">
                <div class="card__content">
                  <div class="card__top">
                    <div class="card__top__left">
                      <div class="card__logo">
                        <img src="./src/assets/logo-shortcut.png" alt="D&A">
                      </div>
                      <span>D&A Hostel</span>
                    </div>
                    <div class="card__published-date">${t.date.date.substring(0,10)}</div>
                  </div>
                  <div class="card__info">
                    <h3 class="card__title">${t.title}</h3>
                    <div class="card__description">${t.description}</div>
                  </div>
                </div>
              </article>
            `)}),n("#news-bulletin-content").html(e)})}function m(){n(".banner").slick({infinite:!0,slidesToShow:1,slidesToScroll:1,speed:300,autoplay:!1,dots:!0})}n(".menu__btn").on("click",s=>{n(s.currentTarget).parents(".header").toggleClass("header-open")}),m(),h(),g(),u()});
