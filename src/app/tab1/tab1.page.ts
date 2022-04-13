import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public alertController: AlertController, toastController: ToastController) {}
  
  async presentAlert1() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Egg Festival',
      subHeader: 'Spring',
      message: 'The Egg Festival is the first festival of the year, taking place on the 13th of every Spring in Pelican Town Square. Like other festivals, the event lasts for most of the day and consists of two parts: a social portion and an Egg Hunt activity to finish the day. To take part, enter Pelican Town Square between 9am and 2pm. (It is impossible to enter the town before 9am; attempting to enter will say that the event is still being set up.) The festival will end immediately after the Egg Hunt and return the player to The Farm at 10pm. Firstly, the villagers will be gathered in the town square and the player can socialise with them. There is also a booth set up where the player can purchase decorative items and Strawberry Seeds. Planting the seeds by the 16th allows strawberries to be harvested twice before summer. Talking to Mayor Lewis will proceed to the second portion of the event, which in turn leads to the end of the day; it will not be possible to talk to anyone or buy items afterwards, so finish everything first. Secondly, the featured attraction of the festival is the Egg Hunt. The player and some other villagers will have 50 seconds to search for small colored eggs hidden around Pelican Town. The amount of eggs required to win is dependent on the number of players currently in the game. In a solo game (or with only 1 player online in a multiplayer game), the player must gather 9 colored eggs, or else Abigail will win. With 2 players, 6 eggs are required to win, 5 eggs with 3 players, or 4 eggs with 4 players. If the player wins, they will receive a Straw Hat as a reward. If the player has already won an Egg Hunt in previous years, they will receive 1,000g. If, in a Multiplayer game, two or more players find enough eggs to win, then only the player with the highest number of eggs gets the prize. If 2 or more players tie, then all winning players get the prize. source: https://stardewvalleywiki.com/Egg_Festival',
      buttons: [ 'Cancel', 'Add to Plan',]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
    
    
  }


  async presentAlert2() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Dance of the Moonlight Jellies',
      subHeader: 'Summer',
      message: 'The Dance of the Moonlight Jellies is a Festival that takes place at night on the 28th of every Summer at The Beach. The player can choose to attend the festival by entering the area between 10pm and 12am. When the festival ends, they will be returned to The Farm at 12am. On the day of the festival the player cannot enter the beach before 10pm; if the player uses a Warp Totem: Beach before 10pm, the player will consume the totem but will not be transported to the beach. Instead, a popup box reading -Todays festival is being set up, come back later- will be displayed on screen. During the festival, villagers gather at the docks to watch migrating jellyfish who are attracted to the lights that have been set up. Pierre will set up a stall in the northwest corner of the beach to sell items. Even if the wooden bridge to the east hasnt been repaired this will not affect the festival scene, where it will be temporarily repaired allowing the player to speak to the characters in that area (namely Robin and family, Leah, and the Wizard in the dark northeastern corner).Talk to Mayor Lewis to begin the special event of the festival, where in a cutscene Mayor Lewis will light a torch to attract more jellyfish. The festival ends automatically after watching the jellyfish cutscene. If the player is married (or engaged), their spouse (or fiancé) will stand next to them during the festival. If the player has any Crab Pots placed in the water on the beach when the Dance occurs, the pots will not be present upon arrival to the beach, but will appear during the cutscene. source: https://stardewvalleywiki.com/Dance_of_the_Moonlight_Jellies',
      buttons: [ 'Cancel', 'Add to Plan',]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
    
    
  }
  async presentAlert3() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: "Spirit's Eve",
      subHeader: 'Fall',
      message: "The Spirit's Eve festival takes place on the 27th of Fall every year. The player enters the festival by entering Pelican Town between 10:00 pm and 11:50 pm (note that at 11:50 pm it is too late to enter). When the player leaves the festival, they will be returned to The Farm at 12:00 am. The festival features a maze where the Golden Pumpkin can be obtained. According to townsfolk rumours, the maze was supposedly created by the Wizard. Pierre has a shopping booth where the player can purchase festive items including a rarecrow, a Jack-O-Lantern, and the Jack-O-Lantern recipe. source: https://stardewvalleywiki.com/Spirit%27s_Eve",
      buttons: [ 'Cancel', 'Add to Plan',]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
    
    
  }
  async presentAlert4() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Night Market',
      subHeader: 'Winter' , 
      message: 'The Night Market is a festival that occurs between the 15th and 17th of Winter. Various boats and merchants will appear at the docks on The Beach, and offer to sell goods or take the player for a boat ride. The Night Market is open between 5pm and 2am, but the Submarine Ride closes at 11pm, and the Mermaid Boat closes at 12:30am. Unlike other festivals, shops and homes throughout Stardew Valley (including the beach) are not closed on the days of the Night Market, and time continues to pass during the festival. Animals also need to be fed during the Night Market event; the game will not automatically consider them to be fed as with other Festivals. source: https://stardewvalleywiki.com/Night_Market',
      buttons: [ 'Cancel', 'Add to Plan',]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
    
    
  }
  async presentAlert5() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Feast of the Winter Star',
      subHeader: 'Winter',
      message: 'The Feast of the Winter Star is a festival that takes place on the 25th of every Winter. The player attends the festival by entering Pelican Town between 9am and 2pm. When the player leaves the festival, they will be returned to The Farm at 10pm. The main event of the Feast of the Winter Star is secret gift-giving. A random villager will be selected to give the player a gift, and the player is assigned a random villager to give a gift to. A week beforehand, on the 18th, Mayor Lewis will send a letter telling the player who their gift recipient is. The player finds out who is giving them a gift at the festival. The festival ends when the player leaves Pelican Town. source: https://stardewvalleywiki.com/Feast_of_the_Winter_Star',
      buttons: [ 'Cancel', 'Add to Plan',]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
    
    
    
  }
}


