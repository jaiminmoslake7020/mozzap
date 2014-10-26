$(window).load(function(){

     $('.loadingBar').fadeOut("slow");
});

function showLoadingBar()
{
    $('.loadingBar').fadeIn("slow");
}

function hideLoadingBar()
{
    $('.loadingBar').fadeOut("slow");
}

var mouse = {x: 0, y: 0};

document.addEventListener('mousemove', function(e){
    mouse.x = e.clientX || e.pageX;
    mouse.y = e.clientY || e.pageY
}, false);


$('#mozzapBar').find('ul.nav li a').click(function(e){

    var aElement = $(this);

    e.preventDefault();

    $('#mozzapBar ul.nav').children('li').removeClass('active');
    aElement.parent('li').addClass('active');

    var href = aElement.attr('href') ;
    var top = aElement.attr('data-top') ;
    $(document).scrollTo( href , 1000, {offset: function() { return {top:-top, left:-5}; }});

});



$(document).keydown(function(event){
    var key = event.which;
    switch(key) {
        case 37:
            // Key left.

          //  alert("left");

            break;
        case 38:
            // Key up.

            //alert("up")

            if($('#mozzapBar').find('ul.nav li.active').prev('li:not(.dropdown)').length == 1)
            {
                $('#mozzapBar').find('ul.nav li.active').prev('li').children('a').trigger('click')
            }



            break;
        case 39:
            // Key right.

            //alert("right")

            break;
        case 40:
            // Key down.

            if($('#mozzapBar').find('ul.nav li.active').next('li:not(.dropdown)').length == 1)
            {
                $('#mozzapBar').find('ul.nav li.active').next('li').children('a').trigger('click')
            }

            ///alert("donw")

            break;
    }
});




$('.titleBoxOfSection').each(function(index,element){

    var mySplittedText = $(element).text().split('');

    $html = $("<div></div>");
    $html.addClass("awesomeText");

    $html.css({

        "color" : "#4466aa" ,
        "font-size" : "40px" ,
        "text-transform" : "uppercase" ,
        "font-family" : "calibri",
        "text-align": "center"

    });

    $(element).html($html);

    for(var i = 0 ; i < mySplittedText.length ; i++){

        if(i == 0)
        {
            $html.html('');
        }

        console.log();

        if(mySplittedText[i] == "-")
        {
            mySplittedText[i] = "&nbsp;";
        }

        $newHtml = $("<div></div>");
        $newHtml.css({"position":"relative","display":"inline-block"});
        $newHtml.html(mySplittedText[i]);
        $html.append($newHtml);

    }

})




$('.moslakeCarousel .carousel-inner .item').height($(window).height()+"px");

animation1Pre();
animation2Pre();
animation3Pre();

animation1();

$('#carousel-example-generic').on('slide.bs.carousel', function () {
    // do something…
     console.log();

    var changingIndex = $(this).find('.item.active').index() ;
    setTimeout(function(){

            if(changingIndex == 0)
            {
                console.log("executing...!!!!!!1");
                animation1Pre();
            }
            else if(changingIndex == 1)
            {
                animation2Pre();
            }
            else if(changingIndex == 2)
            {
                animation3Pre();
            }

    }, 1000);


});

$('#carousel-example-generic').on('slid.bs.carousel', function () {
    // do something…
    console.log($(this).find('.item.active').index());


        if($(this).find('.item.active').index() == 0)
        {
            animation1();
        }
        else if($(this).find('.item.active').index() == 1)
        {
            animation2();
        }
        else if($(this).find('.item.active').index() == 2)
        {
            animation3();
        }


});


function animation1Pre()
{

    element1 = $('.moslakeCarousel .carousel-inner .item .item1 .faContainer-mobile')
    element2 = $('.moslakeCarousel .carousel-inner .item .item1 .faContainer-tablet')
    element3 = $('.moslakeCarousel .carousel-inner .item .item1 .faContainer-desktop')
    element4 = $('.moslakeCarousel .carousel-inner .item .item1 .tagLine');

    element1.css({left : "-32%"});
    element2.css({top : "105%"});
    element3.css({top : "-70%"});
    TweenLite.to(element4, 0, {css:{rotationX:90} , ease:Bounce.easeOut , onComplete: function(){
        element4.addClass('deactive');
    } } ) ;
}

