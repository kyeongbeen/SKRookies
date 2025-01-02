package com.example.demo.basic;

/**
 * Interface
 * Constant
 * Abstract Method : 선언만 가능
 */

interface Vehicle {
    // interface 에서는 public static final 없어도 그렇게 인식
    public static final int MAX_VEHICLES = 5;
    String NAME = "DB11";
    void start();
    void stop();
}
class Car implements Vehicle {
    @Override
    public void start() {

    }

    @Override
    public void stop() {

    }
}
class Truck implements Vehicle {
    @Override
    public void start() {

    }

    @Override
    public void stop() {

    }
}

interface A {
    void a();
}
interface B {
    void b();
}
class P {}
class C extends P implements A, B {
    @Override
    public void a() {
    }

    @Override
    public void b() {
    }
}

interface Cal {
    int add(int a, int b);
    // Default Method -> 구현해야함
    default int sub(int a, int b) {
        return a - b;
    }

    // Static Method -> 구현해야함
    static int mul(int a, int b) {
        return a * b;
    }
}
class MyCalculator implements Cal {
    @Override
    public int add(int a, int b) {
        return a + b;
    }
}

public class Interface {
    public static void main(String[] args) {
        System.out.println(" 3 x 5 " + Cal.mul(3, 5));
    }
}
