const collection = [
    {
        name:'Spirited Away',
        releaseYear: 2001,
        picture:'https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
        genre:['Adventure',' Drama',' Supernatural'],
        cast: ['Irino Miyu', 'Hiiragi Rumi', 'Nakamura Akio'],
        director: 'Hayao Miyazaki',
        shortDescription:'Stubborn, spoiled, and naïve, 10-year-old Chihiro Ogino is less than pleased when she and her parents discover an abandoned amusement park on the way to their new house. Cautiously venturing inside, she realizes that there is more to this place than meets the eye, as strange things begin to happen once dusk falls.',
        trailer: 'https://youtu.be/ByXuk9QqQkk'
    },
    {
        name:'My Neighbour Totoro',
        releaseYear: 1988,
        picture:'https://m.media-amazon.com/images/M/MV5BYzJjMTYyMjQtZDI0My00ZjE2LTkyNGYtOTllNGQxNDMyZjE0XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg',
        genre:['Adventure',' Supernatural'],
        cast:['Hitoshi Takagi','Chika Sakamoto','Noriko Hidaka'],
        director:'Hayao Miyazaki',
        shortDescription:'In 1950s Japan, Tatsuo Kusakabe relocates himself and his two daughters, Satsuki and Mei, to the countryside to be closer to their mother, who is hospitalized due to long-term illness. As the girls grow acquainted with rural life, Mei encounters a small, bunny-like creature in the yard one day. Chasing it into the forest, she finds "Totoro"—a giant, mystical forest spirit whom she soon befriends.',
        trailer:'https://youtu.be/92a7Hj0ijLs'
    },
    {
        name:'Howl\'s Moving Castle',
        releaseYear: 2004,
        picture:'https://m.media-amazon.com/images/M/MV5BNmM4YTFmMmItMGE3Yy00MmRkLTlmZGEtMzZlOTQzYjk3MzA2XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
        genre:['Adventure',' Drama', ' Fantasy', ' Romance'],
        cast:['Kimura Takuya','Baisho Chieko','Gashuin Tatsuya'],
        director:'Hayao Miyazaki',
        shortDescription:'The castle is home to the magnificent wizard Howl, infamous for both his magical prowess and for being a womanizer—or so the rumor goes in Sophie\'s small town. However, Sophie\'s simple life takes a turn for the exciting when she is ensnared in a disturbing situation, and the mysterious wizard appears to rescue her. Unfortunately, this encounter, brief as it may be, spurs the vain and vengeful Witch of the Waste—in a fit of jealousy caused by a past discord with Howl—to put a curse on the maiden, turning her into an old woman.',
        trailer:'https://youtu.be/iwROgK94zcM'   
    },
    {
        name:'Belle',
        releaseYear: 2021,
        picture:'https://m.media-amazon.com/images/M/MV5BOGU2Yjc0Y2YtMDU0MS00NTFiLTlkMGMtOTcxOWIzMjhkZmZkXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg',
        genre:['Drama', ' Fantasy'],
        cast:['Nakamura Kaho','Satou Takeru', 'Tamashiro Tina'],
        director:'Mamoru Hosoda',
        shortDescription:'Suzu is a shy, everyday high school student living in a rural village. For years, she has only been a shadow of herself. But when she enters “U”, a massive virtual world, she escapes into her online persona as Belle, a gorgeous and globally-beloved singer. One day, her concert is interrupted by a monstrous creature chased by vigilantes. As their hunt escalates, Suzu embarks on an emotional and epic quest to uncover the identity of this mysterious "beast" and to discover her true self in a world where you can be anyone.',
        trailer:'https://youtu.be/izIycj3j4Ow'
    },
    {
        name:'Your Name',
        releaseYear: 2016,
        picture:'https://m.media-amazon.com/images/M/MV5BODRmZDVmNzUtZDA4ZC00NjhkLWI2M2UtN2M0ZDIzNDcxYThjL2ltYWdlXkEyXkFqcGdeQXVyNTk0MzMzODA@._V1_FMjpg_UX1000_.jpg',
        genre:['Drama', ' Romance', ' Supernatural'],
        cast:['Kamishiraishi Mone,','Kamiki Ryunosuke', 'Hanazawa Kana'],
        director:'Makoto Shinkai',
        shortDescription:'Mitsuha Miyamizu, a high school girl, yearns to live the life of a boy in the bustling city of Tokyo—a dream that stands in stark contrast to her present life in the countryside. Meanwhile in the city, Taki Tachibana lives a busy life as a high school student while juggling his part-time job and hopes for a future in architecture.One day, Mitsuha awakens in a room that is not her own and suddenly finds herself living the dream life in Tokyo—but in Taki\'s body! Elsewhere, Taki finds himself living Mitsuha\'s life in the humble countryside. In pursuit of an answer to this strange phenomenon, they begin to search for one another.',
        trailer:'https://youtu.be/xU47nhruN-Q'
    },
    {
        name:'Princess Mononoke',
        releaseYear: 1997,
        picture:'https://m.media-amazon.com/images/M/MV5BNGIzY2IzODQtNThmMi00ZDE4LWI5YzAtNzNlZTM1ZjYyYjUyXkEyXkFqcGdeQXVyODEzNjM5OTQ@._V1_FMjpg_UX1000_.jpg',
        genre:[' Adventure', ' Fantasy'],
        cast:['Ishida Yuriko','Matsuda Youji,', 'Tanaka Yuko'],
        director:'Hayao Miyazaki',
        shortDescription:'When an Emishi village is attacked by a fierce demon boar, the young prince Ashitaka puts his life at stake to defend his tribe. With its dying breath, the beast curses the prince\'s arm, granting him demonic powers while gradually siphoning his life away. Instructed by the village elders to travel westward for a cure, Ashitaka arrives at Tatara, the Iron Town, where he finds himself embroiled in a fierce conflict: Lady Eboshi of Tatara, promoting constant deforestation, stands against Princess San and the sacred spirits of the forest, who are furious at the destruction brought by the humans.',
        trailer:'https://youtu.be/4OiMOHRDs14'
    },
    {
        name:'Patema Inverted',
        releaseYear: 2013,
        picture:'https://m.media-amazon.com/images/I/81saw5+Nq9L._SL1500_.jpg',
        genre:['Adventure', ' Fantasy'],
        cast:['Fujii Yukio','Okamoto Nobuhiko', 'Oohata Shintarou'],
        director:'Yasuhiro Yoshiura',
        shortDescription:'Patema is a plucky young girl from an underground civilization boasting an incredible network of tunnels. Inspired by a friend that mysteriously went missing, she is often reprimanded due to her constant excursions of these tunnels due to her royal status. After she enters what is known as the "forbidden zone," she accidentally falls into a giant bottomless pit after being startled by a strange creature. Finding herself on the surface, a world literally turned upside down, she begins falling towards the sky only to be saved by Age, a discontented student of the totalitarian nation known as Aiga. The people of Aiga are taught to believe that "Inverts," like Patema, are sinners that will be "swallowed by the sky," but Age has resisted this propaganda and decides to protect his new friend.',
        trailer:'https://youtu.be/Aa7sa-Zd-3E'
    },
    {
        name:'Weathering with You',
        releaseYear: 2019,
        picture:'https://m.media-amazon.com/images/M/MV5BNzE4ZDEzOGUtYWFjNC00ODczLTljOGQtZGNjNzhjNjdjNjgzXkEyXkFqcGdeQXVyNzE5ODMwNzI@._V1_.jpg',
        genre:['Drama', ' Fantasy', ' Romance'],
        cast:['Mori Nana','Daigo Kotarou','Kamishiraishi Mone'],
        director:'Makoto Shinkai',
        shortDescription:'Tokyo is currently experiencing rain showers that seem to disrupt the usual pace of everyone living there to no end. Amidst this seemingly eternal downpour arrives the runaway high school student Hodaka Morishima, who struggles to financially support himself—ending up with a job at a small-time publisher. At the same time, the orphaned Hina Amano also strives to find work to sustain herself and her younger brother. Both fates intertwine when Hodaka attempts to rescue Hina from shady men, deciding to run away together. Subsequently, Hodaka discovers that Hina has a strange yet astounding power: the ability to call out the sun whenever she prays for it. However, it is common knowledge that power always comes with a hefty price.',
        trailer:'https://youtu.be/Q6iK6DjV_iE'
    },
    {
        name:'The Forest of Firefly Lights',
        releaseYear: 2011,
        picture:'https://m.media-amazon.com/images/M/MV5BM2FkZjM5ODUtMGM0OC00ZTk2LWFjZDYtNmIzMGRhZWY0MjExXkEyXkFqcGdeQXVyNDgyODgxNjE@._V1_.jpg',
        genre:['Drama', ' Romance', ' Supernatural'],
        cast:['Uchiyama Kouki', 'Sakura Ayane', 'Sawada Izumi'],
        director:'Takahiro Ômori',
        shortDescription:'Intrigued by the tale of a mountain god, six-year-old Hotaru Takegawa loses her way in the ancient forest while visiting her uncle. Exhausted and desperate for help, Hotaru is thrilled to find a masked forest spirit named Gin. She learns the hard way that she should not touch the boy, or he would disappear. In spite of this, Gin leads Hotaru out of the forest and warns her never to return when she promises to come again with a gift.Paying no heed to his cautionary words, and despite being separated by both distance and planes of existence, Hotaru and Gin become close friends as she visits him every summer. However, their relationship and resolve are put to the test, when romantic feelings conflict with the one and only rule.',
        trailer:'https://youtu.be/zOc3pbvFAww'
    },
    {
        name:'A Silent Voice',
        releaseYear: 2016,
        picture:'https://m.media-amazon.com/images/M/MV5BZGRkOGMxYTUtZTBhYS00NzI3LWEzMDQtOWRhMmNjNjJjMzM4XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
        genre:['Drama', ' Romance'],
        cast:['Hayami Saori','Irino Miyu', 'Yuuki Aoi'],
        director:'Naoko Yamada',
        shortDescription:'As a wild youth, elementary school student Shouya Ishida sought to beat boredom in the cruelest ways. When the deaf Shouko Nishimiya transfers into his class, Shouya and the rest of his class thoughtlessly bully her for fun. However, when her mother notifies the school, he is singled out and blamed for everything done to her. With Shouko transferring out of the school, Shouya is left at the mercy of his classmates. He is heartlessly ostracized all throughout elementary and middle school, while teachers turn a blind eye.Now in his third year of high school, Shouya is still plagued by his wrongdoings as a young boy. Sincerely regretting his past actions, he sets out on a journey of redemption: to meet Shouko once more and make amends.',
        trailer:'https://youtu.be/nfK6UgLra7g'
    },
    ];

    export default collection