function animation1()
{

    element1 = $('.moslakeCarousel .carousel-inner .item .item1 .faContainer-mobile')
    element2 = $('.moslakeCarousel .carousel-inner .item .item1 .faContainer-tablet')
    element3 = $('.moslakeCarousel .carousel-inner .item .item1 .faContainer-desktop')
    element4 = $('.moslakeCarousel .carousel-inner .item .item1 .tagLine');

    var tl = new TimelineMax({repeat:0});
    tl.add( TweenMax.to(element1, 1, {css:{left:"22%"}  } ));
    tl.add( TweenLite.to(element2, 1, {css:{top:"33%"}  } ) );
    tl.add( TweenLite.to(element3, 1, {css:{top:"14%"}  } ) );
    tl.add( TweenLite.to(element4, 1, {css:{rotationX:0} , ease:Bounce.easeOut , onComplete: function(){
        element4.removeClass('deactive');
    } } ) );

}

function animation2Pre()
{

    element1 = $('.moslakeCarousel .carousel-inner .item .item2 .tagLine')
    element2 = $('.moslakeCarousel .carousel-inner .item .item2 .tagLine:nth-child(2)')
    element3 = $('.moslakeCarousel .carousel-inner .item .item2 .anotherContainer')

    element1.css({top : "120%"});
    element2.css({top : "-20%"});
    element3.css({opacity : "0"});

}

function animation2()
{

    element2 = $('.moslakeCarousel .carousel-inner .item .item2 .tagLine:nth-child(2)')
    element3 = $('.moslakeCarousel .carousel-inner .item .item2 .tagLine:nth-child(3)')
    element4 = $('.moslakeCarousel .carousel-inner .item .item2 .tagLine:nth-child(4)')
    element5 = $('.moslakeCarousel .carousel-inner .item .item2 .tagLine:nth-child(5)')
    element6 = $('.moslakeCarousel .carousel-inner .item .item2 .anotherContainer')

    var tl = new TimelineMax({repeat:0});
    tl.add( TweenMax.to(element2, 1.5, {css:{top:"35%"} , ease:Bounce.easeOut  } ));
    tl.add( TweenLite.to(element6, 1, {css:{opacity:"1"} , ease:Power4.easeOut } ) );
    tl.add( TweenLite.to(element3, 1, {css:{top:"45%"} , ease:Power4.easeOut  } ) );
    tl.add( TweenLite.to(element4, 1, {css:{top:"52%"}, ease:Power4.easeOut  } ) );
    tl.add( TweenLite.to(element5, 1, {css:{top:"59%"}, ease:Power4.easeOut  } ) );

}

function animation3Pre()
{

    element1 = $('.moslakeCarousel .carousel-inner .item .item3 .item-description');
    element2 = $('.moslakeCarousel .carousel-inner .item .item3 .colorBox').eq(1).find('.box30');
    element3 = $('.moslakeCarousel .carousel-inner .item .item3 .colorBox').eq(2).find('.box30');
    element4 = $('.moslakeCarousel .carousel-inner .item .item3 .colorBox').eq(3).find('.box30');
    element5 = $('.moslakeCarousel .carousel-inner .item .item3 .colorBox').eq(4).find('.box30');
    element6 = $('.moslakeCarousel .carousel-inner .item .item3 .colorBox').eq(5).find('.box30');
    element7 = $('.moslakeCarousel .carousel-inner .item .item3 .colorBox').eq(0).find('.box30');

    TweenMax.to(element1, 1, { css:{opacity:0 , rotationX: 360}});

    element2.css({width : "0px", "height" : "0px"});
    element3.css({width : "0px", "height" : "0px"});
    element4.css({width : "0px", "height" : "0px"});
    element5.css({width : "0px", "height" : "0px"});
    element6.css({width : "0px", "height" : "0px"});
    element7.css({width : "0px", "height" : "0px"});

}

function animation3()
{

    element1 = $('.moslakeCarousel .carousel-inner .item .item3 .item-description');
    element2 = $('.moslakeCarousel .carousel-inner .item .item3 .colorBox').eq(1).find('.box30');
    element3 = $('.moslakeCarousel .carousel-inner .item .item3 .colorBox').eq(2).find('.box30');
    element4 = $('.moslakeCarousel .carousel-inner .item .item3 .colorBox').eq(3).find('.box30');
    element5 = $('.moslakeCarousel .carousel-inner .item .item3 .colorBox').eq(4).find('.box30');
    element6 = $('.moslakeCarousel .carousel-inner .item .item3 .colorBox').eq(5).find('.box30');
    element7 = $('.moslakeCarousel .carousel-inner .item .item3 .colorBox').eq(0).find('.box30');

    var tl = new TimelineMax({repeat:0});
    tl.add( TweenMax.to(element1, 1, {css:{opacity:1 , rotationX: 0} , ease:Linear.easeOut } ));
    tl.add( TweenMax.staggerTo([element2,element3,element4,element5,element6,element7], 1, {css:{width:"100px", height : "100px" } , ease:Bounce.easeOut } ), 0.3);


}

