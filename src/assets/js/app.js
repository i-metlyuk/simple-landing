$(function(){
    /* Modals
    =========================== */

    const modalCall = $("[data-modal]");
    const modalClose = $("[data-close]");

    modalCall.on("click", function (event) {
        event.preventDefault();
        var $this = $(this);
        var modalId = $this.data("modal");

        $(modalId).addClass('show');
        $("body").addClass("no-scroll");

        setTimeout(function () {
            $(modalId).find(".modal__dialog").css({
                transform: "rotateX(0)"
            });
        }, 200);
    });

    modalClose.on("click", function (event) {
        event.preventDefault();
        var $this = $(this);
        var modalParent = $this.parents(".modal");

        modalParent.find(".modal__dialog").css({
            transform: "rotateX(90deg)"
        });

        setTimeout(function () {
            modalParent.removeClass('show');
            $("body").removeClass("no-scroll");
        }, 200);
    });

    $(".modal").on("click", function () {
        var $this = $(this);

        $this.find(".modal__dialog").css({
            transform: "rotateX(90deg)"
        });

        setTimeout(function () {
            $this.removeClass('show');
            $("body").removeClass("no-scroll");
        }, 200);
    });

    $(".modal__dialog").on("click", function (event) {
        event.stopPropagation();
    });

    /* Smooth scroll */
    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        var $this = $(this);
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("html, body").animate({
            scrollTop: blockOffset
        }, 1000)

    });

    /* Team as Objects */
    function createrUser(userImageLink = "https://via.placeholder.com/370x440/CECECE", userName = "AL RAYHAN", userProf = "UI Designer", userDecription = "Lorem Ipsum is not simply is an action designer random text It has roots in a piece.", userFacebookLink = "#", userTwitterLink = "#", userDribbbleLink = "#", userEnvelopeLink = "#"){
        this.userImageLink = userImageLink;
        this.userName = userName;
        this.userProf = userProf;
        this.userDecription = userDecription;
        this.userFacebookLink = userFacebookLink;
        this.userTwitterLink = userTwitterLink;
        this.userDribbbleLink = userDribbbleLink;
        this.userEnvelopeLink = userEnvelopeLink;
        this.createDOMElement = function(){
            return `
            <div class="team__item">
                <img class="team__image" src="${this.userImageLink}" alt="">
                <div class="team__info">
                    <div class="team__content">
                        <div class="team__header">
                            <div class="team__name">
                                ${this.userName}
                            </div>
                            <div class="team__separator">
                                /
                            </div>
                            <div class="team__prof">
                                ${this.userProf}
                            </div>
                        </div>
                        <p class="team__text">${this.userDecription}</p>
                        <div class="team__social">
                            <a class="team__link" href="${this.userFacebookLink}" target="_blank">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a class="team__link" href="${this.userTwitterLink}" target="_blank">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a class="team__link" href="${this.userDribbbleLink}" target="_blank">
                                <i class="fab fa-dribbble"></i>
                            </a>
                            <a class="team__link" href="${this.userEnvelopeLink}" target="_blank">
                                <i class="far fa-envelope"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            `;
        }
    }

    let users = [];
    let usersDivCollection = [];
    let teamInner = document.querySelector('.team__inner');

    users[0] = new createrUser(
        "assets/images/team/team-1.jpg",
        "MAYA",
        "Developer",
    );
    users[1] = new createrUser(
        "assets/images/team/team-2.jpg",
    );
    users[2] = new createrUser(
        "assets/images/team/team-3.jpg",
    );
    users[3] = new createrUser(
        "assets/images/team/team-4.jpg",
    );
    users[4] = new createrUser(
        "assets/images/team/team-5.jpg",
    );
    users[5] = new createrUser(
        "assets/images/team/team-6.jpg",
    );

    for (let i=0; i<users.length; i++){
        usersDivCollection[i] = document.createElement('div');
        usersDivCollection[i].className = 'team__col';
        usersDivCollection[i].innerHTML = users[i].createDOMElement();
        teamInner.append(usersDivCollection[i]);
    }
});
