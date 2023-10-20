package com.GES.General_Elective_Subjects.Service;

import com.GES.General_Elective_Subjects.Model.PresentStaff;
import com.GES.General_Elective_Subjects.Repository.PresentStaffRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class PresentStaffServiceImpl implements PresentStaffService{

    @Autowired
    private PresentStaffRepository presentStaffRepository;

    @Override
    public PresentStaff savePresentStaff(PresentStaff presentStaff) {
        return presentStaffRepository.save(presentStaff);
    }


    @Override
    public List<PresentStaff> getAllPresentStaffs() {
        return presentStaffRepository.findAll();
    }

    @Override
    public Optional<PresentStaff> getPresentStaffById(int id) {
        return presentStaffRepository.findById(id);
    }


}
