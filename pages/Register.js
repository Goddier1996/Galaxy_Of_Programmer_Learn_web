import AddNewUser from '../components/AddNewUser'




const Register = ({hideRegisterFun}) => {


    return (
        <>
            <AddNewUser closeModel={hideRegisterFun} />
        </>
    )
}

export default Register