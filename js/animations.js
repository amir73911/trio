$(function(){
    mainNavAnimate(); /* Главное меню */

    window.Epoc = {
        Cache: {},
        isolang: 'fr-be',
        language: 'fre',
        here: '/'
    };
    Epoc.isolang = 'fr-be';
    Epoc.language = 'fre';
    Epoc.here = '/';

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

function mainNavAnimate() {
    var parent    = $('.main_nav');
    var opener    = parent.find('.opener');
    var ul_lev1   = parent.find('.level-1');
    var ul_lev2   = parent.find('.level-2');
    var drop      = parent.find('.drop');
    var droped_ul = drop.find('.level-2');

    parent.hover(function() {
        ul_lev1.fadeIn(200);
    }, function() {
        ul_lev1.fadeOut(200);
        ul_lev2.fadeOut(200);
    });

    drop.hover(function() {
        $(this).find('.level-2').stop(1,1).fadeIn(200);
    }, function() {
        $(this).find('.level-2').stop(1,1).fadeOut(200);
    });
}
