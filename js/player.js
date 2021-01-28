var player = 
{
    verNo: -1000,
    potatoes: 10,
    broccoli: 0,
    potatoHills:
    {
        amount: 0,
        mult: 1.25,
        gen: 5,
        base: 10,
        cost: 10,
    },
    broccoliPatches:
    {
        amount: 0,
        mult: 1.45,
        gen: 0.5,
        base: 10,
        cost: 10,
    },
    research:
    {
        //u == unlocked; c == complete
        uExploreCave: false,
        cExploreCave: false,
        uFeedFungus: false,
        cFeedFungus: false,
        uBasicIrrigation: false,
        cBasicIrrigation: false,
    },
    lastUpdate: Date.now()
}