    
    /* 생년월일 option 복사 */
    isYearOptionExisted = false;
    document.querySelector("#item_year").addEventListener("click", function(){ 
        if(!isYearOptionExisted){
            isYearOptionExisted = true;
        for( i = 1900; i < 2024; i++ ){
            const option1 = document.createElement('option')
            this.appendChild(option1);
            option1.innerText= i
            option1.setAttribute('value', i) 
           }
    }
    })

    isYearOptionExisted1 = false;
    document.querySelector("#item_month").addEventListener("click", function(){ 
        if(!isYearOptionExisted1){
            isYearOptionExisted1 = true;
        for( i = 1; i < 13; i++ ){
            const option2 = document.createElement('option')
            this.appendChild(option2);
            option2.innerText= i
            option2.setAttribute('value', i)
           }
    }
    })
    isYearOptionExisted2 = false;
    document.querySelector("#item_day").addEventListener("click", function(){ 
        if(!isYearOptionExisted2){
            isYearOptionExisted2 = true;
        for( i = 1; i < 32; i++ ){
            const option3 = document.createElement('option')
            this.appendChild(option3);
            option3.innerText= i
            option3.setAttribute('value', i)
           }
    }
    })

 
    let testName = /[가-힣]{2,}/;
    let itemName = document.querySelector("#item_name");

    const testId = /^[a-zA-Z0-9](?=.*[A-Z|a-z])(?=.*\d)[A-Za-z0-9]+$/;
    let itemId = document.querySelector("#item_id");
 
    let testPw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^])[a-zA-Z0-9!@#$%^]{8,20}$/;
    let itemPw = document.querySelector("#item_pw");
    let itemPw2 = document.querySelector("#item_pw2");

    let itemEmail = document.querySelector("#item_email");
    let itemEmail2 = document.querySelector("#item_email2");
    let testEmail = /^[a-zA-Z0-9]+$/;
    let testEmail2 =/^[a-zA-Z0-9._-]+\.[a-zA-Z]{2,3}$/; 

    let itemDress = document.querySelector("#sample2_detailAddress");

    let itemPhone1 = document.querySelector("#item_phone1");
    let itemPhone2 = document.querySelector("#item_phone2");
    let itemPhone3 = document.querySelector("#item_phone3");
    let itemYear = document.querySelector("#item_year");
    let itemMonth = document.querySelector("#item_month");
    let itemDay = document.querySelector("#item_day");

    let phone = document.querySelectorAll(".phone .input2");

    //전화번호 입력 
    phone[0].addEventListener("keyup", function(){
        this.value = this.value.replace(/[^0-9]/, ''); //숫자만 입력가능
        if(this.value.length == 3 ){                   //3글자  치면 포커스 넘김
            phone[1].focus(); 
        }
    });
    phone[1].addEventListener("keyup", function(){
        this.value = this.value.replace(/[^0-9]/, ''); //숫자만 입력가능
        if(this.value.length == 4 ){                   //4글자  치면 포커스 넘김
            phone[2].focus();
        }
    });
    phone[2].addEventListener("keyup", function(){
        this.value = this.value.replace(/[^0-9]/, ''); //숫자만 입력가능
     });

    //아이디 경고문
    itemId.addEventListener("keyup", function(){
        if(!itemId.value.length == ''){
            if(itemId.value.length < 8 || itemId.value.length > 20 || testId.test(itemId.value) == false){
                document.querySelector("#item_id ~ .false").style.display="block";
                document.querySelector("#item_id ~ .true").style.display="none";

            } else{
                document.querySelector("#item_id ~ .false").style.display="none";
                document.querySelector("#item_id ~ .true").style.display="block";
            }
        }else{
            document.querySelector("#item_id ~ .true").style.display="none";
            document.querySelector("#item_id ~ .false").style.display="none";


        }
    });

    //비밀번호 경고문
    itemPw.addEventListener("keyup", function(){
        if(!itemPw.value.length == ''){
            if(itemPw.value.length < 8 || itemPw.value.length > 20 || testPw.test(itemPw.value) == false){
                document.querySelector("#item_pw ~ .false").style.display = "block";
                document.querySelector("#item_pw ~ .true").style.display = "none";
            } else {
                document.querySelector("#item_pw ~ .false").style.display = "none";
                document.querySelector("#item_pw ~ .true").style.display = "block";

            }
        }else{
            document.querySelector("#item_pw ~ .true").style.display = "none";
            document.querySelector("#item_pw ~ .false").style.display = "none";


        }
        if(!itemPw2.value.length == ''){
            if(itemPw.value !== itemPw2.value){
                document.querySelector("#item_pw2 ~ .false").style.display = "block";
                document.querySelector("#item_pw2 ~ .true").style.display = "none";
            } else {
                document.querySelector("#item_pw2 ~ .false").style.display = "none";
                document.querySelector("#item_pw2 ~ .true").style.display = "block";

            }
        }else{
            document.querySelector("#item_pw2 ~ .true").style.display = "none";
            document.querySelector("#item_pw2 ~ .false").style.display = "none";


        }

    })

    //비밀번호 확인경고문
    itemPw2.addEventListener("keyup", function(){
        if(!itemPw2.value.length == ''){
            if(itemPw.value !== itemPw2.value){
                document.querySelector("#item_pw2 ~ .false").style.display = "block";
                document.querySelector("#item_pw2 ~ .true").style.display = "none";
            } else {
                document.querySelector("#item_pw2 ~ .false").style.display = "none";
                document.querySelector("#item_pw2 ~ .true").style.display = "block";

            }
        }else{
            document.querySelector("#item_pw2 ~ .true").style.display = "none";
            document.querySelector("#item_pw2 ~ .false").style.display = "none";


        }
    });

    //이메일 도메인 입력하기
    let emailSite = document.querySelector("#email_site");

    emailSite.addEventListener("change", function(e){
        if(e.target.value == '직접입력'){
            itemEmail2.value = ''
            itemEmail2.removeAttribute("disabled" )
        }
        if(e.target.value == '네이버'){
            itemEmail2.value = 'naver.com'
            itemEmail2.setAttribute("disabled", true)
        }
        if(e.target.value == '구글'){
            itemEmail2.value = 'gmail.com'
            itemEmail2.setAttribute("disabled", true)
        }
        if(e.target.value == '다음'){
            itemEmail2.value = 'daum.com'
            itemEmail2.setAttribute("disabled", true)
        }
    })



    // 가입하기 클릭 시
    document.querySelector(".section form").addEventListener("submit", function(e){
        /* 이름 폼 입력 시 */
        if(itemName.value.length == ''){
            alert("이름을 입력해주세요.");
            itemName.focus();
            e.preventDefault();
            return;
        }
        if(!testName.test(itemName.value) ){
            alert("이름은 한글 2자 이상 입력해주세요");
            itemName.focus();
            e.preventDefault();
            return;
        } 
        /* 아이디 입력 시  */

    if(itemId.value.length == ''){
        alert("아이디를 입력하세요.");
        itemId.focus();
        e.preventDefault();
        return;
    }

    if(itemId.value.length < 8 || itemId.value.length > 20 || testId.test(itemId.value) == false){
        alert("아이디는 8~20자 영문, 숫자 조합으로 입력해주세요.");
        itemId.focus();
        e.preventDefault();
        return;
    }

    /* 비밀번호 입력 시 */

    if(itemPw.value.length == ''){
        alert("비밀번호를 입력해주세요.")
        itemPw.focus();
        e.preventDefault();
        return;
    }
    if(itemPw.value.length < 8 || itemPw.value.length > 20 || testPw.test(itemPw.value) == false){
        alert("비밀번호는 8~20자 영문 대소문자, 숫자, 특수문자(!@#$%^) 조합으로 입력해주세요.");
        itemPw.focus();
        e.preventDefault();
        return;
    }

    /* 비밀번호 확인시 */
    if(itemPw2.value.length == ''){
        alert("비밀번호를 확인해주세요.");
        itemPw2.focus();
        e.preventDefault();
        return;
        
    }

    if(itemPw.value !== itemPw2.value){
        alert("비밀번호가 일치하지 않습니다.");
        itemPw2.focus();
        e.preventDefault();
        return;
    }

    //이메일 입력 시
    if(itemEmail.value.length == ''){
        alert("이메일을 입력해주세요.");
        itemEmail.focus();
        e.preventDefault();
        return;
    }

    if(testEmail.test(itemEmail.value) == false){
        alert("이메일 형식에 맞지 않습니다.");
        itemEmail.focus();
        e.preventDefault();
        return;
    }
    

    if(itemEmail2.value == ''){
        alert("이메일을 입력해주세요.");
        itemEmail2.focus();
        e.preventDefault();
        return;
    }
    if(!testEmail2.test(itemEmail2.value)){
        alert("이메일 형식에 맞지 않습니다.");
        itemEmail2.focus();
        e.preventDefault();
        return;
    }
    /* 전화번호를 입력해주세요 */
    if(itemPhone1.value.length == ''){
        alert("전화번호를 입력해주세요.");
        itemPhone1.focus();
        e.preventDefault();
        return;
    }
    if(itemPhone2.value.length == ''){
        alert("전화번호를 입력해주세요.");
        itemPhone2.focus();
        e.preventDefault();
        return;
    }
    if(itemPhone3.value.length == ''){
        alert("전화번호를 입력해주세요.");
        itemPhone3.focus();
        e.preventDefault();
        return;
    }

        /* 생년월일 */
        if(itemYear.value == ''){
            alert("생년월일을 선택해주세요.")
            itemYear.focus();
            e.preventDefault();
            return;
        }
        if(itemMonth.value == ''){
            alert("생년월일을 선택해주세요.")
            itemMonth.focus();
            e.preventDefault();
            return;
        }
        if(itemDay.value == ''){
            alert("생년월일을 선택해주세요.")
            itemDay.focus();
            e.preventDefault();
            return;
        }
    
    /* 상세주소 */

    if(itemDress.value.length == ''){
        alert("상세주소를 입력해주세요.")
        itemDress.focus();
        e.preventDefault();
        return;
    }


 
    })

    
    /* 리셋 클릭 */

    document.querySelector(".section form").addEventListener("reset", reset)

    function reset(){
      
        let text_true = document.querySelectorAll(".true");
        let text_false = document.querySelectorAll(".false");
        for(i=0; i<text_true.length ; i++){
            text_true[i].style.display ="none"
        }
        for(i=0; i<text_false.length ; i++){
            text_false[i].style.display ="none"
        }
    }


    // 우편번호 찾기 화면을 넣을 element
    var element_layer = document.getElementById('layer');

    function closeDaumPostcode() {
        // iframe을 넣은 element를 안보이게 한다.
        element_layer.style.display = 'none';
    }

    function sample2_execDaumPostcode() {
        new daum.Postcode({
            oncomplete: function(data) {
                // 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

                // 각 주소의 노출 규칙에 따라 주소를 조합한다.
                // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
                var addr = ''; // 주소 변수
                var extraAddr = ''; // 참고항목 변수

                //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
                if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
                    addr = data.roadAddress;
                } else { // 사용자가 지번 주소를 선택했을 경우(J)
                    addr = data.jibunAddress;
                }

                // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
                if(data.userSelectedType === 'R'){
                    // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                    // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                    if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                        extraAddr += data.bname;
                    }
                    // 건물명이 있고, 공동주택일 경우 추가한다.
                    if(data.buildingName !== '' && data.apartment === 'Y'){
                        extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                    }
                    // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                    if(extraAddr !== ''){
                        extraAddr = ' (' + extraAddr + ')';
                    }
                    // 조합된 참고항목을 해당 필드에 넣는다.
                    document.getElementById("sample2_extraAddress").value = extraAddr;
                
                } else {
                    document.getElementById("sample2_extraAddress").value = '';
                }

                // 우편번호와 주소 정보를 해당 필드에 넣는다.
                document.getElementById('sample2_postcode').value = data.zonecode;
                document.getElementById("sample2_address").value = addr;
                // 커서를 상세주소 필드로 이동한다.
                document.getElementById("sample2_detailAddress").focus();

                // iframe을 넣은 element를 안보이게 한다.
                // (autoClose:false 기능을 이용한다면, 아래 코드를 제거해야 화면에서 사라지지 않는다.)
                element_layer.style.display = 'none';
            },
            width : '100%',
            height : '100%',
            maxSuggestItems : 5
        }).embed(element_layer);

        // iframe을 넣은 element를 보이게 한다.
        element_layer.style.display = 'block';

        // iframe을 넣은 element의 위치를 화면의 가운데로 이동시킨다.
        initLayerPosition();
    }

    // 브라우저의 크기 변경에 따라 레이어를 가운데로 이동시키고자 하실때에는
    // resize이벤트나, orientationchange이벤트를 이용하여 값이 변경될때마다 아래 함수를 실행 시켜 주시거나,
    // 직접 element_layer의 top,left값을 수정해 주시면 됩니다.
    function initLayerPosition(){
        var width = 300; //우편번호서비스가 들어갈 element의 width
        var height = 400; //우편번호서비스가 들어갈 element의 height
        var borderWidth = 5; //샘플에서 사용하는 border의 두께

        // 위에서 선언한 값들을 실제 element에 넣는다.
        element_layer.style.width = width + 'px';
        element_layer.style.height = height + 'px';
        element_layer.style.border = borderWidth + 'px solid';
        // 실행되는 순간의 화면 너비와 높이 값을 가져와서 중앙에 뜰 수 있도록 위치를 계산한다.
        element_layer.style.left = (((window.innerWidth || document.documentElement.clientWidth) - width)/2 - borderWidth) + 'px';
        element_layer.style.top = (((window.innerHeight || document.documentElement.clientHeight) - height)/2 - borderWidth) + 'px';
    }
    var postcodeButton = document.getElementById('yourPostcodeButtonId');  // 우편번호 찾기 버튼의 실제 ID를 사용해야 합니다.

postcodeButton.addEventListener('click', function() {
    sample2_execDaumPostcode();
});
