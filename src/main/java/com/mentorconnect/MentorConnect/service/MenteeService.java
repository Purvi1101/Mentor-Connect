package com.mentorconnect.MentorConnect.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.mentorconnect.MentorConnect.model.User;
import com.mentorconnect.MentorConnect.repository.UserRepository;

@Service
public class MenteeService {

    @Autowired
    private UserRepository userRepository;

    public User registerMentee(User user) {
        return userRepository.save(user);
    }
    public User getProfile(String email) {
        return userRepository.findByEmail(email);
    }

    public User loginMentee(String email, String password) {
        return userRepository.findByEmailAndPassword(email, password);
    }
}
