package site.barkalov.dentistApp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import site.barkalov.dentistApp.domain.Form43;
import site.barkalov.dentistApp.repository.Form43Repository;

@Service
public class Form43Service {

    @Autowired
    private Form43Repository form43Repository;

    public Form43 saveOrUpdateForm43(Form43 form43) {

        return form43Repository.save(form43);
    }

    public Iterable<Form43> findAll() {
        return form43Repository.findAll();
    }

    public Form43 findById(Long id) {
        return form43Repository.getById(id);
    }

    public void delete(Long id) {
        Form43 projectTask = findById(id);
        form43Repository.delete(projectTask);
    }
}
