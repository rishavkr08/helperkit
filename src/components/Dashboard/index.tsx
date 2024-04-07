import Footer from "./footer";
import Header from "./header";

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Dashboard = () => {
  return (
    <div className="flex flex-col items-start h-screen w-full bg-gray-200">
      <Header />
      <div className="h-full w-full overflow-auto py-6 mb-6 bg-gray-200">
        <div className="grid grid-cols-2 grid-flow-row gap-12 px-12 bg-gray-200">
          {array.map((a, index) => (
            <div
              className="relative w-full h-auto bg-slate-50 p-4 rounded-md transition duration-500 ease-out border-2 border-blue-200 card"
              key={index}
            >
              <div className="flex flex-col">
                <p className="text-xl">Card title - {a}</p>
                <p className="">Here are the details of the card</p>
              </div>
              <button className="absolute w-36 rounded-lg bg-blue-500 text-white py-2 left-1/2 bottom-0 transition duration-300 ease-out opacity-0 card-button">
                More info
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
