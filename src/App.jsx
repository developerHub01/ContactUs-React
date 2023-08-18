import './App.css'
import ContactHeader from './components/ContactHeader/ContactHeader'
import Navigation from './components/Navigation/Navigation'
import ContactForm from './components/ContactForm/ContactForm'

const App = () =>{
  return (
    <div>
      <Navigation />
      <ContactHeader />
      <ContactForm />
    </div>
  )
}

export default App
