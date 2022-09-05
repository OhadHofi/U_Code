function concat(strings : string|string[], ifPrint: boolean|number): void{
    if(Array.isArray(strings)){
        strings = strings.join(" ")
    }else if(typeof strings !== "string"){
        console.log(`${strings} is not a valid type for this function`)
    }

    if(typeof ifPrint === 'boolean' && ifPrint){
        console.log(strings)
    }else if(typeof ifPrint !== 'boolean' && !ifPrint){
        console.log(`${ifPrint} is not a valid type for this function`)
    }
}

concat("Tomer", false);
concat("Tomer", 2);
concat(["Tomer", "Sagi"], 1);
concat(["Tomer", "Sagi"], 0);
concat(["Michael", "Jordan", "is", "the", "King"], true);



type Type = number | number[] | string | string[]

function print_numbers(phones:Type){
    if(Array.isArray(phones)){
        console.log(`array: ${phones}`)
    }else if(typeof phones === "number"){
        console.log(`number: ${phones}`)
    }else if(typeof phones === "string"){
        console.log(`string: ${phones}`)
    }
}


print_numbers(972528684411);
print_numbers([972528684411, 9725242223]);
print_numbers("052863423243");
print_numbers(["052343434286", "0547734343"]);
