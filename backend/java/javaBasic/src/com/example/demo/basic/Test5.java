package com.example.demo.basic;

import java.util.*;

public class Test5 {
    public static void main(String[] args) {
        {
            List<Integer> list = new ArrayList<>();
            list.add(1);
            list.add(2);
            list.add(3);
            System.out.println(list);
            System.out.println(list.get(2));
            System.out.println(list.size());
            System.out.println(list.remove(1));
            list.clear();
            System.out.println(list);
        }
        {
            Set<Integer> set = new HashSet<>();
            set.add(1);
            set.add(2);
            set.add(3);
            System.out.println(set);
            System.out.println(set.size());
            set.add(2);
            System.out.println(set);
            set.clear();
            System.out.println(set);
        }
        {
            Map<String, Integer> map = new HashMap<>();
            map.put("a", 1);
            map.put("b", 2);
            map.put("c", 3);
            System.out.println(map);
            System.out.println(map.get("a"));
            System.out.println(map.size());
            map.put("b", 4);
            System.out.println(map.get("b"));


        }
    }
}