$('li.dropdown a.dropdown-toggle').hover(function(){

    var dropDownMenu = $(this).siblings('ul.dropdown-menu');

    dropDownMenu.addClass('upLift');

        //console.log("Added upLift")


        TweenMax.to(dropDownMenu, 1, { css:{rotationX:0, rotationY:0, rotationZ: 0}, onComplete : function(){

        dropDownMenu.parents("li.dropdown").addClass('open');

    } });

},
function(){

    var dropDownMenu = $(this).siblings('ul.dropdown-menu');
    setTimeout(function(){


      console.log(dropDownMenu);
      if(!dropDownMenu.hasClass('viewAble'))
      {
          //console.log("step 1");

          dropDownMenu.css("transform-origin","0px 0px 0px");
          TweenMax.to(dropDownMenu, 1, {css:{rotationX:90, rotationY:0, rotationZ: 0}, onComplete : function(){

              dropDownMenu.parents("li.dropdown").removeClass('open');
              dropDownMenu.removeClass('upLift');
           //   console.log("hi hih hij ");


          } });


      }
      else
      {
         // console.log("step 2");
      }


  },500)

});

$('li.dropdown ul.dropdown-menu').hover(function(){

    $(this).addClass("viewAble");
    $(this).removeClass('upLift');

},function(){

    dropDownMenu =  $(this) ;
    setTimeout(function(){

        if(!dropDownMenu.hasClass('upLift'))
        {
            console.log("step 3");


            dropDownMenu.css("transform-origin","0px 0px 0px");
            TweenMax.to(dropDownMenu, 1, {css:{rotationX:90, rotationY:0, rotationZ: 0}, onComplete : function(){

                dropDownMenu.parents("li.dropdown").removeClass('open');

            } });

        }
        else
        {
           // console.log("step 4");
        }

    },500)
    $(this).removeClass("viewAble");

});



$('#sliderIndicator').waypoint(function(direction) {

    if(direction == "down")
    {
        $('#mozzapBar').removeClass('hasSlider');
    }
    else
    {
        $('#mozzapBar').addClass('hasSlider');
    }

});


var controller = $.superscrollorama({
    triggerAtCenter: true,
    playoutAnimations: true
});

controllerMagic = new ScrollMagic();


$('a[data-toggle="popover"]').popover({html:true, trigger: "hover" });
$('a[data-toggle="tooltip"]').tooltip();

$("a[data-toggle='popover']").on('shown.bs.popover', function () {
    // alert("The Popup has been shown");

    var it = $(this).next('.popover');
  //  // console.log(it);
    if(it.length >= 1)
    {
        TweenMax.to(it ,0.3, {css:{marginTop:12} });
    }

    if($(this).hasClass('btn-danger'))
    {
        it.find('.popover-title').css('background-color',"#c9302c");
    }

    if($(this).hasClass('btn-warning'))
    {
        it.find('.popover-title').css('background-color',"#ec971f");
    }

    if($(this).hasClass('btn-info'))
    {
        it.find('.popover-title').css('background-color',"#31b0d5");
    }

});

$("a[data-toggle='popover']").on('hide.bs.popover', function () {
    // alert("The Popup has been shown");
    var it = $(this).next('.popover');
    //// console.log(it);
    if(it.length >= 1)
    {
        TweenMax.to(it ,0.3, {css:{marginTop:30} });
    }
});


/*  serviceContainer    serviceContainer    serviceContainer    serviceContainer    serviceContainer    serviceContainer  */
/*  serviceContainer    serviceContainer    serviceContainer    serviceContainer    serviceContainer    serviceContainer  */
/*  serviceContainer    serviceContainer    serviceContainer    serviceContainer    serviceContainer    serviceContainer  */
/*  serviceContainer    serviceContainer    serviceContainer    serviceContainer    serviceContainer    serviceContainer  */

