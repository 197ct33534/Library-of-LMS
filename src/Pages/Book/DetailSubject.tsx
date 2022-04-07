import React from 'react';
import TitleHeader from '../../components/TitleHeader';
import { Collapse } from 'antd';
import tep from '../../Assets/images/tep.png';
import Button from '../../Common/Button';
import { Link } from 'react-router-dom';
import play from '../../Assets/images/play_Circle.png';
const { Panel } = Collapse;

const DetailSubject = () => {
  return (
    <>
      <TitleHeader
        titlePrimary="Thương mại điện tử"
        title={['Danh sách môn học']}
      />
      <div className="overview">
        <h2 className="overview-title">Tổng quan</h2>
        <div className="grid-col-4">
          <div className="overview-row">
            <strong>Mã môn học:</strong>
            <span>2020-6A1</span>
          </div>
          <div className="overview-row">
            <strong>Giảng viên:</strong>
            <span>Lớp học căn bản</span>
          </div>
          <div className="overview-row">
            <strong>Môn học:</strong>
            <span>Thương mại điện tử</span>
          </div>
          <div className="overview-row">
            <strong>Mô tả:</strong>
            <span>
              Thương mại điện tử, hay còn gọi là e-commerce, e-comm hay EC, là
              sự mua bán sản phẩm hay dịch vụ trên các hệ thống điện tử như
              Internet và các mạng máy tính.
            </span>
          </div>
        </div>
      </div>
      <h2 className="overview-title">Danh sách chủ đề</h2>
      <Collapse accordion>
        <Panel header="Giới thiệu chung về Thương mại Điện tử" key="1">
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
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
          </div>
          <Collapse defaultActiveKey="1">
            <Panel
              header="Thương mại điện tử đã thay đổi sự phát triển của nền kinh tế thế giới"
              key="1"
            >
              <div className="collapseChilren2">
                <span className="collapseChilren2-title">1. Quá trình:</span>

                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the
                  word in classical literature, discovered the undoubtable
                  source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
                  "de Finibus Bonorum et Malorum" (The Extremes of Good and
                  Evil) by Cicero, written in 45 BC. This book is a treatise on
                  the theory of ethics, very popular during the Renaissance. The
                  first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                  comes from a line in section 1.10.32. The standard chunk of
                  Lorem Ipsum used since the 1500s is reproduced below for those
                  interested. Sections 1.10.32 and 1.10.33 from "de Finibus
                  Bonorum et Malorum" by Cicero are also reproduced in their
                  exact original form, accompanied by English versions from the
                  1914 translation by H. Rackham. It is a long established fact
                  that a reader will be distracted by the readable content of a
                  page when looking at its layout. The point of using Lorem
                  Ipsum is that it has a more-or-less normal distribution of
                  letters, as opposed to using 'Content here, content here',
                  making it look like readable English. Many desktop publishing
                  packages and web page editors now use Lorem Ipsum as their
                  default model text, and a search for 'lorem ipsum' will
                  uncover many web sites still in their infancy. Various
                  versions have evolved over the years, sometimes by accident,
                  sometimes on purpose (injected humour and the like). There are
                  many variations of passages of Lorem Ipsum available, but the
                  majority have suffered alteration in some form, by injected
                  humour, or randomised words which don't look even slightly
                  believable. If you are going to use a passage of Lorem Ipsum,
                  you need to be sure there isn't anything embarrassing hidden
                  in the middle of text. All the Lorem Ipsum generators on the
                  Internet tend to repeat predefined chunks as necessary, making
                  this the first true generator on the Internet. It uses a
                  dictionary of over 200 Latin words, combined with a handful of
                  model sentence structures, to generate Lorem Ipsum which looks
                  reasonable. The generated Lorem Ipsum is therefore always free
                  from repetition, injected humour, or non-characteristic words
                  etc.
                </p>
              </div>
            </Panel>
          </Collapse>
        </Panel>
        <Panel header="Thương mại điện tử" key="2">
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
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
          </div>
        </Panel>
        <Panel header="Thương mại điện tử" key="3">
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
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
          </div>
        </Panel>
      </Collapse>
    </>
  );
};

export default DetailSubject;
