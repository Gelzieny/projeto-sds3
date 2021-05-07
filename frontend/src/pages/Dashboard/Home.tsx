import Navbar from "../../components/Navbar";
import BarChart from "../../components/BarChart";
import DonutChart from "../../components/DonutChart";
import DataTable from "../../components/DataTable";
import Footer from "../../components/Footer";

const Dashboard = () => {
    return (
        <>
            <Navbar/>
            <div className="container">
                <h1 className="text-primary">Dashboard de Vendas</h1>
                <div className="row px-3">
                    <div className="col-sm-6">
                        <h5 className="text-center text-secondary">Taxa de sucesso (%)</h5>
                        <BarChart/>
                    </div>
                    <div className="col-sm-6">
                        <h5 className="text-center text-secondary">Participação nas Vendas</h5>
                        <DonutChart/>
                    </div>
                </div>
                <DataTable/>
            </div>
            <Footer/>
        </>
    );
};

export default Dashboard;
