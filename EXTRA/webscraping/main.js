import puppeteer from "puppeteer";
import { writeFile } from "fs/promises";

//Creamos el navegador
const browser = await puppeteer.launch({
  //Activamos que se vea la navegación, si ponemos headless en false se ve y si no no se ve
  headless: true,
  defaultViewport: null,
  args: ["--start-maximized"],
});
//Abrimos una nueva página del navegador
const page = await browser.newPage();
//Almacenamos la URL a la que queremos navegar
const URL =
  "https://store.steampowered.com/category/action/?flavor=contenthub_topsellers";
//Hacemos que navegue a la URL que le hemos indicado
await page.goto(URL);

//Buscamos el botón de rechazar las cookies por id y hacemos click en él
await page.locator("#rejectAllButton").click();

//Vamos a darle 4 clicks al botón de mostrar más
await page.locator("._2tkiJ4VfEdI9kq1agjZyNz.Focusable").click();
await page.locator("._2tkiJ4VfEdI9kq1agjZyNz.Focusable").click();
await page.locator("._2tkiJ4VfEdI9kq1agjZyNz.Focusable").click();
await page.locator("._2tkiJ4VfEdI9kq1agjZyNz.Focusable").click();

//Vamos a buscar todos los elementos con el selector que contiene el titulo y vamos a quedarnos con el textContent
const juegos = await page.evaluate(() =>
  [...document.querySelectorAll(".gASJ2lL_xmVNuZkWGvrWg")].map((el) => ({
    titulo: el.querySelector("._2ekpT6PjwtcFaT4jLQehUK.StoreSaleWidgetTitle")
      .textContent,
    portada: el.querySelector("._2eQ4mkpf4IzUp1e9NnM2Wr").src,
    fecha: el.querySelector("._1qvTFgmehUzbdYM9cw0eS7").textContent,
    valoracion:
      el.querySelector("._2nuoOi5kC2aUI12z85PneA")?.textContent || null,
    precio: el.querySelector("._3j4dI1yA7cRfCvK8h406OB")?.textContent,
    descuento: el.querySelector(".cnkoFkzVCby40gJ0jGGS4")?.textContent || null,
    tags: [...el.querySelectorAll(".WidgetTag")].map(
      (item) => item.textContent
    ),
    descripcion:
      el.querySelector(".StoreSaleWidgetShortDesc")?.textContent || null,
  }))
);

await writeFile("juegos.json", JSON.stringify(juegos));

await browser.close();
