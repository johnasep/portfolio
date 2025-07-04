import {myPortfolio, myProfile, myContact, myQuote} from '../data.js';

// name
const name = document.getElementById("name");
name.innerHTML = myProfile.name;

// fmyimage
const myImage = document.getElementById("foto-profile");
myImage.src = myProfile.image;

// about
const aboutMe = document.getElementById("aboutme");
aboutMe.innerHTML = myProfile.aboutme;

// skills
const skill = document.getElementById("skills");
skill.innerHTML = myProfile.skills;

// email
const email = document.getElementById("email");
email.innerHTML = myProfile.email;

// contact
const contactList = document.getElementById("contact-list");
let contactItem = '';
myContact.forEach(item => {
    contactItem += `<figure class="itemcontact m-3">
              <img src="${item.image}" alt="logo ${item.nameApp}">
              <figcaption><a href="${item.url}" target="_blank">${item.nameApp} Me</a></figcaption>
            </figure>`;
});
contactList.innerHTML = contactItem;

// portfolio
const portfolioList = document.getElementById("portfolio-list");

const truncatetext = (text, limit) => {
    const words = text.split(" ");
    return words.length > limit ? words.slice(0, limit).join(" ") + "..." : text;
};

// skeleton UI
let skeletonItem = '';
for (let i = 0; i < 3; i++) {
    skeletonItem += `
      <div class="card bg-black m-2 skeleton-card" style="width: 18rem;">
        <div class="skeleton-image placeholder-glow"></div>
        <div class="card-body d-flex flex-column">
          <h5 class="skeleton-title placeholder-glow">
            <span class="placeholder col-6"></span>
            </h5>
            <p class="skeleton-text placeholder-glow flex-grow-1">
            <span class="placeholder col-7"></span>
            <span class="placeholder col-4"></span>
            <span class="placeholder col-6"></span>
          </p>
          <button class="btn btn-detail mt-auto disabled placeholder col-4"></button>
        </div>
      </div>`;
}
portfolioList.innerHTML = skeletonItem;

let portfolioItem = '';
setTimeout(() => {
    portfolioItem += '';

    myPortfolio.forEach(item => {
        const truncatedDescription = truncatetext(item.description, 10);
        const truncatedTitle = truncatetext(item.title, 3);
    
        portfolioItem += `<div class="card bg-black m-2" style="width: 18rem;" id="${item.id}">
                <img src="${item.image}" class="card-img-top" loading="lazy" alt="foto projek">
                <div class="card-body d-flex flex-column">
                  <h5 class="card-title">${truncatedTitle}</h5>
                  <p class="card-text flex-grow-1">${truncatedDescription}</p>
                  <button type="button" class="btn btn-detail" data-bs-toggle="modal" data-bs-target="#modal-${item.id}">
                   Details
                  </button>
    
                  <!-- Modal -->
                <div class="modal fade" id="modal-${item.id}" tabindex="-1" aria-labelledby="modalLabel-${item.id}" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="modalLabel-${item.id}">${item.title}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        ${item.description}
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <a href="${item.url}" class="btn btn-link" target="_blank">Go to link</a>
                    </div>
                    </div>
                </div>
                </div>
    
                </div>
              </div>`;
    });
    portfolioList.innerHTML = portfolioItem;
}, 1000)

// footer quote
const quote = document.getElementById('footer-quote');
quote.innerHTML = myQuote;

// button scroll
const scrollUp = document.getElementById('scrollup');

window.addEventListener('scroll', () => {
    if(window.scrollY > 100) {
        scrollUp.classList.remove("hidden");
        scrollUp.style.display = "block";
    } else {
        scrollUp.classList.add("hidden");
        setTimeout(() => {
            scrollUp.style.display = "none";
        }, 300);
    }
});

scrollUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
