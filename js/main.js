$(document).ready(function(){

    scrollTopReset = function(){
        $("html, body").animate({scrollTop:0});
    };
    scrollTopReset();

    //  windows / body / html
    var sectionht = 1100;
    console.log("섹션 높이 : "+ sectionht);

    var sectionleng = $("section").length;
    console.log("섹션수 : "+ sectionleng);


    $("body").height(sectionht*$("section").length);

    $(window).mousewheel(function(e,delta){
        var winTop = $(window).scrollTop();
        console.log("스크롤탑값 : "+ winTop);
        let ht = sectionht;

        e.preventDefault();

        if(delta > 0){//마우스 휠을 올렸을때
            $(".mouse").addClass("up");
        }else if(delta < 0){//마우스 휠을 내렸을때
            $(".mouse").removeClass("up");
        }


        if(winTop >= ht*0 && winTop < ht*1-150){

            $("section").removeClass("on");
            $("section").eq(0).addClass("on");

            $("div.menu").removeClass("on");

        }else if(winTop >= ht*1 && winTop < ht*2){

            $("section").removeClass("on");
            $("section").eq(1).addClass("on");

            // $("div.menu").css({opacity: 0,visibility: hidden,left: 0});

            $("div.menu").removeClass("num1 num2 num3 num4 num5 num6 num7 on");
            $("div.menu").addClass("num1");

        }else if(winTop >= ht*2 && winTop < ht*3){

            $("section").removeClass("on");
            $("section").eq(2).addClass("on");

            $("div.menu").removeClass("num1 num2 num3 num4 num5 num6 num7 on");
            $("div.menu").addClass("num2");

        }else if(winTop >= ht*3 && winTop < ht*4){

            $("section").removeClass("on");
            $("section").eq(3).addClass("on");

            $("div.menu").removeClass("num1 num2 num3 num4 num5 num6 num7 on");
            $("div.menu").addClass("num3");

        }else if(winTop >= ht*4 && winTop < ht*5){

            $("section").removeClass("on");
            $("section").eq(4).addClass("on");

            $("div.menu").removeClass("num1 num2 num3 num4 num5 num6 num7 on");
            $("div.menu").addClass("num4");

        }else if(winTop >= ht*5 && winTop < ht*6){

            $("section").removeClass("on");
            $("section").eq(5).addClass("on");

            $("div.menu").removeClass("num1 num2 num3 num4 num5 num6 num7 on");
            $("div.menu").addClass("num5");
            
        }else if(winTop >= ht*6 && winTop < ht*7){

            $("section").removeClass("on");
            $("section").eq(6).addClass("on");

            $("div.menu").removeClass("num1 num2 num3 num4 num5 num6 num7 on");
            $("div.menu").addClass("num6");

        }else if(winTop >= ht*7 && winTop < ht*8){

            $("section").removeClass("on");
            $("section").eq(7).addClass("on");

            $("div.menu").removeClass("num1 num2 num3 num4 num5 num6 num7 on");
            $("div.menu").addClass("num7");

        }
    });

    // 시작할때 스크롤 정지
    $(".wrap").on('scroll touchmove mousewheel', function(event) {
        event.preventDefault();
        return false;
      });

    //  시작 인트로
    var introstart = (function(){
        $(".intro").addClass("on");

        $(".intro_inner .slide_out1").stop().delay(3000).animate({width:"0"},2000,function(){

            setTimeout(function(){
                $(".main").addClass("on");
                $(".main_inner > div .slide_out2").stop().delay(4000).animate({width:"show"},2000);    

            },500);

            //인트로 끝나고 스크롤 다시 온 
            $(".wrap").off('scroll touchmove mousewheel');
        });
    });
    introstart();

    // 공통
    $(".project_btn a").mouseover(function(){
        $(".mouse").addClass("ad");
        $(".project_btn a").css({cursor: "none"});
    });

    $(".project_btn a").mouseout(function(){
        $(".mouse").removeClass("ad");
    });

    // samsungsem
    $(".samsungsem_inner > ul > li").mouseover(function(){
        let left = -1100;
        let Num = $(".samsungsem_inner > ul > li").index(this) +1;
        console.log("samsungsem : "+ Num);
        $(".samsungsem_inner .web_access_inner").addClass("on");
        $(".samsungsem_inner .web_access_inner").stop().animate({"left":(left*Num)},300);

        $(".mouse").addClass("ad");
        $(".samsungsem_inner > ul > li").css({cursor: "none"});

    });

    $(".samsungsem_inner > ul > li").mouseout(function(){
        $(".samsungsem_inner .web_access_inner").removeClass("on");
        $(".samsungsem_inner .web_access_inner").stop().animate({"left":0},600,"linear");

        $(".mouse").removeClass("ad");
    });

    $(".samsungsem_inner .web_access_inner > ul li").mouseover(function(){
        $(this).siblings().css({filter: "blur(15px)"});

        $(".mouse").addClass("ad");
        $(".samsungsem_inner > ul > li").css({cursor: "none"});

    });

    $(".samsungsem_inner .web_access_inner > ul li").mouseout(function(){
        $(".samsungsem_inner .web_access_inner > ul li").siblings().css({filter:"none"});
        
        $(".mouse").removeClass("ad");
    });

    // cjone
    $(".cjone_page li").mouseover(function(){
        let linum = $(".cjone_page li").index(this);
        console.log("cjhover : "+ linum);
        if(linum== 0){$(".cjone_page").addClass("pc");}
        if(linum== 1){$(".cjone_page").addClass("table");}
        if(linum== 2){$(".cjone_page").addClass("mobile");}

        $(".mouse").addClass("ad");
        $(".cjone_page li").css({cursor: "none"});
    });

    $(".cjone_page li").mouseout(function(){
        $(".cjone_page").removeClass("pc table mobile");

        $(".mouse").removeClass("ad");
    });

    $(window).mousemove(function(e){
        var moveX = e.clientX; //브라우저 창 기준 x값
        var moveY = e.clientY; //브라우저 창 기준 y값
        
        // console.log("browsX : "+moveX);
        // console.log("browsY : "+moveY);

        $(".app_page img").css({transform:"translate("+((moveX-960)/5)+"px,"+((moveY-540)/5)+"px)"});
        $(".app_page img").css({transform:"translate(px,px)"});

        $(".mouse").css({left:(moveX-50),top:(moveY-40)});

    });

    

    //thetastable

    let Numsave = 0;

    $(".thetastable_inner > ul > li").mouseover(function(){
        let Num = $(".thetastable_inner > ul > li").index(this);
        Numsave = Num;
        console.log("thetastableNum : "+ Num);
        console.log("save : "+ Numsave);
        
        $(".thetastable_page").addClass("on");

        $(".thetastable_inner .web_access_inner > div").removeClass("on");
        $(".thetastable_inner .web_access_inner > div").eq(Num).addClass("on");

        $(".mouse").addClass("ad");
        $(".thetastable_inner > ul > li").css({cursor: "none"});

    });


    $(".thetastable_inner > ul > li").mouseout(function(){
        $(".thetastable_inner .web_access_inner > div").removeClass("on");

        $(".thetastable_page").removeClass("on");

        $(".mouse").removeClass("ad");
    });

    // contact

    iconbox = '';

    var iconLi = $(".iconbox ul li").length;
    console.log("iconLi : "+iconLi);

    $(".iconbox ul li").click(function(){
        let thisidx = $(".iconbox ul li").index(this);
        console.log(thisidx);
        let thishtml = $(this).html();
        // console.log(thishtml);

        $(".iconanibox").css({left:465+(135*thisidx)});

        iconbox = '';

        for(i=0; i<=29; i++){
            iconbox += thishtml;
            // console.log("iconLi : "+iconbox);
        };

        // $(".iconanibox").html("<div>"+iconbox+"</div>");
        $(".iconanibox").html(iconbox);
        $(".contact_inner .iconanibox").addClass("on");
        
    });

    $(".iconbox ul li").mouseover(function(){
        $(".mouse").addClass("ad");
        $(".iconbox ul li").css({cursor: "none"});
    });

    $(".iconbox ul li").mouseout(function(){
        $(".mouse").removeClass("ad");
    });

    // menu

    $("div.menu .menu_btn").click(function(){
        $("div.menu").toggleClass("on");
    });

    $(".menu_list li").click(function(event){
        let menuli = $(this).index();
        console.log(menuli);

        event.preventDefault();

        $("html, body").scrollTop(sectionht*menuli);
        
        $("section").removeClass("on");
        $("section").eq(menuli).addClass("on");

        $("div.menu").removeClass("num1 num2 num3 num4 num5 num6 num7 on");
        $("div.menu").addClass("num"+ menuli +"");
    });

    $("div.menu").mouseover(function(){
        $(".mouse").css({display:"none"});
        $(this).css({cursor:"default"});
    });

    $("div.menu").mouseout(function(){
        $(".mouse").css({display:"block"});
    });
    
});