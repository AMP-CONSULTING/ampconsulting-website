import { Route, Routes } from 'react-router-dom'
import HomeComponent from './pages/home/homeComponent'
import PartnerComponent from './pages/partner/partnerComponent'
import ServiceComponent from './pages/service/serviceComponent'
import AboutComponent from './pages/about/aboutComponent'
import ContactComponent from './pages/contact/contactComponent'

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomeComponent />} />
                <Route path="/partner" element={<PartnerComponent />} />
                <Route path="/layanan" element={<ServiceComponent />} />
                <Route path="/tentang" element={<AboutComponent />} />
                <Route path="/kontak" element={<ContactComponent />} />
            </Routes>
        </div>
    )
}

export default App
