import { Collapse } from 'antd';
import React from 'react';
import Button from '../../../Common/Button';

import tep from '../../../Assets/images/tep.png';

import play from '../../../Assets/images/play_Circle.png';
import { Link } from 'react-router-dom';
const CollapseChilren = () => {
  return (
    <>
      <div className="collapseChilren">
        <Link to="/book/course">
          <img
            src="https://img.youtube.com/vi/jS4aFq5-91M/mqdefault.jpg"
            alt=""
          />
          <img src={play} alt="" />
        </Link>
        <h2 className="overview-title" style={{ textAlign: 'left' }}>
          Tài nguyên
        </h2>
        <div className="collapseChilren-file">
          <div className="collapseChilren-file_item">
            <div>
              <img src={tep} alt="" />
              <p>HTKL_KT45P_10A1.doc</p>
            </div>
            <Button
              type="button"
              buttonStyle="btn--lightPrimary--solid"
              buttonSize="btn--small"
            >
              <i className="bx bx-download"></i>
              <span>Tải xuống</span>
            </Button>
          </div>
          <div className="collapseChilren-file_item">
            <div>
              <img src={tep} alt="" />
              <p>HTKL_KT45P_10A1.doc</p>
            </div>
            <Button
              type="button"
              buttonStyle="btn--lightPrimary--solid"
              buttonSize="btn--small"
            >
              <i className="bx bx-download"></i>
              <span>Tải xuống</span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
const ListSubject = () => {
  const { Panel } = Collapse;
  return (
    <>
      <Collapse accordion>
        <Panel header="Giới thiệu chung về Thương mại Điện tử" key="1">
          <Collapse
            className="NoColor"
            defaultActiveKey="1"
            expandIcon={({ isActive }) => {
              return isActive ? (
                <i className="bx bx-minus accordionPlus"></i>
              ) : (
                <i className="bx bx-plus accordionPlus"></i>
              );
            }}
          >
            <Panel
              header="Giới thiệu về thương mại điện tử trong những năm gần đây"
              key="1"
            >
              <CollapseChilren />
            </Panel>
            <Panel
              header="Thương mại điện tử đã thay đổi sự phát triển của nền kinh tế thế giới"
              key="2"
            >
              <CollapseChilren />
            </Panel>
          </Collapse>
        </Panel>
        <Panel header="Thương mại điện tử" key="2">
          <Collapse
            className="NoColor"
            defaultActiveKey="1"
            expandIcon={({ isActive }) => {
              return isActive ? (
                <i className="bx bx-minus accordionPlus"></i>
              ) : (
                <i className="bx bx-plus accordionPlus"></i>
              );
            }}
          >
            <Panel
              header="Giới thiệu về thương mại điện tử trong những năm gần đây"
              key="1"
            >
              <CollapseChilren />
            </Panel>
            <Panel
              header="Thương mại điện tử đã thay đổi sự phát triển của nền kinh tế thế giới"
              key="2"
            >
              <CollapseChilren />
            </Panel>
          </Collapse>
        </Panel>
        <Panel header="Thương mại điện tử" key="3">
          <Collapse
            className="NoColor"
            defaultActiveKey="1"
            expandIcon={({ isActive }) => {
              return isActive ? (
                <i className="bx bx-minus accordionPlus"></i>
              ) : (
                <i className="bx bx-plus accordionPlus"></i>
              );
            }}
          >
            <Panel
              header="Giới thiệu về thương mại điện tử trong những năm gần đây"
              key="1"
            >
              <CollapseChilren />
            </Panel>
            <Panel
              header="Thương mại điện tử đã thay đổi sự phát triển của nền kinh tế thế giới"
              key="2"
            >
              <CollapseChilren />
            </Panel>
          </Collapse>
        </Panel>
      </Collapse>
    </>
  );
};

export default ListSubject;
