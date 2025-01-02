package com.example.demo.basic;

// Inheritance
class Animal {
    String name;
    void eat() {
        System.out.println(this.name + " eat");
    }

}
class Cat extends Animal { }
class Dog extends Animal {
    String breed;

    @Override
    void eat() {
        System.out.println("dog " + this.name + " eat");
    }

    void info() {
        System.out.println("Breed : " + this.breed);
    }
}

// Polymorphism
class XMan{
    void attack() {
        System.out.println("Attack");
    }
}
class Wolverine extends XMan {
    @Override
    void attack() {
        System.out.println("Hook Attack");
    }
}
class Magneto extends XMan {
    @Override
    void attack() {
        System.out.println("Magnetic Attack");
    }
}

public class Inheritance {
    public static void main(String[] args) {
//        Animal cat = new Cat();
//        cat.name = "cat";
//        cat.eat();
//        Animal dog = new Dog();
//        Dog dog2 = new Dog();
//        dog.name = "dog";
//        dog.eat();
//        dog2.name = "dog2";
//        dog2.breed = "Bichon";
//        dog2.info();

        XMan man = new XMan();
        XMan wolverine = new Wolverine();
        XMan magneto = new Magneto();
        man.attack();
        wolverine.attack();
        magneto.attack();




    }
}
