package com.example.demo.basic;

public class Test6 {
    public static int score = 100;
    static public int score2 = 100;
    public int score3 = 100;
    static int score4 = 100;
    int age = 100;

    public static void sum(int a, int b) {
        System.out.println(a + b);
    }



    public static void main(String[] args) {
        int level = 5;

        System.out.println(level);
        System.out.println(score);
        System.out.println(score2);
//        System.out.println(score3); // static 메소드에서 non-static 변수 사용 불가능
        System.out.println(score4);
        sum(100,4);
    }
}
