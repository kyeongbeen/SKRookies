package com.example.demo.basic;

// T : 모든 타입이 가능
class Multi<T> {
    private T t;

    public T getT() {
        return t;
    }

    public void setT(T t) {
        this.t = t;
    }
}



public class Generic {
    public static void main(String[] args) {
//        Multi<String> m = new Multi<>();
//        m.setT("Hello");
//        System.out.println(m.getT());
//
//        Multi<Integer> m2 = new Multi<>();
//        m2.setT(1);
//        System.out.println(m2.getT());

//        Map<String, Integer> persons = new HashMap<>();
//        persons.put("Kin", 40);
//        persons.put("Mike", 30);
//        persons.put("John", 20);
//
//        for (String key : persons.keySet()) {
//            System.out.println(key + " " + persons.get(key));
//        }
//        System.out.println("---------------------------------------------------");
//        for (Map.Entry<String, Integer> entry : persons.entrySet()) {
//            System.out.println(entry.getKey() + " " + entry.getValue());
//        }

        print(1);
        print(1.1);
//        print("Hello"); // T의 값으로 Number 을 상속받았기 때문에 수치형 데이터만 사용 가능하다
    }

    public static <T extends Number> void print(T number) {
        System.out.println(number);
    }
}

