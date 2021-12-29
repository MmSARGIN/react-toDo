import React, { useState } from "react";
import "./form.css";
const initialValues = [
  { id: 1, title: "KİTAP OKU", active: false },
  { id: 2, title: "YEMEK YAP", active: false },
  { id: 3, title: "KODLAMA ÇALIŞ", active: false },
  { id: 4, title: "YÜRÜYÜŞ YAP", active: false },
  { id: 5, title: "EGZERSİZ YAP", active: false },
];

function Form() {
  const [list, setList] = useState(initialValues);
  const [input, setİnput] = useState("");
  console.log(input);

  return (
    <div className="form">
      <h1>Yapılacaklar Listesi</h1>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setİnput(e.target.value);
          }}
          placeholder="Ne Yapmak İstersin?"
        />
        <button className="add"
          onClick={() =>{
              if(input)
              return setList(
                [...list, { id: Date.now(), title: input, active: false }],
                setİnput("")
              )
            }
          }
            
        >
          EKLE
        </button>
      </div>
      <div className="main">
        <ul>
          {list.map((item, index) => (
            <li
              onClick={() => {
                setList(
                  list.map((el) =>
                    el.id === item.id ? { ...el, active: !el.active } : el
                  )
                );
              }}
              className={item.active ? "completed" : ""}
              key={index}
            >
              {item.title.toUpperCase()}
            </li>
          ))}
        </ul>
      </div>
      <button className="deleted" onClick={() => setList(list.filter((i) => !i.active))}>
        Yapılanları Listeden Kaldır
      </button>
    </div>
  );
}

export default Form;
