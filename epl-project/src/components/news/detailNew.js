import React from "react";
import DefaultLayout from "../layout/index";
import { makeStyles } from "@material-ui/core/styles";
import bgFooter from "../calendar/images/Footer.png";
import Grid from "@material-ui/core/Grid";
import newImg from "./images/news.png";
import newImg2 from "./images/news2.png";
import AttractiveNew from "./attractiveNews";
import Comment from "./comment";
import AddComment from "./addComment";
import "./detailNews.css";

const useStyles = makeStyles(() => ({
  body: {
    width: "100%",
    paddingBottom: "5%",
  },
  top: {
    backgroundImage: "url(" + bgFooter + ")",
    color: "white",
    bottom: "0",
    width: "100%",
    height: "10rem",
    padding: " 0 50px",
  },
  paper: {
    height: "100%",
  },
  email: {
    color: "rgb(61, 25, 91)",
    fontWeight: "bold",
  },
  content: {
    margin: "0% 10%",
    marginBottom: "5%",
  },
  divider: {
    margin: "2% 0%",
    background: "#C4C4C4",
    height: "2px",
  },
}));

export default function DetailNew() {
  const classes = useStyles();
  return (
    <DefaultLayout>
      <Grid
        container
        alignItems="center"
        justify="center"
        className={classes.body}
      >
        <Grid
          item
          xs={12}
          className={classes.top}
          container
          alignItems="center"
        >
          <div style={{ fontSize: "40px", marginRight: "16px" }}>
            Thua đau Leicester, HLV Lampard chỉ trích cầu thủ Chelsea
          </div>
          <p>
            <small>20/05/2021</small>
          </p>
        </Grid>
      </Grid>
      <div style={{ margin: "0 5%" }}>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <div className="news-detail">
              <h1 style={{ color: "#37003", fontSize: "48px" }}>
                Thua đau Leicester, HLV Lampard chỉ trích cầu thủ Chelsea
              </h1>

              <span style={{ color: "#666", marginBottom: "32px" }}>
                Thứ Tư 20/01/2021 11:16(GMT+7)
              </span>
              <p
                className="content-first"
                style={{
                  fontWeight: "bold",
                  fontSize: "24px",
                  marginBottom: "24px",
                }}
              >
                HLV Lampard đã không ngần ngại phê bình các học trò sau thất bại
                0-2 trước Leicester tại vòng 19 Premier League 2020/21.
              </p>
              <p style={{ fontWeight: "bold", fontSize: "18px" }}>
                Chelsea thua muối mặt Leicester{" "}
              </p>
              <p className="news-item">
                Chelsea thất bại 0-2 trước Leicester tại vòng 19 Premier League
                2020/21. The Blues như thường lệ thể hiện bộ mặt bạc nhược mỗi
                khi đối đầu các đội bóng trong top 6.
              </p>
              <p className="news-item">
                Sau trận đấu, Lampard cho rằng các học trò đã không chơi đúng
                sức mình. Chiến lược gia người Anh không giấu nổi sự thất vọn
              </p>
              <p className="news-item">
                <i>
                  "Nhiều cầu thủ không chơi đúng như khả năng họ vốn có. Tôi
                  cũng từng là một cầu thủ. Bản thân họ cần biết cách đối mặt
                  với những áp lực, những chỉ trích đang hướng về mình.
                </i>
              </p>
              <p className="news-item">
                <i>
                  Nhìn chung, màn trình diễn của chúng tôi chậm chạp, ì ạch,
                  thiếu khát khao và điều đó có thể đi kèm với sự thiếu tự tin.
                  Chúng tôi đã bị đánh bại bởi một đội tốt hơn."
                </i>
              </p>
              <img src={newImg} style={{ width: "100%" }} />
              <p className="news-item">
                Đây đã là thất bại thứ năm của Chelsea trong 9 trận gần nhất.
                Thành tích tồi tệ khiến chiếc ghế của Lampard lung lay dữ dội.
                Khi được hỏi về nguy cơ bị sa thải, nhà cầm quân 42 tuổi thắng
                thắn bày tỏ:
              </p>
              <p className="news-item">
                <i>
                  "Khả năng tôi bị sa thải ư? Đó là việc nằm ngoài tầm kiểm soát
                  của tôi. Điều đó tôi không trả lời được. Tôi sẽ tiếp tục tập
                  trung vào công việc của mình. Tôi tôn trọng mọi quyết định từ
                  BLĐ."
                </i>
              </p>
              <p className="news-item">
                Bàn thắng của Leicester đến từ một tình huống đá phạt góc.
                Wilfried Ndidi đã tìm ra được khoảng trống và giúp đội chủ sân
                King Power có bàn vươn lên dẫn trước. James Maddison là cầu thủ
                ghi bàn thứ 2 cho Leicester ngay trong hiệp một, nâng thành tích
                ghi bàn của anh ở mùa giải này lên con số 7.
              </p>
              <p className="news-item">
                Sau trận đấu, Maddison thừa nhận tình huống đá phạt góc mở tỉ số
                đã được Leicester tập luyện thuần thục để hướng đến bàn thắng
                trước Chelsea.
              </p>
              <img src={newImg2} style={{ width: "100%" }} />
              <p className="news-item">
                Sau trận đấu, Maddison thừa nhận tình huống đá phạt góc mở tỉ số
                đã được Leicester tập luyện thuần thục để hướng đến bàn thắng
                trước Chelsea.
              </p>
              <p className="news-item">
                Bàn thắng của Leicester đến từ một tình huống đá phạt góc.
                Wilfried Ndidi đã tìm ra được khoảng trống và giúp đội chủ sân
                King Power có bàn vươn lên dẫn trước. James Maddison là cầu thủ
                ghi bàn thứ 2 cho Leicester ngay trong hiệp một, nâng thành tích
                ghi bàn của anh ở mùa giải này lên con số 7.
              </p>
              <p className="news-item">
                <i>
                  "Khả năng tôi bị sa thải ư? Đó là việc nằm ngoài tầm kiểm soát
                  của tôi. Điều đó tôi không trả lời được. Tôi sẽ tiếp tục tập
                  trung vào công việc của mình. Tôi tôn trọng mọi quyết định từ
                  BLĐ."
                </i>
              </p>
            </div>
            <div className="news-footer">
              <div style={{display:"flex",justifyContent:"flex-end",alignItems:"center"}}>
                <i
                  class="fa fa-user-circle"
                  style={{marginRight:"16px"}}
                  style={{ fontSize: "18px" }}
                  aria-hidden="true"
                ></i>
                <span>Hùng Trịnh</span>
              </div>
            </div>
          </Grid>
          <Grid item xs={4}>
            <AttractiveNew />
            <Comment />
          </Grid>
          <Grid item xs={12}>
            <AddComment />
          </Grid>
        </Grid>
      </div>
    </DefaultLayout>
  );
}
