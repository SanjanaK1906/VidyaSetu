package com.vidyasetu.controller;

import com.vidyasetu.model.Notification;
import com.vidyasetu.service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/notifications")
public class NotificationController {
    @Autowired
    private NotificationService notificationService;

    @PostMapping("/")
    public Notification createNotification(@RequestBody Notification notification) {
        return notificationService.saveNotification(notification);
    }

    @GetMapping("/")
    public List<Notification> getAllNotifications() {
        return notificationService.getAllNotifications();
    }
}