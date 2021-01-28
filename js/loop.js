function gameLoop(data)
{
    let diff = (Date.now() - data.player.lastUpdate)/1000;
    data.player.potatoes += data.player.potatoHills.amount * data.player.potatoHills.gen * diff;
    data.player.broccoli += data.player.broccoliPatches.amount * data.player.broccoliPatches.gen * diff;
    data.player.lastUpdate = Date.now();
}