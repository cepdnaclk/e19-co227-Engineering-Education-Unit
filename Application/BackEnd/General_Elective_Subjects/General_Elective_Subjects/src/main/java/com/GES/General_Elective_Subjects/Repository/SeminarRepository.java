package com.GES.General_Elective_Subjects.Repository;

import com.GES.General_Elective_Subjects.Model.Seminar;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SeminarRepository extends JpaRepository<Seminar, Long> {
    // You can define custom query methods here if needed
}
