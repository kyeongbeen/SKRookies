package com.example.demoex.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/auth")
@Controller
public class AuthController {
    @GetMapping("/login")
    public String login() {
        return "login";
    }

//    @PostMapping("/signin")
//    @ResponseBody
//    public String signin(@RequestParam String uid, @RequestParam String upw) {
//        System.out.println("Client Request");
//        return "signin " + uid + " " + upw;
//    }

    // http://localhost:8080/auth/signin/75/s909
    @PostMapping("/signin/{pno}/{pid}")
    @ResponseBody
    public String signin(@PathVariable String pno, @PathVariable String pid,
                         @RequestParam String uid, @RequestParam String upw) {
        System.out.println("Client Request");
        return "signin " + uid + " " + upw + " " + pno + " " + pid;
    }
}
