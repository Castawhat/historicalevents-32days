// --- Game Data (Daily Event) ---
// In a real application, this would come from a server API based on the date.
// For this example, we'll simulate a daily event.
const historicalEvents = {
    // --- Starting from July 25, 2025 (Day 1) ---
    "2025-07-25": {
        event: "Discovery of Pluto's Moon Charon (1978)",
        clues: [
            "Clue 1: This discovery reshaped our understanding of a distant body in our solar system.",
            "Clue 2: It was identified orbiting a celestial object that would later be reclassified from a planet to a dwarf planet.",
            "Clue 3: The name of this newly found body is derived from a mythological figure known for guiding souls across a river.",
            "Clue 4: American astronomer James Christy made this significant observation in 1978."
        ],
        answerKeywords: ["charon", "pluto's moon charon", "plutos moon charon", "moon charon", "christy charon", "pluto moon charon"],
        summary: "On July 25, 1978, astronomer James Christy discovered Charon, the largest moon of the dwarf planet Pluto. This discovery was crucial as it allowed for a more accurate calculation of Pluto's mass."
    },
    "2025-07-26": {
        event: "Cuban Revolution Begins (1953)",
        clues: [
            "Clue 1: This event marked the beginning of a significant political uprising in a Caribbean island nation.",
            "Clue 2: It started with an attack on the Moncada Barracks.",
            "Clue 3: The leader of this movement would later become the country's long-standing communist dictator.",
            "Clue 4: Fidel Castro led this failed but influential assault in 1953, inspiring a broader revolution."
        ],
        answerKeywords: ["cuban revolution", "moncada barracks attack", "fidel castro revolution", "revolution in cuba"],
        summary: "On July 26, 1953, Fidel Castro led a small group of rebels in an attack on the Moncada Barracks, marking the generally accepted start of the Cuban Revolution, though the attack itself was unsuccessful."
    },
    "2025-07-27": {
        event: "Korean War Armistice Signed (1953)",
        clues: [
            "Clue 1: This document ended active hostilities in a major 20th-century conflict, though not technically a peace treaty.",
            "Clue 2: It established a demilitarized zone (DMZ) and divided a peninsula.",
            "Clue 3: The agreement was signed at Panmunjom.",
            "Clue 4: It paused the fighting in the Korean War in 1953, creating a lasting division."
        ],
        answerKeywords: ["korean war armistice", "korean armistice", "panmunjom agreement", "korean war ceasefire"],
        summary: "On July 27, 1953, the Korean Armistice Agreement was signed, effectively ending the active combat phase of the Korean War and establishing the Korean Demilitarized Zone (DMZ) as a buffer between North and South Korea."
    },
    "2025-07-28": {
        event: "World War I Begins (1914)",
        clues: [
            "Clue 1: This day marked the official start of a global conflict that reshaped Europe.",
            "Clue 2: It was triggered by the assassination of an Archduke.",
            "Clue 3: Austria-Hungary declared war on Serbia.",
            "Clue 4: The Great War officially commenced on this date in 1914."
        ],
        answerKeywords: ["world war i begins", "wwi begins", "great war begins", "austria hungary declares war", "first world war begins"],
        summary: "On July 28, 1914, Austria-Hungary declared war on Serbia, officially beginning World War I, following the assassination of Archduke Franz Ferdinand a month earlier."
    },
    "2025-07-29": {
        event: "NASA Founded (1958)",
        clues: [
            "Clue 1: This U.S. government agency was established to lead the nation's space efforts.",
            "Clue 2: It was created in response to the Soviet Union's early lead in the Space Race.",
            "Clue 3: Its full name includes 'National Aeronautics and Space'.",
            "Clue 4: President Eisenhower signed the act creating NASA in 1958."
        ],
        answerKeywords: ["nasa founded", "nasa established", "national aeronautics and space administration founded"],
        summary: "On July 29, 1958, President Dwight D. Eisenhower signed the National Aeronautics and Space Act, establishing NASA, the U.S. civilian agency responsible for coordinating space exploration and aeronautical research."
    },
    "2025-07-30": {
        event: "USS Indianapolis Sinks (1945)",
        clues: [
            "Clue 1: This naval tragedy during WWII resulted in the greatest loss of life at sea from a single ship in U.S. Navy history.",
            "Clue 2: The ship had just delivered components for the atomic bomb.",
            "Clue 3: It was sunk by a Japanese submarine in the Philippine Sea.",
            "Clue 4: The USS Indianapolis was torpedoed and sank in 1945, with many survivors facing shark attacks while awaiting rescue."
        ],
        answerKeywords: ["uss indianapolis sinks", "indianapolis sunk", "uss indianapolis torpedoed"],
        summary: "On July 30, 1945, the USS Indianapolis was torpedoed and sunk by a Japanese submarine in the Philippine Sea, resulting in the deaths of nearly 900 sailors, many succumbing to exposure and shark attacks while awaiting rescue."
    },
    "2025-07-31": {
        event: "First U.S. Patent Issued (1790)",
        clues: [
            "Clue 1: This date marks a foundational moment for intellectual property in the United States.",
            "Clue 2: The patent was granted for a method of making potash.",
            "Clue 3: It was signed by President George Washington, Secretary of State Thomas Jefferson, and Attorney General Edmund Randolph.",
            "Clue 4: Samuel Hopkins received the first U.S. patent on this day in 1790."
        ],
        answerKeywords: ["first us patent", "samuel hopkins patent", "potash patent", "us patent 1790"],
        summary: "On July 31, 1790, Samuel Hopkins was granted the first U.S. patent, signed by President George Washington, for a new method of making potash, a key ingredient in fertilizer and soap."
    },
    "2025-08-01": {
        event: "Switzerland Founded (1291)",
        clues: [
            "Clue 1: This European country traditionally marks its founding with a federal charter signed on this date.",
            "Clue 2: It united three original cantons: Uri, Schwyz, and Unterwalden.",
            "Clue 3: The Rütli Oath is a legendary event associated with its formation.",
            "Clue 4: The Federal Charter of 1291 is considered the founding document of Switzerland."
        ],
        answerKeywords: ["switzerland founded", "swiss confederation", "federal charter 1291", "rütli oath"],
        summary: "On August 1, 1291, the Federal Charter (Bundesbrief) was signed by the representatives of the three forest cantons of Uri, Schwyz, and Unterwalden, traditionally regarded as the founding act of the Swiss Confederation."
    },
    "2025-08-02": {
        event: "First U.S. Income Tax Imposed (1861)",
        clues: [
            "Clue 1: This day saw the implementation of a new type of federal tax in the United States.",
            "Clue 2: It was introduced to help fund a major domestic conflict.",
            "Clue 3: The initial rate was 3% on incomes over $800.",
            "Clue 4: The U.S. Congress imposed the first income tax to finance the Civil War in 1861."
        ],
        answerKeywords: ["first us income tax", "us income tax 1861", "civil war income tax", "income tax america"],
        summary: "On August 2, 1861, the U.S. Congress imposed the nation's first income tax as part of the Revenue Act of 1861, enacted to help fund the Union effort during the American Civil War."
    },
    "2025-08-03": {
        event: "Columbus Departs for First Voyage (1492)",
        clues: [
            "Clue 1: A famous explorer set sail on his most impactful journey on this day.",
            "Clue 2: His fleet included the Niña, Pinta, and Santa María.",
            "Clue 3: He departed from Palos de la Frontera, Spain.",
            "Clue 4: Christopher Columbus began his first voyage across the Atlantic in 1492, eventually reaching the Americas."
        ],
        answerKeywords: ["columbus departs", "christopher columbus first voyage", "columbus 1492", "santa maria departure"],
        summary: "On August 3, 1492, Christopher Columbus set sail from Palos de la Frontera, Spain, with his three ships (Niña, Pinta, and Santa María) on his first voyage across the Atlantic, which would lead to his arrival in the Americas."
    },
    "2025-08-04": {
        event: "Germany Invades Belgium, Britain Declares War (1914)",
        clues: [
            "Clue 1: This action by a major European power escalated a continent-wide conflict into a global war.",
            "Clue 2: It violated a treaty guaranteeing the neutrality of a small Western European country.",
            "Clue 3: This invasion directly led to the United Kingdom's entry into World War I.",
            "Clue 4: Germany's invasion of neutral Belgium on this date in 1914 prompted Britain to declare war, marking its official entry into WWI."
        ],
        answerKeywords: ["germany invades belgium", "britain declares war ww1", "world war i begins britain", "belgium invasion 1914"],
        summary: "On August 4, 1914, Germany invaded neutral Belgium as part of its Schlieffen Plan to attack France. This violation of Belgian neutrality led the United Kingdom to declare war on Germany, formally bringing Britain into World War I."
    },
    "2025-08-05": {
        event: "Marilyn Monroe Dies (1962)",
        clues: [
            "Clue 1: This iconic American actress and model tragically passed away on this date.",
            "Clue 2: She was famous for her 'blonde bombshell' persona and films like 'Some Like It Hot'.",
            "Clue 3: Her death was ruled a probable suicide from a barbiturate overdose.",
            "Clue 4: Marilyn Monroe's death in Los Angeles in 1962 shocked the world."
        ],
        answerKeywords: ["marilyn monroe dies", "marilyn monroe death", "blonde bombshell death"],
        summary: "On August 5, 1962, American actress and cultural icon Marilyn Monroe was found dead at her home in Los Angeles. Her death was officially ruled a probable suicide by barbiturate overdose."
    },
    "2025-08-06": {
        event: "Atomic Bomb Dropped on Hiroshima (1945)",
        clues: [
            "Clue 1: A new devastating weapon was deployed for the first time in warfare on this day.",
            "Clue 2: It was dropped on a Japanese city during World War II.",
            "Clue 3: The bomber was named the Enola Gay, and the bomb was 'Little Boy'.",
            "Clue 4: The atomic bomb was dropped on Hiroshima in 1945, marking a turning point in warfare."
        ],
        answerKeywords: ["atomic bomb hiroshima", "hiroshima bombing", "little boy bomb", "enola gay hiroshima"],
        summary: "On August 6, 1945, during World War II, the United States dropped an atomic bomb, code-named 'Little Boy,' on the Japanese city of Hiroshima, causing widespread destruction and loss of life."
    },
    "2025-08-07": {
        event: "First U.S. Purple Heart Awarded (1782)",
        clues: [
            "Clue 1: This military award, signifying bravery and sacrifice, was first established on this date.",
            "Clue 2: It was originally known as the 'Badge of Military Merit'.",
            "Clue 3: It was personally conceived by George Washington.",
            "Clue 4: The first Purple Heart, then called the Badge of Military Merit, was awarded by George Washington in 1782."
        ],
        answerKeywords: ["first purple heart", "badge of military merit", "george washington purple heart"],
        summary: "On August 7, 1782, General George Washington created the 'Badge of Military Merit' (now known as the Purple Heart), making it the first military award for enlisted personnel in U.S. history."
    },
    "2025-08-08": {
        event: "Great Train Robbery (1963)",
        clues: [
            "Clue 1: This highly publicized crime involved a large sum of money stolen from a mail train.",
            "Clue 2: It occurred in rural Buckinghamshire, England.",
            "Clue 3: Ronnie Biggs was one of the most famous members of the gang.",
            "Clue 4: The Great Train Robbery, a major heist in British history, took place on this date in 1963."
        ],
        answerKeywords: ["great train robbery", "ronnie biggs robbery", "buckinghamshire train robbery"],
        summary: "On August 8, 1963, a gang of 15 men, led by Bruce Reynolds, ambushed and robbed a Royal Mail train in Buckinghamshire, England, in what became known as the 'Great Train Robbery,' stealing £2.6 million."
    },
    "2025-08-09": {
        event: "Atomic Bomb Dropped on Nagasaki (1945)",
        clues: [
            "Clue 1: A second devastating atomic weapon was used in warfare on this date.",
            "Clue 2: It was dropped on another Japanese city, three days after the first.",
            "Clue 3: The bomb was named 'Fat Man', carried by the B-29 bomber Bockscar.",
            "Clue 4: The atomic bomb 'Fat Man' was dropped on Nagasaki in 1945, hastening Japan's surrender."
        ],
        answerKeywords: ["atomic bomb nagasaki", "nagasaki bombing", "fat man bomb", "bockscar nagasaki"],
        summary: "On August 9, 1945, the United States dropped a second atomic bomb, code-named 'Fat Man,' on the Japanese city of Nagasaki, leading to Japan's unconditional surrender six days later."
    },
    "2025-08-10": {
        event: "Smithsonian Institution Founded (1846)",
        clues: [
            "Clue 1: This famous American institution, a complex of museums and research centers, was established on this day.",
            "Clue 2: It was created using a bequest from a British scientist who never visited the United States.",
            "Clue 3: Its mission is 'the increase and diffusion of knowledge'.",
            "Clue 4: The Smithsonian Institution in Washington D.C. was founded in 1846 with funds from James Smithson."
        ],
        answerKeywords: ["smithsonian institution founded", "smithsonian established", "james smithson bequest"],
        summary: "On August 10, 1846, the Smithsonian Institution was established by an act of the U.S. Congress, funded by the bequest of British scientist James Smithson, for the 'increase and diffusion of knowledge'."
    },
    "2025-08-11": {
        event: "Watts Riots Begin (1965)",
        clues: [
            "Clue 1: This series of major civil disturbances erupted in a district of a large American city.",
            "Clue 2: It was triggered by an arrest for drunk driving.",
            "Clue 3: The events lasted six days and resulted in widespread destruction and dozens of deaths.",
            "Clue 4: The Watts Riots began in Los Angeles in 1965, fueled by racial tensions and police brutality."
        ],
        answerKeywords: ["watts riots", "los angeles riots 1965", "watts uprising"],
        summary: "On August 11, 1965, the Watts Riots began in Los Angeles, California, after a traffic stop escalated into a violent confrontation, sparking six days of intense civil unrest fueled by long-standing racial grievances."
    },
    "2025-08-12": {
        event: "IBM PC Introduced (1981)",
        clues: [
            "Clue 1: This machine revolutionized personal computing and became a dominant standard.",
            "Clue 2: It was developed by a major technology company known for its business machines.",
            "Clue 3: Its open architecture allowed for widespread adoption and third-party development.",
            "Clue 4: The IBM Personal Computer (PC) was officially introduced in 1981, changing the home and business technology landscape."
        ],
        answerKeywords: ["ibm pc", "ibm personal computer", "first ibm pc", "pc introduced 1981"],
        summary: "On August 12, 1981, IBM introduced its Personal Computer (IBM PC), a revolutionary machine that set the standard for personal computers and led to widespread adoption in homes and businesses."
    },
    "2025-08-13": {
        event: "Berlin Wall Construction Begins (1961)",
        clues: [
            "Clue 1: A formidable barrier was erected overnight in a divided European city.",
            "Clue 2: Its purpose was to prevent citizens from escaping a communist state.",
            "Clue 3: It became a powerful symbol of the Cold War and the Iron Curtain.",
            "Clue 4: The construction of the Berlin Wall by East Germany began on this date in 1961."
        ],
        answerKeywords: ["berlin wall construction", "berlin wall built", "east germany wall", "wall in berlin 1961"],
        summary: "On August 13, 1961, the East German government began construction of the Berlin Wall, physically dividing East and West Berlin and becoming a potent symbol of the Cold War division."
    },
    "2025-08-14": {
        event: "V-J Day (Victory over Japan Day) (1945)",
        clues: [
            "Clue 1: This day marked the end of a major global conflict, specifically in the Pacific theater.",
            "Clue 2: It came shortly after the use of two atomic bombs.",
            "Clue 3: The announcement of Japan's surrender caused widespread celebrations.",
            "Clue 4: V-J Day, or Victory over Japan Day, occurred on this date in 1945, formally ending World War II."
        ],
        answerKeywords: ["vj day", "victory over japan day", "japan surrenders ww2", "world war ii ends"],
        summary: "On August 14, 1945 (August 15 in Japan due to time zones), Emperor Hirohito announced Japan's unconditional surrender, effectively ending World War II. This day is known as V-J Day."
    },
    "2025-08-15": {
        event: "Panama Canal Opens (1914)",
        clues: [
            "Clue 1: This massive engineering marvel connecting two major oceans officially opened on this day.",
            "Clue 2: It significantly shortened sea voyages between the Atlantic and Pacific.",
            "Clue 3: The first ship to make a transit was the Ancon.",
            "Clue 4: The Panama Canal officially opened in 1914, connecting the Atlantic and Pacific Oceans."
        ],
        answerKeywords: ["panama canal opens", "panama canal opening", "ancon first ship panama"],
        summary: "On August 15, 1914, the Panama Canal officially opened for traffic with the transit of the cargo ship Ancon, revolutionizing global shipping by connecting the Atlantic and Pacific Oceans."
    },
    "2025-08-16": {
        event: "Elvis Presley Dies (1977)",
        clues: [
            "Clue 1: This iconic 'King of Rock and Roll' passed away on this date.",
            "Clue 2: His home, Graceland, became a major pilgrimage site.",
            "Clue 3: He was found unresponsive at his Memphis, Tennessee, estate.",
            "Clue 4: Elvis Presley, the legendary musician, died in 1977 at the age of 42."
        ],
        answerKeywords: ["elvis presley dies", "elvis death", "king of rock and roll death"],
        summary: "On August 16, 1977, Elvis Presley, the 'King of Rock and Roll,' died at his Graceland home in Memphis, Tennessee, at the age of 42, leaving a profound impact on music and popular culture."
    },
    "2025-08-17": {
        event: "Indonesia Declares Independence (1945)",
        clues: [
            "Clue 1: This large Southeast Asian nation proclaimed its independence on this day, following Japanese occupation.",
            "Clue 2: Sukarno and Mohammad Hatta were key figures in the declaration.",
            "Clue 3: It triggered a four-year armed struggle against Dutch colonial rule.",
            "Clue 4: Indonesia declared its independence from Dutch colonial rule on this date in 1945."
        ],
        answerKeywords: ["indonesia independence", "indonesia declares independence", "sukarno independence"],
        summary: "On August 17, 1945, Sukarno and Mohammad Hatta proclaimed the independence of Indonesia from Dutch colonial rule, following the surrender of Japan at the end of World War II, sparking a four-year war of independence."
    },
    "2025-08-18": {
        event: "Women's Suffrage (19th Amendment) Ratified (1920)",
        clues: [
            "Clue 1: A significant constitutional amendment guaranteeing voting rights was ratified on this day.",
            "Clue 2: It primarily benefited a large demographic group previously excluded from federal elections.",
            "Clue 3: Tennessee was the final state needed for ratification.",
            "Clue 4: The 19th Amendment, granting women the right to vote, was ratified in 1920."
        ],
        answerKeywords: ["women's suffrage", "19th amendment ratified", "women right to vote", "suffrage movement"],
        summary: "On August 18, 1920, the 19th Amendment to the U.S. Constitution, granting women the right to vote, was ratified when Tennessee became the 36th and final state needed to approve it."
    },
    "2025-08-19": {
        event: "First Photo of Earth from Moon (1966)",
        clues: [
            "Clue 1: An unmanned spacecraft captured an iconic image of our home planet from a natural satellite.",
            "Clue 2: The image showed a crescent Earth floating in space.",
            "Clue 3: The spacecraft was Lunar Orbiter 1.",
            "Clue 4: The first photograph of Earth taken from lunar orbit was captured by Lunar Orbiter 1 in 1966."
        ],
        answerKeywords: ["first photo earth from moon", "lunar orbiter 1 earth photo", "earthrise photo 1966"],
        summary: "On August 19, 1966, NASA's Lunar Orbiter 1 took the first photograph of Earth from lunar orbit, a striking image of a crescent Earth above the Moon's desolate surface."
    },
    "2025-08-20": {
        event: "Launch of Viking 1 (1975)",
        clues: [
            "Clue 1: A robotic spacecraft began its journey to another planet, becoming the first successful U.S. mission to land there.",
            "Clue 2: Its primary goal was to search for signs of life on the Red Planet.",
            "Clue 3: It consisted of both an orbiter and a lander.",
            "Clue 4: NASA launched Viking 1 towards Mars in 1975, which would later successfully land on its surface."
        ],
        answerKeywords: ["viking 1 launch", "viking 1 mars mission", "first us mars lander launch"],
        summary: "On August 20, 1975, NASA launched Viking 1, the first of two probes in the Viking program, on a mission to explore Mars. Its lander successfully touched down on the Martian surface in July 1976."
    },
    "2025-08-21": {
        event: "Nat Turner's Rebellion (1831)",
        clues: [
            "Clue 1: A significant slave rebellion began on this day in American history.",
            "Clue 2: It took place in Southampton County, Virginia.",
            "Clue 3: The leader was a literate enslaved preacher.",
            "Clue 4: Nat Turner's Rebellion, one of the deadliest slave revolts in U.S. history, began in 1831."
        ],
        answerKeywords: ["nat turner's rebellion", "nat turner revolt", "southampton rebellion"],
        summary: "On August 21, 1831, Nat Turner, an enslaved man, initiated a slave rebellion in Southampton County, Virginia, which resulted in the deaths of approximately 60 white people and led to harsh new laws against enslaved and free African Americans."
    },
    "2025-08-22": {
        event: "King Richard III Dies at Battle of Bosworth Field (1485)",
        clues: [
            "Clue 1: A monarch of England died on this day, marking the end of a royal dynasty.",
            "Clue 2: He was the last Plantagenet king.",
            "Clue 3: His death occurred at the Battle of Bosworth Field.",
            "Clue 4: King Richard III was killed in battle in 1485, leading to the rise of the Tudor dynasty."
        ],
        answerKeywords: ["richard iii dies", "battle of bosworth field", "last plantagenet king", "richard iii death"],
        summary: "On August 22, 1485, King Richard III of England was killed at the Battle of Bosworth Field, the last significant battle of the Wars of the Roses, marking the end of the Plantagenet dynasty and the beginning of the Tudor reign."
    },
    "2025-08-23": {
        event: "Molotov-Ribbentrop Pact Signed (1939)",
        clues: [
            "Clue 1: A non-aggression treaty was signed between two major European powers, shocking the world.",
            "Clue 2: It included secret protocols for dividing Eastern Europe.",
            "Clue 3: The signatories were Germany and the Soviet Union.",
            "Clue 4: The Molotov-Ribbentrop Pact, a non-aggression agreement, was signed by Nazi Germany and the Soviet Union in 1939, just before WWII."
        ],
        answerKeywords: ["molotov ribbentrop pact", "nazi soviet pact", "germany soviet non aggression pact"],
        summary: "On August 23, 1939, Nazi Germany and the Soviet Union signed the Molotov-Ribbentrop Pact, a non-aggression treaty that secretly divided Eastern Europe into spheres of influence, paving the way for the invasion of Poland and the start of WWII."
    },
    "2025-08-24": {
        event: "Destruction of Pompeii (79 AD)",
        clues: [
            "Clue 1: A powerful natural disaster buried a Roman city and its inhabitants.",
            "Clue 2: It was caused by the eruption of a nearby volcano.",
            "Clue 3: The volcano was Mount Vesuvius.",
            "Clue 4: The ancient Roman city of Pompeii was famously destroyed by the eruption of Mount Vesuvius on this day in 79 AD."
        ],
        answerKeywords: ["pompeii destroyed", "mount vesuvius eruption", "pompeii eruption", "roman city buried"],
        summary: "On August 24, 79 AD, Mount Vesuvius erupted catastrophically, burying the Roman cities of Pompeii and Herculaneum under volcanic ash and pumice, preserving them for centuries."
    },
    "2025-08-25": {
        event: "Paris Liberated (1944)",
        clues: [
            "Clue 1: A major European capital was freed from occupation during World War II.",
            "Clue 2: The liberation was primarily carried out by French and American forces.",
            "Clue 3: General Charles de Gaulle made a triumphant return to the city.",
            "Clue 4: Paris was liberated from Nazi occupation on this date in 1944."
        ],
        answerKeywords: ["paris liberated", "liberation of paris", "paris ww2 liberation"],
        summary: "On August 25, 1944, Paris was officially liberated from Nazi German occupation by the French 2nd Armored Division and the U.S. 4th Infantry Division during World War II, with General Charles de Gaulle leading a triumphant march."
    },
    "2025-08-26": {
        event: "Declaration of the Rights of Man and of the Citizen (1789)",
        clues: [
            "Clue 1: A foundational document of human rights and civil liberties was adopted on this day.",
            "Clue 2: It was a key product of a major European revolution.",
            "Clue 3: Its principles include liberty, equality, and fraternity.",
            "Clue 4: The Declaration of the Rights of Man and of the Citizen was adopted by the National Assembly of France in 1789."
        ],
        answerKeywords: ["declaration of the rights of man", "french revolution declaration", "rights of man and citizen"],
        summary: "On August 26, 1789, the National Assembly of France adopted the Declaration of the Rights of Man and of the Citizen, a fundamental document of the French Revolution that defined individual and collective rights."
    },
    "2025-08-27": {
        event: "First Oil Well in U.S. Drilled (1859)",
        clues: [
            "Clue 1: This marked the beginning of the modern petroleum industry in the United States.",
            "Clue 2: It was drilled in Titusville, Pennsylvania.",
            "Clue 3: Edwin Drake was the man responsible for the drilling.",
            "Clue 4: Edwin Drake drilled the first successful oil well in the U.S. in 1859, sparking an oil boom."
        ],
        answerKeywords: ["first oil well us", "drake oil well", "titusville oil well", "pennsylvania oil 1859"],
        summary: "On August 27, 1859, Edwin Drake successfully drilled the first commercial oil well in the United States near Titusville, Pennsylvania, marking the birth of the modern American oil industry."
    }
};