var newSplitText = [] ;

$('#serviceContainer .awesomeText').find('div').each(function(index,element){

    newSplitText[index] = element ;

});

var newtextTween = TweenMax.staggerFrom(newSplitText,1,{ opacity : 0 , scale : 0 , x : -100 ,  ease:Back.easeOut   }, 0.2);

var serviceElements = [] ;

$('#serviceContainer').find('.item').each(function(index, element){

    serviceElements[index] = $(element);

});

var serviceTween = TweenMax.staggerFrom(serviceElements, 1, {css:{top : 250}}, 0.25 );

var tl = new TimelineMax({repeat:0});
tl.insert( newtextTween , 0  );
tl.insert( serviceTween,0 );

var sceneNew = new ScrollScene({triggerElement: "#serviceContainer", duration: 0,  offset: -150})
    .setTween(tl)
    .addTo(controllerMagic);


/* Portfolio  Portfolio Portfolio  Portfolio  Portfolio  Portfolio  Portfolio  Portfolio  Portfolio  Portfolio  Portfolio  Portfolio */
/* Portfolio  Portfolio Portfolio  Portfolio  Portfolio  Portfolio  Portfolio  Portfolio  Portfolio  Portfolio  Portfolio  Portfolio */
/* Portfolio  Portfolio Portfolio  Portfolio  Portfolio  Portfolio  Portfolio  Portfolio  Portfolio  Portfolio  Portfolio  Portfolio */
/* Portfolio  Portfolio Portfolio  Portfolio  Portfolio  Portfolio  Portfolio  Portfolio  Portfolio  Portfolio  Portfolio  Portfolio */

var newSplitText = [] ;

$('#portFolioContainer .awesomeText').find('div').each(function(index,element){

    newSplitText[index] = element ;

});

var newtextTween = TweenMax.staggerFrom(newSplitText,1,{ opacity : 0 , scale : 0 , x : -100 ,  ease:Back.easeOut   }, 0.2);

var pfi1 = $('#portFolioContainer .itemGrandParent:nth-of-type(1) .item');
var pfi2 = $('#portFolioContainer .itemGrandParent:nth-of-type(2) .item');
var pfi3 = $('#portFolioContainer .itemGrandParent:nth-of-type(3) .item');
var pfi4 = $('#portFolioContainer .itemGrandParent:nth-of-type(4) .item');
var pfi5 = $('#portFolioContainer .itemGrandParent:nth-of-type(5) .item');
var pfi6 = $('#portFolioContainer .itemGrandParent:nth-of-type(6) .item');
var pfi7 = $('#portFolioContainer .itemGrandParent:nth-of-type(7) .item');
var pfi8 = $('#portFolioContainer .itemGrandParent:nth-of-type(8) .item');

var textFields = [pfi1, pfi2, pfi3, pfi4, pfi5, pfi6, pfi7, pfi8];

var tween =  TweenMax.staggerTo(textFields, 1, {
    css:{height:"100%", width:"100%", margin:"0%"},
    ease:Quad.easeOut,
    startAt :{css:{height:"5%", width:"5%", margin:"45%", display : "block" }}
}, 0.2)


var tl = new TimelineMax({repeat:0});
tl.insert( newtextTween , 0 );
tl.insert( tween , 0);

var scene = new ScrollScene({triggerElement: "#portFolioContainer", duration: 0,  offset: 0})
    .setTween(tl)
    .addTo(controllerMagic);




$('#portFolioContainer .item').hover(function(e){

    var it = $(this);
    TweenMax.to(it.find('img') ,0.5, {css:{scaleX:1.3,scaleY:1.3,scaleZ:1.3}, onComplete : function(){

        it.find('.item-illustrator').css("display","block");

        TweenMax.fromTo( it.find('.item-illustrator') , 1,
            {css:{rotationX:-90, opacity:0}},
            {css:{rotationX:0, opacity: 1}, onComplete : function(){


                TweenMax.fromTo( it.find('.item-illustrator a') , 0.5,
                    {css:{fontSize:"0px"}},
                    {css:{fontSize:"50px"} });


            } });

    }});

},function(e){

    var it = $(this);
    TweenMax.to(it.find('img') ,0.5, {css:{scaleX:1,scaleY:1,scaleZ:1}, onComplete: function(){



        TweenMax.fromTo( it.find('.item-illustrator') , 1,
            {css:{rotationX:0, opacity:1}},
            {css:{rotationX:-90, opacity: 0}, onComplete: function(){

                it.find('.item-illustrator').css("display","none");
                it.find('.item-illustrator a').css("font-size","0px");

            }});

    } });

} );


