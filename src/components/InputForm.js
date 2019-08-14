import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'

class InputForm extends Component {

    render() {
        var date = new Date();
        return (
            <form>
                <div className="form-row">
                    <div className="col">
                        <label htmlFor="patientNo">Медична картка стоматологічного хворого №</label>
                        <input type="text" className="form-control" id="patientNo"
                               placeholder="Введіть номер медичної картки стоматологічного хворого"/>
                    </div>
                    <div className="col">
                        <label htmlFor="year">Рік</label>
                        <input type="text" className="form-control" id="year"
                               placeholder={date.getFullYear()}/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Прізвище</label>
                    <input type="text" className="form-control" id="lastName"
                           placeholder="Іванов"/>
                </div>
                <div className="form-group">
                    <label htmlFor="firstName">Ім'я</label>
                    <input type="text" className="form-control" id="firstName"
                           placeholder="Іван"/>
                </div>
                <div className="form-group">
                    <label htmlFor="fathersName">По-батькові</label>
                    <input type="text" className="form-control" id="fathersName"
                           placeholder="Іванович"/>
                </div>
                <div className="form-row form-group">

                        <div className="form-group col-md-4">
                            <label htmlFor="gender">Стать</label>
                            <select id="gender" className="form-control">
                                <option selected>Оберіть стать...</option>
                                <option>Чоловіча</option>
                                <option>Жіноча</option>
                            </select>
                        </div>

                        <div className="col">
                            <label htmlFor="birthday">Рік народження</label>
                            <input type="text" className="form-control" id="birthday"
                                   placeholder="01.01.1990"/>
                        </div>
                </div>
                <div className="form-group">
                    <label htmlFor="adress">Місце проживання хворого</label>
                    <input type="text" className="form-control" id="adress"
                           placeholder="Адреса"/>
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Телефон</label>
                    <input type="text" className="form-control" id="phone"
                           placeholder="+380991111111"/>
                </div>

                <div className="form-group">
                    <label htmlFor="Diagnosis">Діагноз</label>
                    <textarea className="form-control" id="Diagnosis" rows="3"></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="complaints">Скарги</label>
                    <textarea className="form-control" id="complaints" rows="3"></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="pastIllnes">Перенесені та супутні захворювання</label>
                    <textarea className="form-control" id="pastIllnes" rows="3"></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="disease">Розвиток теперішнього захворювання</label>
                    <textarea className="form-control" id="disease" rows="3"></textarea>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

export default InputForm