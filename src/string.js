const startsWith = (string, keyword) =>
{
    const word = string.split("");
    const key = keyword.split("");
    let i = 0;
    while(i < key.length)
    {
        if(key[i] == word[i])
        {
            i++;
        }
        else return false;
    }
    return true;
}

const endsWith = (string, keyword) =>
{
    const word = string.split("");
    const key = keyword.split("");
    let i = 0;
    let s = word.length - key.length;
    while(i < key.length)
    {
        if(key[i] == word[s+i])
        {
            i++;
        }
        else return false;
    }
    return true;
}

const contains = (string, keyword) =>
{
    const word = string.split("");
    const key = keyword.split("");
    let i = 0; 
    let j = 0; 
    const blank = []; 
    while(i < word.length)
    {
        if(JSON.stringify(blank) != JSON.stringify(key))
        {
            if(word[i] == key[j])
            {
                blank.push(word[i]);
                j++;
            }
            else
            {
                blank.splice(0);
                j = 0;
            }
        }
        i++;
    }
    return JSON.stringify(blank) == JSON.stringify(key);
}

const arrayMaker = (data) => 
{
    let rupees = [];
    for (let i = 0; i < data.length; i++){
        if(startsWith(data[i], "ru"))
        {
            rupees.push(data[i]);
        }
    }
    return rupees;
}

const printer = (data) => {
    let rupeeMonsters = arrayMaker(data);
    for (let i = 0; i < rupeeMonsters.length; i++){
        console.log("Monster Data:")
        console.log(rupeeMonsters[i].name);
        console.log(rupeeMonsters[i].description);
    }
}

export default{
    printer,
}