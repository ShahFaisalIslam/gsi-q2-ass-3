import Header from "@/components/header";
import Footer from "@/components/footer";

export default function PrivacyPolicyPage() {
    return(
        <div className="flex flex-col bg-gray-900 w-full h-screen">
            <Header/>
            <div className="flex flex-col justify-center max-w-md mx-auto mb-auto">
                <h1 className="text-3xl mb-48">Privacy Policy</h1>
                <i>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente quos laboriosam recusandae dolore eveniet. Fuga corrupti qui ipsam vitae cupiditate voluptatum voluptas natus explicabo illo alias, quos, adipisci atque facere?</i>
            </div>
            <Footer/>
        </div>
    );
}