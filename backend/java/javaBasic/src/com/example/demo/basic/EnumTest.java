package com.example.demo.basic;

/**
 * Enum
 * 상수로 정의되는 변수로 묶어서 클래스처럼 관리
 * Enum 에 정의된 모든 변수는 public static final 로 적용된다
 */

enum Level {
    VIP, GOLD, SILVER, BRONZE
}

enum TrafficSignal {
    GREEN("출발신호"),
    YELLOW("정지대기"),
    RED("정지신호"),
    ARROW("방향전환신호");

    private final String signal;
    TrafficSignal(String signal) {
        this.signal = signal;
    }
    public String getSignal() {
        return signal;
    }
}

public class EnumTest {
    public static void main(String[] args) {
//        Level level = Level.GOLD;
//        switch (level) {
//            case VIP:
//                System.out.println("Vip");
//                break;
//            case GOLD:
//                System.out.println("Gold");
//                break;
//            default:
//                System.out.println("ETC");
//                break;
//        }

        for (TrafficSignal signal : TrafficSignal.values()) {
            System.out.println(signal + " : " + signal.getSignal());
        }

    }
}
