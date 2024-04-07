import Footer from "./footer";
import Header from "./header";

const Dashboard = () => {
  return(
    <div className="flex flex-col items-start	 h-screen w-full bg-red-100">
      <Header />
        <div className="h-full w-full bg-gradient-to-r from-white to-sky-200">

        </div>
      <Footer />
    </div>
  )
}

export default Dashboard;