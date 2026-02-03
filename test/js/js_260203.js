$(document).ready(function(){
    //console.log('준비')

    /*
        li가 4개.... 
        오버한 li한개에만 active 클래스를 줘야함 -- $(this)
        이전에 active가 있었던 li의 active클래스를 삭제 
          -------> 모든 li의 active를 삭제함... (단순하고 명료..)
          -------> 원래 active클래스가 없는 li는 아무 반응 없음
          -------> 그리고 나서 오버한 li에만 active 클래스를 줌..
    */
    $('.tour .list ul li').on('mouseenter', function(){
        //console.log('오버했어요!!!')
        //모든 li의 active 클래스 삭제
        $('.tour .list ul li').removeClass('active')
        //오버한 li에만 active 클래스 추가
        $(this).addClass('active')
    })

    $('.culture .list ul li').on('mouseenter', function(){
        $('.culture .list ul li').removeClass('active')
        $(this).addClass('active')
    })



    
    var abc = '123'
    var bcd = 56
    var bcd = 11 // 오류...
    var sum = abc + bcd
    //console.log('sum')
    //console.log(sum)

    let aaa = 11
    // let aaa = 22 에러
    aaa = 22 
    //이전에 무슨 값이 있었든 상관없이 지금 현재값을 넣음
    // 그래서 = 을 대입연산자라고 함.
    //console.log(aaa)

    /*
        브라우저가 스크롤 되는 걸 체크해야함...

        만약에 스크롤 값이 0보다 크다면 header에 fixed 클래스를 주고
        스크롤 값이 0이거나 0보다 작으면 header에 fixed 클래스를 삭제
    */

    //맨처음 html이 로딩된 이후에 단 1번 실행
    let scrolling
    header_fixed() //함수를 실행


    function header_fixed(){ //함수의 정의
        scrolling = $(window).scrollTop() //스크롤 할때마다 지금 스크롤 값을 다시 묻기
        console.log(scrolling)

        if(scrolling > 0){ //만약에 스크롤값이 0보다 크다면 (1이상)
            $('.header').addClass('fixed')
        }else{//0이거나 0보다 작거나
            $('.header').removeClass('fixed')
        }
    }

    $(window).scroll(function(){ //스크롤 할때마다 1번 실행
        //console.log('스크롤 됨!!')
        header_fixed() //함수를 실행
    })

})//$(document).ready
//console.log('완료')