class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(footballPlayers) {
        let newAdditionsResult = [];
        for (let player of footballPlayers) {
            let name = player.split('/')[0];
            let age = Number(player.split('/')[1]);
            let playerValue = Number(player.split('/')[2]);

            playerValue = Number(playerValue);
            let currentPlayer = this.invitedPlayers.find(p => p.name === name);
            if (currentPlayer) {
                if (currentPlayer.playerValue < playerValue) {
                    currentPlayer.playerValue = playerValue;
                }
            } else {
                this.invitedPlayers.push({ name, age, playerValue });
                newAdditionsResult.push(name);
            }
        }
        return `You successfully invite ${newAdditionsResult.join(', ')}.`;
    }

    signContract(selectedPlayer) {
        let name = selectedPlayer.split('/')[0];
        let playerOffer = Number(selectedPlayer.split('/')[1]);
        playerOffer = Number(playerOffer);
        let currentPlayer = this.invitedPlayers.find(p => p.name === name);
        if (!currentPlayer) {
            throw new Error(`${name} is not invited to the selection list!`);
        }
        if (currentPlayer.playerValue === 'Bought') {
            throw new Error(`${name} is already signed!`);
        }
        if (currentPlayer.playerValue > playerOffer) {
            let priceDifference = currentPlayer.playerValue - playerOffer;
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${priceDifference} million more are needed to sign the contract!`);
        }
        currentPlayer.playerValue = 'Bought';
        return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`;
    }

    ageLimit(name, age) {
        let currentPlayer = this.invitedPlayers.find(p => p.name === name);
        if (!currentPlayer) {
            throw new Error(`${name} is not invited to the selection list!`);
        }
        if (currentPlayer.age < age) {
            let ageDifference = age - currentPlayer.age;
            if (ageDifference < 5) {
                return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`;
            } else {
                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
            }
        } else {
            return `${name} is above age limit!`;
        }
    }
    transferWindowResult() {
        let transferResult = [];
        transferResult.push('Players list:' + '\n');
        this.invitedPlayers.sort((a, b) => a.name.localeCompare(b.name));
        for (let player of this.invitedPlayers) {
            transferResult.push(`Player ${player.name}-${player.playerValue}` + '\n');
        }
        return transferResult.join('');
    }
}

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Lionel Messi/60"));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.signContract("Barbukov/10"));




            // let [name, age, playerValue] = player.split('/');
            // let [name, playerOffer] = selectedPlayer.split('/');

