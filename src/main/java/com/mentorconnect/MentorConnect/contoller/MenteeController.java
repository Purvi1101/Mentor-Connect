package com.mentorconnect.MentorConnect.contoller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.mentorconnect.MentorConnect.model.User;
import com.mentorconnect.MentorConnect.service.MenteeService;

@RestController
@RequestMapping("/api/mentee")
@CrossOrigin("*")
public class MenteeController {

    @Autowired
    private MenteeService menteeService;

    @PostMapping("/register")
    public User register(@RequestBody User user) {
        System.out.println("REGISTER API HIT: " + user.getEmail());
        return menteeService.registerMentee(user);
    }

    @GetMapping("/profile")
    public User getProfile(@RequestParam String email) {
        return menteeService.getProfile(email);
    }

    @PostMapping("/login")
    public User login(@RequestBody User user) {
        return menteeService.loginMentee(user.getEmail(), user.getPassword());
    }
}
