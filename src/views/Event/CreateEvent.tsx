import React, { useEffect, useState } from 'react';
import { Dropdown, Input } from 'semantic-ui-react';
import { Row, Col } from 'react-bootstrap'
import { useForm } from "react-hook-form"

// styles
import "./style.scss";
import 'semantic-ui-css/semantic.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const eventOptions = [
    {
        key: "Meeting",
        text: "Meeting",
        value: "Meeting"
    },
    {
        key: "Lecture",
        text: "Lecture",
        value: "Lecture"
    },
    {
        key: "Break",
        text: "Break",
        value: "Break"
    },
    {
        key: "Lab",
        text: "Lab",
        value: "Lab"
    }
]

const subjectOptions = [
    {
        key: "OSA",
        text: "OSA",
        value: "OSA"
    },
    {
        key: "Math",
        text: "Math",
        value: "Math"
    },
    {
        key: "Physics",
        text: "Physics",
        value: "Physics"
    },
    {
        key: "Chemistry",
        text: "Chemistry",
        value: "Chemistry"
    }
]

const countryOptions = [
  { key: 'JH', value: 'JH', text: 'Jasur Hasanov' },
  { key: 'SZ', value: 'SZ', text: 'Samer El Zant' },
  { key: 'DM', value: 'DM', text: 'Dominique Mereaux' },
]

const groupOptions = [
    { key: "CS-017", value: "CS-017", text: "CS-017"},
    { key: "CS-018", value: "CS-018", text: "CS-018"},
    { key: "CS-019", value: "CS-019", text: "CS-019"},
    { key: "CS-016", value: "CS-016", text: "CS-016"}
]

const roomOptions = [
    { key: "401", value: "401", text: "401"},
    { key: "402", value: "402", text: "402"},
    { key: "403", value: "403", text: "403"},
    { key: "404", value: "404", text: "404"}
]

const CreateEvent = () => {
    const { register, handleSubmit, errors } = useForm();
    const [startDate, setStartDate] = useState(new Date());
    const submit = data => {}

    return (
        <div className="py-10">
            <h1 className="title">Create Event</h1>
            <form onSubmit={handleSubmit(d => console.log(d))}>
                <Row>
                    <Col md={6} lg={6} className="mb-4">
                        <label className="form-label">Event</label>
                        <Dropdown
                            placeholder='Choose Event'
                            fluid
                            selection
                            options={eventOptions}
                        />
                    </Col>
                    <Col md={6} lg={6} className="mb-4">
                        <label className="form-label">Teacher</label>
                        <Dropdown
                            clearable
                            fluid
                            search
                            selection
                            options={countryOptions}
                            placeholder='Choose Teacher'
                        />
                    </Col>
                </Row>
                <Row>
                    <Col md={6} lg={6} className="mb-4">
                        <div className="form-elem">
                            <label className="form-label">Subject</label>
                            <Dropdown
                                clearable
                                fluid
                                search
                                selection
                                options={subjectOptions}
                                placeholder='Choose Subject'
                            />
                        </div>
                    </Col>
                    <Col md={6} lg={6} className="mb-4">
                        <div className="form-elem">
                            <label className="form-label">Group</label>
                            <Dropdown
                                clearable
                                fluid
                                search
                                selection
                                options={groupOptions}
                                placeholder='Choose Group'
                            />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} lg={6} className="mb-4">
                        <div className="form-elem">
                            <label className="form-label">Date</label>
                            <Input type="date" />
                        </div>
                    </Col>
                    <Col md={6} lg={6} className="mb-4">
                        <div className="form-elem">
                            <label className="form-label">Room</label>
                            <Dropdown
                                clearable
                                fluid
                                search
                                selection
                                options={roomOptions}
                                placeholder='Choose Room'
                            />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <input type="submit" className="submit-button" value="Create Event" />
                    </Col>
                </Row>
               
            </form>
        </div>
    )
}

export default CreateEvent