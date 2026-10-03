import Form from "./Form";
import FormCompletedMessage from "./FormCompletedMessage";

function FormContainer(){
    return(
        <main className="w-full flex flex-col justify-center items-center md:w-2/3">
            {/* <Form/> */}
            <FormCompletedMessage/>
        </main>
    )
}

export default FormContainer;