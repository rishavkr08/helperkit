import Header from "./header";
import Footer from "./footer";
import { tools } from "./tools";

const Dashboard = () => {
  return (
    <div className="flex flex-col items-start h-screen w-full bg-white">
      <Header />
      <div className="h-full w-full overflow-auto">
        <div className="grid grid-cols-3 grid-flow-row gap-24 p-12">
          {tools.map((tool) => (
            <div
              className="w-1/1 h-64 rounded-lg text-xl cursor-pointer card"
              key={tool.id}
            >
              <div className="h-full w-full flex items-center justify-center first-content">
                <span>{tool.label}</span>
              </div>
              <div className="opacity-0 flex items-center justify-center second-content">
                {tool.description}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
