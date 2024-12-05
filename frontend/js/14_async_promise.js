// CJS 방식으로 FILE I/O
// fs: File System, nodejs의 파일 지원 모듈
const file = require('fs');
// console.log(file);

// 비동기 상황 연출
// 파일 3개 생성, 1.txt, 2.txt, 3.txt
// 내용 상관없이 2.txt 데이터의 양이 많을 수 있게 세팅

class Test{
    constructor () {
        // // 상대경로, 현재 파일을 기준으로 경로를 체크
        // this.file1 = './data/1.txt';
        // this.file2 = './data/2.txt';
        // this.file3 = './data/3.txt';
        // 절대경로, root ~ 현재 파일까지의 실제 경로
        // __dirname : 현재 파일의 dir path를 절대경로로 제공
        // nodejs가 제공
        this.file1 = __dirname + '/data/1.txt';
        this.file2 = __dirname + '/data/2.txt';
        this.file3 = __dirname + '/data/3.txt';
    }

    // 비동기 고려하지 않고 작성
    // 일관된 결과를 기대할 수 없다(문제점)
    sample() {
        // 1.txt -> 2.txt -> 3.txt
        // 동기식 처리
        // file.readFile() : 파일을 읽어서(언젠간 완료) 등록된 callback 함수에 전달
        file.readFile(this.file1, (err, data)=>{ console.log(this.file1, data) });
        file.readFile(this.file2, (err, data)=>{ console.log(this.file2, data) });
        file.readFile(this.file3, (err, data)=>{ console.log(this.file3, data) });
    }
    // 해결 1 : 1번 진행 -> 1번 완료 -> 2번 진행 -> 2번 완료 -> 3번 진행 -> 3번 완료
    // 처리시간이 길어진다, 쉬는 자원이 생긴다
    // Depth가 깊어짐 -> 코드가 길어지면 깊이도 계속해서 길어짐 -> 콜백헬 발생
    // 코드가 `>` 형태로 깊어지고 길어짐
    normal() {
        // 1.txt read
        file.readFile(this.file1, (err, data)=>{
            console.log(this.file1, data)
            // 2.txt read
            file.readFile(this.file2, (err, data)=>{
                console.log(this.file2, data)
                // 3.txt read
                file.readFile(this.file3, (err, data)=>{
                    console.log(this.file3, data)
                });
            });
        });
    }
    // 해결 2 : promise 패턴
    // 1. promise 객체를 반환하는 함수를 구성
    // 2. 해당 함수를 이용하여 비동기처리
    /*
        // 깊어지지 않게 사용하는 것이 특징 -> 가독성 상승, 처리시간감소, 모듈별 관리용이 
        함수()
            .then()
            .then()
            .then()
            ...
            .catch()
            .finally()
    */
   // 1. Promise 객체를 반환하는 함수를 구성
    es6_promise_define(fileName) {
        // resolve : 작업이 성공하면 호출하는 콜백함수(데이터 포함)
        // reject  : 작업이 실패하면 호출하는 콜백함수(데이터 포함)
        return new Promise((resolve, reject)=>{
            // 실질작업 -> 파일읽기(비동기)
            file.readFile(fileName, (err, data)=>{
                if(err) reject(err); // 파일 읽기 실패
                else resolve(data); // 파일 읽기 성공
            });
        });
    }

    // 2. 사용
    es6PromiseUse() {
        this.es6_promise_define(this.file1)
        .then((data)=>{
            console.log('Success',new String(data));
        })
        .catch((err)=>{
            console.log('Fail',err);
        })
        .finally(()=>{
            console.log('End');
        });
    }
}
const obj = new Test();
// obj.sample();
// obj.normal();
obj.es6PromiseUse();




