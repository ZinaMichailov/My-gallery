'use strict';

$(function () {
    console.log("ready!");
    renderPortfolios();
});

function renderPortfolios() {
    var portfolios = getPortfolios();
    var strHtmls = portfolios.map(function (portfolio) {
        return `
            <div class="col-md-4 col-sm-6 portfolio-item">
                <a class="portfolio-link" data-toggle="modal" href="#portfolioModal" onclick="renderModal('${portfolio.id}')">
                    <div class="portfolio-hover">
                        <div class="portfolio-hover-content">
                            <i class="fa fa-plus fa-3x"></i>
                        </div>
                    </div>
                    <img class="img-fluid" src="img/portfolio/${portfolio.id}.jpg"  width="350" height="470">
                </a>
                <div class="portfolio-caption">
                    <h4>${portfolio.name}</h4>
                    <p class="text-muted">${portfolio.title}</p>
                </div>
            </div>
        `
    });
    $('.render-row').html(strHtmls);
}

function renderModal(id) {
    var portfolio = getPortfolioById(id);
    $('.modal-body h2').text(portfolio.name);
    $('.modal-body .title').text(portfolio.title);
    $('.modal-body img').attr('src', `img/portfolio/${portfolio.id}-full.jpg`);
    $('.modal-body .desc').text(portfolio.desc);
    $('.modal-body .date').text(`Date: ${portfolio.publishedAt}`);
    $('.modal-body .link-proj').attr('href', portfolio.url);
}

function onSumbitContact(ev) {
    ev.preventDefault();

    var url = `https://mail.google.com/mail/?view=cm&fs=1&to=zinam84@gamil.com
                &su=${$('#subject').val()}&body=${$('#body').val()} from:${$('#email').val()}`;
    window.open(url);
    $('#subject').val('');
    $('#body').val('');
    $('#email').val('');
}