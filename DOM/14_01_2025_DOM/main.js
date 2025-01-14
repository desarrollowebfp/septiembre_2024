const header = document.querySelector("header");

const title = "My Application";
const secondTitle = "4.0";

header.innerHTML = `
<h1 id="title">${title} - ${secondTitle}</h1>
`;

const droids = [
  {
    "_id": "640b304f916c6ff54731ed8a",
    "name": "2-1B Droid",
    "description": "2-1B droids were medical wonders, programmed to diagnose and treat injuries and diseases that afflicted millions of species in the galaxy. 2-1B droids had modular limbs that allowed them to use a range of surgical tools and other medical instruments based on their patients' needs.",
    "image": "https://lumiere-a.akamaihd.net/v1/images/2-1b-droid-main-image_546a90ad.jpeg",
    "__v": 0
  },
  {
    "_id": "640b304f916c6ff54731ed8b",
    "name": "Aqua Droid",
    "description": "Manufactured by the Techno Union, these underwater fighting droids were used by the Separatists during the Clone Wars to lay siege to aquatic planets like Kamino and Mon Calamari. They were formidable opponents and effective at surprise attacks. Aqua droids were more angular and stylized than standard battle droids, as well as excellent swimmers and were equipped with retractable laser cannons.",
    "image": "https://lumiere-a.akamaihd.net/v1/images/aqua-droid_d9076338.jpeg",
    "__v": 0
  },
  {
    "_id": "640b304f916c6ff54731ed8c",
    "name": "ASP General Purpose Droid",
    "description": "Also known as ASP droids, these are labor droids performing manual tasks throughout the galaxy.",
    "image": "https://lumiere-a.akamaihd.net/v1/images/databank_aspgeneralpurposedroids_01_169_4d364f74.jpeg",
    "__v": 0
  },
  {
    "_id": "640b304f916c6ff54731ed8d",
    "name": "Astromech Droid",
    "description": "Astromech droids are a series of versatile utility robots generally used for the maintenance and repair of starships and related technology. These small droids are often equipped with a variety of tool-tipped appendages that are stowed in recessed compartments. The R2 unit is a popular example of an astromech droid.",
    "image": "https://lumiere-a.akamaihd.net/v1/images/databank_astromechdroid_01_169_9d9b98b1.jpeg",
    "__v": 0
  },
  {
    "_id": "640b304f916c6ff54731ed8e",
    "name": "autovalet droid",
    "description": "Thousands of Servo-O-Droid SO-1P autovalet droids ensure the uniforms of First Order officers are delivered clean, pressed and folded according to the regime’s exacting regulations. As class five droids with simple programming, they focus on their tasks regardless of what’s happening around them.",
    "image": "https://lumiere-a.akamaihd.net/v1/images/tlj-db-first-order-autovalet-droid-main-image_24d05254.jpeg",
    "__v": 0
  },
  {
    "_id": "640b304f916c6ff54731ed8f",
    "name": "B1-series Rocket Battle Droid",
    "description": "Rocket Battle Droids were standard B1 droids specially modified for the task of hunting down escape pods in space and destroying them. A number of them were tasked by General Grievous to destroy any survivors of an attack by the Malevolence, but Jedi Master Plo Koon survived the attack…",
    "image": "https://lumiere-a.akamaihd.net/v1/images/b1-series-rocket-battle-droid_6c2498d3.jpeg",
    "__v": 0
  },
  {
    "_id": "640b304f916c6ff54731ed90",
    "name": "B2-RP battle droid",
    "description": "Often referred to as rocket droids or jetpack droids, B2-RPs are modified B2 super battle droids. The Techno Union engineered them to incorporate rocket pack and compact repulsorlift technology. They’re different from other B2s in other ways as well, including their blue and white markings on their torso, arms, and legs.",
    "image": "https://lumiere-a.akamaihd.net/v1/images/b2-rp_battle_droid_c44a4cce.jpeg",
    "__v": 0
  },
  {
    "_id": "640b304f916c6ff54731ed91",
    "name": "Battle Droid",
    "description": "Rather than use flesh-and-blood warriors, the Separatists prefer mindlessly loyal soldiers that are easily controlled. The soulless ranks of their armies are dominated by tall, thin B1 battle droids built as mechanical imitations of their Geonosian designers. Battle droids can be controlled by centralized command centers such as the Trade Federation’s enormous Droid Control Ships, or programmed for independent action. They often suffer programming glitches that manifest as personality quirks. Battle droids are dim-witted and no match for clone troopers or Jedi, but they weren’t designed to be smart – they were designed to overwhelm Republic civilians through sheer numbers, something they do very effectively.",
    "image": "https://lumiere-a.akamaihd.net/v1/images/databank_battledroid_01_169_1524f145.jpeg",
    "__v": 0
  },
  {
    "_id": "640b304f916c6ff54731ed92",
    "name": "BB unit",
    "description": "Rolling about the hangar bays of outposts and capital ships, or snug in the astromech sockets of X-wing fighters, BB units work tirelessly to keep the weapons and vessels of the Resistance in top combat condition.",
    "image": "https://lumiere-a.akamaihd.net/v1/images/bb-unit_b13ba179.jpeg",
    "__v": 0
  },
  {
    "_id": "640b304f916c6ff54731ed93",
    "name": "BD-3000 luxury droid",
    "description": "BD-3000 luxury droids were used across the galaxy as a luxury attendant during the era of the Galactic Republic. During the Clone Wars, Senator Amidala used one as a decoy to help stave off an assassination attempt by Aurra Sing on the planet Alderaan. Other senators and dignitaries used them as everything from escorts to office aides. They have a chromatic complexion and come in the form of shapely humanoid females.",
    "image": "https://lumiere-a.akamaihd.net/v1/images/bd-3000-luxury-droids_162009ac.jpeg",
    "__v": 0
  },
  {
    "_id": "640b304f916c6ff54731ed94",
    "name": "Buzz Droid",
    "description": "An insidious weapon unveiled by the Separatist Alliance during the later stages of the Clone Wars, buzz droids are tenacious saboteurs launched onto enemy starfighters via specialized missiles. They emerge as spheres and attach themselves to a target vessel, popping open to reveal an insect-like droid equipped with cutters and other tools of vandalism. The buzz droids are designed to disable, not destroy, enemy craft. They operate quickly, slicing into starship hulls. While their tools are effective, a hit to its central eye can knock a buzz droid out of commission.",
    "image": "https://lumiere-a.akamaihd.net/v1/images/databank_buzzdroid_01_169_e6c40327.jpeg",
    "__v": 0
  },
  {
    "_id": "640b304f916c6ff54731ed95",
    "name": "Commando Droid",
    "description": "An enormous improvement over the standard battle droid, commando droids are elite warriors too  expensive to produce in huge numbers. These stealthy yet powerful warriors are tougher and faster than their  clanker cousins. Complex engineering gives them incredible agility, while advanced processors let them  think fast on their nimble feet.",
    "image": "https://lumiere-a.akamaihd.net/v1/images/commando_droids_4c52e273.jpeg",
    "__v": 0
  },
  {
    "_id": "640b304f916c6ff54731ed96",
    "name": "Courier Droid",
    "description": "Courier droids are used to relay information from place to place in lieu of networks. Repurposed astromechs, courier droids often feature special markings to differentiate them. When Grand Moff Tarkin ordered the destruction of the primary communications tower on Lothal, the Empire used courier droids as a means to physically transport data.",
    "image": "https://lumiere-a.akamaihd.net/v1/images/image_416c6dc3.jpeg",
    "__v": 0
  },
  {
    "_id": "640b304f916c6ff54731ed97",
    "name": "D-wing security droid",
    "description": "An alternative to the Separatists' standard B1 battle droid, a legion of spindly D-wing security droids guard the tower base at Purkoll. Hidden among their slender mechanical frame are folded wings that allow them to zoom through the atmosphere in pursuit of other winged creatures like the keeradaks.",
    "image": "https://lumiere-a.akamaihd.net/v1/images/d-wing-security-droid-main_89e1b9ca.jpeg",
    "__v": 0
  },
  {
    "_id": "640b304f916c6ff54731ed98",
    "name": "Dismantler droid",
    "description": "Featuring an umbrella-shaped top, crab-like legs, and electrified pincers outfitted with saws, dismantler droids were used in salvage yards to turn starships to scrap. At Reklam Station, an Imperial base, they were also used as security. The fearsome droids did battle with the Ghost crew, who were looking to steal Y-wings for the rebel fleet.",
    "image": "https://lumiere-a.akamaihd.net/v1/images/dismantler-droid_81909264.jpeg",
    "__v": 0
  },
  {
    "_id": "640b304f916c6ff54731ed99",
    "name": "Droideka",
    "description": "Unlike the spindly battle droids, whose humanoid builds allow them a degree of versatility, droidekas are designed with one sole function in mind: the complete annihilation of their targets. Slung at the end of heavy arms are immense twin blasters, which unleash destructive energy at a pounding pace. The destroyer droid can completely envelope itself in a globe of protective energy via its compact deflector shield generators, though at the expense of its mobility. Although slow and awkward on its three-legged gait, the droideka can transform into a much speedier, disk-shaped form.",
    "image": "https://lumiere-a.akamaihd.net/v1/images/databank_droideka_01_169_48a22970.jpeg",
    "__v": 0
  },
  {
    "_id": "640b304f916c6ff54731ed9a",
    "name": "Dwarf Spider Droid",
    "description": "During the last decades of the Republic, the Jedi order had replaced any need for a unified military for protection. Instead, private interests maintained their own armed forces in local territories, and the engines of commerce could afford the most powerful and most effective armies. Despite legislation designed to curb the potency of any one private army, the massive corporations were able to build sizable droid forces. The dwarf spider droids favored by the Commerce Guild appeared in the Separatist ranks. The four-legged dome-shaped mechanical arachnid featured a powerful, centrally mounted laser cannon.",
    "image": "https://lumiere-a.akamaihd.net/v1/images/databank_dwarfspiderdroid_01_169_fece4693.jpeg",
    "__v": 0
  },
  {
    "_id": "640b304f916c6ff54731ed9b",
    "name": "E-XD Infiltrator Droid",
    "description": "On the surface, a meek protocol droid. Underneath, a deadly assassin. E-XD infiltrator droids were used by the Empire to sweep Outer Rim worlds for rebel bases, and changed forms from standard robotic humanoid into towering, quick fighters. They were outfitted with an anti-capture failsafe -- an inner proton warhead that would detonate upon capture -- making them doubly dangerous.",
    "image": "https://lumiere-a.akamaihd.net/v1/images/e-xd-infiltrator-droid_753bb147.jpeg",
    "__v": 0
  },
  {
    "_id": "640b304f916c6ff54731ed9c",
    "name": "FA-4 pilot droid",
    "description": "These wheeled pilot droids with ball heads were in use during the Galactic Republic era. They were tall enough to handle the controls of many ships. Count Dooku employed one to aid in take-offs and landings in his solar sailer. Others could be spotted at the Galactic Senate building, bustling about their business.",
    "image": "https://lumiere-a.akamaihd.net/v1/images/fa-4-pilot-droid_b24e3456.jpeg",
    "__v": 0
  },
  {
    "_id": "640b304f916c6ff54731ed9d",
    "name": "Fire-breather",
    "description": "Lotho Minor has, for time immemorial, been an industrial dumping ground for neighboring worlds. Cargo ships routinely drop holds of refuse onto the planet, caring little as to what would become of it. Immense droids programmed long ago to incinerate the garbage continue to labor amid the mountains of refuse, filling their enormous jaws with scrap and burning it with the flames of their infernal gullets. Those unfortunate to live on Lotho Minor know not of the origins of these crane monsters. The mindless mechanicals are simply known as the fire-breathers.",
    "image": "https://lumiere-a.akamaihd.net/v1/images/databank_firebreather_01_169_f5aeda4d.jpeg",
    "__v": 0
  },
  {
    "_id": "640b304f916c6ff54731ed9e",
    "name": "First Order Interrogator Droid",
    "description": "Interrogation droids were one of the most hated symbols of the Empire, leading the New Republic to ban torture after it came to power. But the First Order holds the legacy of the Empire in much higher esteem than galactic law, and has developed the IT-000 to question its enemies. One of these feared droids is on hand when Kylo Ren begins his interview with Poe Dameron above Jakku.",
    "image": "https://lumiere-a.akamaihd.net/v1/images/first-order-interrogator-droid_efc59ae7.jpeg",
    "__v": 0
  },
  {
    "_id": "640b304f916c6ff54731ed9f",
    "name": "First Order Medical Droid",
    "description": "Aboard the Supremacy, an IT-SOO.2 medical droid treats the wounds inflicted on Kylo Ren by Rey’s lightsaber and Chewbacca’s bowcaster. The droid’s delicate, precise mechanical arms make short work of removing mechnosutures from Ren’s face.",
    "image": "https://lumiere-a.akamaihd.net/v1/images/tlj-db-first-order-medical-droid-main-image_8f24ef51.jpeg",
    "__v": 0
  },
  {
    "_id": "640b304f916c6ff54731eda0",
    "name": "First Order probe droid",
    "description": "To maintain security in the Unknown Regions, where the First Order has been testing new weapons of mass destruction, probe droids are an efficient form of surveillance. Intruders are easily spotted on the droid's many sensors, triggering evasive action in the form of homing beacons or the release of several smaller units, commonly referred to as \"kids\" to the main droid's \"mother,\" that help eliminate any threat. Failing to dispatch any invading lifeform that disturbs the droid, or upon its own destruction, the First Order probe will emit a signal to scramble TIE fighters, sent immediately to take a closer look.",
    "image": "https://lumiere-a.akamaihd.net/v1/images/first-order-probe-droid-main_0eaf0171.jpeg",
    "__v": 0
  },
  {
    "_id": "640b304f916c6ff54731eda1",
    "name": "FX-6 Medical Droid",
    "description": "Cylindrical droids with multiple arms, FX medical droids assist other models, such as 2-1B surgical models, in surgical centers and on battlefields. FX-6 models monitor patients, perform tests, operate equipment and review medical procedures and techniques. An FX-6 droid supplied Darth Vader with a blood transfusion after the former Jedi’s crippling injuries on Mustafar and helped affix cybernetic legs to the flesh-and-blood stumps.",
    "image": "https://lumiere-a.akamaihd.net/v1/images/fx-6-droid_9f740560.jpeg",
    "__v": 0
  },
  {
    "_id": "640b304f916c6ff54731eda2",
    "name": "GH-7 Analysis Droid",
    "description": "These hovering blue and silver medical droids were trained to diagnose physical ailments in patients. One of these droids worked on Polis Massa Station and treated Padme after her bout with Darth Vader. Since her ailments were metaphysical or possibly influenced by the will of the force, he was unable to save her.",
    "image": "https://lumiere-a.akamaihd.net/v1/images/gh-7-analysis-droid_b3c32bd4.jpeg",
    "__v": 0
  },
  {
    "_id": "640b304f916c6ff54731eda3",
    "name": "Gonk Droid",
    "description": "Little more than walking batteries, gonk power droids trundle along as directed by their owners or their programming, recharging vehicles and machinery. They get their name in imitation of their simple vocalizations. There are many different models of power droid, most of them similar in appearance and habits as the well-known gonk. Power droids are common sights throughout the galaxy and little noticed despite their critical importance to both military and civilian life.",
    "image": "https://lumiere-a.akamaihd.net/v1/images/gnk-droid-main-image_f0d89099.jpeg",
    "__v": 0
  },
  {
    "_id": "640b304f916c6ff54731eda4",
    "name": "Hailfire Droid",
    "description": "Bristling with missiles, these droid tanks raced into battle on giant hoop-like wheels. Originally constructed by the InterGalactic Banking Clan to collect debts, they served the Separatists as fast-attack vehicles, using their missiles to strike distant targets.",
    "image": "https://lumiere-a.akamaihd.net/v1/images/hailfire-droid_4c58d2a7.jpeg",
    "__v": 0
  },
  {
    "_id": "640b304f916c6ff54731eda5",
    "name": "Hyena Bomber Droid",
    "description": "Hyena droids are automated starfighters equipped for heavy ordnance bombing runs. Based on the slimmer vulture droid design, hyena bombers have a wider, sturdier hull with larger wings to offer greater stability during flight. The droid's central processor unit is contained in its starboard hull unit, from which glows a pair of red photoreceptors. The port hull unit houses the droid's ordnance bay, and has a downward-facing photoreceptor for pinpoint accuracy when dropping bombs. Like the vulture droid, the hyena bomber can reconfigure its shape to adopt a ground-walking mode.",
    "image": "https://lumiere-a.akamaihd.net/v1/images/databank_hyenabomberdroid_01_169_38b46a66.jpeg",
    "__v": 0
  },
  {
    "_id": "640b304f916c6ff54731eda6",
    "name": "ID9 Seeker Droid",
    "description": "They may have been small in size, but ID9 seeker droids were dangerous and deadly when used for nefarious purposes. Resembling probe droids, ID9 seekers had a half-hemisphere dome with a threatening red eye. They could hover and crawl on their pincers, imitate other droids, and were outfitted with electro-shock prods that could incapacitate mechanical beings and harm organic lifeforms. The Seventh Sister, one of the Empire’s Inquisitors, employed a small army of ID9s in her efforts to capture rebels and Jedi.",
    "image": "https://lumiere-a.akamaihd.net/v1/images/id9-seeker-droid_4c784072.jpeg",
    "__v": 0
  },
  {
    "_id": "640b304f916c6ff54731eda7",
    "name": "Imperial Police Droids",
    "description": "Ironically, the Empire employs Imperial droid forces as security around facilities where B-1 battle droids and other Separatist military mechanicals are melted down. It's imperative that the new regime destroys all evidence of the Clone War-era enemies -- especially considering the fact that the movement's tactical droids contain algorithms to defeat the clones now serving the Empire.",
    "image": "https://lumiere-a.akamaihd.net/v1/images/imperial-police-droids-main_f4bbcc09.jpeg",
    "__v": 0
  },
  {
    "_id": "640b304f916c6ff54731eda8",
    "name": "Imperial Probe Droid",
    "description": "Specially designed for deep space exploration and reconnaissance, probe droids are employed in science and military applications. Tenacious hunters and searchers, probe droids (or probots) have a variety of sensors, and the ones employed by the Empire are armed with powerful blasters and, in some models, shields. Upon arrival at their target location, they gather information. If confronted after their main mission has been completed these droids can self-destruct. Imperial probes are vaguely arachnid in shape, with a dark metal finish, bulbous sensor \"eyes\" and spindly manipulator arms.",
    "image": "https://lumiere-a.akamaihd.net/v1/images/databank_imperialprobedroid_01_169_9667313a.jpeg",
    "__v": 0
  },
  {
    "_id": "640b304f916c6ff54731eda9",
    "name": "Imperial sentry droid",
    "description": "Towering, quiet, and deadly, Imperial sentry droids were effective killing machines for the Empire. With glowing red eyes and an otherwise lifeless face, they were intimidating, but still vulnerable to blaster fire.",
    "image": "https://lumiere-a.akamaihd.net/v1/images/imperial-security-droid-main-1_229174fc.jpeg",
    "__v": 0
  },
  {
    "_id": "640b304f916c6ff54731edaa",
    "name": "Interrogation Droid",
    "description": "Developed in secret by the Imperial Department of Military Research, interrogator droids are used by the Empire to meticulously exploit a prisoner's mental and physical weaknesses. The floating, black mechanical menaces inject drugs that lessen pain tolerance and block mental resistance, and use hallucinogens and truth serums to influence victims. Only a select few have proven able to resist its excruciating methods.",
    "image": "https://lumiere-a.akamaihd.net/v1/images/image_2fc196dc.jpeg",
    "__v": 0
  },
  {
    "_id": "640b304f916c6ff54731edab",
    "name": "LM-432 \"Muckraker\" Crab Droid",
    "description": "These deadly crawling tank droids, manufactured by the Techno Union, were in use during the Clone Wars. They varied in size, smaller models had four legs, larger models boasted six. Regardless of the size, they were all equipped a pair of blaster cannon’s on their belly and they could also use their front legs to attack.",
    "image": "https://lumiere-a.akamaihd.net/v1/images/crab-droid-main-image_97235df7.jpeg",
    "__v": 0
  },
  {
    "_id": "640b304f916c6ff54731edac",
    "name": "Midwife Droid",
    "description": "Midwife droids were hovering medical droids designed to assist in the birth and newborn care for a variety of species. They had white faces and green and blue light sensors in their facial area. One of these droids, while making soothing cooing sounds, helped deliver the Skywalker twins on the far flung outpost at Polis Massa.",
    "image": "https://lumiere-a.akamaihd.net/v1/images/midwife-droid_131becd0.jpeg",
    "__v": 0
  },
  {
    "_id": "640b304f916c6ff54731edad",
    "name": "Millicreep droid",
    "description": "The Umbaran Militia used these insect-like assassin droids against the Grand Army of the Republic during the battle of Umbara in the Clone Wars. During that conflict, one of these droids destroyed many clones in the 501st battalion that was led by Jedi General Anakin Skywalker. They were colored black, blue, and purple and seemed to conduct electricity.",
    "image": "https://lumiere-a.akamaihd.net/v1/images/databank_millicreepdroid_01_169_e261336d.jpeg",
    "__v": 0
  },
  {
    "_id": "640b304f916c6ff54731edae",
    "name": "Mining Guild Security Droid",
    "description": "Tall with cone-shaped heads, Mining Guild security droids protect the organization's ore crawlers. They have poor audio receptors, however, and are vulnerable to rear attacks.",
    "image": "https://lumiere-a.akamaihd.net/v1/images/mining-guild-security-droid_03e1c846.jpeg",
    "__v": 0
  },
  {
    "_id": "640b304f916c6ff54731edaf",
    "name": "Mouse Droid",
    "description": "Mouse droids performed simple tasks aboard starships and in military and corporate facilities. They beeped to themselves as they performed small repairs, delivered messages and guided visitors. occasionally exploding into panicked squeals when confused or frightened.",
    "image": "https://lumiere-a.akamaihd.net/v1/images/mouse-droid-main-image_035abc9d.jpeg",
    "__v": 0
  },
  {
    "_id": "640b304f916c6ff54731edb0",
    "name": "NR-N99 Persuader-class Tank Droid",
    "description": "With a massive central tread, the NR-N99 Persuader-class tank droid is the favored tank of the Corporate Alliance. Manufactured by the Techno Union, they were fast, well-armored, were well-suited to a variety of terrain, and had significant firepower. One enterprising young wookiee managed to destroy one with an explosive charge in one of the final battles of the Clone Wars on Kashyyyk.",
    "image": "https://lumiere-a.akamaihd.net/v1/images/nr_n99_persuader_class_tank_droid_f910aac1.jpeg",
    "__v": 0
  },
  {
    "_id": "640b304f916c6ff54731edb1",
    "name": "Octuptarra Droid",
    "description": "These gigantic droids loomed over the battlefields of the Clone Wars, striding towards their targets on three legs. Electronic eyes let them see in all directions, and their laser cannons gave them a 360-degree field of fire. Smaller versions battled Republic forces on worlds such as Utapau and Mygeeto.",
    "image": "https://lumiere-a.akamaihd.net/v1/images/octuptarra-droid-main-image_6924c202.jpeg",
    "__v": 0
  },
  {
    "_id": "640b304f916c6ff54731edb2",
    "name": "Pit Droid",
    "description": "Podracing is extremely dangerous, as is maintaining the speedy vehicles. In the hectic pace of a race, safety comes in second place to winning. As such, the cheap and expendable pit droids often bolt out onto the racetrack to repair still cycling superheated engines with no regard to their personal safety.    When not in use, pit droids fold up into a compact package. They spring to activation when needed. A tap on the nose signals the droid to collapse back into stowed mode and rest.",
    "image": "https://lumiere-a.akamaihd.net/v1/images/pit-droids-main_8b5d6bda.jpeg",
    "__v": 0
  },
  {
    "_id": "640b304f916c6ff54731edb3",
    "name": "Police Droid",
    "description": "On Coruscant, local police divisions would not be able to patrol the vast reaches of the planet-wide city without the use of droids. These automatons are afforded programming that allow them to harm sentient beings when very specific operational parameters have been met - namely, the breaking of laws and the endangerment of citizens. These droids are beyond corruption and fatigue, though their rigid procedural thinking can be outsmarted. Automated security is particularly popular in deep space facilities, where organic crews are kept small to reduce the amount of life support supplies required.",
    "image": "https://lumiere-a.akamaihd.net/v1/images/databank_policedroid_01_169_00334915.jpeg",
    "__v": 0
  },
  {
    "_id": "640b304f916c6ff54731edb4",
    "name": "Protocol Droid",
    "description": "Protocol droids are vital in smoothing differences encountered by the many farflung cultures interacting on a regular basis throughout the galaxy. Programmed in etiquette and equipped with formidable language skills, protocol droids assist diplomats and politicians and also serve as administrative aides and companions for high-ranking officials. They come in many shapes and sizes, but most are humanoid, like the company they keep.",
    "image": "https://lumiere-a.akamaihd.net/v1/images/protocol_droid_6ddeb574.jpeg",
    "__v": 0
  },
  {
    "_id": "640b304f916c6ff54731edb5",
    "name": "Retail Caucus Droid",
    "description": "The Retail Caucus is one of the myriad corporate entities attracted into the command structure of the Separatist Alliance by Count Dooku's promises of unlimited pursuit of profits. Like its fellow corporations, the Retail Caucus brought with it its private droid army, adding its distinctive battle droids into the swelling ranks of the military commanded by General Grievous. Retail Caucus droids are towering brutes with barrel shaped bodies and spindly limbs. Each of its short arms terminate in a pair of laser cannons.",
    "image": "https://lumiere-a.akamaihd.net/v1/images/databank_retailcaucusdroid_01_169_0a588456.jpeg",
    "__v": 0
  },
  {
    "_id": "640b304f916c6ff54731edb6",
    "name": "RIC-series General Labor Droid",
    "description": "The RIC-series general labor droid was a rickshaw driving droid that operated in a variety of locations around the galaxy, most notably Mos Espa, where one transported Anakin Skywalker and Padme Amidala to Watto’s junkshop. They moved on two treaded discs and were excellent laborers.",
    "image": "https://lumiere-a.akamaihd.net/v1/images/ric-920_bad9ba26.jpeg",
    "__v": 0
  },
  {
    "_id": "640b304f916c6ff54731edb7",
    "name": "SE8 Waiter Droid",
    "description": "Built by Industrial Automaton, SE8 waiter droids attend to the needs of guests in the Canto Casino, shuffling across the floor bearing trays of drinks. The droids boast state-of-the-art gyroscopic systems and are programmed to gracefully avoid collisions with inattentive or impaired gamblers.",
    "image": "https://lumiere-a.akamaihd.net/v1/images/ep8-067268_17d3d396.jpeg",
    "__v": 0
  },
  {
    "_id": "640b304f916c6ff54731edb8",
    "name": "Separatist Assassin Droid",
    "description": "Like most battle droids employed by the Separatists, these assassin droids were manufactured by the Techno Union. They were employed in at least one known Separatist assassination plot. Their mission was to kill the Duchess Satine Kryze aboard her ship, the Coronet. Each Separatist Assassin Droid of this make boasted eight legs which they would use to lurk silently in for the kill. If they’re destroyed, they have smaller droids inside them that deploy to finish the job, making them especially lethal.",
    "image": "https://lumiere-a.akamaihd.net/v1/images/separatist-assassin-droid_5501ba4b.jpeg",
    "__v": 0
  },
  {
    "_id": "640b304f916c6ff54731edb9",
    "name": "Sith Probe Droid",
    "description": "To help Darth Maul track down the fugitive Queen Amidala from Naboo, he employed a number of spherical, single-eyed probe droids dispatched from the Sith Infiltrator. These floating globes hovered throughout Mos Espa, attempting to ferret out any signs of the Queen and her Jedi protectors.",
    "image": "https://lumiere-a.akamaihd.net/v1/images/Sith-Probe-Droid_e2677e29.jpeg",
    "__v": 0
  },
  {
    "_id": "640b304f916c6ff54731edba",
    "name": "Smelter Droid",
    "description": "Smelter droids were long-faced humanoid droids with blank white eyes and bodies. They were designed with extreme durability in order to perform the simple tasks required in the harsh environs of ore-extraction facilities.",
    "image": "https://lumiere-a.akamaihd.net/v1/images/smelter-droid_465314de.jpeg",
    "__v": 0
  },
  {
    "_id": "640b304f916c6ff54731edbb",
    "name": "Sniper Droid",
    "description": "A specialized variant of the powerful destroyer droid, the sniper droid retains the basic shape of the curved-back, claw-footed droideka. Like its more common cousin, the sniper droid rolls into position in a disc shape, and then unfurls when ready for combat. Unlike the droideka, the sniper droid has only one weapon -- a finely calibrated long-barrel blaster rifle. When in combat mode, the sniper droid's armored shell swings forward, becoming an armored shield with a embrasure from where the rifle barrel emerges.",
    "image": "https://lumiere-a.akamaihd.net/v1/images/sniper_droid_76c2c756.png",
    "__v": 0
  },
  {
    "_id": "640b304f916c6ff54731edbc",
    "name": "Super Battle Droid",
    "description": "The infantry used by the Trade Federation had several major shortcomings that were carefully revisited by the battle droids' designers. From that research came the super battle droid, a bulkier, stronger, and more advanced version of the standard mechanical soldier. The super battle droid requires no overriding command signal to operate, and thus has a limited degree of independence. They are fearless and tireless, and will run at full speed into combat, their cannons extended, firing until they have reduced their targets to smoldering ruins.",
    "image": "https://lumiere-a.akamaihd.net/v1/images/Super-Battle-Droid_f8b9df0b.jpeg",
    "__v": 0
  },
  {
    "_id": "640b304f916c6ff54731edbd",
    "name": "Super battle droid rocket trooper",
    "description": "Super Battle Droid Rocket Trooper units were upgraded versions of the B2-RP Battle Droids. They had larger jetpacks and blasters than the original model, making them faster and deadlier in combat than their predecessors.",
    "image": "https://lumiere-a.akamaihd.net/v1/images/super-battle-droid-rocket-trooper_6bb19582.jpeg",
    "__v": 0
  },
  {
    "_id": "640b304f916c6ff54731edbe",
    "name": "Super Tactical Droid",
    "description": "Super Tactical Droids were highly intelligent and strategic, qualities that enabled them to be masterful commanders for the Separatist Army in the Clone Wars. Kalani, a notable Super Tactical Droid, prevented Darth Sidious’ shutdown command following Order 66. Years later, Kalani and his battle droids were found by clone Captain Rex and his rebel friends, and the two sides joined forces against the Empire.",
    "image": "https://lumiere-a.akamaihd.net/v1/images/super-tactical-droid_ebd80159.jpeg",
    "__v": 0
  },
  {
    "_id": "640b304f916c6ff54731edbf",
    "name": "T-series Tactical Droid",
    "description": "T-series Tactical Droids, built by Baktoid Combat Automota, were assigned to droid armies of the Separatist Alliance across the galaxy. They were superior in many ways to regular battle droids and used to coordinate the battle tactics from the safety of droid control ships and other fortified positions. They were upgraded later in the war to Super Tactical Droids.",
    "image": "https://lumiere-a.akamaihd.net/v1/images/t-series-tactical-droid_c26e91c4.jpeg",
    "__v": 0
  },
  {
    "_id": "640b304f916c6ff54731edc0",
    "name": "Transport ticketing droid",
    "description": "Travelers coming from and going to the Colossus must register with the transport droid stationed at the platform depot upon arrival and purchase passage on any outbound shuttles when they wish to depart. But as the First Order security forces crack down, citizens find it becomes more difficult to leave.",
    "image": "https://lumiere-a.akamaihd.net/v1/images/transport-ticketing-droid-main_ae4c3c92.jpeg",
    "__v": 0
  },
  {
    "_id": "640b304f916c6ff54731edc1",
    "name": "TT-8L/Y7",
    "description": "These gatekeeper droids were eye-stalk droids that were installed in doors and entryways to screen visitors. They earned their nickname, “tattletale droids” from their obnoxious demeanor in the pursuit of fulfilling their programming. They we’re manufactured by Serv-O-Droid, Inc. and were in use across the galaxy for years. During the Clone Wars, one was installed Rishi Station outpost and another was used by Gha Nachkt, a Trandoshan trader. Probably the most infamous and annoying TT-8L/Y7 in use was the one who kept out visitors out of Jabba’s Palace.",
    "image": "https://lumiere-a.akamaihd.net/v1/images/tt-8l-y7_83c329ce.jpeg",
    "__v": 0
  },
  {
    "_id": "640b304f916c6ff54731edc2",
    "name": "Type II Loadlifter",
    "description": "Type II loadlifter droids are sometimes commissioned by unscrupulous business types on the Coruscant underworld. The repurposed demolition droids are prone to violence and, without the aid of a restraining bolt, have been glimpsed rampaging on the city streets.",
    "image": "https://lumiere-a.akamaihd.net/v1/images/type-ii-loadlifter-main_bf7892c9.jpeg",
    "__v": 0
  },
  {
    "_id": "640b304f916c6ff54731edc3",
    "name": "Viper probe droid",
    "description": "Aratech’s line of 11-3K Viper probe droids are used for investigation, exploration and reconnaissance. A rotating collar assembly gives their blaster cannons a 360-degree field of fire. Viper droids patrol the conveyex track near the Imperial vault on Vandor, alert for any suspicious activity.",
    "image": "https://lumiere-a.akamaihd.net/v1/images/solo-db-viper-droid-main-image_312b9bed.jpeg",
    "__v": 0
  },
  {
    "_id": "640b304f916c6ff54731edc4",
    "name": "Vulture Droid (Droid Starfighter)",
    "description": "The effectiveness of droid starfighters has been debated in strategic circles for generations. While droid starfighters are capable of maneuvers that would crush even the sturdiest organic pilot, they lack the resourcefulness and cunning that living pilots bring into combat. To counter their shortcomings, vulture droids often attack en masse. Like the ground-based battle droid infantry, vulture droids were, for a time, controlled by a central command ship, but later generations were granted a limited degree of independence. When not in flight, the droid starfighter can transform into a walking mode allowing them to be used in surface patrols.",
    "image": "https://lumiere-a.akamaihd.net/v1/images/databank_vulturedroid_01_169_6ef9fd50.jpeg",
    "__v": 0
  },
  {
    "_id": "640b304f916c6ff54731edc5",
    "name": "WED Treadwell Droid",
    "description": "WED Treadwell droids are found throughout the galaxy, serving as utility and repair droids. Treadwells come in a range of models, but all have a flat, treaded base, a spindly neck and a cluster of arms tipped with various tools. The Lars family used Treadwell droids on their Tatooine moisture farm for decades; Luke Skywalker was with a Treadwell repairing vaporators when he caught sight of the battle between Princess Leia’s blockade runner and Darth Vader’s Star Destroyer.",
    "image": "https://lumiere-a.akamaihd.net/v1/images/wed-treadwell-droid-main-image_dfbea7b6.jpeg",
    "__v": 0
  }
]

//Recuperamos el main
const main = document.querySelector("main");
//Creamos una lista vacia y le asignamos un nombre de clase
const ul = document.createElement("ul");
ul.className = "gallery";

//Por cada uno de los elementos del array creamos un li vacio con una imagen, un titulo y una descripcion;
for (const droid of droids) {
  //Creamos un li vacio por cada uno de los droides
  const li = document.createElement("li");
  li.innerHTML = `
  <img src="${droid.image}" alt="${droid.name}"/>
  <h3>${droid.name}</h3>
  <p>${droid.description}</p>
  `
  //Añadimos estos li al ul;
  ul.appendChild(li);
}

//Al terminar el bucle metemos el ul terminado en el main
main.appendChild(ul);