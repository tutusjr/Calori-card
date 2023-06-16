import {Form , Field, Formik, useFormik} from 'formik'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { Link } from 'react-router-dom'
import {AiOutlineHome} from 'react-icons/ai'
export default function Login() {


    const navigate = useNavigate()
    const home = useNavigate()
    const { setUser } = useAuth()
    const {handleSubmit ,handleChange, values} = useFormik({
        initialValues:{
            username:'',
            password:''
        },
        onSubmit: values => {
            setUser(values)
        }
    })


    const toAnasayfa= () => {
        home('/anasayfa')
    }
    return (
    <>  
        <div className='login'>
            <h1 onClick={toAnasayfa} className='login-home'><AiOutlineHome/></h1>
            <div className='form'>
            <h1 className='login-title'>Giris Yap</h1>
            <Formik initialValues={{
                    username:'',
                    password:''
            }} onSubmit={values => {
                 setUser(values)
                 navigate('/anasayfa')
            }}>
                {({values}) => (
                <Form className='input'>
                    <span className='overlay'>Kullanici Adi</span>
                    <Field autocomplete="off" name='username'/>
                    <span className='overlay'>Sifre</span>
                    <Field name='password' type='password'/>
                    <button className='giris-btn' type='submit'>Giris Yap</button>
                    <Link className='login-bottom' to='#'>Sifrenizi mi Unuttunuz</Link>
                    <Link className='login-bottom' to='/Sign'>Hesabiniz yok mu? hemen kaydolun.</Link>
                </Form>
                
            )}
        </Formik>
            </div>
            
        </div>
        
    </>
    )
}