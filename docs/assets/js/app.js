!function(e){var t={};function n(a){if(t[a])return t[a].exports;var s=t[a]={i:a,l:!1,exports:{}};return e[a].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(a,s,function(t){return e[t]}.bind(null,s));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){$((function(){var e=$("[data-modal]"),t=$("[data-close]");function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"https://via.placeholder.com/370x440/CECECE",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"AL RAYHAN",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"UI Designer",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"Lorem Ipsum is not simply is an action designer random text It has roots in a piece.",s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"#",o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"#",i=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"#",r=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"#";this.userImageLink=e,this.userName=t,this.userProf=n,this.userDecription=a,this.userFacebookLink=s,this.userTwitterLink=o,this.userDribbbleLink=i,this.userEnvelopeLink=r,this.createDOMElement=function(){return'\n            <div class="team__item">\n                <img class="team__image" src="'.concat(this.userImageLink,'" alt="">\n                <div class="team__info">\n                    <div class="team__content">\n                        <div class="team__header">\n                            <div class="team__name">\n                                ').concat(this.userName,'\n                            </div>\n                            <div class="team__separator">\n                                /\n                            </div>\n                            <div class="team__prof">\n                                ').concat(this.userProf,'\n                            </div>\n                        </div>\n                        <p class="team__text">').concat(this.userDecription,'</p>\n                        <div class="team__social">\n                            <a class="team__link" href="').concat(this.userFacebookLink,'" target="_blank">\n                                <i class="fab fa-facebook-f"></i>\n                            </a>\n                            <a class="team__link" href="').concat(this.userTwitterLink,'" target="_blank">\n                                <i class="fab fa-twitter"></i>\n                            </a>\n                            <a class="team__link" href="').concat(this.userDribbbleLink,'" target="_blank">\n                                <i class="fab fa-dribbble"></i>\n                            </a>\n                            <a class="team__link" href="').concat(this.userEnvelopeLink,'" target="_blank">\n                                <i class="far fa-envelope"></i>\n                            </a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            ')}}e.on("click",(function(e){e.preventDefault();var t=$(this).data("modal");$(t).addClass("show"),$("body").addClass("no-scroll"),setTimeout((function(){$(t).find(".modal__dialog").css({transform:"rotateX(0)"})}),200)})),t.on("click",(function(e){e.preventDefault();var t=$(this).parents(".modal");t.find(".modal__dialog").css({transform:"rotateX(90deg)"}),setTimeout((function(){t.removeClass("show"),$("body").removeClass("no-scroll")}),200)})),$(".modal").on("click",(function(){var e=$(this);e.find(".modal__dialog").css({transform:"rotateX(90deg)"}),setTimeout((function(){e.removeClass("show"),$("body").removeClass("no-scroll")}),200)})),$(".modal__dialog").on("click",(function(e){e.stopPropagation()})),$("[data-scroll]").on("click",(function(e){e.preventDefault();var t=$(this);blockId=t.data("scroll"),blockOffset=$(blockId).offset().top,$("html, body").animate({scrollTop:blockOffset},1e3)}));var a=[],s=[],o=document.querySelector(".team__inner");a[0]=new n("assets/images/team/team-1.jpg","MAYA","Developer"),a[1]=new n("assets/images/team/team-2.jpg"),a[2]=new n("assets/images/team/team-3.jpg"),a[3]=new n("assets/images/team/team-4.jpg"),a[4]=new n("assets/images/team/team-5.jpg"),a[5]=new n("assets/images/team/team-6.jpg");for(var i=0;i<a.length;i++)s[i]=document.createElement("div"),s[i].className="team__col",s[i].innerHTML=a[i].createDOMElement(),o.append(s[i])}))}]);