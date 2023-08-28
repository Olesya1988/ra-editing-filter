import ServiceAdd from "./components/ServiceAdd";
import ServiceList from "./components/ServiceList";
import "./App.css";
import ServiceFilter from "./components/ServiceFilter";

export default function App() {
  return (
    <>
      <div className="header">
        <ServiceAdd />
        <ServiceFilter />
      </div>
      <div className="container">
        <ServiceList />
      </div>
    </>
  );
}
