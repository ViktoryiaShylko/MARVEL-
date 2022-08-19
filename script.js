let heroesJSON = `[{
    "name": "Бэтмен",
    "userName": "batman",
    "photo": "./assets/style/img/batman.jpeg",
    "universe": "DC Comics",
    "alterego": "Брюс Уэйн",
    "occupation": "борец с преступностью, филантроп, миллиардер",
    "friends": "Робин, Бэтгерл",
    "superpower": "интеллект, обширные познания, знания боевых искусств, ловкость",
    "more": "По популярности человек-летучая мышь может сравниться только с Суперменом. Его образ кажется очень мистическим и мрачным: черный костюм с развевающимся плащом, устрашающий Бэтмобиль, штаб-квартира в сырой пещере. Его биография настолько же темна, как и образ. В детстве у него на глазах убили родителей, и юный Брюс поклялся всеми силами защищать родной Готэм от преступности. Брюс знаменит, несмотря на пожилой возраст: первый выпуск с его участием вышел аж в 1939 году. С каждым годом популярность только крепнет. Большую роль в этом сыграли экранизации: «Темный рыцарь», сериал «Готэм» и несколько одноименных картин. Главная причина такой любви среди фанатов — мысль, что каждый может стать Бэтменом."
},{
    "name": "Супермен",
    "userName": "superman",
    "photo": "./assets/style/img/superman.jpeg",
    "universe": "DC Comics",
    "alterego": "Кларк Кент",
    "occupation": "борец за справедливость",
    "friends": "собака Крипто",
    "superpower": "непробиваемость, суперсила, полет, самоисцеление, суперзрение и суперслух, классный костюм",
    "more": "полная противоположность своему противнику Бэтмену. Если Брюс Уэйн был простым человеком и стал героем, то Супермен героем родился, но вынужден был изображать выходца из бедной канзасской семьи. Последний представитель планеты Криптон был отправлен на Землю прямо перед тем, как его родина была уничтожена. "
},{
    "name": "Железный человек",
    "userName": "ironman",
    "photo": "./assets/style/img/ironman.jpeg",
    "universe": "Marvel Comics",
    "alterego": "Тони Старк",
    "occupation": "гений, миллиардер, плейбой, филантроп",
    "friends": "Мстители",
    "superpower": "высокий уровень интеллекта, широкие познания науки и техники, связь со всемирной паутиной, бронекостюмы",
    "more": "пожалуй, самый популярный современный супергерой. У него много общего с мрачной птицей ночи Бэтменом: оба потеряли родителей в детстве, стали борцами с преступностью без особых сверхсил, невероятно богатые. Только если Бэтменом восхищаются, то Тони Старка — обожают :) То ли дело в шикарной актерской игре Роберта Дауни мл., который выбил роль у Николаса Кейджа и Тома Круза, то ли в хорошо прописанном персонаже."
},{
    "name": "Человек-паук",
    "userName": "spiderman",
    "photo": "./assets/style/img/spiderman.jpeg",
    "universe": "Marvel Comics",
    "alterego": "Питер Паркер",
    "occupation": "борец за справедливость, студент, фотограф",
    "friends": " Мстители, Фантастическая четверка, Люди Икс",
    "superpower": "сверхчеловеческие рефлексы, «паучье чутье», способность прилепляться к твердым поверхностям, производство паутины",
    "more": "Человек-паук родился от потребности Marvel Comics создать героя-подростка. Другие супергерои вроде Бэтмена и Супермена — взрослые мужчины, и целевая аудитория не видела в них примеры для подражания. Пятнадцатилетний Питер Паркер дал понять всем тинейджерам Земли, что можно и злодеев уничтожить, и на красавице жениться. Для этого даже не обязательно быть суперкрасавчиком! Всего лишь нужен укус паучка. Питер не сразу использовал свои силы во благо людей: изначально он хотел делать на них деньги, участвуя в нелегальных боях без правил. Затем его любимый дядя Бен умер от рук грабителя, и подросток поклялся, что очистит свой родной Нью-Йорк ото зла. Однако спустя время подросток понял, что одной клятвы недостаточно и что «с великой силой приходит великая ответственность»."
},{
    "name": "Капитан Америка",
    "userName": "cap",
    "photo": "./assets/style/img/cap.jpeg",
    "universe": "Marvel Comics",
    "alterego": "Стивен Роджерс",
    "occupation": "супер-солдат",
    "friends": "Мстители",
    "superpower": "сила, выносливость, бессмертие, быстрая регенерация, мастерство скрытности и боя",
    "more": "Капитан Америка — персонаж, целеноправленно созданный, чтобы воплощать идеалы патриотизма. Потому он был особенно популярный во время Второй мировой войны. В комиксах обращение «Капитан Америка» применяется к любому, кто выбран правительством США. Больше всего оно закрепилось именно за Стивом Роджерсом. Стив родился в 1917 году в семье ирландских эмигрантов Сары и Джозефа Роджерсов. В детстве он был очень слабым юношей и постоянно подвергался насмешкам со стороны других ребят. Ирландские корни давали о себе знать, потому парень от драки не лез. В начале Второй мировой войны Стивен стремился попасть на фронт. Естественно, из-за здоровья ему отказывали."
},{
    "name": "Тор",
    "userName": "tor",
    "photo": "./assets/style/img/tor.jpeg",
    "universe": "Marvel Comics",
    "alterego": "нет; полное имя — Тор Одинсон",
    "occupation": "борец за справедливость, скандинавский бог",
    "friends": "Мстители",
    "superpower": "все, что может бог, плюс молот Мьелнир",
    "more": "персонаж Тора основан на образе одноименного скандинавского бога. Тор во вселенной Marvel — родной сын Одина и древнейшей богини Геи. После рождения сына Один забрал его в Асгард, где растил вместе со своей женой, богиней Фригг. Последнюю Тор всегда считал своей настоящей матерью и лишь много позже узнал правду о своем рождении. Стоит сказать, что до нынешнего Тора в исполнении Криса Хемсворта у супергероя было несколько воплощений. В одном из них он погиб в схватке с мифическим змеем Мидгардом. Это привело к Рагнареку — некоему апокалипсису в скандинавской мифологии. "
},{
    "name": "Халк",
    "userName": "halk",
    "photo": "./assets/style/img/halk.jpeg",
    "universe": "Marvel Comics",
    "alterego": "Брюс Беннер",
    "occupation": "супергерой, борец за справедливость, ученый-биохимик",
    "friends": "Мстители",
    "superpower": "сверхчеловеческая сила искорость, выносливость, полет",
    "more": "идею создания Халка как персонажа можно отнести к фантастической новелле «Странная история доктора Джекила и мистера Хайда», в которой ученый не может примириться со своим демоническим альтер эго. Прошлое у Халка — хуже некуда: отец Брюса страдал от алкоголизма и приступов ярости, а мать пыталась всеми силами уберечь сына от гнева своего мужа. Она погибла, защищая своего единственного ребенка от его побоев. Пронеся через все детство тяжелый психологический груз, Брюс вырос в чрезвычайно одаренного, но замкнутого юношу. Хотя Брюс не мог уважать отца, но пошел в науке по его стопам и выбрал ядерную физику. Во время эксперимента он ввел себе пробную сыворотку и подверг себя воздействию большого количества гамма-радиации. Беннер превратился в мускулистого неуправляемого гиганта, который крушил все вокруг и не понимал, что происходит. Так имя Халка стало нарицательным для людей, который не могут держать себя в руках."
},{
    "name": "Чудо-женщина",
    "userName": "wonderwoman",
    "photo": "./assets/style/img/wonderwoman.jpeg",
    "universe": "DC Comics",
    "alterego": "Диана Принс",
    "occupation": "супергероиня, секретарь-референт",
    "friends": "Лига Справедливости, Бэтмен, Супермен",
    "superpower": "сверхчеловеческая сила искорость, выносливость, полет",
    "more": "пора бы разбавить эту мужскую вечеринку по-настоящему крутой девчонкой :) Принцесса-амозонка родилась на мистическом острове Темескира, расположенном в центре Бермудского треугольника, где пропадают самолеты. Свое настоящее имя — Диана — она получила в честь древнегреческой богини охоты, а суперспособности — от богини любви Афродиты. Растили героиню в исключительно женском обществе, поэтому Чудо-женщина часто появляется в культуре как символ феминизма. У Дианы есть супер-снаряжение: лассо истины и тиара. Первое было сковано богом огня Гефестом, и оно никогда не промахивается. Человек, попавший в его петлю, неизбежно расскажет свои секреты, вспомнит забытое и даже подчинится приказам. Тиара же работает как метательное оружие, способное рассечь что угодно. Корона со звездой в центре символизирует патриотизм американской героини и служит стильным аксессуаром :)"
},{
    "name": "Черная вдова",
    "userName": "widow",
    "photo": "./assets/style/img/widow.jpeg",
    "universe": "Marvel Comics",
    "alterego": "Наташа Романофф",
    "occupation": "супергероиня, шпионка",
    "friends": "Мстители",
    "superpower": "пик человеческого физического потенциала, замедленное старение, знание многих языков",
    "more": "супергероиня российского происхождения родилась предположительно в 1928 году в Сталинграде. Во время Второй мировой войны она потеряла родителей и была спасена из горящего дома советским солдатом. Тот на некоторое время стал ее опекуном. Повзрослев, Наташа попала в организацию «Красная Комната», где прошла многочисленные тренировки, а именно — была частью шпионской программы. Там же ей вживили сыворотку Суперсолдата — как у Капитана Америки, но в советском варианте. Благодаря ей Наташа может использовать максимальные возможности своего организма: силу, гибкость, скорость, ловкость и т. д. Также сыворотка дает эффект замедленного старения. По мнению фанатов, самое главное преимущество Черной Вдовы — то, что ее сыграла красотка Скарлетт Йоханссон :) "
},{
    "name": "Дэдпул",
    "userName": "deadpool",
    "photo": "./assets/style/img/deadpool.jpeg",
    "universe": "Marvel Comics",
    "alterego": "Уэйд Уинстон Уилсон",
    "occupation": "антигерой, наемник",
    "friends": " частично Мстители, Человек-паук, Росомаха",
    "superpower": "высокий болевой порог, регенерация и бессмертие, сверхчеловеческая иммунная система",
    "more": "как и Росомаха из Людей Икс, Дэдпул был подвергнут опытам по программе «Оружие Икс». Ученые попытались исцелить его рак, привив его клеткам способность к регенерации. Как и всегда в комиксах, что-то пошло не так, и Дэдпул остался изуродованным и психически нестабильным. Это единственный супергерой из списка, который однозначно не на стороне добра. Дэдпул наслаждается насилием. Первоначально появившись в основной Вселенной Marvel, он получил альтернативные варианты в других реальностях Мультивселенной. Что оставалось неизменным — его циничное, черное чувство юмора: за него Дэдпула прозвали «Болтливым наемником»."
}]`;

