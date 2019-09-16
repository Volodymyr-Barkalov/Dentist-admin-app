package site.barkalov.dentistApp.domain;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;

@Entity
@NoArgsConstructor
@Data
public class Form43 {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Sick Number Id cannot be blank")
    private String sickNumberId;

    private Integer year;

    @NotBlank(message = "Last name cannot be blank")
    private String lastName;

    @NotBlank(message = "First name cannot be blank")
    private String firstName;
    private String patronymic;

    // Todo Change gender to enum
    private String gender;

    private String address;

    private String phoneNumber;

    private String diagnosis;

    private String disease;

    private String lastDisease;

    private String presentDisease;

}
