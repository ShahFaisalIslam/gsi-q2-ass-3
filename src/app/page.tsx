import Footer from "@/components/footer";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col bg-gray-900 w-full h-screen">
      <Header/>
      <div className="flex flex-col items-center my-auto">
        <h1 className="text-3xl text-center mb-48 mt-4">Welcome to my website!</h1>
        <Button className="py-8 text-4xl bg-gray-100 hover:bg-gray-50"><Link href="/jobs">Apply Here</Link></Button>
      </div>
      <Footer/>
    </div>
  );
}
