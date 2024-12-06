const A = {
    proc: {
        msg: {
            code: 10
        },
        check: null
    }
}

// code값 10을 출력
console.log(A.proc.msg.code);
// check: { code: 5}가 원래 있었다고 가정
// console.log(A.proc.check.code); // segmentation fault 발생
// 해결
// 예외처리
// (*)방어코드 작성
console.log(A?.proc?.check?.code); // 안전하게 코드 작성

// 환경변수 -> 선택적 값 부여 가능
// 서버 포트 지정(커스텀, 시스템설정포트)
// 서버 포트 지정(개발, 시스템설정포트)
// 처음 참이 되는 값이 출력, 최종값으로 참조
console.log('a'||'hello');
console.log( ''||'hello');
console.log( 0 ||'hello');

// 0도 false가 아닌 값으로 처리했으면 좋겠다 -> "??"로 해결
console.log(0 ?? 'hello');