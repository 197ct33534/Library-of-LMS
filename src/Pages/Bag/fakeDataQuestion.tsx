const data = [
  {
    key: 0,
    question: ' Lý do hình thành nhà nước Cộng hòa Liên bang Đức là gì?',
    answers: [
      'A. Kết quả của cuộc đấu tranh vì độc lập, tự do của người dân Đức.',
      'B. Sự thoả thuận của Anh, Mĩ, Liên Xô tại Hội nghị I-an-ta.',
      'C. Âm mưu của các nước Anh, Pháp, Mĩ hòng chia cắtt lâu dài nước Đức; xây dựng một tiền đồn chống chủ nghĩa xã hội ở châu Âu.',
      'D. Hậu quả của những chính sách phản động mà Chủ nghĩa phát xít đã thi hành ờ đất nước này.',
    ],
    result: 3,
  },
];
for (let i = 1; i <= 39; i++) {
  data.push({
    key: i,
    question: ' Lý do hình thành nhà nước Cộng hòa Liên bang Đức là gì?',
    answers: [
      'A. Kết quả của cuộc đấu tranh vì độc lập, tự do của người dân Đức.',
      'B. Sự thoả thuận của Anh, Mĩ, Liên Xô tại Hội nghị I-an-ta.',
      'C. Âm mưu của các nước Anh, Pháp, Mĩ hòng chia cắtt lâu dài nước Đức; xây dựng một tiền đồn chống chủ nghĩa xã hội ở châu Âu.',
      'D. Hậu quả của những chính sách phản động mà Chủ nghĩa phát xít đã thi hành ờ đất nước này.',
    ],
    result: Math.floor(Math.random() * 4) + 1,
  });
}
export default data;
