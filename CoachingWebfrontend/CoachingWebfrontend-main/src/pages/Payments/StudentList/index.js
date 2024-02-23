import { Checkbox, Divider, FormControlLabel, FormGroup } from "@mui/material";
import React from "react";
import { ReactDOM } from "react";
import "./style.css";

function StudentList() {
    const students = ["Student 1", "Student 2", "Student 3", "Student 4", "Ritik"];
    const arr = ['Maths', 'Chemistry', 'Physics', 'Biology', 'English']
    return (
        <div className="studentList">
            <div className="studentListCard">
                <div className="studentCardHeader">
                    <h4>STUDENTS ({students.length})</h4>
                </div>
                <div className="studentNames">
                    {students.map(name => {
                        {var n = name.split(' '),
                        initials = n[0].substring(0, 1).toUpperCase();
                        if (n.length > 1) {
                            initials += n[n.length - 1].substring(0, 1).toUpperCase();
                        }
                    }
                        return (
                            <div>
                                <p data-letters={initials}>{name}</p>
                                <Divider />
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="filter">
                <div className="filterCard">
                    <p>Filter By</p>
                    <Divider />
                    <FormGroup>
                        {arr.map((val) => {
                                return <FormControlLabel control={<Checkbox />} label={val} />    
                        })}
                    </FormGroup>
                </div> 
            </div>
        </div>
    );
}

export default StudentList;
