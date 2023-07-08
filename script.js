const quotes={
  'Mark Twain' :"Age is an issue of mind over matter. If you don't mind, it doesn't matter.",
  'Henry Ford' :'Anyone who stops learning is old, whether at twenty or eighty. Anyone who keeps learning stays young. The greatest thing in life is to keep your mind young.',
  'Mark Twain' :'Wrinkles should merely indicate where smiles have been.',
  'Kurt Vonnegut' :'True terror is to wake up one morning and discover that your high school class is running the country.',
  'Robert Frost' :"A diplomat is a man who always remembers a woman's birthday but never remembers her age.",
  'Andrew Carnegie' :'As I grow older, I pay less attention to what men say. I just watch what they do.',
  'C. S. Lewis' :'How incessant and great are the ills with which a prolonged old age is replete.',
  'Confucius' :'Old age, believe me, is a good and pleasant thing. It is true you are gently shouldered off the stage, but then you are given such a comfortable front stall as spectator.',
  'Eleanor Roosevelt' :'Old age has deformities enough of its own. It should never add to them the deformity of vice.',
  'Samuel Ullman' :'Nobody grows old merely by living a number of years. We grow old by deserting our ideals. Years may wrinkle the skin, but to give up enthusiasm wrinkles the soul.',
  'Agatha Christie' :'An archaeologist is the best husband a woman can have. The older she gets the more interested he is in her.',
  'Ralph Waldo Emerson' :'All diseases run into one, old age.',
  'Aristotle' :'Bashfulness is an ornament to youth, but a reproach to old age.',
  'Bill Cosby' :'Like everyone else who makes the mistake of getting older, I begin each day with coffee and obituaries.',
  'Francis Bacon' :'Age appears to be best in four things old wood best to burn, old wine to drink, old friends to trust, and old authors to read.',
  'Henry David Thoreau' :'None are so old as those who have outlived enthusiasm.',
  'George Bernard Shaw' :'Every man over forty is a scoundrel.',
  'Victor Hugo' :'Forty is the old age of youth fifty the youth of old age.',
  'George Burns' :"You can't help getting older, but you don't have to get old.",
  'Albert Camus' :'Alas, after a certain age every man is responsible for his face.',
  'Bill Vaughan' :"Youth is when you're allowed to stay up late on New Year's Eve. Middle age is when you're forced to.",
  'Theodore Roosevelt' :"Old age is like everything else. To make a success of it, you've got to start young.",
  'Maurice Chevalier' :'A comfortable old age is the reward of a well-spent youth. Instead of its bringing sad and melancholy prospects of decay, it would give us hopes of eternal youth in a better world.',
  'Sophocles' :'A man growing old becomes a child again.',
  'Francis Bacon' :'I will never be an old man. To me, old age is always 15 years older than I am.',
  'Rabindranath Tagore' :'Age considers youth ventures.',
  'Voltaire' :'What most persons consider as virtue, after the age of 40 is simply a loss of energy.',
  'Tom Stoppard' :'Age is a very high price to pay for maturity.',
  'Bette Davis' :'Old age is no place for sissies.',
  'Bob Hope' :"I don't feel old. I don't feel anything till noon. That's when it's time for my nap.",
  'Marcus Tullius Cicero' :'As I approve of a youth that has something of the old man in him, so I am no less pleased with an old man that has something of the youth. He that follows this rule may be old in body, but can never be so in mind.',
  'T. S. Eliot' :"I don't believe one grows older. I think that what happens early on in life is that at a certain age one stands still and stagnates.",
  'Marcus Tullius Cicero' :"Advice in old age is foolish for what can be more absurd than to increase our provisions for the road the nearer we approach to our journey's end.",
  'Victor Hugo' :'When grace is joined with wrinkles, it is adorable. There is an unspeakable dawn in happy old age.',
  'Pablo Picasso' :'It takes a long time to become young.',
  'Bette Midler' :'After thirty, a body has a mind of its own.',
  'Sophia Loren' :'There is a fountain of youth: it is your mind, your talents, the creativity you bring to your life and the lives of people you love. When you learn to tap this source, you will truly have defeated age.',
  'Don Marquis' :'Age is not a particularly interesting subject. Anyone can get old. All you have to do is live long enough.',
  'John Adams' :'Old minds are like old horses you must exercise them if you wish to keep them in working order.',
  'Hosea Ballou' :'Forty is the old age of youth, fifty is the youth of old age.',
  'Stanislaw Lec' :'Youth is the gift of nature, but age is a work of art.',
  'Dwight L. Moody' :"Preparation for old age should begin not later than one's teens. A life which is empty of purpose until 65 will not suddenly become filled on retirement.",
  'Mignon McLaughlin' :'There is always some specific moment when we become aware that our youth is gone but, years after, we know it was much later.',
  'Andre Maurois' :'Growing old is no more than a bad habit which a busy person has no time to form.',
  'Margaret Mead' :'As long as any adult thinks that he, like the parents and teachers of old, can become introspective, invoking his own youth to understand the youth before him, he is lost.',
  'Oliver Wendell Holmes' :'Old age is fifteen years older than I am.',
  'Betty Friedan' :'Aging is not lost youth but a new stage of opportunity and strength.',
  'Doris Lessing' :"The great secret that all old people share is that you really haven't changed in seventy or eighty years. Your body changes, but you don't change at all. And that, of course, causes great confusion.",
  'Casey Stengel' :'The trick is growing up without growing old.',
  'Emily Dickinson' :'Old age comes on suddenly, and not gradually as is thought.',
  'Lauren Bacall' :'I think your whole life shows in your face and you should be proud of that.',
  'James Broughton' :"I'm happy to report that my inner child is still ageless.",
  'Euripides' :'Youth is the best time to be rich, and the best time to be poor.',
  'Brigitte Bardot' :'It is sad to grow old but nice to ripen.',
  'William Feather' :"One of the many things nobody ever tells you about middle age is that it's such a nice change from being young.",
  'Helen Gurley Brown' :"After you're older, two things are possibly more important than any others: health and money.",
  'Judith Viorst' :'You end up as you deserve. In old age you must put up with the face, the friends, the health, and the children you have earned.',
  'Henri Frederic Amiel' :"I'm not interested in age. People who tell me their age are silly. You're as old as you feel.",
  'Sam Ewing' :'Inflation is when you pay fifteen dollars for the ten-dollar haircut you used to get for five dollars when you had hair.',
  'Warren Beatty' :'My notion of a wife at 40 is that a man should be able to change her, like a bank note, for two 20s.',
  'Frances Conroy' :'As you age naturally, your family shows more and more on your face. If you deny that, you deny your heritage.',
  'Golda Meir' :"Old age is like a plane flying through a storm. Once you're aboard, there's nothing you can do.",
  'Pope Paul VI' :"In youth the days are short and the years are long. In old age the years are short and day's long.",
  'Doug Larson' :'The aging process has you firmly in its grasp if you never get the urge to throw a snowball.',
  'Jane Elliot' :'Age is how we determine how valuable you are.',
  'Bob Hope' :'Middle age is when your age starts to show around your middle.',
  "Kitty O'Neill Collins" :'Aging seems to be the only available way to live a long life.',
  'Josh Billings' :'I think when the full horror of being fifty hits you, you should stay home and have a good cry.',
  'Amos Bronson Alcott' :'To keep the heart unwrinkled, to be hopeful, kindly, cheerful, reverent that is to triumph over old age.',
  'B. F. Skinner' :"If you're old, don't try to change yourself, change your environment.",
  'Louis Kronenberger' :'Old age is an excellent time for outrage. My goal is to say or do at least one outrageous thing every week.',
  'Sting' :'I want to get old gracefully. I want to have good posture, I want to be healthy and be an example to my children.',
  'Harrison Ford' :"You know you're getting old when all the names in your black book have M. D. after them.",
  'Jean Paul' :'What makes old age so sad is not that our joys but our hopes cease.',
  'Charles de Gaulle' :'Old age is a shipwreck.',
  'Amos Bronson Alcott' :'While one finds company in himself and his pursuits, he cannot feel old, no matter what his years may be.',
  'Alan Bleasdale' :'To resist the frigidity of old age, one must combine the body, the mind, and the heart. And to keep these in parallel vigor one must exercise, study, and love.',
  'James Thurber' :'Old age is the most unexpected of all the things that can happen to a man.',
  'Katharine Graham' :'No one can avoid aging, but aging productively is something else.',
  'Kevin Spacey' :"If you haven't turned rebel by twenty you've got no heart if you haven't turned establishment by thirty you've got no brains!",
  'Pierre Corneille' :'Oh rage! Oh despair! Oh age, my enemy!',
  'Christine Lahti' :"I don't want to fight aging I want to take good care of myself, but plastic surgery and all that? I'm not interested.",
  'Don Marquis' :'Middle age is the time when a man is always thinking that in a week or two he will feel as good as ever.',
  'Pearl S. Buck' :'We should so provide for old age that it may have no urgent wants of this world to absorb it from meditation on the next. It is awful to see the lean hands of dotage making a coffer of the grave.',
  'Harold Coffin' :'Middle age is the awkward period when Father Time starts catching up with Mother Nature.',
  'Doris Day' :'Middle age is youth without levity, and age without decay.',
  'Holbrook Jackson' :'No man is ever old enough to know better.',
  'Logan P. Smith' :'The denunciation of the young is a necessary part of the hygiene of older people, and greatly assists the circulation of the blood.',
  'Beverly Sills' :'In youth we run into difficulties. In old age difficulties run into us.',
  'J. B. Priestley' :'We pay when old for the excesses of youth.',
  'Leon Edel' :"The answer to old age is to keep one's mind busy and to go on with one's life as if it were interminable. I always admired Chekhov for building a new house when he was dying of tuberculosis.",
  'Frank A. Clark' :"We've put more effort into helping folks reach old age than into helping them enjoy it.",
  'Max Lerner' :'The real sadness of fifty is not that you change so much but that you change so little.',
  'Shelley Duvall' :"I'm not afraid of aging.",
  'Gene Fowler' :"He has a profound respect for old age. Especially when it's bottled.",
  'Sinclair Lewis' :'Whatever poet, orator or sage may say of it, old age is still old age.',
  'Thomas Bailey Aldrich' :'To keep the heart unwrinkled, to be hopeful, kindly, cheerful, reverent - that is to triumph over old age.',
  'Knut Hamsun' :'In old age we are like a batch of letters that someone has sent. We are no longer in the past, we have arrived.',
  'Fay Weldon' :"There's no such thing as old age, there is only sorrow.",
 ' Israelmore Ayivor': "To a hungry person, every bitter food is sweet. When the preferable is not available, the available becomes preferable!",
 "Napoleon Hill":"Whatever the mind of man can conceive and believe, it can achieve.",
 "Kevin Kruse":"Life isn't about getting and having, it's about giving and being.",
 "Alice Walker":"The most common way people give up their power is by thinking they don’t have any.",
 "Maya Angelou":"I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
 "Jesus":" Ask and it will be given to you; search, and you will find; knock and the door will be opened for you.",
"Helen Keller" :"The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart."
};
let currentQuote="The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.";
let currentAuthor="Helen Keller";
function shareOnTwitter() {
const navUrl =
  'https://twitter.com/intent/tweet?text=' +
  encodeURIComponent('"' + currentQuote + '" ' + " \n\t\t\t\t\t\t — " + currentAuthor);
window.open(navUrl);

}
    function randomQuote() {
     const colors= ["#63b598",	"#ce7d78",	"#ea9e70",	"#a48a9e",	"#c6e1e8",	"#648177",	"#0d5ac1",
"#f205e6",	"#1c0365",	"#14a9ad",	"#4ca2f9",	"#a4e43f",	"#d298e2",	"#6119d0",
"#d2737d",	"#c0a43c",	"#f2510e",	"#651be6",	"#79806e",	"#61da5e",	"#cd2f00",
"#9348af",	"#01ac53",	"#c5a4fb",	"#996635",	"#b11573",	"#4bb473",	"#75d89e",
"#2f3f94",	"#2f7b99",	"#da967d",	"#34891f",	"#b0d87b",	"#ca4751",	"#7e50a8",
"#c4d647",	"#e0eeb8",	"#11dec1",	"#289812",	"#566ca0",	"#ffdbe1",	"#2f1179",
"#935b6d",	"#916988",	"#513d98",	"#aead3a",	"#9e6d71",	"#4b5bdc",	"#0cd36d",
"#250662",	"#cb5bea",	"#228916",	"#ac3e1b",	"#df514a",	"#539397",	"#880977",
"#f697c1",	"#ba96ce",	"#679c9d",	"#c6c42c",	"#5d2c52",	"#48b41b",	"#e1cf3b",
"#5be4f0",	"#57c4d8",	"#a4d17a",	"#225b8",	"#be608b",	"#96b00c",	"#088baf",
"#f158bf",	"#e145ba",	"#ee91e3",	"#05d371",	"#5426e0",	"#4834d0",	"#802234",
"#6749e8",	"#0971f0",	"#8fb413",	"#b2b4f0",	"#c3c89d",	"#c9a941",	"#41d158",
"#fb21a3",	"#51aed9",	"#5bb32d",	"#807fb",	"#21538e",	"#89d534",	"#d36647",
"#7fb411",	"#0023b8",	"#3b8c2a",	"#986b53",	"#f50422",	"#983f7a",	"#ea24a3",
"#79352c",	"#521250",	"#c79ed2",	"#d6dd92",	"#e33e52",	"#b2be57",	"#fa06ec",
"#1bb699",	"#6b2e5f",	"#64820f",	"#1c271",	"#21538e",	"#89d534",	"#d36647",
"#7fb411",	"#0023b8",	"#3b8c2a",	"#986b53",	"#f50422",	"#983f7a",	"#ea24a3",
"#79352c",	"#521250",	"#c79ed2",	"#d6dd92",	"#e33e52",	"#b2be57",	"#fa06ec",
"#1bb699",	"#6b2e5f",	"#64820f",	"#1c271",	"#9cb64a",	"#996c48",	"#9ab9b7",
"#06e052",	"#e3a481",	"#0eb621",	"#fc458e",	"#b2db15",	"#aa226d",	"#792ed8",
"#73872a",	"#520d3a",	"#cefcb8",	"#a5b3d9",	"#7d1d85",	"#c4fd57",	"#f1ae16",
"#8fe22a",	"#ef6e3c",	"#243eeb",	"#1dc18",	"#dd93fd",	"#3f8473",	"#e7dbce",
"#421f79",	"#7a3d93",	"#635f6d",	"#93f2d7",	"#9b5c2a",	"#15b9ee",	"#0f5997",
"#409188",	"#911e20",	"#1350ce",	"#10e5b1",	"#fff4d7",	"#cb2582",	"#ce00be",
"#32d5d6",	"#17232",	"#608572",	"#c79bc2",	"#00f87c",	"#77772a",	"#6995ba",
"#fc6b57",	"#f07815",	"#8fd883",	"#060e27",	"#96e591",	"#21d52e",	"#d00043",
"#b47162",	"#1ec227",	"#4f0f6f",	"#1d1d58",	"#947002",	"#bde052",	"#e08c56",
"#28fcfd",	"#bb09b",	"#36486a",	"#d02e29",	"#1ae6db",	"#3e464c",	"#a84a8f",
"#911e7e",	"#3f16d9",	"#0f525f",	"#ac7c0a",	"#b4c086",	"#c9d730",	"#30cc49",
"#3d6751",	"#fb4c03",	"#640fc1",	"#62c03e",	"#d3493a",	"#88aa0b",	"#406df9",
"#615af0",	"#4be47",	"#2a3434",	"#4a543f",	"#79bca0",	"#a8b8d4",	"#00efd4",
"#7ad236",	"#7260d8",	"#1deaa7",	"#06f43a",	"#823c59",	"#e3d94c",	"#dc1c06",
"#f53b2a",	"#b46238",	"#2dfff6",	"#a82b89",	"#1a8011",	"#436a9f",	"#1a806a",
"#4cf09d",	"#c188a2",	"#67eb4b",	"#b308d3",	"#fc7e41",	"#af3101",	"#ff065",
"#71b1f4",	"#a2f8a5",	"#e23dd0",	"#d3486d",	"#00f7f9",	"#474893",	"#3cec35",
"#1c65cb",	"#5d1d0c",	"#2d7d2a",	"#ff3420",	"#5cdd87",	"#a259a4",	"#e4ac44",
"#1bede6",	"#8798a4",	"#d7790f",	"#b2c24f",	"#de73c2",	"#d70a9c",	"#25b67",
"#88e9b8",	"#c2b0e2",	"#86e98f",	"#ae90e2",	"#1a806b",	"#436a9e",	"#0ec0ff",
"#f812b3",	"#b17fc9",	"#8d6c2f",	"#d3277a",	"#2ca1ae",	"#9685eb",	"#8a96c6",
"#dba2e6",	"#76fc1b",	"#608fa4",	"#20f6ba",	"#07d7f6",	"#dce77a",	"#77ecca"]
let randColor=colors[Math.floor(Math.random() * colors.length)];
const key = Object.keys(quotes);
const author=key[Math.floor(Math.random() * key.length)];
      document.getElementById("text").innerHTML=`<i class="fa fa-quote-left" aria-hidden="true"></i> ${quotes[author]} <i class="fa fa-quote-right" aria-hidden="true"></i>`;
      document.getElementById("author").innerHTML=`—${author}`;
       // document.getElementById("wrapper").style.backgroundColor=randColor;//
        document.getElementById("wrapper").style.color=randColor;
        
        currentQuote=quotes[author];
        currentAuthor=author;
    }
   