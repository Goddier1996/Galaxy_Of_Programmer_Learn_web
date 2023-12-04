import AddNewUser from '../components/register/AddNewUser'

const Register = ({hideRegisterFun}) => {

    return (
        <>
            <AddNewUser closeModel={hideRegisterFun} />
        </>
    )
}

export default Register