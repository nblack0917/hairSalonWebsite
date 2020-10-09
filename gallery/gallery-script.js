

function galleryImage(headline1, articleText) {
    this.headline1 = headline1,
    this.articleText = articleText;
};

let imageDetails = [];

let image1 = new galleryImage("Dash of Gray", "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta.")
let image2 = new galleryImage("A Little Rough", "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pro")
let image3 = new galleryImage("Trim It UP!", "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large.")
let image4 = new galleryImage("Hello Cleveland", "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pro")
let image5 = new galleryImage("That's a beard!", "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could se")
let image6 = new galleryImage("Bring Some Style", "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pro")
let image7 = new galleryImage("Thor told me so", "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymph")
let image8 = new galleryImage("A Little Bit Rooster", "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large.")
let image9 = new galleryImage("That's a curl", "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pro")
let image10 = new galleryImage("She's a star", "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could se")
let image11 = new galleryImage("Add some style", "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pro")
let image12 = new galleryImage("Anime Villian", "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymph")
let image13 = new galleryImage("Still a barista", "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large.")
let image14 = new galleryImage("Hi Keith", "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pro")
let image15 = new galleryImage("Rockin' it!", "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could se")
let image16 = new galleryImage("That's what he asked for", "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pro")
let image17 = new galleryImage("Clean", "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymph")
let image18 = new galleryImage("With some spikes","One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could se")

imageDetails.push(image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, image17, image18)

const setImgDetail = (element) => {
    imageNumber = element.id
    console.log(imageNumber)
    document.getElementById("gallery-container").style.display = "none";
    document.getElementById("detail-container").style.display = "flex";
    // let headlineText = document.getElementById("headline1");
    // let articleText = document.getElementById("article-text");
    imgSrc = element.src
    src = imgSrc
    document.getElementById("logo").style.height = "100px"
    window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        }); 
        document.getElementById("image-detail").src = imgSrc;
        document.getElementById("headline1").innerHTML = imageDetails[imageNumber].headline1;
        document.getElementById("article-text").innerHTML = imageDetails[imageNumber].articleText;
}

