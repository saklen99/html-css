import { Formik, Field, Form } from "formik"


const FormData = () => {
     
    return (
        <>
            <Formik initialValues={{ first: "", last: "", email: "", contect: "" }}
                onSubmit={(values) => {
                    console.log("value", values)
                  
                }} >
                {(values) => (
                    <Form>
                        <div>

                            <label>FIRST NAME:</label>
                            <Field name="first" type="text" className="form-control" /><br />
                            <label>LAST NAME:</label>
                            <Field name="last" type="text" /><br />
                            <label>EMAIL:</label>
                            <Field name="email" type="text" /><br />
                            <label>CONTACT NO:</label>
                            <Field name="contect" type="text" /><br />

                            <button type="submit" >ADD</button>
                        </div>
                    </Form>
                )}

            </Formik>

           
        </>
    )
}

export default FormData