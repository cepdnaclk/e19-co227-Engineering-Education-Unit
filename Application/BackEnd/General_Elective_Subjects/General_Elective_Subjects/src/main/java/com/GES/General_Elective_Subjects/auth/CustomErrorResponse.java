package com.GES.General_Elective_Subjects.auth;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CustomErrorResponse {
    private int status;
    private String message;

    public  CustomErrorResponse(int response, String message){
        this.status = status;
        this.message = message;
    }

}
