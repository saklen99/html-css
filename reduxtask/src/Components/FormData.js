import { Formik, Field, Form } from "formik"
import { useDispatch, useSelector } from "react-redux"
import { AddValue, DeleteValue, updateValue } from '../User/action'
import shortid from "shortid"

const FormData = () => {
    const list = useSelector((state) => state.reducer.list)
    console.log('final', list)
    const dispatch = useDispatch();

    return (
        <>
            <Formik initialValues={{ first: "", last: "", email: "", contact: "" }}

                onSubmit={(values, { resetForm }) => {
                    Object.assign(values, { id: shortid.generate() })
                    console.log("value", values)

                    dispatch(AddValue(values))
                    resetForm();
                }}
            >
                {(values) => (
                    <Form>
                        <div>
                            <label>FIRST NAME : </label>
                            <Field name="first" type="text" /><br />
                            <label>LAST NAME : </label>
                            <Field name="last" type="text" /><br />
                            <label>EMAIL : </label>
                            <Field name="email" type="text" /><br />
                            <label>CONTACT NO : </label>
                            <Field name="contact" type="text" /><br />
                            <button type="submit">ADD</button>
                        </div>
                    </Form>
                )}

            </Formik>
            <table class="table">
                <thead>
                    <div>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Contact No</th>
                        <th>Delete</th>
                        <th>Update</th>
                    </div>
                </thead>
                <tbody>
                    <tr>
                        {list.map((list) => (
                            <div>
                                <td>{list.first}</td>
                                <td>{list.last}</td>
                                <td>{list.email}</td>
                                <td>{list.contact}</td>
                                <td><button onClick={() => dispatch(DeleteValue(list.id))}>Delete</button></td>
                                <td><button onClick={() => dispatch(updateValue(list.id))}>Update</button></td>
                            </div>
                        ))}
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default FormData



