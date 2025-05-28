// animeData.js

const allAnimeList = [
    {
        title: "Battle Through the Heavens",
         episode: "Ep 5", // This can be removed or derived
        img: "https://static.wikia.nocookie.net/battle-through-the-heavens/images/d/d6/IMG_0673.jpeg",
        genre: ["Fantasy", "Action", "Adventure", "3D Animation"],
        releaseDate: "1 Jan 2017",
        totalEpisodes: 10, // Example: Assuming 10 episodes for now, was 100
        description: "A young man named Xiao Yan, once a prodigy, loses his powers and becomes an outcast. With the help of an ancient ring, he embarks on a journey of cultivation to regain his strength and avenge his mother's death.",
        episodes: [
            { episodeNum: 1, title: "Battle Through the Heavens - Ep 1", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", imageUrl: "https://static.wikia.nocookie.net/battle-through-the-heavens/images/d/d6/IMG_0673.jpeg" },
            { episodeNum: 2, title: "Battle Through the Heavens - Ep 2", videoUrl: "https://youtu.be/64Sfo_VQuRw?si=iishhT6rHrYJZUvi", imageUrl: "https://static.wikia.nocookie.net/battle-through-the-heavens/images/d/d6/IMG_0673.jpeg" },
            { episodeNum: 3, title: "Battle Through the Heavens - Ep 3", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", imageUrl: "https://static.wikia.nocookie.net/battle-through-the-heavens/images/d/d6/IMG_0673.jpeg" },
            { episodeNum: 4, title: "Battle Through the Heavens - Ep 4", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", imageUrl: "https://static.wikia.nocookie.net/battle-through-the-heavens/images/d/d6/IMG_0673.jpeg" },
            { episodeNum: 5, title: "Battle Through the Heavens - Ep 5", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", imageUrl: "https://static.wikia.nocookie.net/battle-through-the-heavens/images/d/d6/IMG_0673.jpeg" },
            { episodeNum: 6, title: "Battle Through the Heavens - Ep 6", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", imageUrl: "https://static.wikia.nocookie.net/battle-through-the-heavens/images/d/d6/IMG_0673.jpeg" },
            { episodeNum: 7, title: "Battle Through the Heavens - Ep 7", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", imageUrl: "https://static.wikia.nocookie.net/battle-through-the-heavens/images/d/d6/IMG_0673.jpeg" },
            { episodeNum: 8, title: "Battle Through the Heavens - Ep 8", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", imageUrl: "https://static.wikia.nocookie.net/battle-through-the-heavens/images/d/d6/IMG_0673.jpeg" },
            { episodeNum: 9, title: "Battle Through the Heavens - Ep 9", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", imageUrl: "https://static.wikia.nocookie.net/battle-through-the-heavens/images/d/d6/IMG_0673.jpeg" },
            { episodeNum: 10, title: "Battle Through the Heavens - Ep 10", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", imageUrl: "https://static.wikia.nocookie.net/battle-through-the-heavens/images/d/d6/IMG_0673.jpeg" }
        ]
    },
    {
        title: "Lord of the Mysteries",
        episode: "Ep 6",
        img: "Lord of the Mysteries.jpg", // Corrected path
        genre: ["Action", "Adventure", "Mystery", "Fantasy", "2D Animation"],
        releaseDate: "14 April 2024",
        totalEpisodes: 12,
        description: "In a steampunk world filled with supernatural forces and secret organizations, Klein Moretti embarks on a dangerous journey of transformation after acquiring a mysterious ancient artifact.",
        episodes: [
            { episodeNum: 1, title: "Lord of the Mysteries - Ep 1", videoUrl: "https://dai.ly/k5O2NOPQb7sm0uD7UMo", imageUrl: "Lord of the Mysteries.jpg" },
            { episodeNum: 2, title: "Lord of the Mysteries - Ep 2", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", imageUrl: "Lord of the Mysteries.jpg" },
            { episodeNum: 3, title: "Lord of the Mysteries - Ep 3", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", imageUrl: "Lord of the Mysteries.jpg" },
            { episodeNum: 11, title: "Lord of the Mysteries - Ep 11", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", imageUrl: "Lord of the Mysteries.jpg" },
            //{ episodeNum: 12, title: "Lord of the Mysteries - Ep 12", dailyMotionId: "k1skKsCOsYfD07D8dz0", imageUrl: "material /Lord of the Mysteries.jpg" }
        ]
    },
    // ... (rest of your animeDataList, with populated 'episodes' arrays and corrected image paths)
    // Make sure to add 'episodes' array for ALL anime, and fill in videoUrl/imageUrl
    {
        title: "Perfect World Season 4",
        episode: "Ep 1",
        img: "material /Perfect-world-Season-4-wanmei-shijie.webp",
        genre: ["Action", "Adventure", "Fantasy", "Martial Arts", "3D Animation"],
        releaseDate: "2022",
        totalEpisodes: 26,
        description: "Shi Hao, a prodigy from the desolate land, continues to rise in power as he faces divine beasts and powerful enemies in a world of cultivation and ancient mysteries.",
        episodes: [
            { episodeNum: 1, title: "Perfect World S4 - Ep 1", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", imageUrl: "material/Perfect-world-Season-4-wanmei-shijie.webp" },
            // ... up to 26 episodes
        ]
    },
    {
        title: "Tales of Herding Gods",
        episode: "Ep 1",
        img: "material /Tales-of-Herding-Gods.webp",
        genre: ["Action", "Adventure", "Fantasy", "Mythology", "3D Animation"],
        releaseDate: "2023",
        totalEpisodes: 52,
        description: "Qin Mu, a boy raised in a remote village, begins his quest to uncover the secrets of the gods and challenge the authority of celestial beings.",
        episodes: [
            { episodeNum: 1, title: "Tales of Herding Gods - Ep 1", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", imageUrl: "material/Tales-of-Herding-Gods.webp" },
            // ... up to 52 episodes
        ]
    },
    {
        title: "Renegade Immortal",
        episode: "Ep 1",
        img: "material /Renegade Immortal.jpg",
        genre: ["Action", "Adventure", "Fantasy", "Cultivation", "3D Animation"],
        releaseDate: "3 December 2023",
        totalEpisodes: 24,
        description: "Wang Lin, a genius cultivator wronged and betrayed, walks the path of immortality fueled by revenge, love, and a desire to defy the heavens.",
        episodes: [
            { episodeNum: 1, title: "Renegade Immortal - Ep 1", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", imageUrl: "material /Renegade Immortal.jpg" },
            // ... up to 24 episodes
        ]
    },
    {
        title: "To Be Hero X",
        episode: "Ep 1",
        img: "material /To Be Hero X.jpg",
        genre: ["Action", "Comedy", "Sci-Fi", "Fantasy", "2D Animation"],
        releaseDate: "15 July 2023",
        totalEpisodes: 11,
        description: "In a world torn between light and darkness, a seemingly useless man becomes a reluctant hero as he uncovers a vast conspiracy and powers beyond imagination.",
        episodes: [
            { episodeNum: 1, title: "To Be Hero X - Ep 1", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", imageUrl: "material/To Be Hero X.jpg" },
            // ... up to 11 episodes
        ]
    },
    {
        title: "Naruto",
        episode: "Ep 35",
        img: "material /Naruto.jpg",
        genre: ["Action", "Adventure", "Fantasy", "Martial Arts", "2D Animation"],
        releaseDate: "3 Oct 2002",
        totalEpisodes: 500,
        description: "Naruto Uzumaki, a mischievous adolescent ninja, struggles as he searches for recognition and dreams of becoming the Hokage, his village's leader and strongest ninja.",
        episodes: [
            { episodeNum: 1, title: "Naruto - Ep 1", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", imageUrl: "material/Naruto.jpg" },
            // ... up to 500 episodes
        ]
    },
    {
        title: "Jujutsu Kaisen",
        episode: "Ep 5",
        img: "material /Jujutsu Kaisen.jpg",
        genre: ["Dark Fantasy", "Supernatural", "Action", "2D Animation"],
        releaseDate: "3 Oct 2020",
        totalEpisodes: 47,
        description: "Yuji Itadori, a high school student, is suddenly thrust into the world of Curses when he swallows a cursed object. He joins a secret organization of Jujutsu Sorcerers to fight against other Curses.",
        episodes: [
            { episodeNum: 1, title: "Jujutsu Kaisen - Ep 1", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", imageUrl: "material/Jujutsu Kaisen.jpg" },
            // ... up to 47 episodes
        ]
    },
    {
        title: "One Piece",
        episode: "Ep 25",
        img: "material /One Piece.jpg",
        genre: ["Action", "Adventure", "Fantasy", "Comedy", "2D Animation"],
        releaseDate: "20 Oct 1999",
        totalEpisodes: 1100,
        description: "Monkey D. Luffy, a boy whose body gained the properties of rubber after unintentionally eating a Devil Fruit, sets out on a journey with his pirate crew to find the One Piece, the ultimate treasure.",
        episodes: [
            { episodeNum: 1, title: "One Piece - Ep 1", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", imageUrl: "material/One Piece.jpg" },
            // ... up to 1100 episodes
        ]
    },
    {
        title: "Dragon Ball Z",
        episode: "Ep 5",
        img: "material /Dragon Ball Z.jpg",
        genre: ["Action", "Adventure", "Fantasy", "Sci-Fi", "2D Animation"],
        releaseDate: "26 Apr 1989",
        totalEpisodes: 291,
        description: "Goku, a Saiyan, defends the Earth against various villains ranging from intergalactic space fighters and conquerors, to androids and magical creatures.",
        episodes: [
            { episodeNum: 1, title: "Dragon Ball Z - Ep 1", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", imageUrl: "material/Dragon Ball Z.jpg" },
            // ... up to 291 episodes
        ]
    },
    {
        title: "Attack on Titan",
        episode: "Ep 15",
        img: "material /Attack on Titan2.jpg",
        genre: ["Dark Fantasy", "Action", "Drama", "Mystery", "2D Animation"],
        releaseDate: "7 Apr 2013",
        totalEpisodes: 89,
        description: "Humanity lives within cities surrounded by enormous walls to protect themselves from gigantic humanoid creatures referred to as Titans.",
        episodes: [
            { episodeNum: 1, title: "Attack on Titan - Ep 1", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", imageUrl: "material/Attack on Titan2.jpg" },
            // ... up to 89 episodes
        ]
    },
    {
        title: "My Hero Academia",
        episode: "Ep 5",
        img: "material /My Hero Academia.jpg",
        genre: ["Superhero", "Action", "Comedy", "2D Animation"],
        releaseDate: "3 Apr 2016",
        totalEpisodes: 138,
        description: "In a world where superpowers (called 'Quirks') are common, Izuku Midoriya, born without a Quirk, dreams of becoming a hero and is scouted by the world's greatest hero, All Might.",
        episodes: [
            { episodeNum: 1, title: "My Hero Academia - Ep 1", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", imageUrl: "material/My Hero Academia.jpg" },
            // ... up to 138 episodes
        ]
    },
    {
        title: "Demon Slayer",
        episode: "Ep 5",
        img: "material /Demon Slayer.jpg",
        genre: ["Action", "Dark Fantasy", "Adventure", "2D Animation"],
        releaseDate: "6 Apr 2019",
        totalEpisodes: 55,
        description: "A boy, Tanjiro Kamado, sets out to become a demon slayer after his family is slaughtered and his younger sister, Nezuko, is turned into a demon.",
        episodes: [
            { episodeNum: 1, title: "Demon Slayer - Ep 1", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", imageUrl: "material/Demon Slayer.jpg" },
            // ... up to 55 episodes
        ]
    },
    {
        title: "Death Note",
        episode: "Ep 5",
        img: "material /Death Note.jpg",
        genre: ["Mystery", "Thriller", "Supernatural", "Psychological", "2D Animation"],
        releaseDate: "3 Oct 2006",
        totalEpisodes: 37,
        description: "A high school student, Light Yagami, discovers a supernatural notebook that allows him to kill anyone by writing the victim's name while picturing their face.",
        episodes: [
            { episodeNum: 1, title: "Death Note - Ep 1", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", imageUrl: "material/Death Note.jpg" },
            // ... up to 37 episodes
        ]
    },
    {
        title: "Hunter X Hunter",
        episode: "Ep 40",
        img: "material /Hunter X Hunter.jpg",
        genre: ["Adventure", "Fantasy", "Martial Arts", "2D Animation"],
        releaseDate: "2 Oct 2011",
        totalEpisodes: 148,
        description: "Gon Freecss discovers that his father, whom he was told is dead, is actually a legendary Hunter. Gon leaves his home to follow in his father's footsteps, aiming to become a Hunter himself.",
        episodes: [
            { episodeNum: 1, title: "Hunter X Hunter - Ep 1", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", imageUrl: "material/Hunter X Hunter.jpg" },
            // ... up to 148 episodes
        ]
    },
    {
        title: "Solo Leveling",
        episode: "Ep 9",
        img: "material /Solo Leveling.jpg",
        genre: ["Action", "Fantasy", "Adventure", "2D Animation"],
        releaseDate: "7 Jan 2024",
        totalEpisodes: 12,
        description: "In a world where hunters, humans with magical abilities, must battle deadly monsters, Sung Jinwoo, the weakest of all hunters, gains a mysterious power that allows him to level up without limit.",
        episodes: [
            { episodeNum: 1, title: "Solo Leveling - Ep 1", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", imageUrl: "material/Solo Leveling.jpg" },
            { episodeNum: 2, title: "Solo Leveling - Ep 2", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", imageUrl: "material/Solo Leveling.jpg" },
            { episodeNum: 3, title: "Solo Leveling - Ep 3", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", imageUrl: "material/Solo Leveling.jpg" },
            { episodeNum: 4, title: "Solo Leveling - Ep 4", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", imageUrl: "material/Solo Leveling.jpg" },
            { episodeNum: 5, title: "Solo Leveling - Ep 5", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", imageUrl: "material/Solo Leveling.jpg" },
            { episodeNum: 6, title: "Solo Leveling - Ep 6", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", imageUrl: "material/Solo Leveling.jpg" },
            { episodeNum: 7, title: "Solo Leveling - Ep 7", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", imageUrl: "material/Solo Leveling.jpg" },
            { episodeNum: 8, title: "Solo Leveling - Ep 8", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", imageUrl: "material/Solo Leveling.jpg" },
            { episodeNum: 9, title: "Solo Leveling - Ep 9", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", imageUrl: "material/Solo Leveling.jpg" },
            { episodeNum: 10, title: "Solo Leveling - Ep 10", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", imageUrl: "material/Solo Leveling.jpg" },
            { episodeNum: 11, title: "Solo Leveling - Ep 11", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", imageUrl: "material/Solo Leveling.jpg" },
            { episodeNum: 12, title: "Solo Leveling - Ep 12", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", imageUrl: "material/Solo Leveling.jpg" }
        ]
    },
    {
        title: "Re:Zero",
        episode: "Ep 5",
        img: "material /Re- Zero.jpg",
        genre: ["Isekai", "Fantasy", "Drama", "Thriller", "2D Animation"],
        releaseDate: "4 Apr 2016",
        totalEpisodes: 50,
        description: "Subaru Natsuki, an ordinary high school student, is summoned to another world where he gains the ability to 'Return by Death', allowing him to reverse time upon dying.",
        episodes: [
            { episodeNum: 1, title: "Re:Zero - Ep 1", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", imageUrl: "material/Re- Zero.jpg" },
            // ... up to 50 episodes
        ]
    },
    {
        title: "Mushoku Tensei",
        episode: "Ep 13",
        img: "material /Mushoku Tensei.jpg",
        genre: ["Isekai", "Fantasy", "Drama", "2D Animation"],
        releaseDate: "11 Jan 2021",
        totalEpisodes: 23,
        description: "A 34-year-old NEET is reincarnated in a fantasy world as Rudeus Greyrat, retaining his memories but starting fresh as a baby. He decides to live his new life to the fullest.",
        episodes: [
            { episodeNum: 1, title: "Mushoku Tensei - Ep 1", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", imageUrl: "material/Mushoku Tensei.jpg" },
            // ... up to 23 episodes
        ]
    },
    {
        title: "Vinland Saga",
        episode: "Ep 15",
        img: "material /Vinland Saga.png",
        genre: ["Historical", "Action", "Adventure", "Drama", "2D Animation"],
        releaseDate: "7 Jul 2019",
        totalEpisodes: 24,
        description: "Set in Viking Age Europe, the story follows Thorfinn, a young warrior seeking revenge for his father's death, as he becomes involved in the wars and conflicts of the Vikings.",
        episodes: [
            { episodeNum: 1, title: "Vinland Saga - Ep 1", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", imageUrl: "material/Vinland Saga.png" },
            // ... up to 24 episodes
        ]
    },
    {
        title: "Fire Force",
        episode: "Ep 12",
        img: "material /Fire Force.png",
        genre: ["Action", "Supernatural", "Fantasy", "2D Animation"],
        releaseDate: "5 Jul 2019",
        totalEpisodes: 48,
        description: "In a world where spontaneous human combustion is a common phenomenon, Shinra Kusakabe joins the Fire Force to combat the 'Infernals' and uncover the truth behind his family's death.",
        episodes: [
            { episodeNum: 1, title: "Fire Force - Ep 1", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", imageUrl: "material/Fire Force.png" },
            // ... up to 48 episodes
        ]
    },
    {
        title: "Black Clover",
        episode: "Ep 5",
        img: "material /Black Clover.jpg",
        genre: ["Action", "Fantasy", "Comedy", "2D Animation"],
        releaseDate: "3 Oct 2017",
        totalEpisodes: 170,
        description: "Asta, a young orphan with no magical ability, dreams of becoming the Wizard King, despite living in a world where magic is everything. He trains hard and gets a rare five-leaf clover grimoire.",
        episodes: [
            { episodeNum: 1, title: "Black Clover - Ep 1", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", imageUrl: "material/Black Clover.jpg" },
            // ... up to 170 episodes
        ]
    },
    {
        title: "Dr. Stone",
        episode: "Ep 7",
        img: "material /Dr. Stone.jpg",
        genre: ["Sci-Fi", "Adventure", "Comedy", "2D Animation"],
        releaseDate: "5 Jul 2019",
        totalEpisodes: 35,
        description: "After a mysterious light petrifies humanity for thousands of years, the genius Senku Ishigami awakens and decides to rebuild civilization using science.",
        episodes: [
            { episodeNum: 1, title: "Dr. Stone - Ep 1", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", imageUrl: "material/Dr. Stone.jpg" },
            // ... up to 35 episodes
        ]
    },
    {
        title: "Mob Psycho 100",
        episode: "Ep 8",
        img: "material /Mob Psycho.jpg",
        genre: ["Action", "Comedy", "Supernatural", "2D Animation"],
        releaseDate: "11 Jul 2016",
        totalEpisodes: 37,
        description: "Shigeo 'Mob' Kageyama is a middle school boy who has immense psychic power. He tries to live a normal life while suppressing his powers, but emotions cause them to go wild.",
        episodes: [
            { episodeNum: 1, title: "Mob Psycho 100 - Ep 1", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", imageUrl: "material/Mob Psycho.jpg" },
            // ... up to 37 episodes
        ]
    },
    {
        title: "Steins;Gate",
        episode: "Ep 3",
        img: "material /Steins;Gate.jpg",
        genre: ["Action", "Comedy", "Supernatural", "2D Animation"],
        releaseDate: "22 Feb 2012",
        totalEpisodes: 24,
        description: "Steins;Gate is a Japanese science fiction and psychological thriller anime based on the 2009 visual novel developed by 5pb. and Nitroplus. The anime was produced by White Fox studio and originally aired in Japan from April 6, 2011 to September 14, 2011.",
        episodes: [
            { episodeNum: 1, title: "Steins;Gate - Ep 1", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", imageUrl: "material/Steins;Gate.jpg" },
            // ... up to 24 episodes
        ]
    },
    {
        img: "material /Chainsaw Man.jpg",
        episode: "Ep 5",
        title: 'Chainsaw Man',
        totalEpisodes: 12,
        genre: ["Action", "Supernatural", "Dark Fantasy", "2D Animation"],
        releaseDate: "12 Oct 2022",
        description: "Denji, a young man who merges with his dog Pochita, becoming a Chainsaw Man, fighting devils.",
        episodes: [
            { episodeNum: 1, title: "Chainsaw Man - Ep 1", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", imageUrl: "material/Chainsaw Man.jpg" },
            // ... up to 12 episodes
        ]
    },
    {
        img: "material /Mashle.jpg",
        episode: "Ep 2",
        title: 'Mashle',
        totalEpisodes: 24,
        genre: ["Action", "Comedy", "Fantasy", "2D Animation"],
        releaseDate: "08 Apr 2023",
        description: "In a world of magic, Mash Burnedead, who has no magic, attends a magic academy using only his physical strength.",
        episodes: [
            { episodeNum: 1, title: "Mashle - Ep 1", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", imageUrl: "material/Mashle.jpg" },
            // ... up to 24 episodes
        ]
    },
    {
        img: "material /Fullmetal Alchemist.jpg",
        episode: "Ep 1",
        title: 'Fullmetal Alchemist',
        totalEpisodes: 64,
        genre: ["Action", "Adventure", "Fantasy", "Sci-Fi", "2D Animation"],
        releaseDate: "04 Oct 2003",
        description: "Two brothers search for the Philosopher's Stone to restore their bodies after a failed alchemical experiment.",
        episodes: [
            { episodeNum: 1, title: "Fullmetal Alchemist - Ep 1", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", imageUrl: "material/Fullmetal Alchemist.jpg" },
            // ... up to 64 episodes
        ]
    },
    {
        img: "material /Code Geass.jpg",
        episode: "Ep 1",
        title: 'Code Geass',
        totalEpisodes: 50,
        genre: ["Mecha", "Sci-Fi", "Military", "2D Animation"],
        releaseDate: "06 Oct 2006",
        description: "Lelouch vi Britannia gains a powerful ability called Geass and leads a rebellion against the Britannian Empire.",
        episodes: [
            { episodeNum: 1, title: "Code Geass - Ep 1", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", imageUrl: "material/Code Geass.jpg" },
            // ... up to 50 episodes
        ]
    },
    {
        img: "material /Kaiju No. 8.jpg",
        episode: "Ep 1",
        title: 'Kaiju No. 8',
        totalEpisodes: 100, // Update as new episodes release
        genre: ["Action", "Sci-Fi", "2D Animation"],
        releaseDate: "13 Apr 2024",
        description: "Kafka Hibino gains the ability to transform into a Kaiju and joins the Defense Force.",
        episodes: [
            { episodeNum: 1, title: "Kaiju No. 8 - Ep 1", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", imageUrl: "material/Kaiju No. 8.jpg" }
        ]
    },
    {
        img: "material /Wind Breaker.jpg",
        episode: "Ep 2",
        title: 'Wind Breaker',
        totalEpisodes: 12, // Update as new episodes release
        genre: ["Action", "Sports", "2D Animation"],
        releaseDate: "05 Apr 2024",
        description: "Haruka Sakura seeks to become the strongest in his new high school, known for its delinquent students.",
        episodes: [
            { episodeNum: 1, title: "Wind Breaker - Ep 1", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", imageUrl: "material/Wind Breaker.jpg" },
            { episodeNum: 2, title: "Wind Breaker - Ep 2", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", imageUrl: "material/Wind Breaker.jpg" }
        ]
    },
    {
        img: "material /Dead Dead Demon.jpg",
        episode: "Ep 1",
        title: 'Dead Dead Demon',
        totalEpisodes: 10, // Update as new episodes release
        genre: ["Sci-Fi", "Slice of Life", "2D Animation"],
        releaseDate: "22 Mar 2024",
        description: "Two high school girls navigate life in Tokyo under the looming threat of an alien mothership.",
        episodes: [
            { episodeNum: 1, title: "Dead Dead Demon - Ep 1", videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", imageUrl: "material/Dead Dead Demon.jpg" }
        ]
    }
];

function getAnimeByTitle(title) {
    return allAnimeList.find(a => a.title === title);
}
