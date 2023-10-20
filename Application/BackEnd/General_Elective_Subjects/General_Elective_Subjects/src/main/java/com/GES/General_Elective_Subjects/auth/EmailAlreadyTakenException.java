package com.GES.General_Elective_Subjects.auth;


public class EmailAlreadyTakenException extends RuntimeException{
    public EmailAlreadyTakenException(String message) {
        super(message);
    }

}

