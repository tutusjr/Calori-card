import {Formik, Form , Field} from 'formik'
import { useNavigate } from 'react-router-dom'
import { AiOutlineHome } from 'react-icons/ai'

export default function Sign() {

    const navigate = useNavigate()
    const home = useNavigate()
    const toLogin = () => {
        navigate('/login')
    }   

    const toAnasayfa= () => {
        home('/anasayfa')
    }
    
return(
    <>
        <div className='sign'>
        <h1 onClick={toAnasayfa} className='sign-home'><AiOutlineHome/></h1>
            <div className='form'>
            <h1 className='kayit-baslik'>Kayit ol</h1>
        <Formik initialValues={{
                    username:'',
                    password:'',
                    email:''
            }} onSubmit={values => {
                 console.log(values)
            }}>
                     {({values}) => (
                <Form className='kayit-form'>
                    <span className='overlay'>Kullanici Adi</span>
                    <Field autocomplete="off" name='username'/>
                    <span className='overlay'>Sifre</span>
                    <Field name='password' type='password'/>
                    <span className='overlay'>E-mail</span>
                    <Field autocomplete="off" name='Email' type='email'/>
                    <button onClick={toLogin} className='kayitol-button' type='submit'>Kayit Ol</button>
                </Form>
            )}
        </Formik>       

            </div>
        </div>
    </>
    )
}