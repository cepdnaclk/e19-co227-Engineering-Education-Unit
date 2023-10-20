package com.GES.General_Elective_Subjects.Exception;

public class PastStaffNotFoundException extends RuntimeException{
    public PastStaffNotFoundException(Integer id){
        super("Could not found any PastStaff with the give id " + id);
    }
}
