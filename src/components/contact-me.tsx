import { LocateIcon, MailIcon, PhoneIcon } from "lucide-react";

// export { IntroductionText, IntroductionImage, Introduction };

export default function ContactMe () {
    return (
        <div className="flex flex-col justify-center bg-gray-900 mb-auto">
            <div className="text-white text-3xl text-center mb-2">Contact me</div>
            <div className="flex flex-col bg-gray-800 mx-auto">
                <div className="contact-row">
                    {/* <div className="contact-title">Mobile</div> */}
                    <div><PhoneIcon/></div>
                    <div><a href="tel:+923330377686">+923330377686</a></div>
                </div>
                <div className="contact-row">
                    <div><MailIcon/></div>
                    <div><a href="mailto:faisal.islam.ceme@gmail.com">faisal.islam.ceme@gmail.com</a></div>
                </div>
                <div className="contact-row">
                    <div><LocateIcon/></div>
                    <div><address>First floor, House# R-402, F. B. Area Block 18, Karachi Central, Karachi, Pakistan</address></div>
                </div>
            </div>
        </div>

    );
}