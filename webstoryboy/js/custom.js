		//라이트 박스
        $(".lightgallery").lightGallery({
			thembnail:true,
			autoplay:true,
			pause:3000,
			progressBar:true,
		}); 
		
		
		//윈도우 팝업
		$(".window").click(function(e){
			e.preventDefault();
			//window.open("파일명", "팝업이름", "옵션설정");
			//옵션:left,top,width,height, status, toolbar, location, menubar, scrollbars, fullscreen
			window.open("sample_popup.html", "popup01", "width=800, height=590, left=50, top=50, scrollbar=0, toolbar=0, menubar=0");
		})
		
		
		//레이어 팝업
		$(".layer").click(function(e){
			e.preventDefault();
			//$("#layer").css("display", "block");
			//$("#layer").show();
			//$("#layer").fadeIn();
			$("#layer").slideDown();
		})
		$("#layer .close").click(function(e){
			e.preventDefault();
			//$("#layer").css("display", "block");
			//$("#layer").show();
			//$("#layer").fadeOut();
			$("#layer").slideUp();
		})
		
		//탭메뉴
		var $tab_list = $(".tab_menu");//jquery에서 쓰기 편하게 tab_menu를 변수화시킴
		
		$tab_list.find("ul ul").hide(); //hide가 css에서 display:none이랑 같음
		$tab_list.find("li.active > ul").show();
		
		function tabMenu(e){
			e.preventDefault();
			var $this = $(this);
			$this.next("ul").show().parent("li").addClass("active").siblings("li").removeClass("active").find(">ul").hide();
		}
		$tab_list.find("ul>li>a").click(tabMenu).focus(tabMenu);//웹표준을 준수하려면 tab을 눌렀을 때 공지사항1로갔다가 목록갔다가 2번갔다가 목록갔다가 해야하는데 이걸 위해서 focus를 주는것이다. focus를 안주면 1번에서 목록가고 2번3번갔다가(목록안가고) 벗어나버림
		
		
		//배너
		//html 마크업 셋팅 -> css 연동 -> jqeury 연동 -> jquery 호출(플러그인)
        $(".ban").slick({
            infinite: true,
			slidesToShow: 3,
			slidesToScroll: 3,
			autoplay: true,
			autoplaySpeed: 3000,
			dots: true
        });
		
		//갤러리
		$(".gallery_img").slick({
			arrows: false,
			fade: true, //가로로 넘어가는게 아니라 사라지면서 새로 나타나게하는 효과
            pauseOnHover: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 300,
            slidesToShow: 1 
			
		});
		$(".play").click(function(){
			$(".gallery_img").slick("slickPlay")
		})
		$(".pause").click(function(){
			$(".gallery_img").slick("slickPause")
		})
		$(".prev").click(function(){
			$(".gallery_img").slick("slickPrev")
		})
		$(".next").click(function(){
			$(".gallery_img").slick("slickNext")
		})
		
		
		//버튼을 클릭하면 전체 메뉴를 보이게 하세요.
		$(".tit .btn").click(function(e){
			e.preventDefault(); //btn이 #으로 경로가 되어있으므로 버튼을 눌렀을 때 상단으로 이동해버림 그러므로 그것을 없애기 위한 코드임
			//$("#cont_nav").css("display", "block");
			//css로 쓸시 #cont_nav{display:block}
			//$("#cont_nav").show();//display:none에서 block으로 바꿔주는 메서드
			//$("#cont_nav").fadeIn();//천천히 나오게하는 효과
			//$("#cont_nav").slideDown();//slide처럼 내려옴
			//$("#cont_nav").toggle();//show와 hide 합쳐진 기능
			//$("#cont_nav").fadeToggle(); //fadeIn과 toggle 합쳐진기능
			$("#cont_nav").slideToggle(200); //slide와 toggle 합쳐진기능 숫자를 넣어서 빠르게 할 수 있음 200이면 0.2초
			$(this).toggleClass("on"); //add와 delete역할을 다 해주는 toggleClass
		}); //this는 자기자신이므로 ".tit .btn"를 가리킴