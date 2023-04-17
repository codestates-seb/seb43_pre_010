package tenten.StackOverflowClone.Member;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MemberController {
    @GetMapping("/")
    public String TenTen() {
        return "TEN TEN";
    }

}
