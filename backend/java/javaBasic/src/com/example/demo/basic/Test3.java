package com.example.demo.basic;

import java.util.Scanner;

public class Test3 {
    public static void main(String[] args) {
        flowControl1();
        flowControl2();
        flowControl3();
    }

    private static void flowControl3() {
        int i = 1;
        while(true) {
            System.out.println(i);
            i++;
            if(i > 5) break;
        }
        i = 1;
        do {
            if(i % 2 == 1) continue;
            System.out.println(i);
            i++;
            if (i > 5) break;
        } while (true);
    }

    private static void flowControl2() {
        for (int i = 0; i < 3; i++) {
            System.out.println("No." + i + " Loop");
        }
        int sum = 0;
        for (int i = 0; i < 101; i++) {
            sum += i;
        }
        System.out.println("1 ~ 100 Sum : " + sum);

        for (int i = 3; i < 0; i--) {
            System.out.println(i);
        }

        int[] arr = {3, 7, 11, 30};
        for (int i = 0; i < arr.length; i++) {
            System.out.println(arr[i]);
        }

        for (int i = 5; i < 8; i++) {
            for (int j = 3; j < 7; j++) {
                System.out.println(i + " X " + j + " = " + i*j);
            }
        }
    }

    private static void flowControl1() {
        Scanner sc = new Scanner(System.in);
        while (true) {
            int userInputValue = sc.nextInt();
            if(userInputValue == 100) break;
            if (userInputValue > 10) {
                System.out.println("Number is over than 10");
            } else {
                System.out.println("Number is less than 10");
            }
        }
        System.out.println("Finished");
        sc.close();
    }
}
