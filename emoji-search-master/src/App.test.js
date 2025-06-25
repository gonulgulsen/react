import { render, screen, fireEvent } from "@testing-library/react"
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import "@testing-library/jest-dom"; 

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

test("Başlık başarılı bir şekilde render ediliyor", () => {
  render(<App/>);
  const title = screen.getByText(/Emoji Search/i);
  expect(title).toBeInTheDocument();
})

test("Emoji listesi ilk açılışta görüntüleniyor", () => {
  render(<App/>);
  const emoji = screen.getByText("Grinning");
  expect(emoji).toBeInTheDocument();
})

test("Arama kutusuna yazınca sonuçlar filtreleniyor", () => {
  render(<App/>);
  const input = screen.getByRole("textbox");
  fireEvent.change(input, { target: {value: "100"}});
  expect(screen.getByText("100")).toBeInTheDocument();
  expect(screen.queryByText("Grinning")).not.toBeInTheDocument();
})

test("Emoji tıklanınca kopyalanıyor", () => {
  document.execCommand = jest.fn();
  render(<App/>);
  const emojiRow = screen.getByText("Grinning").closest("div");
  fireEvent.click(emojiRow);
  expect(document.execCommand).toHaveBeenCalledWith("copy");
})