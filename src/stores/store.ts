import { defineStore } from 'pinia'
import moment from 'moment'

export const Store = defineStore('store', {
  state: () => {
    return {
      Nav_bar_position: false,
      login_popup:false,
      setts_popup:false,
      isUser:false,
      userAvatar:'',
      db_circlednews: [
        { id: 1, src: 'src/assets/circle_news/0579ae925b08b902f0a01c5b83c24fa4.jpeg' },
        { id: 2, src: 'src/assets/circle_news/073ff24f70d49cdd13f65574835670df.jpeg' },
        { id: 3, src: 'src/assets/circle_news/0579ae925b08b902f0a01c5b83c24fa4.jpeg' },
        { id: 4, src: 'src/assets/circle_news/0579ae925b08b902f0a01c5b83c24fa4.jpeg' },
        { id: 5, src: 'src/assets/circle_news/cf0551ef0c16735d7fa2ae9c65d4becf.jpeg' }
      ],
      db_allnews: [
        {
          id: 1,
          img: 'src/assets/circle_news/cf0551ef0c16735d7fa2ae9c65d4becf.jpeg',
          date_time: moment().format('LT'),
          date_day: moment().format('L'),
          views: 20,
          creator: 'Lorem ipsum',
          creatorUID: 1,
          writting: exampleWritting,
          prewiev: 'ВОЗ: молодые жители Европы стали меньше курить, но пристрастились .....',
          title: 'ВОЗ: молодые жители Европы стали меньше курить'
        },
        {
          id: 2,
          img: 'src/assets/circle_news/0579ae925b08b902f0a01c5b83c24fa4.jpeg',
          date_time: moment().format('LT'),
          date_day: moment().format('L'),
          views: 20,
          creator: 'Lorem ipsum',
          creatorUID: 1,
          writting: exampleWritting,
          prewiev: 'ВОЗ: молодые жители Европы стали меньше курить, но пристрастились .....',
          title: 'ВОЗ: молодые жители Европы стали меньше курить'
        },
        {
          id: 3,
          img: 'src/assets/circle_news/cf0551ef0c16735d7fa2ae9c65d4becf.jpeg',
          date_time: moment().format('LT'),
          date_day: moment().format('L'),
          views: 20,
          creator: 'Lorem ipsum',
          creatorUID: 1,
          writting: exampleWritting,
          prewiev: 'ВОЗ: молодые жители Европы стали меньше курить, но пристрастились .....',
          title: 'ВОЗ: молодые жители Европы стали меньше курить'
        },
        {
          id: 4,
          img: 'src/assets/circle_news/0579ae925b08b902f0a01c5b83c24fa4.jpeg',
          date_time: moment().format('LT'),
          date_day: moment().format('L'),
          views: 20,
          creator: 'Lorem ipsum',
          creatorUID: 1,
          writting: exampleWritting,
          prewiev: 'ВОЗ: молодые жители Европы стали меньше курить, но пристрастились .....',
          title: 'ВОЗ: молодые жители Европы стали меньше курить'
        },
        {
          id: 5,
          img: 'src/assets/circle_news/cf0551ef0c16735d7fa2ae9c65d4becf.jpeg',
          date_time: moment().format('LT'),
          date_day: moment().format('L'),
          views: 20,
          creator: 'Lorem ipsum',
          creatorUID: 1,
          writting: exampleWritting,
          prewiev: 'ВОЗ: молодые жители Европы стали меньше курить, но пристрастились .....',
          title: 'ВОЗ: молодые жители Европы стали меньше курить'
        },
        {
          id: 6,
          img: 'src/assets/circle_news/0579ae925b08b902f0a01c5b83c24fa4.jpeg',
          date_time: moment().format('LT'),
          date_day: moment().format('L'),
          views: 20,
          creator: 'Lorem ipsum',
          creatorUID: 1,
          writting: exampleWritting,
          prewiev: 'ВОЗ: молодые жители Европы стали меньше курить, но пристрастились .....',
          title: 'ВОЗ: молодые жители Европы стали меньше курить'
        },
        {
          id: 7,
          img: 'src/assets/circle_news/0579ae925b08b902f0a01c5b83c24fa4.jpeg',
          date_time: moment().format('LT'),
          date_day: moment().format('L'),
          views: 20,
          creator: 'Lorem ipsum',
          creatorUID: 1,
          writting: exampleWritting,
          prewiev: 'ВОЗ: молодые жители Европы стали меньше курить, но пристрастились .....',
          title: 'ВОЗ: молодые жители Европы стали меньше курить'
        },
        {
          id: 8,
          img: 'src/assets/circle_news/0579ae925b08b902f0a01c5b83c24fa4.jpeg',
          date_time: moment().format('LT'),
          date_day: moment().format('L'),
          views: 20,
          creator: 'Lorem ipsum',
          creatorUID: 1,
          writting: exampleWritting,
          prewiev: 'ВОЗ: молодые жители Европы стали меньше курить, но пристрастились .....',
          title: 'ВОЗ: молодые жители Европы стали меньше курить'
        },
        {
          id: 9,
          img: 'src/assets/circle_news/0579ae925b08b902f0a01c5b83c24fa4.jpeg',
          date_time: moment().format('LT'),
          date_day: moment().format('L'),
          views: 20,
          creator: 'Lorem ipsum',
          creatorUID: 1,
          writting: exampleWritting,
          prewiev: 'ВОЗ: молодые жители Европы стали меньше курить, но пристрастились .....',
          title: 'ВОЗ: молодые жители Европы стали меньше курить'
        },
        {
          id: 10,
          img: 'src/assets/circle_news/0579ae925b08b902f0a01c5b83c24fa4.jpeg',
          date_time: moment().format('LT'),
          date_day: moment().format('L'),
          views: 20,
          creator: 'Lorem ipsum',
          creatorUID: 1,
          writting: exampleWritting,
          prewiev: 'ВОЗ: молодые жители Европы стали меньше курить, но пристрастились .....',
          title: 'ВОЗ: молодые жители Европы стали меньше курить'
        },
        {
          id: 11,
          img: 'src/assets/circle_news/0579ae925b08b902f0a01c5b83c24fa4.jpeg',
          date_time: moment().format('LT'),
          date_day: moment().format('L'),
          views: 20,
          creator: 'Lorem ipsum',
          creatorUID: 1,
          writting: exampleWritting,
          prewiev: 'ВОЗ: молодые жители Европы стали меньше курить, но пристрастились .....',
          title: 'ВОЗ: молодые жители Европы стали меньше курить'
        },
        {
          id: 12,
          img: 'src/assets/circle_news/0579ae925b08b902f0a01c5b83c24fa4.jpeg',
          date_time: moment().format('LT'),
          date_day: moment().format('L'),
          views: 20,
          creator: 'Lorem ipsum',
          creatorUID: 1,
          writting: exampleWritting,
          prewiev: 'ВОЗ: молодые жители Европы стали меньше курить, но пристрастились .....',
          title: 'ВОЗ: молодые жители Европы стали меньше курить'
        },
        {
          id: 13,
          img: 'src/assets/circle_news/0579ae925b08b902f0a01c5b83c24fa4.jpeg',
          date_time: moment().format('LT'),
          date_day: moment().format('L'),
          views: 20,
          creator: 'Lorem ipsum',
          creatorUID: 1,
          writting: exampleWritting,
          prewiev: 'ВОЗ: молодые жители Европы стали меньше курить, но пристрастились .....',
          title: 'ВОЗ: молодые жители Европы стали меньше курить'
        },
        {
          id: 14,
          img: 'src/assets/circle_news/0579ae925b08b902f0a01c5b83c24fa4.jpeg',
          date_time: moment().format('LT'),
          date_day: moment().format('L'),
          views: 20,
          creator: 'Lorem ipsum',
          creatorUID: 1,
          writting: exampleWritting,
          prewiev: 'ВОЗ: молодые жители Европы стали меньше курить, но пристрастились .....',
          title: 'ВОЗ: молодые жители Европы стали меньше курить'
        },
        {
          id: 15,
          img: 'src/assets/circle_news/0579ae925b08b902f0a01c5b83c24fa4.jpeg',
          date_time: moment().format('LT'),
          date_day: moment().format('L'),
          views: 100,
          creator: 'Lorem ipsum',
          creatorUID: 1,
          writting: exampleWritting,
          prewiev: 'ВОЗ: молодые жители Европы стали меньше курить, но пристрастились .....',
          title: 'ВОЗ: молодые жители Европы стали меньше курить'
        },
        {
          id: 16,
          img: 'src/assets/circle_news/0579ae925b08b902f0a01c5b83c24fa4.jpeg',
          date_time: moment().format('LT'),
          date_day: moment().format('L'),
          views: 100,
          creator: 'Lorem ipsum',
          creatorUID: 1,
          writting: exampleWritting,
          prewiev: 'ВОЗ: молодые жители Европы стали меньше курить, но пристрастились .....',
          title: 'ВОЗ: молодые жители Европы стали меньше курить'
        },
        {
          id: 17,
          img: 'src/assets/circle_news/0579ae925b08b902f0a01c5b83c24fa4.jpeg',
          date_time: moment().format('LT'),
          date_day: moment().format('L'),
          views: 100,
          creator: 'Lorem ipsum',
          creatorUID: 1,
          writting: exampleWritting,
          prewiev: 'ВОЗ: молодые жители Европы стали меньше курить, но пристрастились .....',
          title: 'ВОЗ: молодые жители Европы стали меньше курить'
        }
      ],
      db_users: [
        {
          userUID: 1,
          user_name: 'Дилором Алиева',
          user_career: 'Писатель',
          user_birth: '2 ноября, 1974 ( 46 лет)',
          birth_place: 'Черняховск, СССР (Россия)',
          user_avatar: 'src/assets/user/user_avatar/deeb8f5d8ac8b3780b8ad0d1791ed9e6.jpeg',
          user_publics: [
            {
              id: 1,
              img: 'src/assets/circle_news/0579ae925b08b902f0a01c5b83c24fa4.jpeg',
              title: `Посланник Генерального секретаря ООН по делам молодежи Джаятма Викраманаяке приняла участие в презентации созданной по инициативе Узбекистана Группе друзей по правам молодежи. В рамках этого международного проекта планируется продвижение прав молодых жителей планеты и расшире...`,
              shortTitle: 'Посланник Генерального секретаря ООН по делам молодежи....',
              date_time: moment().format('LT'),
              date_day: moment().format('L'),
              views: 20,
              tag: 'Права человека'
            },
            {
              id: 2,
              img: 'src/assets/circle_news/0579ae925b08b902f0a01c5b83c24fa4.jpeg',
              title: `Посланник Генерального секретаря ООН по делам молодежи Джаятма Викраманаяке приняла участие в презентации созданной по инициативе Узбекистана Группе друзей по правам молодежи. В рамках этого международного проекта планируется продвижение прав молодых жителей планеты и расшире...`,
              shortTitle: 'Посланник Генерального секретаря ООН по делам молодежи....',
              date_time: moment().format('LT'),
              date_day: moment().format('L'),
              views: 20,
              tag: 'Права человека'
            },
            {
              id: 3,
              img: 'src/assets/circle_news/0579ae925b08b902f0a01c5b83c24fa4.jpeg',
              title: `Посланник Генерального секретаря ООН по делам молодежи Джаятма Викраманаяке приняла участие в презентации созданной по инициативе Узбекистана Группе друзей по правам молодежи. В рамках этого международного проекта планируется продвижение прав молодых жителей планеты и расшире...`,
              shortTitle: 'Посланник Генерального секретаря ООН по делам молодежи....',
              date_time: moment().format('LT'),
              date_day: moment().format('L'),
              views: 20,
              tag: 'Права человека'
            }
          ]
        }
      ]
    }
  },
  actions: {}
})
const exampleWritting = `Постановлением Кабинета Министров № 294 утверждены Положение о Молодежной
индустриально-предпринимательской зоне и Фонде поддержки молодых предпринимателей.
<br /><br />Молодые предприниматели, желающие разместить свои инвестиционные проекты в
молодежных индустриальных зонах, должны предоставить необходимые документы в районные
(городские) управления инвестиций и внешней торговли. <br /><br />
Содействие реализации результатов молодежных предпринимательских инициатив,
стартап-проектов и прикладных исследований, комплексная поддержка проектов молодых
предпринимателей в сфере промышленности и услуг, а также в Узбекистане в 2017-2021 гг. Для
обеспечения реализации задач, изложенных в Государственной программе реализации Стратегии
действий по пяти приоритетным направлениям развития республики в «Год поддержки молодежи и
здоровья населения»: <br /><br />
<strong>1.</strong> Министерство инвестиций и внешней торговли, Министерство
экономического развития и сокращения бедности, Министерство финансов, Торгово-промышленная
палата и Агентство по делам молодежи создают молодежные промышленные и деловые зоны в
областях, перечисленных в Приложении 1. (далее - Утвердить предложение о создании
молодежных индустриальных зон). <br /><br />
В частности, в Нукусе и Берунийском районе созданы специальные штабы по внедрению
"молодежной На организованном по этому случаю мероприятии начальник Каракалпакского
управления Агентства по делам молодежи Республики Узбекистан, сенатор Абатбай Данияров,
начальник управления Центрального аппарата Агентства по делам молодежи, член
Республиканской рабочей группы Фазлиддин Бахромов предоставили членам штаба подробную
информацию об их целях и задачах. <br /><br />
В этот же день члены рабочей группы провели подворный обход в махалле “Кутли конис” в
Нукусе и составили специальный опросник, в котором отразили проблемы каждой женщины и
каждого молодого В частности, житель этой махалли Шарапат Пердебоев, окончивший
профессиональный колледж, в настоящее время является безработным. Он желает заниматься
предпринимательством, а точнее выращивать в теплице бахчевые культуры. Шарапат заполнил
анкету для включения его в "молодежную тетрадь". <br /><br />
Подобное изучение проведено и в махалле “Сарбиноз” в Нукусе. В беседе с членами рабочей
группы жительница махалли Алия Танжарбоева сообщила, что является временно безработной, у
нее есть четырехлетний ребенок с инвалидностью, она желает заниматься надомным трудом.
Алия сказала, что хорошо владеет швейным делом. Поэтому ей нужна швейная машина. Алия тоже
полностью заполнила – 30 членов штаба будут формировать электронные варианты заполненных
анкет, - говорит Парахат Казакбаев. - Я сам лично тоже ежедневно будут вносить в
электронную базу примерно 500 анкет. В процессе формирования "молодежной тетради" мы
видим, что многие молодые люди и девушки свободно излагают свои проблемы. `
