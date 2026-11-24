let kissa1;
function Arvosana(Pisteet)
{
    if (Pisteet > 89)
        kissa1 = 5
    else if (Pisteet > 79)
        kissa1 = 4
    else if (Pisteet > 69)
        kissa1 = 3 
    else if (Pisteet > 59)
        kissa1 = 2
    else if (Pisteet > 50)
        kissa1 = 1
    else 
        kissa1 = 0

    console.log("Arvosana on: "+ kissa1)
}

Arvosana(75)