import ContactMe from "@/components/contact-me";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function ContactMePage() {
    return(
        <div className="flex flex-col bg-gray-900 h-screen">
            <Header/>
            <ContactMe/>
            <Footer/>
        </div>
    );
}