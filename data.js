let grammar = [{title: "~てから / ~te kara / tapahtumajärjestys",
        body: `<br><strong><i>! Jos te-muoto ei ole enää tuoreessa mielessä, katso Kappale 4 - Verbien mennyt aika (+ TE-MUOTO)</i></strong>
        <br>Tapahtumaketjuja voi kuvata käyttämällä verbin te-muotoa.
        <br>明日、公園に<strong>行って</strong>、コーヒーを飲みます。
        <br><i>Ashita, kouen ni itte, koohii wo nomimasu.</i>
        <br>Huomenna menen puistoon <strong>ja</strong> juon kahvia.
        <br><br>
        Kun halutaan korostaa tapahtumien järjestystä, lisätään verbin te-muodon perään <strong>から</strong>
        <br>ヤケさんが<strong>来てから</strong>、食べましょう。
        <br><i>Jake-san ga kite kara, tabemashou.</i>
        <br>Syödään <strong>sen jälkeen, kun</strong> Jake on saapunut.
        <br>
        <br>毎日、うちに<strong>帰ってから</strong>、勉強をします
        <br><i>Mainichi, uchi ni kaette kara, benkyou shimasu.</i>
        <br>Opiskelen joka päivä <strong>sen jälkeen, kun</strong> olen palannut kotiin.`},
        {title: "~てもいいですか / ~te mo ii desu ka / luvan kysyminen",
        body: `<br><strong><i>! Jos te-muoto ei ole enää tuoreessa mielessä, katso Kappale 4 - Verbien mennyt aika (+ TE-MUOTO)</i></strong>
        <br>Lupaa voidaan kysyä yhdistämällä verbin te-muodon perään partikkeli <strong>も</strong> (myös) + adjektiivi <strong>いい</strong> (hyvä) + 
        <strong>ですか</strong>。
        Näin saadaan lause, jonka merkitys olisi kirjaimellisesti suurinpiirtein "vaikka tehden X, onko se hyvä?"
        <br>明日は家に<strong>行ってもいいですか</strong>。
        <br><i>Ashita wa ie ni itte mo ii desu ka.</i>
        <br>Käykö jos tulen talollesi huomenna?
        <br>
        <br>ここで<strong>食べてもいいですか</strong>。
        <br><i>Koko de tabete mo ii desu ka.</i>
        <br>Saako täällä syödä?
        <br><br>
        Vastaavasti luvan voi myöntää (tai kertoa mikä on muuten vain ok) käyttämällä samaa rakennetta ilman lopussa olevaa か。
        <br>このケーキは<strong>食べてもいいです</strong>。
        <br><i>Kono keeki wa tabete mo ii desu.</i>
        <br>Tämän kakun voi syödä.
        <br>
        <br>あのゲームを<strong>買ってもいい</strong>よ。
        <br><i>Ano geemu o katte mo ii yo.</i>
        <br>Voit ostaa sen pelin.`},
        {title: "~てはいけません / ~te wa ikemasen / kieltäminen",
        body: `<br><strong><i>! Jos te-muoto ei ole enää tuoreessa mielessä, katso Kappale 4 - Verbien mennyt aika (+ TE-MUOTO)</i></strong>
        <br>Kieltäminen tapahtuu lisäämällä verbin -te muodon perään <strong>はいけません</strong>
        <br>レストランでタバコを<strong>吸ってはいけません</strong>。
        <br><i>Resutoran de tabako o sutte wa ikemasen.</i>
        <br>Ravintolassa ei saa polttaa tupakkaa.

        <br><br>いけません on kohteliaampi muoto verbistä いけない jota myös voi käyttää. Yksinkertaisin ja kasuaalein käytettävä sana on <strong>だめ</strong>.
        <br>危ない場所に<strong>行ってはだめ</strong>よ。
        <br><i>Abunai basho ni itte wa dame yo.</i>
        <br>Vaarallisiin paikkoihin ei pidä mennä!`},
        {title: "Adjektiivien luetteleminen",
        body: `Tapa jolla adjektiivit yhdistetään riippuu siitä ovatko ne i- vai na-adjektiiveja. Jos kyseessä on i-adjektiivi, putoaa viimeinen い pois
        ja sen tilalle tulee ~<strong>くて</strong>. Jos kyseessä on na-adjektiivi, korvataan な hiraganalla <strong>で</strong>. Viimeistä adjektiivia ei enää 
        taivuteta tällä tavoin. Lauseen aikamuoto ilmenee vasta lauseen lopussa!
        <br>怖<strong>くて</strong>大きい熊です。
        <br><i>Kowakute ookii kuma desu.</i>
        <br>Pelottava <strong>ja</strong> iso karhu.
        <br>
        <br>静か<strong>で</strong>綺麗な公園です。
        <br><i>Shizuka de kirei na kouen desu.</i>
        <br>Rauhallinen <strong>ja</strong> kaunis puisto.
        <br>
        <br>この車は便利<strong>で</strong>速いです。
        <br><i>Kono kuruma wa benri de hayai desu.</i>
        <br>Tämä auto on käytännöllinen <strong>ja</strong> nopea.
        <br>
        <br>Huom, lauseessa kaikkien adjektiivien on oltava merkitykseltään joko kielteisiä tai myönteisiä. Muussa tapauksessa tarvitsee käyttää sanaa mutta,
        esim. <strong>が</strong>
        <br>映画は面白い<strong>ですが</strong>、とても長かったです。
        <br><i>Eiga wa omoshiroi desu ga, totemo nagakatta desu.</i>
        <br>Elokuva <strong><i>oli</i></strong> viihdyttävä, <strong>mutta</strong> todella pitkä.`},
        {title: "Lauseiden yhdistäminen",
        body: `Lauseiden yhdistäminen riippuu täysin siitä, minkälainen ensimmäinen lause on. Jos kyseessä on verbi- tai i-adjektiivilause, ne yhdistetään taivuttamalla
         ensimmäisen lauseen verbi tai adjektiivi te-muotoon. (ks. edellinen kielioppiasia)
        <br>毎朝、新聞を<strong>読んで</strong>、ジュースを飲みます。
        <br><i>Maiasa shinbun o yonde, juusu o nomimasu.</i>
        <br>Joka aamu luen sanomalehteä <strong>ja</strong> juon mehua.
        <br>
        <br>このシャツは<strong>白くて</strong>、あのシャツは黒いです。
        <br><i>Kono shatsu wa shirokute, ano shatsu wa kuroi desu.</i>
        <br>Tämä paita on valkoinen ja tuo paita tuolla on musta.
        <br><br>
        Jos kyseessä on substantiivi tai na-adjektiivi, yhdistetään lauseet laittamalla sanan perään <strong>で</strong>
        <br>マリさんは弁護士<strong>で</strong>、マリオさんは看護師です。
        <br><i>Mari-san wa bengoshi de, Mario-san wa kangoshi desu.</i>
        <br>Mari on asianajaja <strong>ja</strong> Mario on sairaanhoitaja.
        <br>
        <br>自然が<strong>好きで</strong>、よく森を散歩します。
        <br><i>Shizen ga suki de, yoku mori o sanpo shimasu.</i>
        <br>Tykkään luonnosta <strong>ja</strong> käyn usein metsässä kävelyillä.
        <br>(Huom. japanissa tykätä ei ole verbi vaan na-adjektiivi!)`},
      {title: "Komparatiivi osa 1",
    body: `Kun kysytään vertailumielessä kahden asian väliltä, käytetään kysymyssanaa <strong>どちら</strong> ja partikkelia <strong>と</strong>.
    <br>デッドリフト<strong>と</strong>スクワット<strong>とどちら</strong>が厳しいですか。
    <br><i>Deddorifuto to sukuwatto to dochira ga kibishii desu ka.</i>
    <br>Kumpi on raskaampaa, maastaveto vai kyykky?
    <br>
    <br>Vastaaminen tapahtuu kaavalla "vertailun voittaja <strong>のほうが</strong> (vertailun häviäjä <strong>より</strong>) vertailtava asia です。"
    <br>デッドリフト<strong>のほうが</strong> ( スクワット<strong>より</strong> ) 厳しいです。
    <br><i>Deddorifuto no hou ga (sukuwatto yori) kibishii desu.</i>
    <br>Maastaveto on raskaampi (kuin kyykky).
    <br>! Kuten voi huomata, ns. hävinnyttä osapuolta ei ole välttämätöntä mainita.`},
  {title: "Komparatiivi osa 2",
  body: `Kun kyseessä on väitelause, jotain todetaan vain faktana, on rakenne "vertailun voittaja <strong>は</strong> vertailun häviäjä <strong>より</strong> 
  vertailtava asia です。
  <br>寿司<strong>は</strong>パスタ<strong>より</strong>美味しいです。
  <br><i>Sushi wa pasuta yori oishii desu.</i>
  <br>Sushi on herkullisempaa kuin pasta.
  <br>
  <br>Kun vertailtavien asioiden välillä ei ole eroa, on helpointa vastata <strong>どちらも同じぐらい</strong>(vertailtava asia)です。
  <br>どちらも同じぐらい( 可愛い )です。
  <br><i>Dochira mo onaji gurai (kawaii) desu.</i>
  <br>Molemmat ovat yhtä söpöjä.
  <br><br>Jos haluaa korostaa vaihtoehtoja, voi myös vastata seuraavalla kaavalla:
  <br>猫<strong>も</strong>犬<strong>も同じぐらい</strong> (可愛い) です。
  <br><i>Neko mo inu mo onaji gurai (kawaii) desu.</i>
  <br>Kissat ja koirat ovat yhtä söpöjä.`},
{title: "Superlatiivi",
body: `Kun kysytään suosikkia, parasta tms., niin käytetään kaavaa "vertailujoukko ( <strong>の中</strong> ) <strong>で</strong> kysymyssana <strong>が 
いちばん</strong> vertailtava asia ですか。"
<br>Kysymyssana voi olla aiheesta riippuen esimerkiksi どこ、何、いつ、どれ
<br>アニメ ( <strong>の中</strong> ) <strong>で何がいちばん</strong>楽しいですか。
<br><i>Anime (no naka) de nani ga ichiban tanoshii desu ka.</i>
<br>Mikä anime on mielestäsi nautittavin?
<br>
<br>Vastata voi sanomalla "ylivertainen asia<strong> が いちばん</strong> ominaisuus です。
<br>ビール<strong>がいちばん</strong>好きです。
<br><i>Biiru ga ichiban suki desu.</i>
<br>Tykkään eniten oluesta
<br>
<br>Kun väitelauseena vain kerrotaan mikä on ylivertainen, rakenne on "asia <strong>は</strong> joukko ( <strong>の中</strong> ) <strong>で いちばん</strong> ominaisuus です。"
<br>ピカチュウ<strong>は</strong>ポケモン( <strong>の中</strong> )<strong>でいちばん</strong>強いネズミです。
<br><i>Pikachuu wa pokemon (no naka) de ichiban tsuyoi nezumi desu.</i>
<br>Pikachu on vahvin hiiri kaikista pokemoneista.`},
{title: "ので / node / Koska-rakenne",
body: `<strong>Verbit ja i-adjektiivit</strong>
<br>Perustyylissä. Verbit ja adjektiivit voivat olla kielteisessä, myönteisessä sekä menneessä muodossa.
<br>今日は<strong>寒いので</strong>、外に行きません。
<br><i>Kyou wa samui node, soto ni ikimasen.</i>
<br>Tänään on kylmä, <strong>joten</strong> en mene ulos.
<br>
<br>コーヒーは<strong>甘くなかったので</strong>、サトウを入れました。
<br><i>Koohii wa amakunakatta node, satou o iremashita.</i>
<br>Kahvi ei ollut makeaa, joten laitoin sokeria.
<br>
<br>明日は早く<strong>起きるので</strong>、９時に寝ます。
<br><i>Ashita wa hayaku okiru node, ku-ji ni nemasu.</i>
<br>Herään huomenna aikaisin, <strong>joten</strong> menen nukkumaan kello 21.
<br>
<br>明日は仕事が<strong>ないので</strong>、友達に会います。
<br><i>Ashita wa shigoto ga nai node, tomodachi ni aimasu.</i>
<br>Huomenna ei ole töitä, <strong>joten</strong> tapaan ystäväni.
<br>
<br><strong>Substantiivit ja na-adjektiivit</strong>
<br>Myönteisessä lauseessa substantiivien ja na-adjektiivien perään tulee <strong>な</strong> ennen <strong>ので</strong>:a
<br>Jos lause on kielteinen, な tilalle tulee <strong>じゃない</strong> / <strong>ではない</strong>
<br>寿司が<strong>好きなので</strong>、よく食べます。
<br><i>Sushi ga suki na node, yoku tabemasu.</i>
<br>Tykkään sushista, <strong>joten</strong> syön sitä usein.
<br><br><strong>夏休みなので</strong>、旅行に行きたいです。
<br><i>Natsu yasumi na node, ryokou ni ikitai desu.</i>
<br>On kesäloma, <strong>joten</strong> tahdon lähteä matkalle.
<br>
<br><strong>金曜日じゃないので</strong>、飲みに行きたくないです。
<br><i>Kinyoubi ja nai node, nomi ni ikitakunai desu.</i>
<br>Ei ole perjantai, <strong>joten</strong> en tahdo lähteä muutamalle lasilliselle.
<br>
<br>その建物は<strong>安全じゃなかったので</strong>、解体されました。
<br><i>Sono tatemono wa anzen janakatta node, kaitai saremashita.</i>
<br>Se rakennus ei ollut turvallinen, <strong>joten</strong> se purettiin.
<br><br>ので:lle löytyy myös toinen vastine, から, joka on hitusen epämuodollisempi ja subjektiivisempi. Toisaalta se myös korostaa syyn ja seurauksen
yhteyttä, jonka takia sitä käytetään esimerkiksi asemien kuulutuksissa, jotka liittyvät nopeasti reagoitaviin (jopa vaarallisiin) tilanteisiin, kuten 
aseman ohittaviin juniin.
<br>
<br>から-sanaa käyttäessä substantiivien ja na-adjektiivien taivutukset ovat hitusen erilaiset (<strong>な</strong> -> <strong>だ</strong> / <strong>です</strong>)`},
{title: "なる / naru / adverbit + muutoksen kuvaaminen",
body: `Adverbi voidaan muodostaa kahdella tavalla. i-adjektiiveista korvaamalla viimeinen い tavulla <strong>く</strong> ja na-adjektiiveista korvaamalla
な tavulla <strong>に</strong>
<br>早<strong>い</strong> --> 早<strong>く</strong>
<br>早<strong>く</strong>来てください。
<br><i>Hayaku kite kudasai.</i>
<br>Ole kiltti ja tule nopeasti.
<br>
<br>静か <strong>な</strong> --> 静か <strong>に</strong>
<br>もうちょっと静か<strong>に</strong>話して。
<br><i>Mou chotto shizuka ni hanashite.</i>
<br>Puhuisitko vähän hiljempaa.
<br><br>
<strong>Muutosta</strong> voi kuvata verbillä <strong>なる</strong> (Ryhmä 1: なります なりません -> なる ならない)
<br>Rakenne voi käyttää niin adjektiiveja kuin substantiiveja, ja kertoo <i>miksi</i> tai <i>millaiseksi</i> jokin tulee. Näitä asioita voi olla mm.
ammatit, vuodenajat, ikä, ominaisuus, ajan muutos työstä lomaksi jne.
<br>公園は賑やか<strong>になりました</strong>。
<br><i>Kouen wa nigiyaka ni narimashita.</i>
<br>Puistosta tuli eläväinen/vilkas.
<br>
<br>どうして夏<strong>になりません</strong>か。
<br><i>Doushite natsu ni narimasen ka.</i>
<br>Miksi kesä ei tule?
<br>
<br>綺麗<strong>になりたい</strong>です。
<br><i>Kirei ni naritai desu.</i>
<br>Tahdon tulla kauniiksi.
<br>
<br>値段がだんだん高<strong>くなります</strong>。
<br><i>Nedan ga dandan takaku narimasu.</i>
<br>Hinnat kallistuvat pikkuhiljaa`},
{title: "~んです / ~n desu / selittävä lauserakenne",
body: `Kun tahdotaan selittää jotain - tai kysyä jostain tarkempaa selitystä odottaen - käytetään <strong>~んです</strong> -rakennetta. Ei kuitenkaan käytetä silloin,
kun todetaan / halutaan tietää vain yksinkertaisia faktoja. Esimerkiksi kyllä/ei -kysymykset.
<br>Muodostetaan lisäämällä verbien ja i-adjektiivien perustyylin perään. Substantiivien ja na-adjektiivien kanssa tulee sanan ja <strong>~んです</strong>väliin 
<strong>な</strong> tai です perustyylinen muoto.<br>
<br>私は悪い<strong>んです</strong>。
<br><i>Watashi wa waruin desu.</i>
<br>(Asia on niin, että) minä olen syyllinen.
<br><br>これが欲しい<strong>んです</strong>か。
<br><i>Kore ga hoshiin desu ka.</i>
<br>Tämänkö sinä haluat?
<br>
<br>ずっとギターを練習してる<strong>んだ</strong>けど、まだ上手じゃない。
<br><i>Zutto gitaa wo renshuu shiterun da kedo, mada jouzu janai.</i>
<br>Vaikka olen harjoitellut pitkään kitaran soittoa, en ole vielä hyvä.
<br>
<br>あの人は僕の友達<strong>なんです</strong>。
<br><i>Ano hito wa boku no tomodachi nan desu.</i>
<br>(Asia on niin, että) tuo henkilö on ystäväni.`},
{title: "つもり / tsumori / aikomuksista kertominen",
body: `Kun halutaan kertoa siitä mitä aikoo tai ei aio tehdä tulevaisuudessa, käytetään rakennetta verbin perustyyli + <strong>つもりです</strong>
<br>自転車で行く<strong>つもり</strong>です。
<br><i>Jitensha de iku tsumori desu.</i>
<br>Aion mennä polkupyörällä.
<br>
<br>今日、ピザを食べない<strong>つもり</strong>です。
<br><i>Kyou, piza o tabenai tsumori desu.</i>
<br>Tänään en aio syödä pizzaa.
<br>
<br>Käytetään normaalisti vain omista aikeista kertomiseen, sillä kyseessä on hyvin suora ilmaisu. Kuitenkin esimerkiksi hyvältä ystävältään voi kysyä
tätä rakennetta käyttäen.
<br>Rakenteesta löytyy myös toinen kielteinen, paljon voimakkaampi muoto. Se muodostetaan yhdistämällä verbin perustyyli + <strong>つもり</strong> + 
<strong>はありません</strong>
<br>早く起きる<strong>つもりはありません</strong>。
<br><i>Hayaku okiru tsumori wa arimasen.</i>
<br>Minulla ei ole <i>minkäänlaista aikomusta</i> herätä aikaisin.`},
{title: "Tekemisen ja tapahtumien taajuus",
body: `Kun halutaan kertoa kuinka usein tehdään jotakin, käytetään rakennetta <i>ajanjakso</i> + <strong>に</strong> + <i>kuinka monta kertaa</i>
<br><strong>一ヶ月に一回</strong>映画館に行きます。
<br><i>Ikkagetsu ni ikkai eigakan ni ikimasu.</i>
<br>Käyn elokuvateatterissa kerran kuukaudessa.
<br>
<br><strong>一日に三時間</strong>ぐらい日本語を勉強します。
<br><i>Ichi nichi ni san-jikan gurai nihongo o benkyou shimasu.</i>
<br>Opiskelen japaninkieltä noin kolme tuntia päivässä.`},
{title: "Vain-rakenne",
body: `Japaninkielessä on kaksi eri <i>vain</i>-sanaa, joiden käyttötapa ja nyanssit ovat hitusen erilaiset keskenään. Toinen on だけ, jonka yhteydessä lauserakenne
on <strong>aina</strong> myönteinen. Toinen sana on しか, jonka yhteydessä taas lauserakenne on aina kielteinen. Seuraavat esimerkit selventävät näiden kahden
erilaista käyttötapaa ja nyanssia.
<br>私<strong>だけ</strong>行きます。
<br><i>Watashi dake ikimasu.</i>
<br>Vain minä menen.
<br>
<br>ゲームをすること<strong>だけ</strong>が好きです。
<br><i>Geemu o suru koto dake ga suki desu.</i>
<br>Tykkään vain pelata videopelejä.
<br>
<br>私<strong>しか</strong>行き<strong>ません</strong>。
<br><i>Watashi shika ikimasen.</i>
<br>Kukaan muu kuin minä ei mene.
<br>
<br>ゲームをすること<strong>しか</strong>好き<strong>じゃありません</strong>。
<br><i>Geemu o suru koto shika suki ja arimasen.</i>
<br>En tykkää kuin pelata videpelejä.`},
{title: "ほしい / hoshii / haluta asia tai esine",
body: `Michi I -kirjassa opittiin (kpl 12, s. 175) kuinka ilmaistaan mitä halutaan tehdä. Se tapahtui verbin ~たい päätteellä. (行きたい、食べたい jne.)
Kun halutaan ilmaista, että halutaan jokin asia tai esine, käytetään i-adjektiivia ほしい hyödyntävää rakennetta <i>haluttava asia</i>
 + が ほしい。Huomion arvoista on, että sanan pystyy myös taivuttamaan negatiiviseen muotoon ほしくない, mutta sen suorasukaisuuden vuoksi sen käyttöä on
 hyvä välttää. Vastaavasta syystä on myös yleistä käyttää lauserakenteen yhteydessä aiemmin opittua pehmentävää ~んです -rakennetta. (vrt. haluan -> haluaisin)
 <br>誕生日にお金<strong>がほしい</strong>んです。
 <br><i>Tanjoubi ni okane ga hoshii n desu</i>
 <br>Haluaisin rahaa syntymäpäiväkseni.
 <br>
 <br>新しい携帯より、新しいパソコン<strong>がほしい</strong>ですよ。
 <br><i>Atarashii keitai yori, atarashii pasokon ga hoshii desu yo.</i>
 <br>Tahdon ennemmin uuden tietokoneen kuin kännykän!`},
{title: "~ほうがいい / ~hou ga ii / neuvominen",
body: `Kun halutaan neuvoa toista henkilöä, tai kertoa mikä olisi fiksuin tapa toimia, käytetään rakennetta <i>verbin mennyt muoto (~た-muoto)</i> + <strong>
ほう が いい</strong>. Käyttämällä verbin kielteistä preesensin perusmuotoa voidaan puolestaan kertoa mitä ei pitäisi tehdä. Rakenne on melko holhoava ja alentuva,
joten sitä kannattaa käyttää harkiten. Sanomaa voi vähän pehmentää lisäämällä loppuun partikkelin ね tai よ.
<br>宿題をし<strong>たほうがいい</strong>です。
<br><i>Shukudai o shita hou ga ii desu.</i>
<br>Olisi parempi tehdä kotiläksyt.
<br>
<br>ここに住ん<strong>だほうがいい</strong>です。
<br><i>Koko ni sunda hou ga ii desu.</i>
<br>Olisi parempi asua täällä.
<br>
<br>タバコを吸わ<strong>ないほうがいい</strong>ですよ。
<br><i>Tabako o suwanai hou ga ii desu yo.</i>
<br>Olisi parempi olla polttamatta tupakkaa!`},
{title: "~たことがあります / ~ta koto ga arimasu / kokemuksista kertominen",
body: `Kun halutaan kertoa siitä mitä joskus <i>on</i> tai <i>ei ole</i> tehnyt, käytetään rakennetta <strong>verbin mennyt -ta-muoto</strong> + <strong>
こと</strong> + <strong>あります</strong>。こと tarkoittaa yksinkertaisesti asiaa ja muuttaa verbin substantiiviksi. (Esim. 食べること -> <i>syöminen</i>, 
走ること -> <i>juokseminen</i>). Jos halutaan kertoa mitä ei ole koskaan tehnyt, käytetään lopussa kielteistä muotoa ありません。
<br>
スペインに行<strong>ったことがあります</strong>か。
<br><i>Supein ni itta koto ga arimasu ka.</i>
<br>Oletko koskaan käynyt Espanjassa?
<br>
<br>真面目に勉強し<strong>たことがありません</strong>。
<br><i>Majime ni benkyou shita koto ga arimasen.</i>
<br>En ole koskaan opiskellut huolella.
<br>
<br>Jos joku kysyy sinun kokemuksistasi kyseistä lauserakennetta käyttäen, voi tähän vastata yksinkertaisesti joko
<br>myönteisesti: はい、あります。
<br>tai
<br>kielteisesti: いいえ、ありません。`},
{title: "Vastakkainasettelu / kaksoispartikkeli",
body: `Kun on kaksi lausetta yhdistettynä ja halutaan korostaa niiden vastakkaisuutta, käytetään partikkelia は. Alkuperäisestä partikkelista riippuen ne 
esiintyvät joko yhdessä, tai sitten は korvaa kokonaan alkuperäisen.
<br><strong>に -> には</strong>
<br>金曜日<strong>には</strong>仕事に行きますが、土曜日<strong>には</strong>行きません。
<br><i>Kinyoubi ni wa shigoto ni ikimasu ga, doyoubi ni wa ikimasen.</i>
<br>Perjantaina menen töihin, mutta maanantaina en.
<br>
<br><strong>で -> では</strong>
<br>自転車<strong>では</strong>行くことが好きですが、車<strong>では</strong>行くことが好きじゃないです。
<br><i>Jitensha de wa iku koto ga suki desu ga, kuruma de wa iku koto ga suki ja nai desu.</i>
<br>Tykkään kulkea polkypyörällä, mutten autolla.
<br>
<br><strong>へ -> へは</strong>
<br>日本<strong>へは</strong>行きたいですが、フランス<strong>へは</strong>行きたくないです。
<br><i>Nihon e wa ikitai desu ga, furansu e wa ikitakunai desu.</i>
<br>Tahdon mennä Japaniin, mutten tahdo mennä Ranskaan.
<br>
<br><strong>を -> は</strong>
<br>魚<strong>は</strong>食べますが、肉<strong>は</strong>食べません。
<br><i>Sakana wa tabemasu ga, niku wa tabemasen.</i>
<br>Syön kalaa, mutta en syö lihaa.
<br>
<br><strong>が -> は</strong>
<br>スポーツ<strong>は</strong>嫌いですが、サッカー<strong>は</strong>嫌いじゃないです。
<br><i>Supootsu wa kirai desu ga, sakkaa wa kirai ja nai desu.</i>
<br>Vihaan urheilua, mutta en vihaa jalkapalloa.
<br>
<br><strong><i>tyhjä</i> -> は</strong>
<br><i>(esim. 今日___、テレビを見ます)</i>
<br>今日<strong>は</strong>テレビを見ますが、明日<strong>は</strong>テレビを見ません。
<br><i>Kyou wa terebi o mimasu ga, ashita wa terebi o mimasen.</i>
<br>Tänään katson televisiota, mutta huomenna en.`},
{title: "~と思う / ~to omou / mielipiteen esittäminen",
body: `Kun halutaan kertoa <i>mitä mieltä on jostakin</i>, lisätään vain mielipiteen perään ~と思う (tai kohteliaassa muodossa ~と思います). Jos lause 
päättyy substantiiviin tai na-adjektiiviin, lisätään vielä と思う eteen です:n perusmuoto だ. Verbien ja i-adjektiivien tapauksessa ne vain esiintyvät perusmuodossaan.
<br>それは彼の本<strong>だと思います</strong>。
<br><i>Sore wa kare no hon da to omoimasu.</i>
<br>Luulen, että se on hänen kirja.
<br>
<br>私の古い携帯は中々便利<strong>じゃなかったと思ういます</strong>。
<br><i>Watashi no furui keitai wa nakanaka benri janakatta to omoimasu.</i>
<br>Mielestäni vanha puhelimeni ei ollut kovin käytännöllinen.
<br>
<br>映画は面白かった<strong>と思います</strong>。
<br><i>Eiga wa omoshirokatta to omoimasu.</i>
<br>Mielestäni elokuva oli mielenkiintoinen.
<br>
<br>今夜、早く帰らない<strong>と思ういます</strong>。
<br><i>Konya, hayaku kaeranai to omoimasu.</i>
<br>Luulen, etten palaa tänä iltana aikaisin kotiin.
<br>
<br>Kun halutaan kysyä toisen mielipidettä:
<br>あなたはそのケーキを<strong>どう</strong>思いますか。
<br><i>Anata wa sono keeki wo dou omoimasu ka.</i>
<br>Mitä mieltä olet siitä kakusta?
<br>
<br>Kun kerrotaan <i>mitä haluaisi tehdä</i> (verbin -たい-muoto) tulevaisuudessa, lisätään perään usein 思う-rakenne kestomuodossaan.
<br>数年後、世界の旅行に行きたい<strong>と思っています</strong>。
<br><i>Suu nen go, sekai no ryokou ni ikitai to omotte imasu.</i>
<br>Ajattelen, että haluaisin lähteä maailmanmatkalle joidenkin vuosien kuluttua.`},
{title: "Siteeraus ja tiedon välittäminen",
body: `Edellisen osan lauserakennetta voi käyttää myös moneen muuhun tarkoitukseen vaihtamalla ainoastaan lopun 思う johonkin toiseen verbiin. Esimerkiksi jos 
halutaan siteerata jotain, korvataan se verbillä 言う (いう) eli sanoa.
<br>彼は明日来る<strong>と言いました</strong>。
<br><i>Kare wa ashita kuru to iimashita.</i>
<br>Hän sanoi tulevansa huomenna.
<br>
<br>Jos halutaan siteerata suoraan kirjaimellisesti jotakin, löytyy japanista sille omanlaisensa lainausmerkit: 「」
<br>彼女は「コーヒーはあまり好きじゃない」<strong>と言いました</strong>。
<br><i>Kanojo wa "koohii wa amari suki janai" to iimashita.</i>
<br>Hän sanoi: "En pidä juurikaan kahvista."
<br>
<br>Rakenteen perustyylistä muotoa (ja yleensä ilman kanjia!) käytetään usein kertomaan miksi jotakin kutsutaan.
<br>これは「ハリーポッター」<strong>という</strong>本です。
<br><i>Kore wa "Harii Pottaa" to iu hon desu.</i>
<br>Tämä on Harry Potter -niminen kirja.
<br>
<br>Jos halutaan välittää tieto siitä mitä <i>joku on aiemmin kertonut</i>, ja tieto on yhä paikkaansa pitävää ja muuttumatonta - käytetään rakenteesta 
kestomuotoa ~と言っている
<br>友達は歌うのが下手だ<strong>と言っていました</strong>。
<br><i>Tomodachi wa utau no ga heta da to itte imashita.</i>
<br>Ystäväni kertoi olevansa huono laulaja.`}]

export {grammar};