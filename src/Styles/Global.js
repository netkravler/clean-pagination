import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`


*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  
  //border: solid 1px red;
  list-style-type: none;



}
html {
  scroll-behavior: smooth;
  width: 100%;
  min-height: 100%;
}

body{
  overflow-y: scroll;
  width: 100%;
  min-height: 100%;


  background-color: ${({ theme }) => theme.colors.Background};
  color: ${({ theme }) => theme.colors.Onbackground};





}

#root{
  width: 100%;
  min-height: 100%;
  max-width: 1200px;
  margin: auto;

  display: grid;
  grid-template-rows: auto 1fr auto;

  ul {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-content: center;
  text-align: center;
  gap: 2rem;
}
img{
  width: 100%;
  aspect-ratio: 2/1;
  -o-object-fit: cover;
     object-fit: cover;
  display: block;
}
}




























:root {
  --bgColor: #009DDA;
  --active: #0c97a9;
}

body,
html,
#root {
  margin: 0;
  padding: 0;
  min-height: 100vh;
}

#root{
  margin: auto;
  display: grid;
max-width: 1200px;
  grid-template-rows: auto 1fr auto;
  min-height: 100%;
}

.footer {
  margin-top: auto;
}

.header,
.footer {
  width: 100%;
  background-color: var(--bgColor);
}
.header a,
.footer a {
  color: #fff;
}

img {
  width: 100%;
  aspect-ratio: 2/1;
  -o-object-fit: cover;
     object-fit: cover;
  display: block;
}

.main_wrapper {
  max-width: 1200px;
  margin: auto;
  padding: 2rem;
}

.main_wrapper ul {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-content: center;
  text-align: center;
  gap: 2rem;
}

.main_wrapper form article {
  padding: 0 3rem;
  display: flex;
  flex-direction: column;
}

.main_wrapper form article div {
  display: flex;
  flex-direction: column;
}

.main_wrapper span {
  padding: 1rem;
  display: flex;
  justify-content: center;
}

.main_wrapper input {
  padding: 5px;
}

button {
  margin: 0.5rem;
  padding: 0.5rem;
  background-color: var(--bgColor);
  color: #fff;
  cursor: pointer;
}

.active {
  background-color: var(--active);
  color: #333;
}

a {
  padding: 1rem;
  text-decoration: none;
  color: #333;
  font-weight: 800;
  font-size: 1.2rem;
}

.search {
  width: 100%;
  display: flex;
}

.searchTerm {
  width: 100%;
  border: 3px solid #00b4cc;
  border-right: none;
  padding: 0 1rem;
  height: 36px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: #9dbfaf;
  font-size: 20px;
}

.searchTerm:focus {
  color: #00b4cc;
}

.searchButton {
  margin: 0;
  width: 40px;
  font-size: 20px;
  height: 36px;
  border: 3px solid var(--bgColor);
  background: var(--bgColor);
  text-align: center;
  color: #fff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.wrap {
  margin: 1rem 0;
}

.progressbar {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.progressbar a {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  padding: 0.5rem;
  font-weight: 400;
  border: solid 4px #ccc;
  border-radius: 50%;
  height: 40px;
  aspect-ratio: 1/1;
  background-color: #fff;
  color: var(--bgColor);
  margin: 1rem;
}
.progressbar a.active {
  border: solid 4px var(--bgColor);
}




`;
