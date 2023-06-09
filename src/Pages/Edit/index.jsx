import { Container, Form } from "../New/styles";

import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";
import { ButtonText } from "../../Components/ButtonText";
import { TextArea } from "../../Components/TextArea";
import { TagItem } from "../../Components/TagItem";

import { CaretLeft } from "../../icons/CaretLeft";
import { Upload } from "../../icons/Upload"

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Edit() {
  const navigate = useNavigate()
  const [fileName, setFileName] = useState("")

  return (
    <Container>
      <Header />
      <main>
        <div className="button-text">
          <ButtonText onClick={() => navigate(-1)} icon={CaretLeft} title="voltar" />

        </div>

        <Form>
          <h1>Editar prato</h1>

          <div className="form-area1">

            <div className="input-image-wrapper">
              <label htmlFor="image">Imagem do prato</label>
              <label className="input-image change-bgcolor" htmlFor="image">
                <Upload />
                <input type="file" id="image" accept="image/*" onChange={e => setFileName(String(e.target.files[0].name))} />
                <span className="input-image-text">{fileName ? fileName : "Selecionar imagem para alterá-la"}</span>
              </label>

            </div>
            <Input className="change-bgcolor" placeholder="Ex.: Salada Ceasar" value="Salada César" type="text" title="Nome" />

            <div className="select-wrapper">
              <label className="select-label" htmlFor="select">Categoria</label>
              <div className="select-container">
                <select value="Pratos principais" className="select-box" name="select" id="select">
                  <option>Refeições</option>
                  <option>Pratos principais</option>
                  <option>Sobremesas</option>
                </select>
                <div className="icon-container">
                  <CaretLeft />
                </div>
              </div>

            </div>

          </div>

          <div className="form-area2">

            <div className="input-wrapper">
              <label htmlFor="">Ingredientes</label>
              <div className="change-bgcolor input-container">
                <TagItem readOnly title="Pão Naan" />
                <TagItem isNew placeholder="Adicionar" />
              </div>

            </div>
            <Input className="number-input" inputType="number" placeholder="00,00" value="40,00" type="number" title="Preço" />
          </div>

          <div className="textarea-wrapper">
            <label htmlFor="textarea">Descrição</label>
            <TextArea id="textarea" placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" value="A Salada César é uma opção refrescante para o verão." />

          </div>

          <div className="button-container">
            <Button onClick={() => navigate("/")} title="Excluir prato" />
            <Button onClick={() => navigate("/")} title="Salvar alterações" />

          </div>

        </Form>


      </main>
      <Footer />
    </Container>
  )
}