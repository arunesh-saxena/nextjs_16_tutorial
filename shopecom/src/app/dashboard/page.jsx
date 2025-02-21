import LineChart from '../_components/lineChart.jsx';



const BarChart = () => {
    return (<h1>Bar Chart</h1>);
};


const DashboardPage = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <p>Welcome to the dashboard!</p>
            <BarChart/>
            <LineChart/>
        </div>
    );
};

export default DashboardPage;