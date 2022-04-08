export const sleep = (milliseconds: number) => {

    return new Promise<string>((resolve, reject) => {
        setTimeout(() => {
            resolve("Terminado y resuelto");
        }, milliseconds);
    });
};

export const getPokemonByID = async (id: number) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if(response.status!==200) return;

        const pokemon:number = await response.json();

        return pokemon;

    } catch (error) {
        console.log(error);
    }
}