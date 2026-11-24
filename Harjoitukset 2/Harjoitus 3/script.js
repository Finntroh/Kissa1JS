function Tervehdys(Nimi, Kieli)
{
    if (Kieli == "Fi")
        console.log("Moi "+ Nimi)
    else if (Kieli == "En")
        console.log("Hi "+ Nimi)
    else if (Kieli == "Swe")
        console.log("Hej "+Nimi)   
    else 
        console.log("Language not recognized")
}

Tervehdys("Jari", "Swe")