package tenten.StackOverflowClone.home.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {
    @GetMapping("/")
    public String home() {
        // '홈' 페이지 -> 최신순으로 질문 15개 조회하는 URI로 Redirect
        return "redirect:/questions?page=1&size=15&sort=newest";
    }
}
