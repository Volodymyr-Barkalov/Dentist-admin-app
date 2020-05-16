import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import CustomNavbar from "../navbar/CustomNavbar";

class FormList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apiPath: 'https://dentist-form-app.herokuapp.com/api',
            // apiPath: 'http://localhost:8080/api/',
            apiData: [],
            filteredApiData: [],
            wasFetched: false,
            error: null
        };
    }

    componentDidMount() {
        // const statisticApiURL = "https://dentist-form-app.herokuapp.com/form/all";
        const statisticApiURL = `${this.state.apiPath}/form/all`;
        console.log('Fetching data from resource: ' + statisticApiURL);

        fetch(statisticApiURL)
            .then(response => response.text())
            .then(result => {
                this.setState({
                        apiData: result,
                        wasFetched: true
                    }
                );
            })
            .catch(e => {
                console.log('Unable to fetch data from server: ' + e.toString());
                this.setState({apiData: null, wasFetched: false, error: e})
            })

    }

    getPDF(id) {
        // const url = "/form/" + id + "/pdf";
        const url = `${this.state.apiPath}/form/${id}/pdf`;
        const {apiData} = this.state;
        fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/pdf"
            },
        })
            .then(res => res.blob())
            .then(response => {
                //Create a Blob from the PDF Stream
                console.log(response);
                const blob = new Blob([response], {
                    type: "application/pdf"
                });
                //Build a URL from the file
                const fileURL = URL.createObjectURL(blob);
                const tab = window.open();
                tab.location.href = fileURL;

            })
            .catch(error => {
                console.log(error);
            });

    }

    renderTableData() {
        const {error, wasFetched, apiData} = this.state;
        if (error) {
            return <p>Ошибка: {error.message}</p>;
        } else if (!wasFetched) {
            return <div>Загрузка...</div>;
        } else {
            const data = JSON.parse(apiData);
            return data.map((form) => {
                const {id, firstName, lastName} = form;
                return (
                    <tr key={id}>
                        <td>{firstName}</td>
                        <td>{lastName}</td>
                        <td>
                            <div id="browse_app">
                                <button className="btn btn-large btn-info" type="button" onClick={() => this.getPDF(id)}
                                formTarget="_blank">
                                    Download PDF
                                </button>
                            </div>
                        </td>
                    </tr>
                )
            });
        }
    }

    renderTableHead() {
        return (
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>PDF</th>
            </tr>
        )
    }

    render() {
        if (!this.state.wasFetched) {
            return <div className="container">
                <CustomNavbar/>
                <div className="h2 text-center">Error on loading data from server</div>
            </div>
        }
        return (
            <div className="container">
                <CustomNavbar/>
                <div id='title' className="h1 text-center">List of all existing forms</div>
                <table className="table">
                    <thead>
                    {this.renderTableHead()}
                    </thead>
                    <tbody>
                    {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default FormList
