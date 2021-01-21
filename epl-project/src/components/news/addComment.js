import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import userImg from "./images/user1.jpg";
import "./addComment.css";

const useStyles = makeStyles((theme) => ({
  //   root: {
  //     '& > *': {
  //       margin: theme.spacing(1),
  //       width: '25ch',
  //     },
  //   },
}));

export default function Comment() {
  const [checked, setChecked] = React.useState(true);
  const [comment, setComment] = React.useState("");
  const [totalComment, setTotalComment] = React.useState([]);
  const classes = useStyles();

  const handleOnChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const commnetItem = comment;
    const commentResult = [...totalComment, commnetItem];
    setTotalComment(commentResult);
    console.log(commentResult);
  };
  return (
    <>
      <h2>Bình luận</h2>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          rows={6}
          multiline={true}
          placeholder="Nội dung *"
          id="standard-basic"
          label="Nội dung"
          inputProps={{ disableUnderline: true }}
          variant="filled"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "5px",
            padding: "12px 10px",
          }}
          onChange={handleOnChange}
        />
        <br />
        <div style={{ width: "100%" }}>
          <Checkbox inputProps={{ "aria-label": "uncontrolled-checkbox" }} />
          Tôi đồng ý với bình luận của mình
        </div>
        <br />
        <div style={{ width: "100%" }}>
          <Button
            variant="contained"
            color="primary"
            style={{
              borderRadius: "10px",
              padding: "10px 12px",
              marginTop: "10px",
              textTransform: "none",
              background: "#3D195B",
              width: "150px",
            }}
            type="submit"
          >
            Đăng bình luận
          </Button>
        </div>
      </form>
      {totalComment.map((item, index) => {
        return (
          <div className="comment-wrapper" key={index}>
            <div className="comment-user">
              <div className="comment-item">
                <img
                  src={userImg}
                  style={{ borderRadius: "50%", height: "48px", width: "48px" }}
                />
                <div className="comment-info">
                  <p className="comment-info-name">Hung Trinh</p>
                  <p className="comment-info-time">1 giờ trước.</p>
                </div>
              </div>
            </div>
            <div className="comment-detail">
              <p>{item}</p>
            </div>
            <div className="comment-interact">
              <a class="like" href="#">
                Thích
              </a>
              <span aria-hidden="true"> · </span>
              <a class="replay" href="#">
                Trả lời
              </a>
              <span aria-hidden="true"> · </span>
              <i class="fa fa-thumbs-o-up"></i> <span class="count">1</span>
              <span aria-hidden="true"> · </span>
              <span>26m</span>
            </div>
          </div>
        );
      })}
    </>
  );
}
