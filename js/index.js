
console.log(window.matchMedia('(max-width: 767px)').matches);
$(document).ready(function(){
	if (window.matchMedia('(max-width: 767px)').matches) {
	    //...
	    $(function(){
		    var _top = $(window).scrollTop();
		    $(window).scroll(function(){
		        var _cur_top = $(window).scrollTop();
		        if(_top == 0) _top = _cur_top;
		        if(_top >= _cur_top)
		        {
		            $('.cabecalho').css('top', '0');
		        }
		        else
		        {
		            $('.cabecalho').css('top', '-51px');
		        }
		        _top = _cur_top;
		    });
		});
	

		$('.open-menu-btn').click(function(event) {
			$(this).toggleClass('change');
			$(' .nav-bar ').fadeToggle(300, function(){
				if($(this).attr('style') == 'display: block;'){
					$('body').css('overflow', 'hidden');
				}else{
					$('body').css('overflow', 'auto');
				}
			}).toggleClass('acao');
		});

		$('.nav-bar').on('click', function(event) {
			// event.preventDefault();
			/* Act on the event */
			if(!$(event.target).is('.menu')){
				$(this).fadeOut(300, function(){$('body').css('overflow', 'auto');}).toggleClass('acao');
				$(' .open-menu-btn ').toggleClass('change');
			}
		});

		$('.drop-login').on('click', function(event) {
			window.location.assign('login-mobile.html');
			/* Act on the event */
		});

		$(' .pesquisa-c input ').focus(function(event) {
			$(this).animate({opacity: "1"});
			$('.logo').animate({opacity: "0"});
			$('.btn-pesquisa-c').show();
			$('.pesquisa-c').css('width', '85%');
		});
		$(' .pesquisa-c input ').blur(function(event) {
			$(this).delay(300).animate({opacity: "0"});
			$('.logo').delay(350).animate({opacity: "1"});
			$('.btn-pesquisa-c').hide();
			$('.pesquisa-c').css('width', '36px');
		});


	} else {
	    // MOSTRAR LOGIN

	    let btn_login = document.querySelector(".drop-login");
	    let menu_login = document.querySelector(".menu-login");

	    btn_login.addEventListener("click", function () {
	        console.log("iui");
	        menu_login.classList.toggle("menu-login-visivel");
	    });

	    //MOSTRAR INFORMAÇÕES

	    // btn_informacoes = document.querySelector("[value=Informações]");

	    // let overlayInfo = document.querySelector(".overlayInfo"); 
	    // let btn_fechar = document.querySelector(".btn-fechar");

	    // btn_informacoes.addEventListener("click", function(){
	    //     overlayInfo.style.display = "block";
	    // })

	    // btn_fechar.addEventListener("click", function(){
	    //     overlayInfo.style.display = "none";
	    // })


	    // CHAT

	    let btn_titulo = document.querySelector(".titulo");
	    let conteudo = document.querySelector(".conteudo");
	    let btn_chat = document.querySelector("#btn-chat");
	    let chat = document.querySelector(".chat");


	    btn_titulo.addEventListener("click", function(){
	        conteudo.classList.toggle("show");
	    })

	    btn_chat.addEventListener("click", function(){
	        chat.style.bottom = "0px";
	    });
	}

	//inputRange

	let $range = document.querySelector('.rangeInput');
    let $value = document.querySelector('.valorRange');

	$range.addEventListener('input', function() {
		$value.textContent = this.value;
	});

	
});


