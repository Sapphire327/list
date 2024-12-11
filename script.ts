interface IName{
    name: string;
}
function list (names: IName[]): string[] {
    return names.map((name)=>name.name)
}
const ScoobyTeam:IName[]=[
    {name:"Scooby"},
    {name:"Shaggy"},
    {name:"Fred"},
    {name:"Daphne"},
    {name:"Velma"},
]
console.log(list(ScoobyTeam))