document.addEventListener("DOMContentLoaded", function (event) {
    let heroes = JSON.parse(heroesJSON);
    let heroesCards = '';
            for (let hero of heroes) {
                heroesCards += `<div class="card">
                    <div class="card__name" id="${hero.userName}">${hero.name}</div>
                    <img class="card__img" src="${hero.photo}" alt="image">
                    <div class="card__content">
                        <p class="card__text">Вселенная: ${hero.universe}</p>
                        <p class="card__text">Альтер эго: ${hero.alterego}</p>
                        <p class="card__text">Род деятельности: ${hero.occupation}</p>
                        <p class="card__text">Друзья: ${hero.friends}</p>
                        <p class="card__text">Суперсилы: ${hero.superpower}</p>
                    </div>
                    <div class="form__item">
                      <div class="rating">
                       <div class="rating__body">
                          <div class="rating__active"></div>
                          <div class="rating__items">
                            <input type="radio" class="rating__item" id="star-5" name="rating" value="1">
                            <input type="radio" class="rating__item" id="star-4" name="rating" value="2">
                            <input type="radio" class="rating__item" id="star-3" name="rating" value="3">
                            <input type="radio" class="rating__item" id="star-2" name="rating" value="4">
                            <input type="radio" class="rating__item" id="star-1" name="rating" value="5">
                          </div>
                        </div>  
                        <div class="rating__value">3.6</div>
                      </div>
                    </div>
                </div>`
            }
            document.querySelector('.card-container').innerHTML = heroesCards;
    });

    