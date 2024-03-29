"use client";
import style from "./WorkCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faImage,
  faLink,
  faList,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import { useEffect, useState } from "react";
import {
  WorkCardSlideMouseDownHandler,
  AddWorkClickHandler,
  cancelAddWork,
  init,
} from "./WorkCardHandler";
import { imgInput } from "./WorkCardHandler";

type propsType = {
  title: string;
};

export default function WorkCard(props: propsType) {
  const [startDate, setDate] = useState<Date | null>(null);
  const [imgName, setImgName] = useState<string>("사진 추가");

  useEffect(() => {
    init();
  }, []);
  return (
    <div
      className={`flex flexCol justifyBetween  ${style.cardSize} ${style.cardStyle} BoxSizingborderBox relative WorkCard `}
    >
      <div className={` ${style.workCardBody} workCardBody`}>
        <h4 className={`${style.CardTitle} mainText mb2`}>{props.title}</h4>
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            className={`${style.registrationWork} flex flexCol justifyBetween dragDom`}
            draggable="true"
            key={index}
          >
            <p className="mb1">사용자 정의 요구 사항 정의서</p>
            <div className="flex widthFull justifyBetween alignCenter">
              <div className={`IconBox`}>
                <button>
                  <FontAwesomeIcon icon={faList} />
                </button>
                <button>
                  <FontAwesomeIcon icon={faLink} />
                </button>
                <button>
                  <FontAwesomeIcon icon={faImage} />
                </button>
              </div>
              <div className={`${style.DayTextBox}`}>
                <span>3일 후</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={`widthFull ${style.workCardBottom}`}>
        <div
          className={`draggable absolute ${style.addWorkPagePosition} ${style.addWorkPageSize} ${style.addWorkPageStyle} addWorkPageStyle`}
        >
          <div
            className={`absolute ${style.cursorRowResize} ${style.cursorPosition}`}
            onMouseDown={(event) => {
              WorkCardSlideMouseDownHandler(event);
            }}
          />
          <div className={`widthFull heightFull ${style.hidden} relative`}>
            <button
              className={`absolute ${style.cancelButtonPosition} ${style.cancelButtonStyle} cursorPointer`}
              onClick={cancelAddWork}
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
            <form className="heightFull widthFull flex flexCol BoxSizingborderBox">
              <ul
                className={`heightFull widthFull flex flexCol ${style.addWorkCardUlStyle} BoxSizingborderBox addWorkCard`}
              >
                <li>
                  <input
                    type="text"
                    placeholder="이름"
                    className={`${style.workTitleStyle}`}
                  />
                </li>
                <li className="flex alignCenter relative">
                  <div>
                    <FontAwesomeIcon icon={faCalendar} />
                  </div>
                  <div>
                    <DatePicker
                      dateFormat="yyyy년 MM월 dd일" // 날짜 형태
                      shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
                      onChange={(date) => setDate(date)}
                      locale={ko}
                      className={` ${style.datePickerPosition}`}
                      placeholderText="날짜 설정"
                      selected={startDate}
                      id="date"
                    />
                  </div>
                </li>
                <li className="flex alignCenter">
                  <div>
                    <FontAwesomeIcon icon={faList} />
                  </div>
                  <div>
                    <input placeholder="설명 추가" type="text" />
                  </div>
                </li>
                <li className="flex alignCenter">
                  <div>
                    <FontAwesomeIcon icon={faLink} />
                  </div>
                  <div>
                    <input placeholder="링크 추가" type="text" />
                  </div>
                </li>
                <li className="flex alignCenter">
                  <div>
                    <FontAwesomeIcon icon={faImage} />
                  </div>
                  <div>
                    <label className="imgInput">
                      <input
                        placeholder="사진 추가"
                        type="file"
                        accept="image/*"
                        className={`${style.imgInput} displayNone`}
                        onChange={(event) => {
                          imgInput(event, setImgName);
                        }}
                      />
                      {imgName}
                    </label>
                  </div>
                </li>
              </ul>
            </form>
          </div>
        </div>
        <button
          className={`flex alignCenter cursorPointer fontSize1 ${style.buttonSize} ${style.buttonPosition}`}
          onClick={AddWorkClickHandler}
        >
          <span className={`${style.PlusStyle}`}>+</span>
          <span>작업 추가</span>
        </button>
      </div>
    </div>
  );
}
