package com.GES.General_Elective_Subjects.Service;


import com.GES.General_Elective_Subjects.Model.PresentStaff;
import java.util.List;
import java.util.Optional;

public interface PresentStaffService {
    public PresentStaff savePresentStaff(PresentStaff presentStaff);
    public List<PresentStaff> getAllPresentStaffs();

    public Optional<PresentStaff> getPresentStaffById(int id);


}