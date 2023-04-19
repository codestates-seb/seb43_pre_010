import { Link } from "react-router-dom";
import styled from "styled-components";

const SearchModal = () => {
  return (
    <>
    <SearchHintArrow />
    <SearchHintModal>
      <div className="search-hint-text">
        <div className="flex-item">
          <div className="margin-bot">
            <span>[tag]</span>
            <span>search within a tag</span>
          </div>
          <div className="margin-bot">
            <span>user:1234</span>
            <span>search by author</span>
          </div>
          <div className="margin-bot">
            <span>&quot;words here&quot;</span>
            <span>exact phrase</span>
          </div>
          <div className="margin-bot">
            <span>collective:&quot;Name&quot;</span>
            <span>collective content</span>
          </div>
        </div>
        <div className="flex-item">
          <div className="margin-bot">
            <span>answers:0</span>
            <span>unanswered questions</span>
          </div>
          <div className="margin-bot">
            <span>score:3</span>
            <span>posts with a 3+ score</span>
          </div>
          <div className="margin-bot">
            <span>is:question</span>
            <span>type of post</span>
          </div>
          <div className="margin-bot">
            <span>isaccepted:yes</span>
            <span>search within status</span>
          </div>
        </div>
      </div>
      <SearchHintBtnWrapper>
        <Link to='/Auth' className="nav-items nav-links ask-btn help-links">Ask a question</Link>
        <Link to='/Auth' className="help-links">Search help</Link>
      </SearchHintBtnWrapper>
    </SearchHintModal>
    </>
  )
}

export default SearchModal;

const SearchHintModal = styled.div`
  position: absolute;
  inset: 0px auto auto 0px;
  margin: 0px;
  transform: translate3d(0px, 42.5px, 0px);
  width: 640px;
  min-width: 420px;
  height: 190px;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(214, 217, 220);
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 2px 6px 0px, rgba(0, 0, 0, 0.09) 0px 3px 8px 0px;
  color: rgb(12, 13, 14);
  display: block;
  font-size: 13px;
  font-stretch: 100%;
  font-weight: 400;
  transform: matrix(1, 0, 0, 1, 0, 42.5);
  z-index: 5;
  top: 1px;

  .search-hint-text {
    box-sizing: border-box;
    display: flex;
    color: hsl(210, 8%, 25%);
    padding: calc(12px * 1);
    height: 130px;
  }

  .flex-item {
    flex-basis: 100%;
    display: block;
    span {
      padding-right: 5px;
      padding-bottom: 20px;
    }

    span:first-child {
      color: hsl(210, 8%, 5%);
      font-weight: 400;
      font-size: 13px;
      font-family: ui-monospace,"Cascadia Mono","Segoe UI Mono","Liberation Mono",Menlo,Monaco,Consolas,monospace;
    }

    span:nth-child(2) {
      color: hsl(210, 8%, 45%);
    }
  }

  .margin-bot {
    margin-bottom: 10px;
  }
`;

const SearchHintArrow = styled.div`
  position: absolute;
  left: 0px;
  transform: translate3d(328px, 0px, 0px);
  display: block;
  height: calc(12px * 1);
  width: calc(12px * 1);
  z-index: 9999;
  bottom: unset;
  color: hsl(0, 0%, 100%);
  background-color: hsl(0, 0%, 100%);
  top: 39px;
  left: 50%;
  transform: rotate(45deg);
  box-shadow: -1px -1px 1px 0 hsla(0,0%,0%,0.12);
`;

const SearchHintBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  border-top: 1px solid hsl(210, 8%, 90%);
  margin-top: 5px;

  .ask-btn {
    font-size: 11px !important;
    margin: 5px 0px 0px 0px !important;
    padding: 6px !important;
    margin-left: 10px !important;
  }

  .help-links {
    margin: 16px;
    color: hsl(206, 100%, 40%);
    font-size: 11px;
  }
`;