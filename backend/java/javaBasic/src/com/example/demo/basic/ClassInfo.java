package com.example.demo.basic;

class Person {

}

class Person2 {
    String name;
    int age;
    void info() {
        System.out.println("Person2 Info name: " + name + ", age: " + age);
    }
}

class Person3 {
    String name;
    int age;

    public Person3(String name, int age) {
        this.name = name;
        this.age = age;
    }
    void printInfo() {
        System.out.println("Person3 Info name: " + name + ", age: " + age);
    }
}

class Person4 {
    private String name;
    private int age;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }
}

public class ClassInfo {
    public static void main(String[] args) {
        Person2 person2 = new Person2();
        person2.info();
        Person3 person3 = new Person3("KyeongBin", 25);
        person3.printInfo();
    }
}
