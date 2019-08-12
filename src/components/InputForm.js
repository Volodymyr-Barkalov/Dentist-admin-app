import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'

class InputForm extends Component {

    render() {
        var date = new Date();
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="patientNo">Медична картка стоматологічного хворого №</label>
                    <input type="text" className="form-control" id="patientNo"
                           placeholder="Введіть номер медичної картки стоматологічного хворого"/>
                </div>
                <div className="form-group">
                    <label htmlFor="year">Рік</label>
                    <input type="text" className="form-control" id="year"
                           placeholder={date.getFullYear()}/>
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

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

export default InputForm