const guitarCategories = [
    { id: 1, slug: "electric", image:"electricCatImage", category: "electric" },
    { id: 2, slug: "bass", image:"bassCatImage",category: "bass" },
    { id: 3, slug: "classic", image:"classicCatImage", category: "classic" },
    { id: 4, slug: "acoustic", image:"acousticCatImage", category: "acoustic" }
]

const guitarsList = [

    { id: 1, slug: "rgironlabel", image:"RGIRONLABEL", brand: "Ibanez", model: "RG IRON LABEL", color: "BLACK", category: "1",
    description:"Styled in a metal-appropriate black flat finish, the Iron Label RGIR30BFE from Ibanez is an electric guitar with a mahogany body fashioned in a sleek, double-cutaway design. Its bolt-on, three-piece maple/bubinga neck features a bound rosewood fingerboard with 24 jumbo frets and a 25.5 scale.", 
    price: "1120", isAvailable: true, isHotDeal:false },

    { id: 2, slug: "rg8570jcustom", image:"RG8570Zjcustom", brand: "Ibanez", model: "RG 8570 J.CUSTOM", color: "BLACK", category: "1", 
    description :"Resonant African mahogany body capped in beautiful AAA flamed maple. 5-piece maple/wenge J Custom Super Wizard neck provides a just-right feel. Bound ebony fingerboard with Prestige fret edge treatment delivers the ultimate in smooth playability.",
    price: "3120", isAvailable: false, isHotDeal:true },

    { id: 3, slug: "rgixl7", image:"RGIXL7", brand: "Ibanez", model: "RG IXL 7", color: "GREEN", category: "1",
    description:"The Ibanez RG is a series of electric guitars produced by Hoshino Gakki and one of the best-selling superstrat-style guitars ever made. ... The RG's deep cutaway, flatter fingerboard and extended fret range (24 frets as standard) has made it one of the most popular guitars for rock and heavy metal music.",
     price: "1450", isAvailable: false, isHotDeal:false },
    { id: 4, slug: "s521", image:"S521", brand: "Ibanez", model: "S 521", color: "RED", category: "1", 
    description:"The S Series is a popular electric guitar model from Ibanez. Introduced in 1987 as the 'Saber', the Ibanez S Series is a modern take on the classic S-type guitar with forward-thinking features that include a thin heavily-contoured body, super-slim Wizard neck, 24 frets and high-output pickups.",
    price: "780", isAvailable: true, isHotDeal:true },

    { id: 5, slug: "s671",  image:"S671", brand: "Ibanez", model: "S 761", color: "GREEN", category: "1", 
    description:"The S Series is a popular electric guitar model from Ibanez. Introduced in 1987 as the 'Saber', the Ibanez S Series is a modern take on the classic S-type guitar with forward-thinking features that include a thin heavily-contoured body, super-slim Wizard neck, 24 frets and high-output pickups.",
    price: "1250", isAvailable: false, isHotDeal:false },


    { id: 6, slug: "s6570",  image:"S6570skPrestige", brand: "Ibanez", model: "S 6570 PRESTIGE", color: "RED", category: "1",
    description:"The Prestige line is a quality label Ibanez uses to indicate that a guitar is built to higher quality standards, often with better components and some unique features compared to standard models. The Prestige models sit below the luxury J Custom line and above the Indonesian-made Premium line in the Ibanez hierarchy.",
     price: "1700", isAvailable: true, isHotDeal:false },

    { id: 7, slug: "ebh1505ms",  image:"EHB1505MS", brand: "Ibanez", model: "EHB 1505 MS", color: "BLUE", category: "2",
    description:"The EHB's headless construction, contoured body, ergonomic design, and chambered body make for a lightweight and comfortable instrument that's excellent for long sets or practice sessions.",
     price: "950", isAvailable: true, isHotDeal:false },


    { id: 8, slug: "gsrm20b",  image:"GSRM20B", brand: "Ibanez", model: "GSRM 20 B", color: "WOOD", category: "2", 
    description:"The Ibanez GSRM20 Mikro Short-Scale Bass Guitar is designed for someone looking for a smaller guitar that doesn't look and feel like a toy. It is compact enough for someone who wants something to use on the tour bus where there is no luxury of space. The bass guitar measures 42 x 17 x 4 inches and weighs 8.4 pounds.",
    price: "1180", isAvailable: true, isHotDeal:false },

    { id: 9, slug: "rgb",  image:"RGB", brand: "Ibanez", model: "RGB", color: "BLACK", category: "2", 
    description:"While the electric bass is very much its own animal, it shares a common lineage and character with its 6-stringed cousins. For decades, the RG has stood at the center of what represents the prototypical Ibanez electric guitar. This iconic design is recognized as the foundational instrument for modern metal guitar playing, yet bass players have often had to look on when it comes to this venerable shred-machine: NO LONGER! Now, bassists will again experience the heavy tones and lightning-fast RG playability with the RGB series.",
    price: "750", isAvailable: false, isHotDeal:false },

    { id: 10, slug: "srh500f",  image:"SRH500F", brand: "Ibanez", model: "SRH 500 F", color: "RED", category: "2",
    description:"The construction gives the SRH a warm acoustic sound with rich resonance. A Dragon Eye Burst Flat finish, wood truss rod cover, wood control knobs, and black matte hardware give the SRH an authentic semi-hollow look and feel. SRH inherits not only the SR shape but also its superior playability.",
     price: "1700", isAvailable: true, isHotDeal:false },

    { id: 11, slug: "ga6ce",  image:"GA6CE", brand: "Ibanez", model: "GA 6 CE", color: "WOOD", category: "3",
    description:"Ibanez classical guitars take the guesswork out of finding an affordable, great-sounding classical guitar that's easy to fret and play. Whether you are looking for a traditional classical-sized instrument or a comfortable nylon-string beginner guitar, they are extremely well-constructed, affordable and have the pristine tonality and playability of much more expensive instruments.",
     price: "210", isAvailable: true, isHotDeal:true },

    { id: 12, slug: "aewc",  image:"AEWC", brand: "Ibanez", model: "AEWC", color: "BLACK", category: "4", 
    description:"Ibanez AEWC400 Acoustic-electric Guitar Features flamed maple top, back, and sides emphasize low and midrange tone. Mahogany neck with walnut fingerboard adds even more tonal support. Fishman Sonicore pickup and Ibanez AEQ-SP2 preamp with onboard tuner provide solid amplified tone.",
    price: "300",isAvailable: true, isHotDeal:true },
    
    { id: 13, slug: "avd10",  image:"AVD10", brand: "Ibanez", model: "AVD 10", color: "WOOD", category: "4",
    description:"This model has a spruce top, which has been ‘Thermo AgedTM’. Otherwise known as torrefaction, this process is relatively new. What this means in a nutshell is that the top has been cooked in a kiln to remove all moisture before gradually and carefully allowing small percentages of moisture back in. The purpose of this is for the guitar to produce is a full, round and seasoned tone. This is something we will return to later in the review.",
     price: "220", isAvailable: false, isHotDeal:false },

    { id: 14, slug: "aw54",  image:"AW54", brand: "Ibanez", model: "AW 54", color: "WOOD", category: "4", 
    description:"ARTWOOD VINTAGE Traditional Acoustic Electric Incorporating elements such as distressed finishes, aged hardware, and thermo-aging of tone woods, Artwood Vintage guitars are able to deliver the character, playability, and tone of a vintage acoustic, without the high cost of investment.",
    price: "170", isAvailable: true, isHotDeal:false }

]


const contact = {
    address: "Dezrobirii Street, no 85, Craiova, Romania",
    email : "asct1977ro@gmail.com",
    mobile: "+40728181218",
    facebook : "https://www.facebook.com/avram.cristian.71",
    linkedIn : "https://www.linkedin.com/in/cristian-avram-2837871aa/",
    github : "https://github.com/avram-cristian1977/",
    website : "http://www.avram-cristian.ro/"
}

module.exports = {guitarCategories, guitarsList, contact}