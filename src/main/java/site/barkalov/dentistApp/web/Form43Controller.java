package site.barkalov.dentistApp.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;
import site.barkalov.dentistApp.domain.Form43;
import site.barkalov.dentistApp.service.Form43Service;

import javax.validation.Valid;
import java.io.ByteArrayInputStream;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/form")
@CrossOrigin(origins = "*")
public class Form43Controller {

    @Autowired
    private final Form43Service form43Service;

    public Form43Controller(Form43Service form43Service) {
        this.form43Service = form43Service;
    }

    @PostMapping
    @RequestMapping("/add")
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

    @GetMapping
    @RequestMapping("/all")
    public List<Form43> getAllExistedForms() {
        return form43Service.findAll();
    }

    @RequestMapping(value = "/{id}/pdf",
            method = RequestMethod.GET,
            produces = MediaType.APPLICATION_PDF_VALUE)
    public ResponseEntity<InputStreamResource> getPdfForm(@PathVariable("id") Integer formId) {
        ByteArrayInputStream bis = form43Service.generatePdf(formId);
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Disposition", "attachment; filename=form43.pdf");

        return ResponseEntity
                .ok()
                .headers(headers)
                .contentType(MediaType.APPLICATION_PDF)
                .body(new InputStreamResource(bis));
    }
}
