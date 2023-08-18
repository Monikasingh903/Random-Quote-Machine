
const quotes = [
       { "quote": "The biggest adventure you can take is to live the life of your dreams.", "author": "Oprah Winfrey" },
       { "quote": "Life is 10% what happens to us and 90% how we react to it.", "author": "Charles R. Swindoll" },
       { "quote": "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.", "author": "Ralph Waldo Emerson" },
       { "quote": "Life is really simple, but we insist on making it complicated.", "author": "Confucius" },
       { "quote": "The only way to do great work is to love what you do.", "author": "Steve Jobs" },
       { "quote": "Life is either a daring adventure or nothing at all.", "author": "Helen Keller" },
       { "quote": "The good life is one inspired by love and guided by knowledge.", "author": "Bertrand Russell" },
       { "quote": "The purpose of our lives is to be happy.", "author": "Dalai Lama" },
       { "quote": "Life is 10% what happens to you and 90% how you react to it.", "author": "Lou Holtz" },
       { "quote": "The quality of a person's life is in direct proportion to their commitment to excellence, regardless of their chosen field of endeavor.", "author": "Vince Lombardi" },
       { "quote": "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.", "author": "Albert Schweitzer" },
       { "quote": "Success is not in what you have, but who you are.", "author": "Bo Bennett" },
       { "quote": "Success usually comes to those who are too busy to be looking for it.", "author": "Henry David Thoreau" },
       { "quote": "The only place where success comes before work is in the dictionary.", "author": "Vidal Sassoon" },
       { "quote": "Success is not the absence of failure; it's the persistence through failure.", "author": "Aisha Tyler" },
       { "quote": "Success is not just about making money. It's about making a difference.", "author": "Unknown" },
       { "quote": "Success is not the key to success. You have to have the key to unlock it.", "author": "Ralph Waldo Emerson" },
       { "quote": "Success is walking from failure to failure with no loss of enthusiasm.", "author": "Winston Churchill" },
       { "quote": "Success is not about being the best. It's about being better than you were yesterday.", "author": "Unknown" },
       { "quote": "Failure is simply the opportunity to begin again, this time more intelligently.", "author": "Henry Ford" },
       { "quote": "The greatest glory in living lies not in never falling, but in rising every time we fall.", "author": "Nelson Mandela" },
       { "quote": "Failure is the condiment that gives success its flavor.", "author": "Truman Capote" },
       { "quote": "I have not failed. I've just found 10,000 ways that won't work.", "author": "Thomas Edison" },
       { "quote": "Failure is a detour, not a dead-end street.", "author": "Zig Ziglar" },
       { "quote": "Don't be afraid of failure. Be afraid of not trying.", "author": "Unknown" },
       { "quote": "Failure is the opportunity to begin again more intelligently.", "author": "Henry A. Kissinger" },
       { "quote": "Failure is a stepping stone to success.", "author": "Unknown" },
       { "quote": "Failures are finger posts on the road to achievement.", "author": "C.S. Lewis" },
       { "quote": "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.", "author": "Gautama Buddha" },
       { "quote": "Peace comes from within. Do not seek it without.", "author": "Gautama Buddha" },
       { "quote": "You yourself, as much as anybody in the entire universe, deserve your love and affection.", "author": "Gautama Buddha" },
       { "quote": "Thousands of candles can be lighted from a single candle, and the life of the candle will not be shortened. Happiness never decreases by being shared.", "author": "Gautama Buddha" },
       { "quote": "Do not overrate what you have received, nor envy others. He who envies others does not obtain peace of mind.", "author": "Gautama Buddha" },
       { "quote": "In the end, only three things matter: how much you loved, how gently you lived, and how gracefully you let go of things not meant for you.", "author": "Gautama Buddha" },
       { "quote": "The mind is everything. What you think you become.", "author": "Gautama Buddha" },
       { "quote": "Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship.", "author": "Gautama Buddha" },
       { "quote": "Hatred does not cease by hatred, but only by love; this is the eternal rule.", "author": "Gautama Buddha" },
       { "quote": "Three things cannot be long hidden: the sun, the moon, and the truth.", "author": "Gautama Buddha" },
       { "quote": "A true friend is someone who is always there for you, through the ups and downs.", "author": "Unknown" },
       { "quote": "Friendship is born at that moment when one person says to another, 'What! You too? I thought I was the only one.'", "author": "C.S. Lewis" },
       { "quote": "A friend is someone who knows all about you and still loves you.", "author": "Elbert Hubbard" },
       { "quote": "A real friend is one who walks in when the rest of the world walks out.", "author": "Walter Winchell" },
       { "quote": "Friendship is the only cement that will ever hold the world together.", "author": "Woodrow Wilson" },
       { "quote": "Friendship is the inexpressible comfort of feeling safe with a person, having neither to weigh thoughts nor measure words.", "author": "George Eliot" },
       { "quote": "A friend is one who overlooks your broken fence and admires the flowers in your garden.", "author": "Unknown" },
       { "quote": "Friendship is not about whom you have known the longest; it is about who came and never left your side.", "author": "Unknown" },
       { "quote": "A true friend is someone who is always honest and truthful, even when it's hard.", "author": "Unknown" },
       { "quote": "A loyal friend laughs at your jokes when they're not so good and sympathizes with your problems when they're not so bad.", "author": "Arnold H. Glasow" },
       { "quote": "The greatest pain that comes from love is loving someone you can never have.", "author": "Unknown" },
       { "quote": "The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom.", "author": "Isaac Asimov" },
       { "quote": "The only thing more shocking than the truth are the lies people tell to cover it up.", "author": "Unknown" },
       { "quote": "Behind every beautiful thing, there's some kind of pain.", "author": "Bob Dylan" },
       { "quote": "It's sad when someone you know becomes someone you knew.", "author": "Henry Rollins" },
       { "quote": "There are moments when I wish I could roll back the clock and take all the sadness away, but I have the feeling that if I did, the joy would be gone as well.", "author": "Nicholas Sparks" },
       { "quote": "It's sad how people become what they had promised they never will.", "author": "Unknown" },
       { "quote": "Sometimes, you just have to smile, pretend everything's okay, hold back the tears, and just walk away.", "author": "Unknown" },
       { "quote": "Tears come from the heart and not from the brain.", "author": "Leonardo da Vinci" },
       { "quote": "The worst feeling is not being lonely, but being forgotten by someone you can't forget.", "author": "Unknown" },
       { "quote": "The truth will set you free, but first, it will piss you off.", "author": "Gloria Steinem" },
       { "quote": "The truth is rarely pure and never simple.", "author": "Oscar Wilde" },
       { "quote": "Three things cannot be long hidden: the sun, the moon, and the truth.", "author": "Gautama Buddha" },
       { "quote": "The truth is more important than the facts.", "author": "Frank Lloyd Wright" },
       { "quote": "Facts do not cease to exist because they are ignored.", "author": "Aldous Huxley" },
       { "quote": "Truth is like the sun. You can shut it out for a time, but it ain't going away.", "author": "Elvis Presley" },
       { "quote": "Honesty is the first chapter in the book of wisdom.", "author": "Thomas Jefferson" },
       { "quote": "The truth is incontrovertible. Malice may attack it, ignorance may deride it, but in the end, there it is.", "author": "Winston Churchill" },
       { "quote": "There is no greatness where there is no simplicity, goodness, and truth.", "author": "Leo Tolstoy" },
       { "quote": "Truth is the most valuable thing we have. Let us economize it.", "author": "Mark Twain" },
       { "quote": "Friendship is born at that moment when one person says to another, 'What! You too? I thought I was the only one.'", "author": "C.S. Lewis" },
       { "quote": "A true friend is someone who is always there for you, through the ups and downs, no matter what.", "author": "Unknown" },
       { "quote": "Friendship is not about whom you have known the longest; it is about who came and never left your side.", "author": "Unknown" },
       { "quote": "A friend is someone who understands your past, believes in your future, and accepts you just the way you are.", "author": "Unknown" },
       { "quote": "True friendship is not about being inseparable, it's about being separated and nothing changes.", "author": "Unknown" },
       { "quote": "A friend is one who knows you and loves you just the same.", "author": "Elbert Hubbard" },
       { "quote": "Friendship is the comfort of knowing that even when you feel alone, you're never truly alone.", "author": "Unknown" },
       { "quote": "Friendship isn't about whom you have known the longest, it's about who came and never left your side.", "author": "Yolanda Hadid" },
       { "quote": "A true friend is someone who is always there when they need you, but also when you need them.", "author": "Unknown" },
       { "quote": "Friendship is the sweetest form of love.", "author": "Unknown" },
       { "quote": "Self-respect is the fruit of discipline; the sense of dignity grows with the ability to say no to oneself.", "author": "Abraham Joshua Heschel" },
       { "quote": "To love yourself is to understand that you don't need to be perfect to be good.", "author": "Unknown" },
       { "quote": "Self-respect is the cornerstone of all virtue.", "author": "John Herschel" },
       { "quote": "Respect yourself enough to walk away from anything that no longer serves you, grows you, or makes you happy.", "author": "Robert Tew" },
       { "quote": "Self-respect is the most important kind of respect because it sets the tone for how you treat yourself and how others treat you.", "author": "Unknown" },
       { "quote": "The most powerful relationship you will ever have is the relationship with yourself.", "author": "Steve Maraboli" },
       { "quote": "Self-respect is a question of recognizing that anything worth having has a price.", "author": "Joan Didion" },
       { "quote": "When you are content to be simply yourself and don't compare or compete, everybody will respect you.", "author": "Lao Tzu" },
       { "quote": "Respect yourself enough to walk away from anything that no longer serves you, grows you, or makes you happy.", "author": "Unknown" },
       { "quote": "Self-respect is the cornerstone of all virtue.", "author": "John Herschel" },
       { "quote": "Intelligence is the ability to adapt to change.", "author": "Stephen Hawking" },
       { "quote": "The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge.", "author": "Stephen Hawking" },
       { "quote": "Look up at the stars and not down at your feet. Try to make sense of what you see, and wonder about what makes the universe exist. Be curious.", "author": "Stephen Hawking" },
       { "quote": "We are just an advanced breed of monkeys on a minor planet of a very average star. But we can understand the universe. That makes us something very special.", "author": "Stephen Hawking" },
       { "quote": "Life would be tragic if it weren't funny.", "author": "Stephen Hawking" },
       { "quote": "The universe doesn't allow perfection.", "author": "Stephen Hawking" },
       { "quote": "My goal is simple. It is a complete understanding of the universe, why it is as it is, and why it exists at all.", "author": "Stephen Hawking" },
       { "quote": "However difficult life may seem, there is always something you can do and succeed at.", "author": "Stephen Hawking" },
       { "quote": "We are each free to believe what we want, and it is my view that the simplest explanation is there is no God. No one created the universe, and no one directs our fate.", "author": "Stephen Hawking" },
       { "quote": "Remember to look up at the stars and not down at your feet. Be curious, and however difficult life may seem, there is always something you can do and succeed at. It matters that you don't just give up.", "author": "Stephen Hawking" },
       { "quote": "Time is what we want most, but what we use worst.", "author": "William Penn" },
       { "quote": "The future is something which everyone reaches at the rate of sixty minutes an hour, whatever he does, whoever he is.", "author": "C.S. Lewis" },
       { "quote": "Lost time is never found again.", "author": "Benjamin Franklin" },
       { "quote": "Time is a created thing. To say 'I don't have time,' is like saying, 'I don't want to.'", "author": "Lao Tzu" },
       { "quote": "Time you enjoy wasting is not wasted time.", "author": "Marthe Troly-Curtin" },
       { "quote": "Time is the longest distance between two places.", "author": "Tennessee Williams" },
       { "quote": "Time flies like an arrow; fruit flies like a banana.", "author": "Groucho Marx" },
       { "quote": "The two most powerful warriors are patience and time.", "author": "Leo Tolstoy" },
       { "quote": "Time is what keeps everything from happening at once.", "author": "Ray Cummings" },
       { "quote": "The best way to predict the future is to create it.", "author": "Peter Drucker" },
       { "quote": "The future depends on what we do in the present.", "author": "Mahatma Gandhi" },
       { "quote": "The future belongs to those who believe in the beauty of their dreams.", "author": "Eleanor Roosevelt" },
       { "quote": "The future starts today, not tomorrow.", "author": "Pope John Paul II" },
       { "quote": "The future is not something we enter. The future is something we create.", "author": "Leonard I. Sweet" },
       { "quote": "The only limit to our realization of tomorrow will be our doubts of today.", "author": "Franklin D. Roosevelt" },
       { "quote": "The future is always beginning now.", "author": "Mark Strand" },
       { "quote": "The past cannot be changed. The future is yet in your power.", "author": "Unknown" },
       { "quote": "The future rewards those who press on. I don't have time to feel sorry for myself. I don't have time to complain. I'm going to press on.", "author": "Barack Obama" },
       { "quote": "The future belongs to those who prepare for it today.", "author": "Malcolm X" },
       { "quote": "Trust is the glue of life. It's the most essential ingredient in effective communication. It's the foundational principle that holds all relationships.", "author": "Stephen Covey" },
       { "quote": "Trust takes years to build, seconds to break, and forever to repair.", "author": "Unknown" },
       { "quote": "Trust yourself. Create the kind of self that you will be happy to live with all your life. Make the most of yourself by fanning the tiny, inner sparks of possibility into flames of achievement.", "author": "Golda Meir" },
       { "quote": "The best way to find out if you can trust somebody is to trust them.", "author": "Ernest Hemingway" },
       { "quote": "Trust is the highest form of human motivation. It brings out the very best in people.", "author": "Stephen R. Covey" },
       { "quote": "Trust is earned when actions meet words.", "author": "Unknown" },
       { "quote": "To be trusted is a greater compliment than being loved.", "author": "George MacDonald" },
       { "quote": "Trust is built when someone is vulnerable and not taken advantage of.", "author": "Bob Vanourek" },
       { "quote": "Trust is the fruit of a relationship in which you know you are loved.", "author": "William Paul Young" },
       { "quote": "Whatever you are, be a good one.", "author": "Abraham Lincoln" },
       { "quote": "In the end, it's not the years in your life that count. It's the life in your years.", "author": "Abraham Lincoln" },
       { "quote": "I am a slow walker, but I never walk back.", "author": "Abraham Lincoln" },
       { "quote": "The best way to predict your future is to create it.", "author": "Abraham Lincoln" },
       { "quote": "The ballot is stronger than the bullet.", "author": "Abraham Lincoln" },
       { "quote": "Character is like a tree and reputation like its shadow. The shadow is what we think of it; the tree is the real thing.", "author": "Abraham Lincoln" },
       { "quote": "Nearly all men can stand adversity, but if you want to test a man's character, give him power.", "author": "Abraham Lincoln" },
       { "quote": "Whatever you are, be a good one.", "author": "Abraham Lincoln" },
       { "quote": "You can have anything you want if you want it badly enough. You can be anything you want to be, do anything you set out to accomplish if you hold to that desire with singleness of purpose.", "author": "Abraham Lincoln" },

       {
              "quote": "Life isn’t about getting and having, it’s about giving and being.", "author": "Kevin Kruse"
       },
       {
              "quote": "Whatever the mind of man can conceive and believe, it can achieve.", "author": "Napoleon Hill"
       },
       {
              "quote": "Strive not to be a success, but rather to be of value.", "author": "Albert Einstein"
       },
       {
              "quote": "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.", "author": "Robert Frost"
       },
       {
              "quote": "I attribute my success to this: I never gave or took any excuse.", "author": "Florence Nightingale"
       },
       {
              "quote": "You miss 100% of the shots you don’t take.", "author": "Wayne Gretzky"
       },
       {
              "quote": "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.", "author": "Michael Jordan"
       },
       {
              "quote": "The most difficult thing is the decision to act, the rest is merely tenacity.", "author": "Amelia Earhart"
       },
       {
              "quote": "Every strike brings me closer to the next home run.", "author": "Babe Ruth"
       },
       {
              "quote": "Definiteness of purpose is the starting point of all achievement.", "author": "W. Clement Stone"
       },
       {
              "quote": "We must balance conspicuous consumption with conscious capitalism.", "author": "Kevin Kruse"
       },
       {
              "quote": "Life is what happens to you while you’re busy making other plans.", "author": "John Lennon"
       },
       {
              "quote": "We become what we think about.", "author": "Earl Nightingale"
       },
       {
              "quote": "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.", "author": "Mark Twain"
       },
       {
              "quote": "Life is 10% what happens to me and 90% of how I react to it.", "author": "Charles Swindoll"
       },
       {
              "quote": "The most common way people give up their power is by thinking they don’t have any.", "author": "Alice Walker"
       },
       {
              "quote": "The mind is everything. What you think you become.", "author": "Buddha"
       },
       {
              "quote": "The best time to plant a tree was 20 years ago. The second best time is now.", "author": "Chinese Proverb"
       },
       {
              "quote": "An unexamined life is not worth living.", "author": "Socrates"
       },
       {
              "quote": "Eighty percent of success is showing up.", "author": "Woody Allen"
       },
       {
              "quote": "Your time is limited, so don’t waste it living someone else’s life.", "author": "Steve Jobs"
       },
       {
              "quote": "Winning isn’t everything, but wanting to win is.", "author": "Vince Lombardi"
       },
       {
              "quote": "I am not a product of my circumstances. I am a product of my decisions.", "author": "Stephen Covey"
       },
       {
              "quote": "Every child is an artist.  The problem is how to remain an artist once he grows up.", "author": "Pablo Picasso"
       },
       {
              "quote": "You can never cross the ocean until you have the courage to lose sight of the shore.", "author": "Christopher Columbus"
       },
       {
              "quote": "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.", "author": "Maya Angelou"
       },
       {
              "quote": "Either you run the day, or the day runs you.", "author": "Jim Rohn"
       },
       {
              "quote": "Whether you think you can or you think you can’t, you’re right.", "author": "Henry Ford"
       },
       {
              "quote": "The two most important days in your life are the day you are born and the day you find out why.", "author": "Mark Twain"
       },
       {
              "quote": "Whatever you can do, or dream you can, begin it.  Boldness has genius, power and magic in it.", "author": "Johann Wolfgang von Goethe"
       },
       {
              "quote": "The best revenge is massive success.", "author": "Frank Sinatra"
       },
       {
              "quote": "People often say that motivation doesn’t last. Well, neither does bathing.  That’s why we recommend it daily.", "author": "Zig Ziglar"
       },
       {
              "quote": "Life shrinks or expands in proportion to one’s courage.", "author": "Anais Nin"
       },
       {
              "quote": "If you hear a voice within you say “you cannot paint,” then by all means paint and that voice will be silenced.", "author": "Vincent Van Gogh"
       },
       {
              "quote": "There is only one way to avoid criticism: do nothing, say nothing, and be nothing.", "author": "Aristotle"
       },
       {
              "quote": "Ask and it will be given to you; search, and you will find; knock and the door will be opened for you.", "author": "Jesus"
       },
       {
              "quote": "The only person you are destined to become is the person you decide to be.", "author": "Ralph Waldo Emerson"
       },
       {
              "quote": "Go confidently in the direction of your dreams.  Live the life you have imagined.", "author": "Henry David Thoreau"
       },
       {
              "quote": "When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me.", "author": "Erma Bombeck"
       },
       {
              "quote": "Few things can help an individual more than to place responsibility on him, and to let him know that you trust him.", "author": "Booker T. Washington"
       },
       {
              "quote": "Certain things catch your eye, but pursue only those that capture the heart.", "author": " Ancient Indian Proverb"
       },
       {
              "quote": "Believe you can and you’re halfway there.", "author": "Theodore Roosevelt"
       },
       {
              "quote": "Everything you’ve ever wanted is on the other side of fear.", "author": "George Addair"
       },
       {
              "quote": "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.", "author": "Plato"
       },
       {
              "quote": "Teach thy tongue to say, “I do not know,” and thous shalt progress.", "author": "Maimonides"
       },
       {
              "quote": "Start where you are. Use what you have.  Do what you can.", "author": "Arthur Ashe"
       },
       {
              "quote": "When I was 5 years old, my mother always told me that happiness was the key to life.  When I went to school, they asked me what I wanted to be when I grew up.  I wrote down ‘happy’.  They told me I didn’t understand the assignment, and I told them they didn’t understand life.", "author": "John Lennon"
       },
       {
              "quote": "Fall seven times and stand up eight.", "author": "Japanese Proverb"
       },
       {
              "quote": "When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.", "author": "Helen Keller"
       },
       {
              "quote": "Everything has beauty, but not everyone can see.", "author": "Confucius"
       },
       {
              "quote": "How wonderful it is that nobody need wait a single moment before starting to improve the world.", "author": "Anne Frank"
       },
       {
              "quote": "When I let go of what I am, I become what I might be.", "author": "Lao Tzu"
       },
       {
              "quote": "Life is not measured by the number of breaths we take, but by the moments that take our breath away.", "author": "Maya Angelou"
       },
       {
              "quote": "Happiness is not something readymade.  It comes from your own actions.", "author": "Dalai Lama"
       },
       {
              "quote": "If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on.", "author": "Sheryl Sandberg"
       },
       {
              "quote": "First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end.", "author": "Aristotle"
       },
       {
              "quote": "If the wind will not serve, take to the oars.", "author": "Latin Proverb"
       },
       {
              "quote": "You can’t fall if you don’t climb.  But there’s no joy in living your whole life on the ground.", "author": "Unknown"
       },
       {
              "quote": "We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.", "author": "Marie Curie"
       },
       {
              "quote": "Too many of us are not living our dreams because we are living our fears.", "author": "Les Brown"
       },
       {
              "quote": "Challenges are what make life interesting and overcoming them is what makes life meaningful.", "author": "Joshua J. Marine"
       },
       {
              "quote": "If you want to lift yourself up, lift up someone else.", "author": "Booker T. Washington"
       },
       {
              "quote": "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.", "author": "Leonardo da Vinci"
       },
       {
              "quote": "Limitations live only in our minds.  But if we use our imaginations, our possibilities become limitless.", "author": "Jamie Paolinetti"
       },
       {
              "quote": "You take your life in your own hands, and what happens? A terrible thing, no one to blame.", "author": "Erica Jong"
       },
       {
              "quote": "What’s money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.", "author": "Bob Dylan"
       },
       {
              "quote": "I didn’t fail the test. I just found 100 ways to do it wrong.", "author": "Benjamin Franklin"
       },
       {
              "quote": "In order to succeed, your desire for success should be greater than your fear of failure.", "author": "Bill Cosby"
       },
       {
              "quote": "A person who never made a mistake never tried anything new.", "author": " Albert Einstein"
       },
       {
              "quote": "The person who says it cannot be done should not interrupt the person who is doing it.", "author": "Chinese Proverb"
       },
       {
              "quote": "There are no traffic jams along the extra mile.", "author": "Roger Staubach"
       },
       {
              "quote": "It is never too late to be what you might have been.", "author": "George Eliot"
       },
       {
              "quote": "You become what you believe.", "author": "Oprah Winfrey"
       },
       {
              "quote": "I would rather die of passion than of boredom.", "author": "Vincent van Gogh"
       },
       {
              "quote": "A truly rich man is one whose children run into his arms when his hands are empty.", "author": "Unknown"
       },
       {
              "quote": "It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings.", "author": "Ann Landers"
       },
       {
              "quote": "If you want your children to turn out well, spend twice as much time with them, and half as much money.", "author": "Abigail Van Buren"
       },
       {
              "quote": "Build your own dreams, or someone else will hire you to build theirs.", "author": "Farrah Gray"
       },
       {
              "quote": "The battles that count aren’t the ones for gold medals. The struggles within yourself–the invisible battles inside all of us–that’s where it’s at.", "author": "Jesse Owens"
       },
       {
              "quote": "Education costs money.  But then so does ignorance.", "author": "Sir Claus Moser"
       },
       {
              "quote": "I have learned over the years that when one’s mind is made up, this diminishes fear.", "author": "Rosa Parks"
       },
       {
              "quote": "It does not matter how slowly you go as long as you do not stop.", "author": "Confucius"
       },
       {
              "quote": "If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.", "author": "Oprah Winfrey"
       },
       {
              "quote": "Remember that not getting what you want is sometimes a wonderful stroke of luck.", "author": "Dalai Lama"
       },
       {
              "quote": "You can’t use up creativity.  The more you use, the more you have.", "author": "Maya Angelou"
       },
       {
              "quote": "Dream big and dare to fail.", "author": "Norman Vaughan"
       },
       {
              "quote": "Our lives begin to end the day we become silent about things that matter.", "author": "Martin Luther King Jr."
       },
       {
              "quote": "Do what you can, where you are, with what you have.", "author": "Teddy Roosevelt"
       },
       {
              "quote": "If you do what you’ve always done, you’ll get what you’ve always gotten.", "author": "Tony Robbins"
       },
       {
              "quote": "Dreaming, after all, is a form of planning.", "author": "Gloria Steinem"
       },
       {
              "quote": "It’s your place in the world; it’s your life. Go on and do all you can with it, and make it the life you want to live.", "author": "Mae Jemison"
       },
       {
              "quote": "You may be disappointed if you fail, but you are doomed if you don’t try.", "author": "Beverly Sills"
       },
       {
              "quote": "Remember no one can make you feel inferior without your consent.", "author": "Eleanor Roosevelt"
       },
       {
              "quote": "Life is what we make it, always has been, always will be.", "author": "Grandma Moses"
       },
       {
              "quote": "The question isn’t who is going to let me; it’s who is going to stop me.", "author": "Ayn Rand"
       },
       {
              "quote": "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.", "author": "Henry Ford"
       },
       {
              "quote": "It’s not the years in your life that count. It’s the life in your years.", "author": "Abraham Lincoln"
       },
       {
              "quote": "Change your thoughts and you change your world.", "author": "Norman Vincent Peale"
       },
       {
              "quote": "Either write something worth reading or do something worth writing.", "author": "Benjamin Franklin"
       },
       {
              "quote": "Nothing is impossible, the word itself says, “I’m possible!”", "author": "–Audrey Hepburn"
       },
       {
              "quote": "The only way to do great work is to love what you do.", "author": "Steve Jobs"
       },
       {
              "quote": "If you can dream it, you can achieve it.", "author": "Zig Ziglar"
       },


]
function shareOnTwitter() {
       const navUrl =
              'https://twitter.com/intent/tweet?text=' +
              encodeURIComponent('"' + currentQuote + '" ' + " \n\t\t\t\t\t\t — " + currentAuthor);
       window.open(navUrl);

}

