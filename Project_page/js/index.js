// 호출
const form1 = () => {
   alert('호출');
};
// 캔슬
const fun1 = () => {
   location.href = 'Project_page.html';
};

// 회원가입 완료
const signup = () => {
   if (
      document.getElementById('member-mobile').value.length != 0 &&
      document.getElementById('member-username').value.length != 0 &&
      document.getElementById('member-password').value.length != 0 &&
      document.getElementById('member-password-check').value.length != 0
   ) {
      alert('회원가입 완료');
      location.href = 'index.html';
   } else {
      alert('양식을 채워주세요');
   }
};
// 도메인 선택
const domain_select = () => {
   document.getElementById('email-domain').value = document.getElementById('email-domain-select').value;
};

// API
function sample6_execDaumPostcode() {
   new daum.Postcode({
      oncomplete: function (data) {
         var addr = '';
         var extraAddr = '';
         if (data.userSelectedType === 'R') {
            addr = data.roadAddress;
         } else {
            addr = data.jibunAddress;
         }
         if (data.userSelectedType === 'R') {
            if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
               extraAddr += data.bname;
            }
            if (data.buildingName !== '' && data.apartment === 'Y') {
               extraAddr += extraAddr !== '' ? ', ' + data.buildingName : data.buildingName;
            }
            if (extraAddr !== '') {
               extraAddr = ' (' + extraAddr + ')';
            }
            document.getElementById('sample6_extraAddress').value = extraAddr;
         } else {
            document.getElementById('sample6_extraAddress').value = '';
         }

         document.getElementById('sample6_postcode').value = data.zonecode;
         document.getElementById('sample6_address').value = addr;
         document.getElementById('sample6_detailAddress').focus();
      },
   }).open();
}