$('body').on('click','#portFolioContainer .item a',function(e){

    e.preventDefault();
    var url = $(this).attr("data-url");



    var aElement = $(this);

    showLoadingBar();
    $.ajax({

        url : url,
        type : "GET",
        success: function(response){

            hideLoadingBar();

            var nowItem = aElement.parents('.itemGrandParent').index() ;

            var nowItemLeft = nowItem == 0 ? 8 :  nowItem ;
            var nowItemRight = nowItem == 7 ? 1 : (parseInt(nowItem)+2) ;

            var nowItemLeftUrl = $('#portFolioContainer .row .itemGrandParent:nth-child('+nowItemLeft+') .item-illustrator a').attr("data-url") ;
            var nowItemRightUrl =  $('#portFolioContainer .row .itemGrandParent:nth-child('+nowItemRight+') .item-illustrator a').attr("data-url") ;

            $('#portFolioContainerModal .modal-header .btn-group .btnNavigate.left').attr("data-item", nowItemLeft );
            $('#portFolioContainerModal .modal-header .btn-group .btnNavigate.right').attr("data-item", nowItemRight );

            $('#portFolioContainerModal .modal-header .btn-group .btnNavigate.left').attr("data-now-item", nowItem );
            $('#portFolioContainerModal .modal-header .btn-group .btnNavigate.right').attr("data-now-item", nowItem );

            $('#portFolioContainerModal .modal-header .btn-group .btnNavigate.left').attr("data-url", nowItemLeftUrl );
            $('#portFolioContainerModal .modal-header .btn-group .btnNavigate.right').attr("data-url", nowItemRightUrl );

            $('#portFolioContainerModal .modal-body').html(response);
            $('#portFolioContainerModal .modal-content').css("min-height",windowHeight);
            $('#portFolioContainerModal').modal('show');

        }

    });

});

$('body').on('click','.btnNavigate',function(e){

    e.preventDefault();
    var url = $(this).attr("data-url");

    var btnElement = $(this);

    showLoadingBar();
    $.ajax({

        url : url,
        type : "GET",
        success: function(response){

            hideLoadingBar();

            if(btnElement.hasClass('left'))
            {
                var nowItem = $('#portFolioContainerModal .modal-header .btn-group .btnNavigate.left').attr("data-now-item");
                // console.log("hiw how part 1"+ nowItem);
                nowItem = nowItem == 0 ? 7 : parseInt(nowItem)-1 ;
            }
            else
            {
                var nowItem = $('#portFolioContainerModal .modal-header .btn-group .btnNavigate.left').attr("data-now-item");
                // console.log("hiw how part 2"+nowItem);
                nowItem = nowItem == 7 ? 1 : parseInt(nowItem)+1 ;
            }

            var nowItemLeft = nowItem == 0 ? 8 :  nowItem ;
            var nowItemRight = nowItem == 7 ? 1 : (parseInt(nowItem)+2) ;

            var nowItemLeftUrl = $('#portFolioContainer .row .itemGrandParent:nth-child('+nowItemLeft+') .item-illustrator a').attr("data-url") ;
            var nowItemRightUrl =  $('#portFolioContainer .row .itemGrandParent:nth-child('+nowItemRight+') .item-illustrator a').attr("data-url") ;

            $('#portFolioContainerModal .modal-header .btn-group .btnNavigate.left').attr("data-item", nowItemLeft );
            $('#portFolioContainerModal .modal-header .btn-group .btnNavigate.right').attr("data-item", nowItemRight );

            $('#portFolioContainerModal .modal-header .btn-group .btnNavigate.left').attr("data-now-item", nowItem );
            $('#portFolioContainerModal .modal-header .btn-group .btnNavigate.right').attr("data-now-item", nowItem );

            $('#portFolioContainerModal .modal-header .btn-group .btnNavigate.left').attr("data-url", nowItemLeftUrl );
            $('#portFolioContainerModal .modal-header .btn-group .btnNavigate.right').attr("data-url", nowItemRightUrl );

            $('#portFolioContainerModal .modal-body').html(response);
            $('#portFolioContainerModal .modal-content').css("min-height",windowHeight);
            $('#portFolioContainerModal').modal('show');

        }

    });

});


