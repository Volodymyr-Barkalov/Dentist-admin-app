import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {addForm} from "../actions/formActions";
import classnames from "classnames";

class InputForm extends Component {

    constructor() {
        super();
        this.state = {
            sickNumberId: "",
            year: "",
            lastName: "",
            firstName: "",
            patronymic: "",
            gender: "",
            birthday: "",
            address: "",
            phone: "",
            diagnosis: "",
            complaints: "",
            lastDisease: "",
            disease: ""
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        const newForm = {
            sickNumberId: this.state.sickNumberId,
            year: this.state.year,
            lastName: this.state.lastName,
            firstName: this.state.firstName,
            patronymic: this.state.patronymic,
            gender: this.state.gender,
            birthday: this.state.birthday,
            address: this.state.address,
            phone: this.state.phone,
            diagnosis: this.state.diagnosis,
            complaints: this.state.complaints,
            lastDisease: this.state.lastDisease,
            disease: this.state.disease
        };
        // console.log(newForm);
        this.props.addForm(newForm, this.props.history);
    }

    render() {
        var date = new Date();
        return (
            <div className="inputForm">
                <form onSubmit={this.onSubmit}>
                    <div className="form-row">
                        <div className="col">
                            <label htmlFor="patientNo">Медична картка стоматологічного хворого №</label>
                            <input type="text" className="form-control" name="sickNumberId"
                                value={this.state.sickNumberId}
                                onChange={this.onChange}
                                placeholder="Введіть номер медичної картки стоматологічного хворого" />
                        </div>
                        <div className="col">
                            <label htmlFor="year">Рік</label>
                            <input type="text" className="form-control" name="year"
                                value={this.state.year}
                                onChange={this.onChange}
                                placeholder={date.getFullYear()} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Прізвище</label>
                        <input type="text" className="form-control" name="lastName"
                            value={this.state.lastName}
                            onChange={this.onChange}
                            placeholder="Іванов" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="firstName">Ім'я</label>
                        <input type="text" className="form-control" name="firstName"
                            value={this.state.firstName}
                            onChange={this.onChange}
                            placeholder="Іван" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="fathersName">По-батькові</label>
                        <input type="text" className="form-control" name="patronymic"
                            value={this.state.patronymic}
                            onChange={this.onChange}
                            placeholder="Іванович" />
                    </div>
                    <div className="form-row form-group">

                        <div className="form-group col-md-4">
                            <label htmlFor="gender">Стать</label>
                            <select name="gender" className="form-control"
                                value={this.state.gender}
                                onChange={this.onChange} >
                                <option value>Оберіть стать...</option>
                                <option>Чоловіча</option>
                                <option>Жіноча</option>
                            </select>
                        </div>

                        <div className="col">
                            <label htmlFor="birthday">Рік народження</label>
                            <input type="text" className="form-control" name="birthday"
                                value={this.state.birthday}
                                onChange={this.onChange}
                                placeholder="01.01.1990" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Місце проживання хворого</label>
                        <input type="text" className="form-control" name="address"
                            value={this.state.address}
                            onChange={this.onChange}
                            placeholder="Адреса" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Телефон</label>
                        <input type="text" className="form-control" name="phone"
                            value={this.state.phone}
                            onChange={this.onChange}
                            placeholder="+380991111111" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="Diagnosis">Діагноз</label>
                        <textarea className="form-control" name="diagnosis"
                            value={this.state.diagnosis}
                            onChange={this.onChange}
                            rows="3"></textarea>
                    </div>

                    <div className="form-group">
                        <label htmlFor="complaints">Скарги</label>
                        <textarea className="form-control" name="complaints"
                            value={this.state.complaints}
                            onChange={this.onChange}
                            rows="3"></textarea>
                    </div>

                    <div className="form-group">
                        <label htmlFor="pastIllnes">Перенесені та супутні захворювання</label>
                        <textarea className="form-control" name="lastDisease"
                            value={this.state.lastDisease}
                            onChange={this.onChange}
                            rows="3"></textarea>
                    </div>

                    <div className="form-group">
                        <label htmlFor="disease">Розвиток теперішнього захворювання</label>
                        <textarea className="form-control" name="disease"
                            value={this.state.disease}
                            onChange={this.onChange}
                            rows="3"></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>
        );
    }
}

InputForm.propTypes = {
    addForm : PropTypes.func.isRequired,
    errors : PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    errors: state.errors
})

export default connect(mapStateToProps, {addForm} ) (InputForm);