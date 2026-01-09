package com.mentorconnect.MentorConnect.contoller;
import com.mentorconnect.MentorConnect.model.Mentor;
import com.mentorconnect.MentorConnect.repository.MentorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ModelAttribute;

@Controller
@RequestMapping("/mentor")
public class MentorController {

    @Autowired
    private MentorRepository mentorRepository;

    @PostMapping("/register")
    public String registerMentor(@ModelAttribute Mentor mentor) {
        mentorRepository.save(mentor);
        return "redirect:/mentor2.html";   // THANK YOU PAGE
    }

}
