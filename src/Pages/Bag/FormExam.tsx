import { Form, Steps, Radio } from 'antd';
import React, { useState } from 'react';
import Button from '../../Common/Button';
import dataQuestions from './fakeDataQuestion';
const { Step } = Steps;
const FormExam = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };
  const [current, setCurrent] = useState(1);

  return (
    <>
      <div className="FormExam">
        <Form onFinish={onFinish}>
          <div className="FormExam-left">
            <h3>Phần câu hỏi- đáp án:</h3>
            <Steps
              current={current}
              onChange={(current) => {
                setCurrent(current);
                console.log('curent', current);
              }}
              direction="vertical"
            >
              {dataQuestions.map((item) => {
                return (
                  <Step
                    description={`Câu ${item.key + 1}.`}
                    key={`question ${item.key}`}
                  />
                );
              })}
            </Steps>
          </div>
          <div className="FormExam-right">
            <div className="FormExam-right_Form">
              {dataQuestions.map((item, idx) => {
                return (
                  //   <Step
                  //     description={`Câu ${item.key}.`}
                  //     key={`question ${item.key}`}
                  //   />
                  <div
                    className="FormExam-right_Form--item"
                    key={`cau ${item.key}`}
                    style={current !== idx ? { display: 'none' } : {}}
                  >
                    <h2>
                      {`Câu ${item.key + 1}: `}
                      {item.question}
                    </h2>
                    <Form.Item name={`cau${item.key}`}>
                      <Radio.Group>
                        {item.answers.map((answer, index) => (
                          <Radio value={index + 1}>{answer}</Radio>
                        ))}
                      </Radio.Group>
                    </Form.Item>
                  </div>
                );
              })}
            </div>
            <div className="FormExam-right-btn">
              <Button
                buttonStyle="btn--primary--solid"
                buttonSize="btn--medium"
                onClick={() => setCurrent(current - 1)}
              >
                Quay lại
              </Button>
              <Button
                buttonStyle="btn--primary--solid"
                buttonSize="btn--medium"
                onClick={() => setCurrent(current + 1)}
              >
                {current + 1 === dataQuestions.length ? 'Nộp bài' : 'Tiếp theo'}
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </>
  );
};

export default FormExam;