$('.btn360').hover(function(e){


    TweenMax.to( $(this).find('i') ,0.5, {css:{scale : 1.1, rotationY : 360 }});


}, function(e){

    TweenMax.to( $(this).find('i') ,0.5, {css:{scale : 1, rotationY : 0 }});


});


/* ourHistory  ourHistory  ourHistory  ourHistory  ourHistory  ourHistory  ourHistory  ourHistory  ourHistory  ourHistory */
/* ourHistory  ourHistory  ourHistory  ourHistory  ourHistory  ourHistory  ourHistory  ourHistory  ourHistory  ourHistory */
/* ourHistory  ourHistory  ourHistory  ourHistory  ourHistory  ourHistory  ourHistory  ourHistory  ourHistory  ourHistory */
/* ourHistory  ourHistory  ourHistory  ourHistory  ourHistory  ourHistory  ourHistory  ourHistory  ourHistory  ourHistory */

var newSplitText = [] ;

$('#ourHistory .awesomeText').find('div').each(function(index,element){
    newSplitText[index] = element ;
});

var newtextTween = TweenMax.staggerFrom(newSplitText,1,{ opacity : 0 , scale : 0 , x : -100 ,  ease:Back.easeOut   }, 0.2);
var ourHistoryTween = TweenMax.from($('#ourHistory').find('.item-service'), 1.5, {css:{opacity:0, top:200}}) ;

var tl = new TimelineMax({repeat:0});
tl.insert( newtextTween , 0  );
tl.insert( ourHistoryTween ,0 );

var sceneNew = new ScrollScene({triggerElement: "#ourHistory", duration: 0,  offset: 0})
    .setTween(tl)
    .addTo(controllerMagic);


$('#ourHistory .item-service.left').mouseenter(function(){
    TweenMax.fromTo($(this).find('.btnHistory'),0.5, {css:{left:50}}, {css:{left:0}});
});


$('#ourHistory .item-service.right').mouseenter(function(){
    TweenMax.fromTo($(this).find('.btnHistory'),0.5, {css:{right:50}}, {css:{right:0}});
});



/* priceTable  priceTable  priceTable  priceTable  priceTable  priceTable  priceTable  priceTable  priceTable */
/* priceTable  priceTable  priceTable  priceTable  priceTable  priceTable  priceTable  priceTable  priceTable */
/* priceTable  priceTable  priceTable  priceTable  priceTable  priceTable  priceTable  priceTable  priceTable */
/* priceTable  priceTable  priceTable  priceTable  priceTable  priceTable  priceTable  priceTable  priceTable */

var newSplitText = [] ;

$('#priceTable .awesomeText').find('div').each(function(index,element){
    newSplitText[index] = element ;
});

var newtextTween = TweenMax.staggerFrom(newSplitText,1,{ opacity : 0 , scale : 0 , x : -100 ,  ease:Back.easeOut   }, 0.2);
var priceTween = TweenMax.to($('#priceTable').find('.item'), 3, {rotationY:0, top: 0});

var tl = new TimelineMax({repeat:0});
tl.insert( newtextTween , 0  );
tl.insert( priceTween ,0 );

var sceneNew = new ScrollScene({triggerElement: "#priceTable", duration: 0,  offset: 0})
    .setTween(tl)
    .addTo(controllerMagic);


$('#priceTable .item').hover(function(){

    TweenMax.to($(this) ,0.5, {css:{ scaleX:1.1,scaleY:1.1,scaleZ:1.1, boxShadow: "-2px 1px 20px 2px rgba(85, 150, 82, 1)"}});
    TweenMax.to($(this).find('.item-illustrator') ,0.5, {css:{rotationX:15,rotationY:25, scaleX:1.1,scaleY:1.1,scaleZ:1.1, boxShadow: "-2px 1px 20px 2px rgba(85, 150, 82, 1)"}});

},function(){

    TweenMax.to($(this) ,0.5, {css:{scaleX:1,scaleY:1,scaleZ:1, boxShadow: "0px 0px 0px 0px rgba(85, 150, 82, 1)"}});
    TweenMax.to($(this).find('.item-illustrator') ,0.5, {css:{rotationX:0,rotationY:0, scaleX:1,scaleY:1,scaleZ:1, boxShadow: "0px 0px 0px 0px rgba(85, 150, 82, 1)"}});

});


