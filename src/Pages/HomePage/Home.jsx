import React from 'react';
import Chart from '../../Components/Chart/Chart';
import Featured from '../../Components/Featured/Featured';
import Navbar from '../../Components/NavBar/Navbar';
import Sidebar from '../../Components/SideBar/Sidebar';
import List from '../../Components/Table/Table';
import Widget from '../../Components/Widget/Widget';
import "../HomePage/Home.scss"

const Home = () => {
    return (
        <div className='home'>
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <div className="widgets">
                    <Widget type="user" />
                    <Widget type="order" />
                    <Widget type="earning" />
                    <Widget type="balance" />
                </div>
                <div className="charts">
                    <Featured />
                    <Chart />
                </div>
                <div className="listContainer">
                    <div className="listTitle">Latest Transactions</div>
                    <List />
                </div>
            </div>
        </div>
    );
};

export default Home;