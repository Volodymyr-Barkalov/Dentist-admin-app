package site.barkalov.dentistApp.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import site.barkalov.dentistApp.domain.Form43;

@Repository
public interface Form43Repository extends CrudRepository<Form43, Long> {

    Form43 getById(Long id);

}
