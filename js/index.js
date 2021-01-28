var app = new Vue 
({
    el: "#app",
    data: {
        player: player
    },
    methods: {
        saveGame()
        {
            localStorage.setItem("saveFile", JSON.stringify(this.player));
        },

        loadGame()
        {
            
            let saveFile = JSON.parse(localStorage.getItem("saveFile")); //handle upgrading patches later
            if (this.player.verNo === saveFile.verNo)
            {
                this.player = saveFile
                this.visibilityUpdate()
            }
        },

        visibilityUpdate()
        {
            if(this.player.research.uExploreCave === true && this.player.research.cExploreCave === false)
            {
                document.getElementById("explore-cave").style.display="block";
            } 
            else
            {
                document.getElementById("explore-cave").style.display="none";
            }
            if(this.player.research.uFeedFungus === true && this.player.research.cFeedFungus === false)
            {
               document.getElementById("feed-fungus").style.display="block"; 
            }
            else 
            {
                document.getElementById("feed-fungus").style.display="none";
            }
            if(this.player.research.uBasicIrrigation === true && this.player.research.cBasicIrrigation === false)
            {
                document.getElementById("basic-irrigation").style.display="block"; 
            }
            else 
            {
                document.getElementById("basic-irrigation").style.display="none";
            }
            if(this.player.research.cFeedFungus === true)
            {
                document.getElementById("broccoli-currency").style.display="block";
                document.getElementById("broccoli-patch").style.display="block";
            }
            
        },

        buyPotatoHill()
        {
            if (this.player.potatoHills.cost > this.player.potatoes) return;
            this.player.potatoes -= this.player.potatoHills.cost;
            this.player.potatoHills.amount++;
            this.player.potatoHills.cost = this.player.potatoHills.base * Math.pow(this.player.potatoHills.mult, this.player.potatoHills.amount);
            if (this.player.potatoHills.amount === 6)
            { 
                this.player.research.uExploreCave = true;
                this.visibilityUpdate();
            }
        },

        buyBroccoliPatch()
        {
            if (this.player.broccoliPatches.cost > this.player.potatoes) return;
            this.player.potatoes -= this.player.broccoliPatches.cost;
            this.player.broccoliPatches.amount++;
            this.player.broccoliPatches.cost = this.player.broccoliPatches.base * Math.pow(this.player.broccoliPatches.mult, this.player.broccoliPatches.amount);
        },

        rExploreCave()
        {
            if (this.player.potatoes < 50) return;
            this.player.potatoes -= 50;
            this.player.research.cExploreCave = true;
            this.player.research.uFeedFungus = true;
            this.visibilityUpdate()
        },

        rFeedFungus()
        {
            if (this.player.potatoes < 100) return;
            this.player.potatoes -= 100;
            this.player.research.cFeedFungus = true;
            this.player.research.uBasicIrrigation = true;
            this.visibilityUpdate()
        },

        rBasicIrrigation()
        {
            if(this.player.broccoli < 500 || this.player.potatoes < 1000) return;
            this.player.potatoes -=1000;
            this.player.broccoli -=500;
            this.player.research.basicIrrigation = true;
            this.player.potatoHills.gen *= 2;
            this.player.broccoliPatches.gen *= 2;
            this.player.research.cBasicIrrigation = true;
            this.visibilityUpdate()
        },

        format(amount)
        {
            return format(amount)
        },


        gameLoop()
        {
            gameLoop(this);
        },
    },
    mounted() 
    {
        setInterval(this.gameLoop, 50);
    },
})