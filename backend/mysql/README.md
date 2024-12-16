# DB
- 개발환경 구축
    - 로컬설치
        - MySQL
            - 최초에는 무료 -> oracle에 인수된 후 유료화
            - MySQL 개발자들이 나와서 만든 DB -> MariaDB
            - AWS에서는 AuroraDB -> MySQL 엔터프라이즈급 DB제품 존재
            - 동일한 SQL을 사용
                - SQL = 표준SQL + 벤더별SQL

    - Docker container 설치
        - container에 설치
        - OS 영향 X, 설치, 삭제가 원활
        - Linux위에서 실행 -> 일관성이 높다
        - DevOps의 기본 구동형태
        - 세팅
            1. Docker client 설치
            2. mysql 설치
                - mysql image 다운로드
                - image로부터 container 생성
                    - mysql image 설치
                    - container run -> mysql 사용
                    ```
                    docker run -d -p 3306:3306 --name mysql --env MYSQL_USER=ai --env MYSQL_PASSWORD=1234 --env MYSQL_ROOT_PASSWORD=1234 mysql
                    ```
            3. mysql workbench 설치
                - mac : https://dev.mysql.com/downloads/file/?id=534635 
                - windows : https://dev.mysql.com/downloads/file/?id=534624
    - Cloud 설치
        - AWS의 RDS서비스 사용
        - AWS의 고사양 EC2 직접 설치
    - Client Tool
        - MySQL Workbench
        - Heidie SQl
        - vsCode, IntelliJ -> extension or 기본메뉴
            - mysql : weijan chen
- 학습범위
    - SQL
    - 모델링
    - ERD

# SQL 구성
- Structured Query Language (구조화 질의 언어)
    - DB
        - 데이터를 스키마에 맞춰 저장하는 저장소
        - 정형, 비정형, 반정형 데이터
        - 개발자가 DB에 질의하여 데이터를 획득
            - 비즈니스 로직 처리
                - 아이디/비밀번호 -> 조회 -> 로그인
                - 검색어 -> 검색 -> 결과를 출력 : 검색엔진
        - 질의
            - 구조화된 질의 언어(SQL) 문법을 통해 진행
    - 구성
        - SQL = DQL + DDl + DCL + DML
            - DQL(Data Query Language)
                - 조회, 질의
                - select

# 접속
- Docker Desktop
    - Container -> mysql -> Execs
        ```
            mysql -u root -p
        ```

# DQL
- DB에서 원하는 데이터를 가져오는 질의어
- 데이터 질의어
- SQL -> 대소문자 구분 X
    - select
- DB조회
    - 존재하는 모든 DB 조회
        ```
        show databases;
        ```
    - 내가 접근한 데이터베이스 존재여부 확인
- 특정 DB 사용지정
    ```
    use mysql;
    ```
- 지정한 DB에서 테이블조회
    ```
    show tables;
    ```
- 테이블의 상세정보 출력
    - 테이블의 구조(컬럼, 타입, ...) 확인가능
    - 
    ```
    desc user;
    ```
- 데이터 조회
    - 가장 많이 사용하는 구문
    - [ ... ] -> 생략가능
        ```
        SELECT select_expression(조회결과로 나오는 내용:컬럼, ...)
        [FROM table_reference: 테이블명] -> 출처
        [WHERE condition:조건] -> 1차 조건
        [GROUP BY {column_name|expression|position}:집계]
        [HAVING condition:조건] -> 2차 조건
        [ORDER BY 정렬(오름|내림)] -> 정렬 대상을 여러개 나열가능 
        [LIMIT [시작], 끝] -> 제한, 게시판(페이징처리)
        ```
- SELECT ~ FROM
    - 특정 테이블로부터 데이터 획득
    


            



