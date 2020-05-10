package site.barkalov.dentistApp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import site.barkalov.dentistApp.domain.Form43;
import site.barkalov.dentistApp.repository.Form43Repository;

import java.io.ByteArrayInputStream;
import java.util.ArrayList;
import java.util.List;

@Service
public class Form43Service {

    @Autowired
    private Form43Repository form43Repository;

    public Form43 saveOrUpdateForm43(Form43 form43) {

        return form43Repository.save(form43);
    }

    public List<Form43> findAll() {
        List<Form43> list = new ArrayList<>();
        form43Repository.findAll().forEach(list::add);
        return list;
    }

    public Form43 findById(Long id) {
        return form43Repository.getById(id);
    }

    public void delete(Long id) {
        Form43 projectTask = findById(id);
        form43Repository.delete(projectTask);
    }

    public ByteArrayInputStream generatePdf(Integer id) {
        return GeneratePdfReport.getPdfForm(form43Repository.getById(Long.valueOf(id)));
    }

}
