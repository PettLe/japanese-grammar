$(document).ready(function() {
data = [{title: "~てから / ~te kara / tapahtumajärjestys",
        body: `Tapahtumaketjuja voi kuvata käyttämällä verbin te-muotoa.
        <br>明日、公園に<strong>行って</strong>、コーヒーを飲みます。
        <br><i>Ashita, kouen ni itte, koohii wo nomimasu.</i>
        <br>Huomenna menen puistoon <strong>ja</strong> juon kahvia.
        <br><br>
        Kun halutaan korostaa tapahtumien järjestystä, lisätään verbin te-muodon perään <strong>から</strong>
        <br>ヤケさんが<strong>来てから</strong>、食べましょう。
        <br><i>Jake-san ga kite kara, tabemashou.</i>
        <br>Syödään <strong>sen jälkeen, kun</strong> Jake on saapunut
        <br>
        <br>毎日、うちに<strong>帰ってから</strong>、勉強をします
        <br><i>Mainichi, uchi ni kaette kara, benkyou shimasu.</i>
        <br>Opiskelen joka päivä <strong>sen jälkeen, kun</strong> olen palannut kotiin.`},
        {title: "~てもいいですか / ~te mo ii desu ka / luvan kysyminen",
        body: `Lupaa voidaan kysyä yhdistämällä verbin te-muodon perään partikkeli も (myös) + adjektiivi いい (hyvä) + ですか。
        Näin saadaan lause, jonka merkitys olisi kirjaimellisesti suurinpiirtein "vaikka tehden X, onko se hyvä?"
        <br>明日は家に<strong>行ってもいいですか</strong>。
        <br><i>Ashita wa ie ni itte mo ii desu ka.</i>
        <br>Käykös jos tulen talollesi huomenna?
        <br>
        <br>ここで<strong>食べてもいいですか</strong>。
        <br><i>Koko de tabete mo ii desu ka.</i>
        <br>Saako täällä syödä?
        <br><br>
        Vastaavasti luvan voi myöntää (tai kertoa mikä on ok) käyttämällä samaa rakennetta päättämättä lausetta か。
        <br>このケーキは<strong>食べてもいいです</strong>。
        <br><i>Kono keeki wa tabete mo ii desu</i>
        <br>Tämän kakun voi syödä.
        <br>
        <br>あのゲームを<strong>買ってもいい</strong>よ。
        <br><i>Ano geemu o katte mo ii yo.</i>
        <br>Voit ostaa sen pelin.`},
        {title: "~てはいけません / ~te wa ikemasen / kieltäminen",
        body: `Kieltäminen tapahtuu lisäämällä verbin -te muodon perään はいけません
        <br>レストランでタバコを<strong>吸ってはいけません</strong>。
        <br><i>Resutoran de tabako o sutte wa ikemasen.</i>
        <br>Ravintolassa ei saa polttaa tupakkaa.

        <br><br>いけません on kohteliaampi muoto verbistä いけない jota myös voi käyttää. Yksinkertaisin ja kasuaalein käytettävä sana on だめ
        <br>危ない場所に<strong>行ってはだめ</strong>よ。
        <br><i>Abunai basho ni itte wa dame yo.</i>
        <br>Vaarallisiin paikkoihin ei pidä mennä!`},
        {title: "Testi4",
        body: "NHAGAGAGAGAGAGtit"},
        {title: "Testiä5",
        body: "<br>ヤバい<br>スゲー<br>くそ"},]

data.forEach((item, index) => {
    // console.log(item.title)
    // console.log(`Tämä on esine nro ${index}`)
    let headerText = document.getElementById(`otsikko${index}`)
    headerText.textContent = item.title

    let infoText = document.getElementById(`teksti${index}`)
    infoText.innerHTML = item.body
})

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
});