const colors = ["#63b598", "#ce7d78", "#ea9e70", "#a48a9e", "#c6e1e8", "#648177", "#0d5ac1",
       "#f205e6", "#1c0365", "#14a9ad", "#4ca2f9", "#a4e43f", "#d298e2", "#6119d0",
       "#d2737d", "#c0a43c", "#f2510e", "#651be6", "#79806e", "#61da5e", "#cd2f00",
       "#9348af", "#01ac53", "#c5a4fb", "#996635", "#b11573", "#4bb473", "#75d89e",
       "#2f3f94", "#2f7b99", "#da967d", "#34891f", "#b0d87b", "#ca4751", "#7e50a8",
       "#c4d647", "#e0eeb8", "#11dec1", "#289812", "#566ca0", "#ffdbe1", "#2f1179",
       "#935b6d", "#916988", "#513d98", "#aead3a", "#9e6d71", "#4b5bdc", "#0cd36d",
       "#250662", "#cb5bea", "#228916", "#ac3e1b", "#df514a", "#539397", "#880977",
       "#f697c1", "#ba96ce", "#679c9d", "#c6c42c", "#5d2c52", "#48b41b", "#e1cf3b",
       "#5be4f0", "#57c4d8", "#a4d17a", "#225b8", "#be608b", "#96b00c", "#088baf",
       "#f158bf", "#e145ba", "#ee91e3", "#05d371", "#5426e0", "#4834d0", "#802234",
       "#6749e8", "#0971f0", "#8fb413", "#b2b4f0", "#c3c89d", "#c9a941", "#41d158",
       "#fb21a3", "#51aed9", "#5bb32d", "#807fb", "#21538e", "#89d534", "#d36647",
       "#7fb411", "#0023b8", "#3b8c2a", "#986b53", "#f50422", "#983f7a", "#ea24a3",
       "#79352c", "#521250", "#c79ed2", "#d6dd92", "#e33e52", "#b2be57", "#fa06ec",
       "#1bb699", "#6b2e5f", "#64820f", "#1c271", "#21538e", "#89d534", "#d36647",
       "#7fb411", "#0023b8", "#3b8c2a", "#986b53", "#f50422", "#983f7a", "#ea24a3",
       "#79352c", "#521250", "#c79ed2", "#d6dd92", "#e33e52", "#b2be57", "#fa06ec",
       "#1bb699", "#6b2e5f", "#64820f", "#1c271", "#9cb64a", "#996c48", "#9ab9b7",
       "#06e052", "#e3a481", "#0eb621", "#fc458e", "#b2db15", "#aa226d", "#792ed8",
       "#73872a", "#520d3a", "#cefcb8", "#a5b3d9", "#7d1d85", "#c4fd57", "#f1ae16",
       "#8fe22a", "#ef6e3c", "#243eeb", "#1dc18", "#dd93fd", "#3f8473", "#e7dbce",
       "#421f79", "#7a3d93", "#635f6d", "#93f2d7", "#9b5c2a", "#15b9ee", "#0f5997",
       "#409188", "#911e20", "#1350ce", "#10e5b1", "#fff4d7", "#cb2582", "#ce00be",
       "#32d5d6", "#17232", "#608572", "#c79bc2", "#00f87c", "#77772a", "#6995ba",
       "#fc6b57", "#f07815", "#8fd883", "#060e27", "#96e591", "#21d52e", "#d00043",
       "#b47162", "#1ec227", "#4f0f6f", "#1d1d58", "#947002", "#bde052", "#e08c56",
       "#28fcfd", "#bb09b", "#36486a", "#d02e29", "#1ae6db", "#3e464c", "#a84a8f",
       "#911e7e", "#3f16d9", "#0f525f", "#ac7c0a", "#b4c086", "#c9d730", "#30cc49",
       "#3d6751", "#fb4c03", "#640fc1", "#62c03e", "#d3493a", "#88aa0b", "#406df9",
       "#615af0", "#4be47", "#2a3434", "#4a543f", "#79bca0", "#a8b8d4", "#00efd4",
       "#7ad236", "#7260d8", "#1deaa7", "#06f43a", "#823c59", "#e3d94c", "#dc1c06",
       "#f53b2a", "#b46238", "#2dfff6", "#a82b89", "#1a8011", "#436a9f", "#1a806a",
       "#4cf09d", "#c188a2", "#67eb4b", "#b308d3", "#fc7e41", "#af3101", "#ff065",
       "#71b1f4", "#a2f8a5", "#e23dd0", "#d3486d", "#00f7f9", "#474893", "#3cec35",
       "#1c65cb", "#5d1d0c", "#2d7d2a", "#ff3420", "#5cdd87", "#a259a4", "#e4ac44",
       "#1bede6", "#8798a4", "#d7790f", "#b2c24f", "#de73c2", "#d70a9c", "#25b67",
       "#88e9b8", "#c2b0e2", "#86e98f", "#ae90e2", "#1a806b", "#436a9e", "#0ec0ff",
       "#f812b3", "#b17fc9", "#8d6c2f", "#d3277a", "#2ca1ae", "#9685eb", "#8a96c6",
       "#dba2e6", "#76fc1b", "#608fa4", "#20f6ba", "#07d7f6", "#dce77a", "#77ecca"]
