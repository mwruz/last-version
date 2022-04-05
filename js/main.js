// SITE HEADER LOGIN POPUP 

let loginPopup = document.querySelector('.site-header__popup-wrapper');
let loginBtn = document.querySelector('.site-header__login');
let popupCloseIcon = document.querySelector('.popup-close');

loginBtn.addEventListener('click', ()=>{
    loginPopup.classList.add('site-header__popup-wrapper-active');
})

popupCloseIcon.addEventListener('click', ()=> {
    loginPopup.classList.remove('site-header__popup-wrapper-active');
})

// SITE NAV STYLES 

let siteNav = document.querySelector(".site-nav");
let siteBody = document.querySelector("body");
let siteNavHumBtn = document.querySelector(".humburger-btn");
let siteContainer = document.querySelectorAll('.container')

siteNavHumBtn.addEventListener("click", () => {
  siteNav.classList.toggle('site-nav-active');
  siteBody.classList.toggle("body-active");
})

// MOBILE MAP SCRIPTS 

const mapData = [
    {
      region: 'uz_ta',
      regionName: 'Чирчиқ-Оҳангарон ирригация тизимлари ҳавза бошқармаси',
      chairman: 'Абдураззоқов Жахонгир Боқижонович',
      address: 'Тошкент ш., Роҳат к., 13-уй',
      phone: '(71) 295-23-36',
      email: 'tv.havza@minwater.uz'
    },

    {
      region: 'uz_an',
      regionName: 'Норин-Қорадарё ирригация тизимлари ҳавза бошқармаси',
      chairman: 'Хамидов Хушнудбек Собирович',
      address: 'Андижон ш., Н.Охунов к., 40а-уй',
      phone: '(74) 223-55-53',
      email: 'nq.havza@minwater.uz'
    },

    {
      region: 'uz_na',
      regionName: 'Норин-Сирдарё ирригация тизимлари ҳавза бошқармаси',
      chairman: 'Алматов Фозилжон Абдукадирович',
      address: 'Наманган ш., Ҳамроҳ к., 66-уй',
      phone: '(69) 227-69-40',
      email: 'ns.havza@minwater.uz'
    },

    {
      region: 'uz_fa',
      regionName: 'Сирдарё-Сўх ирригация тизимлари ҳавза бошқармаси',
      chairman: 'Турсунов Фахриддин Султонович',
      address: 'Фарғона ш., Ал-Фарғоний к., 72-уй',
      phone: '(73) 244-67-83',
      email: 'fv.havza@minwater.uz'
    },

    {
      region: 'uz_si',
      regionName: 'Қуйи Сирдарё ирригация тизимлари ҳавза бошқармаси',
      chairman: 'Исроилов Шавкат Отамуродович',
      address: 'Гулистон ш., Хондамир к., 127-уй',
      phone: '(67) 225-00-30',
      email: 'qs.havza@minwater.uz'
    },

    {
      region: 'uz_ji',
      regionName: 'Сирдарё-Зарафшон ирригация тизимлари ҳавза бошқармаси',
      chairman: 'Джураев Шуҳрат Суярқулович',
      address: 'Жиззах ш., Бешқувур к., 56-уй',
      phone: '(72) 226-91-28',
      email: 'sz.havza@minwater.uz'
    },

    {
      region: 'uz_sa',
      regionName: 'Зарафшон ирригация тизимлари ҳавза бошқармаси',
      chairman: 'Раджабов Фарход Валиевич',
      address: 'Самарқанд ш., Гагарин к., 70-уй',
      phone: '(66) 234-44-10',
      email: 'zar.havza@minwater.uz'
    },

    {
      region: 'uz_qa',
      regionName: 'Аму-Қашқадарё ирригация тизимлари ҳавза бошқармаси',
      chairman: 'Вакант',
      address: 'Қарши ш., И.Каримов к., 81а-уй',
      phone: '(75) 226-38-47',
      email: 'aq.havza@minwater.uz'
    },

    {
      region: 'uz_bu',
      regionName: 'Аму-Бухоро ирригация тизимлари ҳавза бошқармаси',
      chairman: 'Файзиллаев Эркин Бахшиллоевич',
      address: 'Бухоро ш., Б.Нақшбанд к., 297/1-уй',
      phone: '(65) 225-09-35',
      email: 'ab.havza@minwater.uz'
    },

    {
      region: 'uz_su',
      regionName: 'Аму-Сурхон ирригация тизимлари ҳавза бошқармаси',
      chairman: 'Алимов Тўлқин Жўраевич',
      address: 'Термиз ш., М.Қаххор к., 19-уй',
      phone: '(76) 221-73-05',
      email: 'as.havza@minwater.uz'
    },

    {
      region: 'uz_nv',
      regionName: 'Қуйи Зарафшон ирригация тизимлари ҳавза бошқармаси',
      chairman: 'Шомуродов Нодир Намозович',
      address: 'Навоий ш., А.Навоий к., 24-уй',
      phone: '(79) 224-98-31',
      email: 'qz.havza@minwater.uz'
    },

    {
      region: 'uz_xo',
      regionName: 'Чапқирғоқ Амударё ирригация тизимлари ҳавза бошқармаси',
      chairman: 'Тоиров Одилбек Рахимберганович',
      address: 'Урганч ш., М.Хоразмий к., 1-уй',
      phone: '(62) 226-01-35',
      email: 'xz.havza@minwater.uz'
    },

    {
      region: 'uz_qo',
      regionName: 'Қорақалпоғистон Республикаси Сув хўжалиги вазирлиги',
      chairman: 'Усаков Даулетбай Торебаевич',
      address: 'Нукус ш., Т.Қайпберганов к., 25-уй',
      phone: '(61) 224-13-68',
      email: 'qqr@minwater.uz'
    }
];

let regionName = document.querySelector('.region-name');
let regionChairman = document.querySelector('.region-chairman');
let regionAddress = document.querySelector('.region-address');
let regionEmail = document.querySelector('.region-email');
let regionPhone = document.querySelector('.region-phone');
let regionChairmanPosition = document.querySelector('.region-chairman__position');

let regionMap = document.querySelector('#map');
let regionPath = regionMap.querySelectorAll('path');

regionName.textContent = mapData[0].regionName;
regionChairman.textContent = mapData[0].chairman;
regionAddress.textContent = mapData[0].address;
regionEmail.textContent = mapData[0].email;
regionPhone.textContent = mapData[0].phone;
regionChairmanPosition.textContent = 'Boshliq: ';
regionPath[6].classList.add('path-active');

regionPath.forEach((item) => {

  item.addEventListener("click", () => {
    mapData.forEach((index) => {
      if(index.region == item.id) {
        regionName.textContent = index.regionName;
        regionChairman.textContent = index.chairman;
        regionAddress.textContent = index.address;
        regionEmail.textContent = index.email;
        regionPhone.textContent = index.phone;

        regionPath.forEach(path => {
          path.classList.remove('path-active');
        })
        item.classList.add('path-active');
      }
    })
  })



})

// regionName.textContent = mapActiveRegion.regionName;
// regionChairman.textContent = mapActiveRegion.chairman;
// regionAddress.textContent = mapActiveRegion.address;
// regionEmail.textContent = mapActiveRegion.email;
// regionPhone.textContent = mapActiveRegion.phone;



