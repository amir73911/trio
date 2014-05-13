$(function(){

    window.Epoc = {
        Cache: {},
        isolang: 'ru-ru',
        language: 'ru',
        here: '/'
    };

    (function(){var v,w={}.hasOwnProperty,x=Epoc,c=function(){return v=c.__super__.constructor.apply(this,arguments)},p,q,r,s,k,j,m,n,t,f=c,g=Backbone.View,u=function(){this.constructor=f},l;for(l in g)w.call(g,l)&&(f[l]=g[l]);u.prototype=g.prototype;f.prototype=new u;f.__super__=g.prototype;n=[];m=[];k=!1;t=$("#wrapper");j=$(".rotated.prev, .rotated.next");s=$(".offers.fullscreen_gallery");c.prototype.el="body";c.prototype.events={"click #main_menu a, .toggle_contact, .toggle_achievements, .scroll_to":"navigate_to",
        "click .toggle_offer_pic":"toggle_offer_pic","click .toggle_menu, .toggle_menu i":"toggle_menu","mouseenter #wrapper>section":"wrapper_fade","mouseleave #wrapper>section":"wrapper_fade"};c.prototype.wrapper_fade=function(a){this.$el.find("#video_mask .darken ");return"mouseleave"===a.type?Epoc.video_view.fadein():Epoc.video_view.fadeout()};c.prototype.initialize=function(){var a=this;this.diving=$("#diving");this.diving_depth=$("#depth");this.header=$("#header");this.timer="";this.video_bg=$("#video_bg");
        document.addEventListener?document.addEventListener("touchstart",function(){},!0):document.attachEvent("touchstart",function(){},!0);$.ajaxSetup({cache:!1});this.add_animated_bg_to_btn_input();this.social_share();this.d_height=$(document).height();$(".section_hash").each(function(){var a;a=$(this);n.push(a.attr("id"));return m.push(a.offset().top)});$(window).on("scroll",function(){return a.deep_diving()});return $(window).on("resize",function(){var b,h,d,e;e=$(window).width();d=$(window).height();
            b=$(document).height();h=16/9;t.css({width:e,height:b});Epoc.BaseView.inf_1280=1280>=e;Epoc.BaseView.inf_560=560>=e;$(".section_hash").each(function(){var a;a=$(this);return a.outerHeight()<d-58?a.attr("data-force-scrolling",!0):a.attr("data-force-scrolling",!1)});a.fullscreen_video(d,e,h);return a.sections_fill_height(d)}).triggerHandler("resize")};c.prototype.add_animated_bg_to_btn_input=function(){return $("input.btn").after('<div class="bg_anim">&nbsp;</div><div class="bg_color">&nbsp;</div>')};
        c.prototype.navigate_to=function(a){var b;a.preventDefault();a.stopPropagation();b=$(a.currentTarget);a=b.attr("href").replace(RegExp("[/]+$","g"),"");Epoc.BaseView.inf_560&&Epoc.menu_view.hide_menu();if(b.hasClass("active"))return!1;s.hasClass("active")&&this.toggle_offer_pic();if("#"!==a)return _gaq.push(["_trackPageview",a]),Epoc.app.navigate(a,{trigger:!0})};c.prototype.toggle_offer_pic=function(a){var b=this;a&&(a.preventDefault(),a.stopPropagation());this.offers=$("#offers").show();this.offers_header=
            this.offers.find("header");if(this.offers.hasClass("active"))return TweenMax.to(this.offers_header,0.2,{css:{left:"-130px"},ease:Quart.easeInOut,onComplete:function(){return TweenMax.to(b.offers,0.4,{css:{top:"100%"},ease:Quart.easeInOut,onComplete:function(){return b.offers.removeClass("active")}})}});a="/o/d:main/"+$(a.target).closest("li").attr("data-id");this.offers.css({backgroundImage:"url("+a+")"});return TweenMax.to(this.offers,0.4,{css:{top:"0%"},ease:Quart.easeInOut,onComplete:function(){b.offers.addClass("active");
            return TweenMax.to(b.offers_header,0.2,{css:{left:"280px"},ease:Quart.easeInOut})}})};c.prototype.toggle_menu=function(a){null==a&&(a=!1);a&&a.preventDefault();return this.header.hasClass("shown")?Epoc.menu_view.hide_menu():Epoc.menu_view.show_menu()};c.prototype.hide_menu=function(){var a=this;return TweenMax.to(this.header,0.2,{css:{left:"-300px"},ease:Quart.easeInOut,onComplete:function(){return a.header.removeClass("shown")}})};c.prototype.show_menu=function(){var a=this;return TweenMax.to(this.header,
            0.2,{css:{left:"0"},ease:Quart.easeInOut,onComplete:function(){return a.header.addClass("shown")}})};c.prototype.deep_diving=function(){var a,b;b=$(window).scrollTop();a=parseInt(b/100);0<a?this.diving_depth.text(a):this.diving_depth.text(0);a="0px "+-parseInt(b/25)+"px";return $("#diving").css({backgroundPosition:a})};q=function(a){a=1280<$(window).width()?a.offset().top:a.offset().top-60;return TweenMax.to(window,0.5,{scrollTo:{y:a},ease:Strong.easeInOut,onComplete:function(){return j.removeClass("transparent disabled")}})};
        p=function(a,b,h){var d;d=this;Epoc.BaseView.inf_560||j.addClass("transparent");clearTimeout(this.timer);return this.timer=setTimeout(function(){if(!1===k)return r.call(d,a,b,h);clearTimeout(this.timer);j.removeClass("transparent");return k=!1},150)};r=function(a,b,h){var d,e,c,g,f;e=a.currentTarget.scrollY;e||(e=document.documentElement.scrollTop);k=!0;f=[];a=c=0;for(g=h.length;c<g;a=++c)if(d=h[a],d>e-800&&d<e+this.d_height){"true"===$("#"+b[a]).attr("data-force-scrolling")&&!$("html").hasClass("lt-ie9")?
            q($("#"+b[a])):(j.removeClass("transparent disabled"),"wrapper"===b[a]?$('.rotated.scroll_to[href="/"]').addClass("transparent disabled"):$('.rotated.scroll_to[href="/fre/'+b[a]+'"]').addClass("transparent disabled"));Epoc.video_view.switch_seq(b[a]);$(".section_hash").removeClass("look_hover");$("#"+b[a]).addClass("look_hover");break}else f.push(void 0);return f};c.prototype.select_menu_item=function(a){this.$el.find("#main_menu a.active").removeClass("active");return $("#main_menu a[href="+a.replace(RegExp("[/]",
            "g"),"\\/")+"]").addClass("active")};c.prototype.sections_fill_height=function(a){var b=this;$(window).on("scroll DOMMouseScroll mousewheel keyup",function(a){return p.call(b,a,n,m)});return $("article.section_hash").each(function(){var b,d;d=$(this);if(d.outerHeight()<a-58)return b=a-d.outerHeight(),d.next(".sep_vertical").css({paddingBottom:b}),d.attr("data-force-scrolling",!0);d.next(".sep_vertical").css({paddingBottom:0});return d.attr("data-force-scrolling",!1)})};c.prototype.fullscreen_video=
            function(a,b,c){return b/a<c?this.video_bg.css("top",0).css("left",-(a*c-b)/2).css("width",a*c).css("height",a):this.video_bg.css("width",b+20).css("height",b/c+20).css("top",-(b/c-a)/2).css("left",0)};c.prototype.social_share=function(){var a,b,c,d;c=encodeURIComponent($('meta[property="og:title"]').attr("content"));a=encodeURIComponent($('meta[property="og:description"]').attr("content"));d=encodeURIComponent($('meta[property="og:url"]').attr("content"));b=encodeURIComponent($('meta[property="og:image"]').attr("content"));
            $(".fb").on("click",function(e){e.preventDefault();return window.open("http://www.facebook.com/sharer.php?s=100&p[title]="+c+"&p[summary]="+a+"&p[url]="+d+"&p[images][0]="+b+"&t="+c+"&e="+a,"sharer","toolbar=0,status=0,width=626,height=436")});$(".tw").on("click",function(b){b.preventDefault();return window.open("http://twitter.com/intent/tweet?original_referer=webclient&text="+a+"&url="+d+"","sharer","toolbar=0,status=0,width=626,height=260")});$(".gp").on("click",function(a){a.preventDefault();
                return window.open("https://plusone.google.com/_/+1/confirm?hl=fr&url="+d+"&title="+c,"sharer","toolbar=0,status=0,width=600,height=330")});return $(".in").on("click",function(b){b.preventDefault();return window.open("http://www.linkedin.com/shareArticle?mini=true&url="+d+"&title="+c+"&summary="+a,"sharer","toolbar=0,status=0,width=600,height=410")})};x.BaseView=c}).call(this);


    console.log(Epoc)

    (function(){
        var q,
            r={}.hasOwnProperty,
            s=Epoc,
            d=function(){return q=d.__super__.constructor.apply(this,arguments)},
            m,
            n,
            j,
            g,
            k=d,
            h=Epoc.BaseView,
            p=function(){this.constructor=k},
            l;
        for(l in h)
            r.call(h,l)&&(k[l]=h[l]);
        p.prototype=h.prototype;
        k.prototype=new p;
        k.__super__=h.prototype;
        d.prototype.el="#offers_slideshow";
        d.prototype.initialize=function(){
            this.slides=this.$el.find(".slides");
            this.next=this.$el.find("#offers_nav_next");
            this.prev=this.$el.find("#offers_nav_prev");
            this.count_slides=this.slides.find("section").length;
            this.start_slide=1;
            this.$el.addClass("active");
            return this.render()
        };
        d.prototype.render = function(){
            this.slides.find("section:lt("+(this.start_slide-1)+")").detach().appendTo(this.slides);
            this.next.find("li:gt("+(this.start_slide+1)+")").detach().prependTo(this.next.find("ul"));
            this.prev.find("li:lt("+this.start_slide+")").detach().appendTo(this.prev.find("ul"));
            return j.call(this)
        };
        d.prototype.move=function(a){
            var c,b=this;
            c=0<a?"next":"prev";
            a=Math.abs(a);
            if ("next"===c) return
                n.call(this,this.slides.find("section:first")),
                m.call(this,this.slides.find("section:eq("+(this.count_slides-a)+")")),
                this.slides.find("section:gt(0)").detach().prependTo(this.slides),
                this.slides.find("section:first").css({marginTop:-2E3}),
                TweenMax.to(
                    this.slides.find("section:first"),
                    1,
                    {
                        css:{marginTop:"+="+500*a},
                        ease:Strong.easeOut,
                        onComplete: function(){
                            b.slides.find("section").css({marginTop:""});
                            b.slides.find("section:lt("+(b.count_slides-a-1)+")").detach().appendTo(b.slides);
                            Epoc.video_view.switch_seq(b.slides.find("section:first").attr("data-target-categ"));
                            return j.call(b)}
                    }
                ),
                this.next.find("li:gt(1)").detach().prependTo(this.next.find("ul")),
                this.next.find("li:first").css({marginTop:-493}),
                TweenMax.to(
                    this.next.find("li:first"),
                    1,
                    {
                        css:{marginTop:"+="+165*a},
                        ease:Strong.easeOut,
                        onComplete:function() {
                            b.next.find("li").css({marginTop:""});
                            return b.next.find("li:lt("+(b.count_slides-a-2)+")").detach().appendTo(b.next.find("ul"))}
                    }
                ),
                this.prev.find("li:gt(1)").detach().prependTo(this.prev.find("ul")),
                this.prev.find("li:first").css({marginTop:-493}),
                TweenMax.to(
                    this.prev.find("li:first"),
                    1,
                    {
                        css:{marginTop:"+="+164*a},
                        ease:Strong.easeOut,
                        onComplete:function(){
                            b.prev.find("li").css({marginTop:""});
                            return b.prev.find("li:lt("+(b.count_slides-a-2)+")").detach().appendTo(b.prev.find("ul"))
                        }
                    }
                );
            n.call(this,this.slides.find("section:first"));
            m.call(this,this.slides.find("section:eq("+a+")"));
            TweenMax.to(
                this.slides.find("section:first"),
                1,
                {
                    css:{marginTop:"-="+500*a},
                    ease:Strong.easeOut,
                    onComplete:function(){
                        b.slides.find("section").css({marginTop:""});
                        b.slides.find("section:lt("+a+")").detach().appendTo(b.slides);
                        Epoc.video_view.switch_seq(b.slides.find("section:first").attr("data-target-categ"));
                        return j.call(b)}
                }
            );
            TweenMax.to(
                this.next.find("li:first"),
                1,
                {
                    css:{marginTop:"-="+164*a},
                    ease:Strong.easeOut,
                    onComplete:function(){
                        b.next.find("li").css({marginTop:""});
                        return b.next.find("li:lt("+a+")").detach().appendTo(b.next.find("ul"))}
                }
            );
            return TweenMax.to(
                this.prev.find("li:first"),
                1,
                {
                    css:{marginTop:"-="+164*a},
                    ease:Strong.easeOut,
                    onComplete:function(){
                        b.prev.find("li").css({marginTop:""});
                        return b.prev.find("li:lt("+a+")").detach().appendTo(b.prev.find("ul"))}
                }
            )
        };
        m=function(a){
            var c,
                b,
                d,
                e,
                f;
            f=a.find(".slide_title_container");
            e=a.find(".slide_title");
            c=a.find("p.baseline");
            b=a.find(".scroll_to .offer_nav_content");
            d=a.find(".toggle_achievements .offer_nav_content");
            a=a.find(".offer_nav_links");

            a.css({height:0,paddingTop:0});
            b.css({marginLeft:"300px"});
            d.css({marginLeft:"-300px"});
            f.css({width:0,marginLeft:"145px"});
            e.css({paddingTop:"190px"});
            c.css({marginTop:"-300px"});

            TweenMax.to(
                f,
                1,
                {
                    css:{width:"290px",marginLeft:0},
                    ease:Strong.easeOut,
                    onComplete:function(){
                        return TweenMax.to(e,0.5,{css:{paddingTop:0},ease:Strong.easeOut})}
                }
            );
            TweenMax.to(
                c,
                1,
                {
                    css:{marginTop:"5px"},
                    ease:Strong.easeOut,
                    delay:0.5
                }
            );
            return TweenMax.to(
                a,
                0.4,
                {
                    css:{height:"50px",paddingTop:"3px"},
                    ease:Strong.easeIn,
                    delay:0.8,
                    onComplete:function(){
                        TweenMax.to(
                            b,
                            0.5,
                            {
                                css:{marginLeft:0},
                                ease:Strong.easeOut
                            }
                        );
                    return TweenMax.to(
                        d,
                        0.5,
                        {
                            css:{marginLeft:0},
                            ease:Strong.easeOut
                        }
                    )
                    }
                }
            )
        };
        n=function(a){
            var c,
                b,
                d,
                e,
                f;
            f=a.find(".slide_title_container");
            e=a.find(".slide_title");
            c=a.find("p.baseline");
            b=a.find(".scroll_to .offer_nav_content");
            d=a.find(".toggle_achievements .offer_nav_content");
            a=a.find(".offer_nav_links");

            TweenMax.to(
                e,
                0.4,
                {
                    css:{paddingTop:"190px"},
                    ease:Strong.easeOut
                }
            );
            TweenMax.to(
                f,
                0.6,
                {
                    css:{width:0,marginLeft:"145px"},
                    ease:Strong.easeOut
                }
            );
            TweenMax.to(
                c,
                0.4,
                {
                    css:{marginTop:"-300px"},
                    ease:Strong.easeOut
                }
            );
            TweenMax.to(
                b,
                0.4,
                {
                    css:{marginLeft:"300px"},
                    ease:Strong.easeOut
                }
            );
            TweenMax.to(
                a,
                0.6,
                {
                    css:{height:0},
                    ease:Strong.easeOut
                }
            );
            return TweenMax.to(
                d,
                0.4,
                {
                    css:{marginLeft:"-300px"},
                    ease:Strong.easeOut
                }
            )
        };
        j=function(){

            var a=this;

            this.next.find("li a").on("click",function(c){
                c.preventDefault();
                c=$(c.currentTarget).parent().index();
                g.call(a);
                return a.move(2-c)
            });
            this.prev.find("li a").on("click",function(c){
                c.preventDefault();
                c=$(c.currentTarget).parent().index();
                g.call(a);
                return a.move(-(c+1))
            });
            this.next.find("a.goto").on("click",function(c){
                c.preventDefault();
                g.call(a);
                return a.move(-1)
            });
            return this.prev.find("a.goto").on("click",function(c){
                c.preventDefault();
                g.call(a);
                return a.move(1)
            })};
            
        g=function(){
            this.next.find("li a").off("click");
            this.prev.find("li a").off("click");
            this.next.find("a.goto").off("click");
            return this.prev.find("a.goto").off("click")
        };
        s.SlideshowView=d
    }).call(this);


})

