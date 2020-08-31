import React, { useState } from 'react';
import { Card } from 'semantic-ui-react';
import { Link } from '@reach/router';
import { useForm } from "react-hook-form";

const AddAccountPage = () => {
    const { register, handleSubmit, errors } = useForm();
    const [state, setState] = useState({});
    const onSubmit = data => {
        console.log(data);
        fetch('http://localhost:8080/api/bank-dev/submit')
        .then(response => response.json())
        .then(setState({data}))
    }
    
    return (
        <>
            <Link to="../">Back</Link>
            <h1>Add New Account</h1>
            {/* adding a card of form */}
            <Card centered>
                <Card.Content>
                    <form className="ui form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="field">
                            <label>Account Holder Name</label>
                            <input name="holdername" ref={register({ required: true }, { pattern: /^[A-Za-z]+$/i })} />
                        </div>
                        <div className="ui red text">
                            {errors.holdername && <p>This field is required</p>}
                        </div>

                        <div className="field">
                            <label>Account Holder age</label>
                            <input type="number" name="age" ref={register} />
                        </div>
                        <div className="field">
                            <label>Account Holder Role</label>
                            <select name="role" ref={register} >
                                <option name="analyst">Analyst</option>
                                <option name="associate">Associate</option>
                                <option name="sr-associate">Senior Associate</option>
                            </select>
                        </div>

                        <div className="field">
                            <label>Email</label>
                            <input name="email" type="email" ref={register({ required: true })} />
                        </div>
                        {errors.email && <p>This field is required</p>}


                        <Card.Content className="ui two buttons">
                            <input className="ui blue button" type="reset" />
                            <input className="ui green button" value="Submit" type="submit" />
                        </Card.Content>
                    </form>
                </Card.Content>
            </Card>
        </>
    )
}

export default AddAccountPage;