import { Checkbox, Input, Radio, Select, Tabs } from 'antd';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../../Common/Button';
import TitleHeader from '../../../components/TitleHeader';
import Editor from '../../../Pages/Bell/Editor';
import { addQuestionInExam, setInfoExam } from '../teacherSlice';
const Question = ({ num, multipleChoice }) => {
  const [question, setQuestion] = useState('');
  const [editorLoaded, setEditorLoaded] = useState(false);
  useEffect(() => {
    setEditorLoaded(true);
  }, []);
  const dispath = useDispatch();
  const formik1 = useFormik({
    initialValues: {
      typeAnswer: 'Một đáp án',
      radioResult: '',
      checkboxResult: [],
      answerA: '',
      answerB: '',
      answerC: '',
      answerD: '',
      typeQuestion: multipleChoice ? 'Trắc Nghiệm' : 'Tự Luận',
      checkboxQuestion: false,
      mb: '',
    },
  });
  const handleRemoveField = (e, key) => {
    const parent = e.target.parentNode;
    parent.style.display = 'none';
    formik1.setFieldValue(key, 'hidden');
  };
  const handleSubmit = () => {
    if (formik1.values.typeAnswer !== 'Một đáp án') {
      formik1.values.radioResult = '';
    }
    const data = {
      ...formik1.values,
      numQues: num,
      question: question,
    };

    dispath(addQuestionInExam(data));
    alert('Lưu câu hỏi thành công');
  };
  return (
    <div className="CreateExam-body_question">
      <div className="CreateExam-body_questionItem">
        <div className="grid-col-8">
          <label htmlFor="">Câu {num}</label>
          <div className="CreateExam-body_question-Input">
            <Editor
              name="content"
              onChange={(content) => setQuestion(content)}
              editorLoaded={editorLoaded}
            />
          </div>
        </div>
      </div>
      {multipleChoice ? (
        <>
          <div className="CreateExam-body_questionItem">
            <div className="grid-col-8">
              <label htmlFor="">Câu trả lời</label>
              <div className="CreateExam-body_question-Input">
                <Radio.Group
                  options={['Một đáp án', 'Nhiều đáp án']}
                  onChange={(e) => {
                    formik1.setFieldValue('typeAnswer', e.target.value);
                  }}
                  value={formik1.values.typeAnswer}
                />
              </div>
            </div>
          </div>
          <div className="CreateExam-body_questionItem">
            <div className="grid-col-8">
              <label htmlFor="">Đáp án A:</label>
              <div className="CreateExam-body_question-Input">
                <Input
                  name="answerA"
                  value={formik1.values.answerA}
                  onChange={formik1.handleChange}
                />
              </div>

              <i
                className="bx bx-x"
                onClick={(e) => {
                  handleRemoveField(e, 'answerA');
                }}
              ></i>
            </div>
          </div>
          <div className="CreateExam-body_questionItem">
            <div className="grid-col-8">
              <label htmlFor="">Đáp án B:</label>
              <div className="CreateExam-body_question-Input">
                <Input
                  name="answerB"
                  value={formik1.values.answerB}
                  onChange={formik1.handleChange}
                />
              </div>

              <i
                className="bx bx-x"
                onClick={(e) => {
                  handleRemoveField(e, 'answerB');
                }}
              ></i>
            </div>
          </div>
          <div className="CreateExam-body_questionItem">
            <div className="grid-col-8">
              <label htmlFor="">Đáp án C:</label>
              <div className="CreateExam-body_question-Input">
                <Input
                  name="answerC"
                  value={formik1.values.answerC}
                  onChange={formik1.handleChange}
                />
              </div>

              <i
                className="bx bx-x"
                onClick={(e) => {
                  handleRemoveField(e, 'answerC');
                }}
              ></i>
            </div>
          </div>
          <div className="CreateExam-body_questionItem">
            <div className="grid-col-8">
              <label htmlFor="">Đáp án D:</label>
              <div className="CreateExam-body_question-Input">
                <Input
                  name="answerD"
                  value={formik1.values.answerD}
                  onChange={formik1.handleChange}
                />
              </div>

              <i
                className="bx bx-x"
                onClick={(e) => {
                  handleRemoveField(e, 'answerD');
                }}
              ></i>
            </div>
          </div>
          <div className="CreateExam-body_questionItem">
            <div className="grid-col-8">
              <label htmlFor="">Đáp án đúng</label>
              <div className="CreateExam-body_question-Input">
                {formik1.values.typeAnswer === 'Một đáp án' ? (
                  <Radio.Group
                    options={['Đáp án A', 'Đáp án B', 'Đáp án C', 'Đáp án D']}
                    onChange={(e) => {
                      formik1.setFieldValue('radioResult', e.target.value);
                    }}
                    value={formik1.values.radioResult}
                  />
                ) : (
                  <Checkbox.Group
                    options={['Đáp án A', 'Đáp án B', 'Đáp án C', 'Đáp án D']}
                    defaultValue={formik1.values.checkboxResult}
                    onChange={(checkedValues) => {
                      formik1.setFieldValue('checkboxResult', [
                        ...checkedValues,
                      ]);
                    }}
                  />
                )}
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="CreateExam-body_questionItem">
            <div className="grid-col-8">
              <label htmlFor="">Câu trả lời</label>
            </div>
          </div>
          <div className="CreateExam-body_questionItem">
            <div className="grid-col-8">
              <label htmlFor="">Đáp án đúng</label>
              <div className="CreateExam-body_question-Input">
                <Radio.Group
                  options={[
                    'Tải tệp lên',
                    'Điền đáp án trực tiếp vào câu trả lời',
                  ]}
                  onChange={(e) => {
                    formik1.setFieldValue('radioResult', e.target.value);
                  }}
                  value={formik1.values.radioResult}
                />
              </div>
            </div>
          </div>
          <div className="CreateExam-body_questionItem">
            <div className="grid-col-8">
              <label htmlFor="">
                <Checkbox
                  onChange={(e) => {
                    formik1.setFieldValue('checkboxResult', e.target.value);
                  }}
                  value={formik1.values.checkboxResult}
                  name="checkboxResult"
                />
                Giới hạn từ
              </label>
              <div className="CreateExam-body_question-Inputmini">
                <Input
                  value={formik1.values.mb}
                  name="mb"
                  onChange={formik1.handleChange}
                />
                <span>từ</span>
              </div>
            </div>
          </div>
        </>
      )}

      <div className="CreateExam-btn">
        <Button
          buttonSize="btn--small"
          buttonStyle="btn--gray--solid"
          type="reset"
          onClick={formik1.handleReset}
        >
          Làm mới
        </Button>
        <Button
          buttonSize="btn--small"
          buttonStyle="btn--primary--solid"
          onClick={() => handleSubmit()}
        >
          Lưu câu hỏi
        </Button>
      </div>
    </div>
  );
};
const CreateExam = () => {
  const { Option } = Select;
  const { TabPane } = Tabs;
  const dispath = useDispatch();
  const formik = useFormik({
    initialValues: {
      nameExam: '',
      house: '1',
      minute: '30',
      typeExam: 'Tự Luận',
      groupSubjectName: 'Công nghệ thông tin',
      subjectName: 'Kinh tế căng bản',
    },
  });
  const handleSubmit = () => {
    dispath(setInfoExam(formik.values));
  };
  const [panes, setPanes] = useState([
    {
      title: 'Câu 1',
      content: (
        <Question
          num={1}
          multipleChoice={
            formik.values.typeExam === 'Trắc nghiệm' ? true : false
          }
        />
      ),
      key: '1',
    },
  ]);
  const add = () => {
    const newPanes = [...panes];
    const length = panes.length + 1;
    newPanes.push({
      title: `Câu ${length}`,
      content: (
        <Question
          num={length}
          multipleChoice={
            formik.values.typeExam === 'Trắc nghiệm' ? true : false
          }
        />
      ),
      key: length + '',
    });
    setPanes(newPanes);
  };

  return (
    <>
      <TitleHeader titlePrimary="Tạo đề thi mới" title={['Ngân hàng đề thi']} />
      <div className="CreateExam">
        <div className="book">
          <h1>Phần thông tin:</h1>
          <div className="grid-col-2">
            <div className="CreateExam-infoExam">
              <div className="grid-col-6">
                <label htmlFor="">Tên:</label>
                <div className="CreateExam-infoExam_input">
                  <Input
                    name="nameExam"
                    value={formik.values.nameExam}
                    onChange={formik.handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="CreateExam-infoExam">
              <div className="grid-col-6">
                <label htmlFor="">Thời lượng:</label>
                <div className="CreateExam-infoExam_input">
                  <div className="CreateExam-infoExam_input__Select">
                    <Select
                      defaultValue={formik.values.house}
                      style={{ width: '120px' }}
                      onChange={(value) => {
                        formik.setFieldValue('house', value);
                      }}
                    >
                      <Option value="1">1</Option>
                      <Option value="2">2</Option>

                      <Option value="3">3</Option>
                    </Select>
                    <span>Giờ</span>
                  </div>
                  <div className="CreateExam-infoExam_input__Select">
                    <Select
                      style={{ width: '120px' }}
                      defaultValue={formik.values.minute}
                      onChange={(value) => {
                        formik.setFieldValue('minute', value);
                      }}
                    >
                      <Option value="15">15</Option>
                      <Option value="30">30</Option>
                      <Option value="45">45</Option>
                    </Select>
                    <span>Phút</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="CreateExam-infoExam all">
              <div className="grid-col-6">
                <label htmlFor="">Hình thức:</label>
                <div className="CreateExam-infoExam_input ">
                  <Radio.Group
                    options={['Trắc nghiệm', 'Tự Luận']}
                    onChange={(e) => {
                      formik.setFieldValue('typeExam', e.target.value);
                    }}
                    value={formik.values.typeExam}
                  />
                </div>
              </div>
            </div>
            <div className="CreateExam-infoExam">
              <div className="grid-col-6">
                <label htmlFor="">Tổ bộ môn:</label>
                <div className="CreateExam-infoExam_input">
                  <Select
                    defaultValue={formik.values.groupSubjectName}
                    onChange={(value) => {
                      formik.setFieldValue('groupSubjectName', value);
                    }}
                  >
                    {[
                      'Quan hệ quốc tế',
                      'Kinh tế đối ngoại',
                      'Công nghệ thông tin',
                    ].map((item) => (
                      <Option value={item} key={item}>
                        {item}
                      </Option>
                    ))}
                  </Select>
                </div>
              </div>
            </div>
            <div className="CreateExam-infoExam">
              <div className="grid-col-6">
                <label htmlFor="">Tổ bộ môn:</label>
                <div className="CreateExam-infoExam_input">
                  <Select
                    defaultValue={formik.values.subjectName}
                    onChange={(value) => {
                      formik.setFieldValue('subjectName', value);
                    }}
                  >
                    {[
                      'Chủ nghĩa Mác- Lênin',
                      'Kinh tế căng bản',
                      'Hóa học nâng cao',
                    ].map((item) => (
                      <Option value={item} key={item}>
                        {item}
                      </Option>
                    ))}
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="CreateExam-body">
          <div className="CreateExam-body_numberquestion">
            <Tabs
              defaultActiveKey="0"
              tabPosition="left"
              // style={{ height: 385 }}
            >
              {/* {[...Array.from({ length: 40 }, (v, i) => i)].map((i) => (
                <TabPane tab={`Câu${i + 1}`} key={i}>
                  <Question num={i + 1} />
                </TabPane>
              ))} */}
              {panes.map((pane) => (
                <TabPane tab={pane.title} key={pane.key}>
                  {pane.content}
                </TabPane>
              ))}
            </Tabs>
            <Button
              buttonSize="btn--small"
              buttonStyle="btn--primary--outline"
              onClick={() => add()}
            >
              Thêm câu hỏi
            </Button>
          </div>
        </div>
        <div className="CreateExam-btn">
          <Button buttonSize="btn--medium" buttonStyle="btn--gray--solid">
            Huỷ
          </Button>
          <Button
            buttonSize="btn--medium"
            buttonStyle="btn--primary--solid"
            onClick={() => handleSubmit()}
          >
            Lưu và gửi phê duyệt
          </Button>
        </div>
      </div>
    </>
  );
};

export default CreateExam;
