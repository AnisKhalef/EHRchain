import React, { Fragment } from "react";
import { FaHome, FaFileAlt } from "react-icons/fa";

import { Breadcrumb, Card } from "react-bootstrap";

import "./Dashboard.scss";

const Dashboard = () => {
  return (
    <Fragment>
      <div id="content-dashboard">
        <div className="container-fluid">
          <section className="block-header">
            <div className="row">
              <div className="col-xs-12 col-lg-12 col-md-12 col-sm-12">
                <Breadcrumb className="breadcrumb-style">
                  <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                  <Breadcrumb.Item>
                    <FaHome></FaHome>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>Home</Breadcrumb.Item>
                  <Breadcrumb.Item active href="/">
                    Dashboard
                  </Breadcrumb.Item>
                </Breadcrumb>
              </div>
            </div>
          </section>
          <section className="section--daily-statistics">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-3">
                <Card className="card-style">
                  <div className="card--content box-shadow">
                    <div className="statistics-card clearfix">
                      <div className="card-icon shadow-primary bg-purple float-left">
                        <FaFileAlt></FaFileAlt>
                      </div>
                      <div className="card-content float-right">
                        <h6>Patients</h6>
                        <h4 className="float-right">650</h4>
                      </div>
                    </div>
                    <div className="card-chart">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 320"
                      >
                        <path
                          fill="rgba(103, 119, 239,.8)"
                          fillOpacity="1"
                          d="M0,96L288,32L576,192L864,96L1152,128L1440,64L1440,320L1152,320L864,320L576,320L288,320L0,320Z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </Card>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-3">
                <Card className="card-style">
                  <div className="card--content box-shadow">
                    <div className="statistics-card clearfix">
                      <div className="card-icon bg-shadowGreen float-left">
                        <FaFileAlt></FaFileAlt>
                      </div>
                      <div className="card-content float-right">
                        <h6>CaseSolve</h6>
                        <h4 className="float-right">450</h4>
                      </div>
                    </div>
                    <div className="card-chart">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 320"
                      >
                        <path
                          fill="rgba(0, 203, 169,.8)"
                          fillOpacity="1"
                          d="M0,96L288,32L576,192L864,96L1152,128L1440,64L1440,320L1152,320L864,320L576,320L288,320L0,320Z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </Card>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-3">
                <Card className="card-style">
                  <div className="card--content box-shadow">
                    <div className="statistics-card clearfix">
                      <div className="card-icon bg-orange float-left">
                        <FaFileAlt></FaFileAlt>
                      </div>
                      <div className="card-content float-right">
                        <h6>Release</h6>
                        <h4 className="float-right">350</h4>
                      </div>
                    </div>
                    <div className="card-chart">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 320"
                      >
                        <path
                          fill="rgba(253, 126, 20,.8)"
                          fillOpacity="1"
                          d="M0,96L288,32L576,192L864,96L1152,128L1440,64L1440,320L1152,320L864,320L576,320L288,320L0,320Z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </Card>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-3">
                <Card className="card-style">
                  <div className="card--content box-shadow">
                    <div className="statistics-card clearfix">
                      <div className="card-icon bg-blue float-left">
                        <FaFileAlt></FaFileAlt>
                      </div>
                      <div className="card-content float-right">
                        <h6>New Patients</h6>
                        <h4 className="float-right">150</h4>
                      </div>
                    </div>
                    <div className="card-chart">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 320"
                      >
                        <path
                          fill="rgba(0, 11, 118,.8)"
                          fillOpacity="1"
                          d="M0,96L288,32L576,192L864,96L1152,128L1440,64L1440,320L1152,320L864,320L576,320L288,320L0,320Z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;
