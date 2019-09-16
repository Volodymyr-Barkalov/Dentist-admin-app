package site.barkalov.dentistApp.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;
import site.barkalov.dentistApp.domain.Form43;
import site.barkalov.dentistApp.service.Form43Service;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/main")
@CrossOrigin
public class Form43Controller {

    @Autowired
    private Form43Service form43Service;

    @PostMapping
    public ResponseEntity<?> addForm(@Valid @RequestBody Form43 form43, BindingResult result) {

        if(result.hasErrors()) {
            Map<String, String> errorMap = new HashMap<>();

            for(FieldError error : result.getFieldErrors()) {
                errorMap.put(error.getField(), error.getDefaultMessage());
            }

            return new ResponseEntity<Map<String, String>>(errorMap, HttpStatus.BAD_REQUEST);
        }

        Form43 newForm = form43Service.saveOrUpdateForm43(form43);
        return new ResponseEntity<Form43>(newForm, HttpStatus.CREATED);
    }
}
