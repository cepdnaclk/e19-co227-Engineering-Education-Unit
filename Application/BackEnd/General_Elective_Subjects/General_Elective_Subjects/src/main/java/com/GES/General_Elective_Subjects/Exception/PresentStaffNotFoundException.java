package com.GES.General_Elective_Subjects.Exception;

public class PresentStaffNotFoundException extends RuntimeException{
    public PresentStaffNotFoundException(Integer id) {
        super("Could not found any PresentStaff with the give id " + id);
    }
}
