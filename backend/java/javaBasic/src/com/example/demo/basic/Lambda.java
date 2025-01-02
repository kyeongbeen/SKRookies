package com.example.demo.basic;

import java.util.Arrays;
import java.util.List;

public class Lambda {
    public static void main(String[] args) {
        Runnable r = new Runnable() {
            @Override
            public void run() {
                System.out.println("Thread1 - Hello World");
            }
        };
        new Thread(r).start();

        Runnable r2 = ()-> System.out.println("Thread2 - Hello World");
        new Thread(r2).start();

        new Thread(()-> System.out.println("Thread3 - Hello World")).start();


        List<String> temp = Arrays.asList("A", "B", "C");
        for(String str : temp) {
            System.out.println(str);
        }
        temp.forEach(s-> System.out.println(s));

        try {
            System.out.println(1);
            int a = 1/0;
            System.out.println(2);
        } catch (Exception e) {
            System.out.println(3 + " " + e.getMessage());
        } finally {
            System.out.println(4);
        }
    }
}
