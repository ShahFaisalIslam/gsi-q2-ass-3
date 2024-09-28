import Header from "@/components/header";
import Introduction from "@/components/about-me";
import Footer from "@/components/footer";

export default function AboutMePage() {
    return(
        <div className="flex flex-col bg-gray-900 h-screen">
            <Header/>
            <Introduction/>
            <Footer/>
        </div>
    );
}