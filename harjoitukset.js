let harjoitukset = [{teht: `Tehtävät on jaettu kolmeen osaan kielioppiasioiden mukaisessa järjestyksessä. Lopussa vastaukset voi paljastaa klikkaamalla.
                    <br>
                    <br>1a. 宿題を__________遊びに行きます。(終える おえる viimeistellä / saattaa päätökseen)
                    <br><i>Shukudai o __________ asobi ni ikimasu.</i>
                    <br>Menen leikkimään viimeisteltyäni läksyt.
                    <br>
                    <br>1b. コーヒーを__________お風呂に入ります。(飲む のむ juoda)
                    <br><i>Koohii o __________ ofuro ni hairimasu.</i>
                    <br>Juotuani kahvin, menen kylpyyn.
                    <br>
                    <br>1c. 映画を__________買い物に行きましょう。(見る みる katsoa)
                    <br><i>Eiga o __________ kaimono ni ikimashou.</i>
                    <br>Lähdetään shoppailemaan katsottuamme elokuvan!
                    <br>
                    <br>2a. 靴を__________ですよ。(脱ぐ ぬぐ riisua)
                    <br><i>Kutsu o __________ desu yo.</i>
                    <br>Voit riisua kenkäsi.
                    <br>
                    <br>2b. 写真を__________ですか。(採る とる ottaa valokuva)
                    <br><i>Shashin o __________ desu ka.</i>
                    <br>Onko ok, jos otan valokuvan?
                    <br>
                    <br>2c. この椅子に__________ですか。(座る すわる istua)
                    <br><i>Kono isu ni __________ desu ka.</i>
                    <br>Voinko istua tälle tuolille?
                    <br>3a. 危険な場所で__________。(遊ぶ あそぶ leikkiä)
                    <br><i>Kiken na basho de __________.</i>
                    <br>Ei saa leikkiä vaarallisissa paikoissa.
                    <br>
                    <br>3b. テスト中に携帯電話を__________。(使う つかう käyttää)
                    <br><i>Tesuto chuu ni keitai denwa o __________</i>
                    <br>Kännykkää ei saa käyttää kesken kokeen.
                    <br>
                    <br>3c. ゴミを道に__________。(捨てる すてる heittää pois)
                    <br><i>Gomi o michi ni __________.</i>
                    <br>Roskia ei saa heittää kadulle.
                    <br>
                    <br>3d. 道路で__________。(走る はしる juosta)
                    <br><i>Douro de __________.</i>
                    <br>Autotiellä ei saa juosta.
                    <br><br>Vastaukset:<br>`,
                    vast: `1a. 宿題を<strong>終えてから</strong>遊びに行きます。
                    <br>1b. コーヒーを<strong>飲んでから</strong>お風呂に入ります。
                    <br>1c. 映画を<strong>見てから</strong>買い物に行きましょう。
                    <br>
                    <br>2a. 靴を<strong>脱いでもいい</strong>ですよ。
                    <br>2b. 写真を<strong>撮ってもいい</strong>ですか。
                    <br>2c. この椅子に<strong>座ってもいい</strong>ですか。
                    <br>
                    <br>! いけません, いけない ja だめ ovat kaikki hyväksyttyjä
                    <br>3a. 危険な場所で<strong>遊んではいけません</strong>。
                    <br>3b. テスト中に携帯電話を<strong>使ってはいけません</strong>。
                    <br>3c. ゴミを道に<strong>捨ててはいけません</strong>。
                    <br>3d. 道路で<strong>走ってはいけません。</strong>`},
                {teht: `Adjektiivien ja lauseiden ketjuttaminen on yhdistetty samaan tehtävään.
                <br>
                <br>1a. あの子は_____、_____ですね。(元気 げんき energinen / 明るい あかるい iloinen)
                <br><i>Ano ko wa _____, _____desu ne.</i>
                <br>Tuo lapsi on energinen ja hilpeä, vai mitä?
                <br>
                <br>1b. 絵を__________、音楽を聴きました。(描く かく piirtää)
                <br><i>E o __________, ongaku o kikimashita</i>
                <br>Piirsin kuvan ja kuuntelin musiikkia.
                <br>
                <br>1c. この本は__________、役に立ちます。(面白い おもしろい mielenkiintoinen)
                <br><i>Kono hon wa __________, yaku ni tachimasu.</i>
                <br>Tämä kirja on mielenkiintoinen ja hyödyllinen.
                <br>
                <br>1d. 先週開いたカフェは_____、_____です。(安い やすい halpa / 静か しずか hiljainen)
                <br><i>Senshuu hiraita kafe wa _____, _____ desu.</i>
                <br>Viime viikolla avattu kahvila on halpa ja hiljainen.
                <br>
                <br>2a. 電車__________バス_____便利です。
                <br><i>Densha __________ basu _____ benri desu.</i>
                <br>Juna on kätevämpi kuin bussi.
                <br>
                <br>2b. 日本語__________英語_____難しいです。
                <br><i>Nihongo __________ eigo _____ muzukashii desu.</i>
                <br>Japani on vaikeampaa kuin englanti.
                <br>
                <br>2c. 彼_____私_____背が高いです。
                <br><i>Kare _____ watashi _____ se ga takai desu.</i>
                <br>Hän on pidempi kuin minä.
                <br>
                <br>3a. 彼は友達( _____ )_____、_____優しい人です。
                <br><i>Kare wa tomodachi ( _____ ) _____, _____ yasashii hito desu.</i>
                <br>Hän on ystävällisin kaikista kavereistani.
                <br>
                <br>3b. あのカフェ( _____ )_____、このケーキ__________美味しいです。
                <br><i>Ano kafe ( _____ )_____, kono keeki __________ oishii desu.</i>
                <br>Tuon kahvilan (kakuista), tämä kakku on kaikista herkullisin.
                <br>
                <br>3c. このパソコン__________速いです。
                <br><i>Kono pasokon _________ hayai desu.</i>
                <br>Tämä tietokone on kaikista nopein.
                <br>
                <br>Vastaukset:`,
            vast: `1a. あの子は<strong>元気で、明るい</strong>ですね。
                <br>1b. 絵を<strong>描いて</strong>、音楽を聴きました。
                <br>1c. この本は<strong>面白くて</strong>、役に立ちます。
                <br>1d. 先週開いたカフェは<strong>安くて、静か</strong>です。
                <br>
                <br>2a. 電車<strong>のほうが</strong>バス<strong>より</strong>便利です。
                <br>2b. 日本語<strong>のほうが</strong>英語<strong>より</strong>難しいです。
                <br>2c. 彼<strong>は</strong>私<strong>より</strong>背が高いです。
                <br>
                <br>3a. 彼は友達( <strong>の中</strong> )<strong>で、いちばん</strong>優しい人です。
                <br>3b. あのカフェ( <strong>の中</strong> )<strong>で</strong>、このケーキ<strong>がいちばん</strong>美味しいです。
                <br>3c. このパソコン<strong>がいちばん</strong>速いです。`},
                {teht: `Taivuta seuraavat verbit myönteiseen ja negatiiviseen perusmuotoon. Tehtävässä on sekaisin jokaisen kolmen verbiryhmän verbejä.
                <br>1a.
                <br>呼びます（よびます）
                <br>会います（あいます）
                <br>します
                <br>寝ます（ねます）
                <br>帰ります（かえります）
                <br>勝ちます（かちます）
                <br><br>Taivuta seuraavat verbit myönteiseen ます-muotoon.
                <br>1b.
                <br>歌わない（うたわない）
                <br>ある
                <br>始める（はじめる）
                <br>来ない（こない）
                <br>返す（かえす）
                <br>働く（はたらく）
                <br>
                <br>2a. 明日は__________、遊べません。(忙しい いそがしい kiireinen)
                <br><i>Ashita wa __________, asobemasen.</i>
                <br>Huomenna olen kiireinen, joten en ehdi hengailemaan.
                <br>
                <br>2b. 今日は学校が__________、公園に行きます。(ない ei ole)
                <br><i>Kyou wa gakkou ga __________, kouen ni ikimasu.</i>
                <br>Tänään ei ole koulua, joten menen puistoon.
                <br>
                <br>2c. 湖は__________、よく見に行きます。(綺麗 きれい kaunis)
                <br><i>Mizu'umi wa __________, yoku mi ni ikimasu.</i>
                <br>Järvi on kaunis, joten menen usein katselemaan sitä.
                <br>
                <br>2d. __________、料理を作るのが好きです。(チェフ kokki)
                <br><i>__________, ryouri o tsukuru no ga suki desu.</i>
                <br>Olen kokki, joten tykkään laittaa ruokaa.
                <br>
                <br>2e. まだ__________、釣りをしたくないです。(夏 なつ kesä)
                <br><i>Mada __________, tsuri ni shitakunai desu.</i>
                <br>Vielä ei ole kesä, joten en tahdo kalastaa.
                <br>
                <br>2f. たくさんのお菓子を__________、お腹が痛いです。(食べた たべた söi)
                <br><i>Takusan no okashi o __________, onaka ga itai desu.</i>
                <br>Söin paljon karkkia, joten mahani on kipeä.
                <br>
                <br>3a. １２０才__________。
                <br><i>Hyaku ni-juu sai __________.</i>
                <br>Tahdon tulla 120-vuotiaaksi.
                <br>
                <br>3b. 私は運転手__________。
                <br><i>Watashi wa untenshu __________.</i>
                <br>Minusta ei tule autokuskia.
                <br>
                <br>3c. 冬は夜５時から__________。(暗い くらい pimeää)
                <br><i>Fuyu wa yoru go-ji kara __________.</i>
                <br>Talvella tulee pimeää jo kello viideltä.
                <br>
                <br>3d. __________。(静か しずか hiljainen)
                <br><i>__________.</i>
                <br>Ei tullut hiljaista.
                <br><br>Vastaukset:`,
                vast: `
                1a.
                <br>呼<strong>ぶ</strong> / 呼<strong>ば</strong>ない
                <br>会<strong>う</strong> / 会<strong>わ</strong>ない
                <br><strong>する</strong> / し<strong>ない</strong>
                <br>寝<strong>る</strong> / 寝<strong>ない</strong>
                <br>帰<strong>る</strong> / 帰<strong>ら</strong>ない
                <br>勝<strong>つ</strong> / 勝<strong>た</strong>ない
                <br>
                <br>1b.
                <br>歌<strong>います</strong>
                <br>あ<strong>ります</strong>
                <br>始め<strong>ます</strong>
                <br>来<strong>ます</strong>
                <br>返<strong>します</strong>
                <br>働<strong>きます</strong>
                <br>
                <br>2a. 明日は忙しい<strong>ので</strong>、遊べません。
                <br>2b. 今日は学校がない<strong>ので</strong>、公園に行きます。
                <br>2c. 湖は綺麗<strong>なので</strong>、よく見に行きます。
                <br>2d. チェフ<strong>なので</strong>、料理を作るのが好きです。
                <br>2e. まだ夏<strong>じゃないので</strong>、釣りをしたくないです。
                <br>2f. たくさんのお菓子を食べた<strong>ので</strong>、お腹が痛いです。
                <br>
                <br>3a. １２０才<strong>になりたい</strong>です。
                <br>3b. 私は運転手<strong>になりません</strong>。
                <br>3c. 冬は夜５時から暗<strong>くなります</strong>。
                <br>3d. 静か<strong>になりませんでした</strong>。`}]

export {harjoitukset}