const imageArr = [
       'https://source.unsplash.com/random/?sunrise',
       'https://source.unsplash.com/random/?nature',
       'https://source.unsplash.com/random/?sunset',
       'https://source.unsplash.com/random/?flowers',
       'https://source.unsplash.com/random/?forest',
       'https://source.unsplash.com/random/?water',
       'https://source.unsplash.com/random/?galaxy',
       'https://source.unsplash.com/random/?stars',
       'https://source.unsplash.com/random/?clouds',
];
let rQuotes = [];
const quotesArray = [];
let selectedQuote;
let selectedAuthor;
let randomQuoteNumber;
function randomQuote() {
       let randImage = imageArr[Math.floor(Math.random() * imageArr.length)];
       let randColor = colors[Math.floor(Math.random() * colors.length)];
       randomQuoteNumber = Math.floor(Math.random() * quotes.length);
       console.log(randomQuoteNumber);
       if (!rQuotes.includes(randomQuoteNumber)) {
              rQuotes.push(randomQuoteNumber);
              console.log(rQuotes);
              selectedQuote = quotes[randomQuoteNumber].quote;
              selectedAuthor = quotes[randomQuoteNumber].author;
       }
       document.getElementById("text").innerHTML = `<i class="fa fa-quote-left" aria-hidden="true"></i> ${selectedQuote} <i class="fa fa-quote-right" aria-hidden="true"></i>`;
       document.getElementById("author").innerHTML = `—${selectedAuthor}`; document.body.style.backgroundImage = "url('" + randImage + "')";
       document.getElementById("wrapper").style.color = randColor;

       currentQuote = selectedQuote;
       currentAuthor = selectedAuthor;
              quotesArray.push({ text: currentQuote, author: currentAuthor });
              updateQuote(currentQuote, currentAuthor);
       }
       
       // Function to update the displayed quote
       function updateQuote(quote, author) {
         document.getElementById('text').textContent = quote;
         document.getElementById('author').textContent = author;
       }
            

document.addEventListener('DOMContentLoaded', randomQuote);