/*ourTeam ourTeam ourTeam ourTeam ourTeam ourTeam ourTeam ourTeam ourTeam */
/*ourTeam ourTeam ourTeam ourTeam ourTeam ourTeam ourTeam ourTeam ourTeam */
/*ourTeam ourTeam ourTeam ourTeam ourTeam ourTeam ourTeam ourTeam ourTeam */
/*ourTeam ourTeam ourTeam ourTeam ourTeam ourTeam ourTeam ourTeam ourTeam */

var newSplitText = [] ;

$('#ourTeam .awesomeText').find('div').each(function(index,element){
    newSplitText[index] = element ;
});

var newtextTween = TweenMax.staggerFrom(newSplitText,1,{ opacity : 0 , scale : 0 , x : -100 ,  ease:Back.easeOut   }, 0.2);
var ourTeamTween1 = TweenMax.to($('#ourTeam').find('.item.item-group-1'), 1, {left:0, opacity: 1});
var ourTeamTween2 =  TweenMax.to($('#ourTeam').find('.item.item-group-2'), 1, {marginTop:0, opacity:1});
var ourTeamTween3 = TweenMax.to($('#ourTeam').find('.item.item-group-3'), 1, {right:0, opacity:1});

var tl = new TimelineMax({repeat:0});
tl.insert( newtextTween , 0  );
tl.insert( ourTeamTween1 ,0 );
tl.insert( ourTeamTween2 ,0 );
tl.insert( ourTeamTween3 ,0 );

var sceneNew = new ScrollScene({triggerElement: "#ourTeam", duration: 0,  offset: 0})
    .setTween(tl)
    .addTo(controllerMagic);


$('#ourTeam .item').hover(function(){
    var it = $(this);

    var btnheight = $(this).find('.item-btn-container').height();
    var marginB = parseInt(btnheight)+10;
    btnheight  = -btnheight;
    TweenMax.to(it.find('.item-image-box img') ,0.5, {css:{scaleX:1.1,scaleY:1.1,scaleZ:1.1} });
    TweenMax.to(it.find('.item-image-box .item-illustrator') ,0.5, {css:{backgroundColor:"rgba(0,0,0,0)"} });

    if($(window).width() < 768)
    {
        // console.log("Yes");
        TweenMax.to(it ,0.5, {css:{marginBottom: marginB } });
    }
    else
    {
        // console.log("Yes");
        TweenMax.to(it ,0.5, {css:{marginBottom: 0 } });
    }

    TweenMax.to(it.find('.item-btn-container') ,0.5, {css:{bottom: btnheight} ,  onComplete:  function(){


        TweenMax.to(it ,0, {css:{marginBottom: 20 } });

        it.find('.item-btn-container').removeClass('temporary').addClass('permanant');

    }});
},function(){

    var it = $(this);
    var btnheight = 0;

    var btnheight = $(this).find('.item-btn-container').height();
    btnheight  = -btnheight;

    it.find('.item-btn-container').removeClass('permanant');
    it.find('.item-btn-container').addClass('temporary');


    TweenMax.to(it.find('.item-image-box .item-illustrator') ,0, {css:{zIndex:1},  onComplete:  function(){
        TweenMax.to(it.find('.item-image-box .item-illustrator') ,0.5, {css:{backgroundColor:"rgba(0,0,0,0.3)"}});
        TweenMax.to(it.find('.item-image-box img') ,0.5, {css:{scaleX:1,scaleY:1,scaleZ:1}});
        TweenMax.to(it.find('.item-btn-container') ,0.5, {css:{bottom: 0} });
    }
    });

});


/* btnAnimate  btnAnimate  btnAnimate  btnAnimate  btnAnimate  btnAnimate  btnAnimate  btnAnimate  btnAnimate  btnAnimate */
/* btnAnimate  btnAnimate  btnAnimate  btnAnimate  btnAnimate  btnAnimate  btnAnimate  btnAnimate  btnAnimate  btnAnimate */
/* btnAnimate  btnAnimate  btnAnimate  btnAnimate  btnAnimate  btnAnimate  btnAnimate  btnAnimate  btnAnimate  btnAnimate */
/* btnAnimate  btnAnimate  btnAnimate  btnAnimate  btnAnimate  btnAnimate  btnAnimate  btnAnimate  btnAnimate  btnAnimate */

$('.btnAnimate').click(function(){

    TweenMax.to($('.boxAnimate'),1, { css : {rotationX:90, rotationY:0, rotationZ: 0} }  );

});

