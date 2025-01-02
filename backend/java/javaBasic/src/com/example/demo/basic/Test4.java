package com.example.demo.basic;

public class Test4 {
    public static void main(String[] args) {
//        {
//            int[] nums = new int[5];
//            nums[0] = 1;
//            nums[1] = 2;
//            nums[2] = 9;
//            nums[3] = 4;
//            nums[4] = 5;
//            for (int i : nums) {
//                System.out.println(i);
//            }
//        }
//        {
//            int[] nums = {10, 5, 6, 8 ,29};
//            for (int i : nums) {
//                System.out.println(i);
//            }
//        }
//        {
//            int[] nums = {10, 5, 6, 8 ,29};
//            int target = 6;
//            for (int i : nums) {
//                if(i == target) {
//                    System.out.println("target is in the nums");
//                    break;
//                }
//            }
//        }
        {
            int[] nums = {10, 5, 6, 8 ,29};
            int[] temp = new int[nums.length];
            System.arraycopy(nums, 0, temp, 0, nums.length);
            for (int i : temp) {
                System.out.println(i);
            }
        }

    }
}
