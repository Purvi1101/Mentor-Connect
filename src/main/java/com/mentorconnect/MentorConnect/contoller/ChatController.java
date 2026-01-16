package com.mentorconnect.MentorConnect.contoller;

import com.mentorconnect.MentorConnect.model.ChatMessage;
import com.mentorconnect.MentorConnect.repository.ChatMessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class ChatController {

    @Autowired
    private ChatMessageRepository chatMessageRepository;

    @MessageMapping("/chat.send")
    @SendTo("/topic/messages")
    public ChatMessage sendMessage(ChatMessage message) {
        chatMessageRepository.save(message);
        return message;
    }
}
