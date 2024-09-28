import Footer from "@/components/footer";
import Header from "@/components/header";
import Jobs from "@/components/jobs";

export default function JobsPage() {
    return(
        <div className="flex flex-col bg-gray-900 h-screen">
            <Header/>
            <Jobs/>
            <Footer/>
        </div>
    );
}