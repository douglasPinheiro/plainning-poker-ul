import React from "react";
import "./AdminRoom.css";
import Card from "../../components/card/Card";
import Members from "../../components/members/Members";

const AdminRoom = () => {
  return (
    <div className="admin-room-container">
      <div className="my-container">
        <div className="row">
          <div className="col-md-5 column-left">
            <div className="row">
              <div className="col-md-3">
                <div className="icon-room">
                  <img id="img-door" src="/assets/door.jpg"></img>
                </div>
              </div>
              <div className="col-md-9">
                <div className="label-room">
                  <label>Nome da Sala que pode ser grande</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <div className="icon-history">
                  <img id="img-door" src="/assets/book.jpg"></img>
                </div>
              </div>
              <div className="col-md-9">
                <div className="label-history">
                  <textarea
                    rows="6"
                    cols="50"
                    placeholder="Adicione aqui a sua história"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <div className="icon-profiles">
                  <img id="img-door" src="/assets/members.jpg"></img>
                </div>
              </div>
              <div className="col-md-9">
                <div className="label-profiles">
                  <Members username="Fernanda Taketa"></Members>
                  <Members username="Rodorfo Mahs"></Members>
                  <Members username="Ernany Augusto"></Members>
                  <Members username="Douglas da Costa"></Members>
                  <Members username="Joao"></Members>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-7 column-right">
            <div className="white-board">
              <div className="row">
                <div className="col-md-3">
                  <Card />
                </div>
                <div className="col-md-3">
                  <Card number="1" />
                </div>
                <div className="col-md-3">
                  <Card number="2" />
                </div>
                <div className="col-md-3">
                  <Card number="3" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <Card number="5" />
                </div>
                <div className="col-md-3">
                  <Card number="8" />
                </div>
                <div className="col-md-3">
                  <Card number="13" />
                </div>
                <div className="col-md-3">
                  <Card />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminRoom;
