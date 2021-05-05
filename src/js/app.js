require('fslightbox');

document.addEventListener('DOMContentLoaded', function () {
    /* Toggle Search Filter Menu */
    const searchMenu = document.querySelector('.search-toggle-menu');
    const searchFilter = document.querySelector('.search-result-filter');
    const resultFilterClose = document.querySelector('.result-filter-close');

    searchMenu &&
        searchMenu.addEventListener('click', function () {
            searchFilter.classList.toggle('open');
            searchMenu.classList.toggle('active');
        });

    resultFilterClose &&
        resultFilterClose.addEventListener('click', function () {
            searchFilter.classList.toggle('open');
            searchMenu.classList.toggle('active');
        });

    // Toggle Search Result List/Grid
    const searchResultList = document.querySelector('.search-result-list');
    const searchResultGrid = document.querySelector('.search-result-grid');
    const articleGrid = document.querySelector(
        '.search-result-content .result-articles'
    );
    searchResultGrid &&
        searchResultGrid.addEventListener('click', function () {
            searchResultList.classList.remove('active');
            searchResultGrid.classList.add('active');
            articleGrid.classList.remove('article-list');
        });

    searchResultList &&
        searchResultList.addEventListener('click', function () {
            searchResultList.classList.add('active');
            searchResultGrid.classList.remove('active');
            articleGrid.classList.add('article-list');
        });
    const galleryView = document.querySelector('.gallery-view');
    galleryView &&
        galleryView.addEventListener('click', function () {
            console.log(galleryView && '4');
            fsLightboxInstances['gallery'].open(0);
        });

    const dateIn = document.querySelector('.date-check-in');
    const dateOut = document.querySelector('.date-check-out');

    /** Reserve Form Date Price Update */
    dateIn &&
        dateIn.addEventListener('change', function () {
            if (dateIn.value && dateOut.value) {
                updateFormPriceData(dateIn.value, dateOut.value);
            }
        });
    dateOut &&
        dateOut.addEventListener('change', function () {
            if (dateIn.value && dateOut.value) {
                updateFormPriceData(dateIn.value, dateOut.value);
            }
        });
    // Update Form Price, when Change Date Check-In/ Check-out
    function updateFormPriceData(date1, date2) {
        const dateOut = new Date(date1);
        const dateIn = new Date(date2);
        const diffDate = (dateIn - dateOut) / (60 * 60 * 24 * 1000);
        if (diffDate && diffDate > 0) {
            updateHtmlPricePerDay(diffDate);
        }
    }
    // Update Form Prce Html
    function updateHtmlPricePerDay(diffDate) {
        const htmlTagPriceDay = document.querySelector('.form7-price-perday');

        const htmlTagTotalPrce = document.querySelector('.form7-price-total');
        let price = htmlTagPriceDay.dataset.calc_price;
        let fee = htmlTagTotalPrce.dataset.fee;
        htmlTagPriceDay.innerHTML = `<span>$${price} x ${diffDate} nights</span><span>$${
            price * diffDate
        }</span>`;

        htmlTagTotalPrce.innerHTML = `<span>Total</span><span>$${
            price * diffDate + +fee
        }</span>`;
    }
});
